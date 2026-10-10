import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, Phone, Clock, ShieldCheck, Sparkles, AlertCircle } from 'lucide-react';
import { DialuxParams, DialuxResult } from '../types';

interface QuoteFormSectionProps {
  prefilledDialux?: {
    params: DialuxParams;
    result: DialuxResult;
  } | null;
  prefilledWattage?: number | null;
}

export const QuoteFormSection: React.FC<QuoteFormSectionProps> = ({
  prefilledDialux,
  prefilledWattage,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [area, setArea] = useState('');
  const [projectRequirements, setProjectRequirements] = useState('');
  const [requestDialuxDrawing, setRequestDialuxDrawing] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    referenceCode: string;
    fullName: string;
    phone: string;
  } | null>(null);
  const [formError, setFormError] = useState('');

  // Auto-fill from Dialux if user clicked "Nhận Dự Toán Trọn Gói"
  useEffect(() => {
    if (prefilledDialux) {
      const { params, result } = prefilledDialux;
      setArea(`${result.totalArea} m² — Trần cao ${params.mountingHeight}m`);
      setProjectRequirements(
        `Dự toán từ Dialux: Cần ${result.fixtureCount} bộ đèn ${params.selectedModel}. Diện tích ${length}x${params.width}m (${result.totalArea}m²), độ rọi thiết kế ${params.targetLux} Lux, bố trí lưới ${result.rowsX}x${result.colsY}.`
      );
      setRequestDialuxDrawing(true);
    }
  }, [prefilledDialux]);

  // Auto-fill from Wattage click
  useEffect(() => {
    if (prefilledWattage) {
      setProjectRequirements((prev) => 
        prev ? `${prev} (Đang quan tâm model HB-H03 ${prefilledWattage}W)` : `Yêu cầu báo giá Model TTKLight HB-H03 ${prefilledWattage}W cho dự án.`
      );
    }
  }, [prefilledWattage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!fullName.trim()) {
      setFormError('Vui lòng nhập họ và tên người đại diện');
      return;
    }

    if (!phone.trim() || phone.trim().length < 8) {
      setFormError('Vui lòng nhập số điện thoại hợp lệ để kỹ sư liên hệ');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const randomCode = `TTK-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmittedData({
        referenceCode: randomCode,
        fullName: fullName.trim(),
        phone: phone.trim(),
      });
      setIsSubmitting(false);
    }, 600);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFullName('');
    setPhone('');
    setEmail('');
    setArea('');
    setProjectRequirements('');
  };

  return (
    <section id="contact" className="py-12 sm:py-16 bg-[#eff4ff]/60 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#b45309] uppercase tracking-wider font-mono mb-1.5">
            <span>Hỗ Trợ Dự Án Nhanh</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">
            Đăng Ký Tư Vấn &amp; Nhận Báo Giá Dự Án
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-2xl mx-auto leading-relaxed">
            Nhận ngay bản vẽ mô phỏng Dialux 3D và bảng giá chiết khấu ưu đãi dành riêng cho đại lý &amp; nhà thầu trong vòng 30 phút.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-xl border border-slate-300 shadow-md p-6 sm:p-8">
          {submittedData ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase font-bold text-slate-500">Mã Hồ Sơ Dự Án</span>
                <div className="text-2xl font-mono font-extrabold text-[#0f172a] mt-0.5">
                  {submittedData.referenceCode}
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#0f172a]">
                Gửi Yêu Cầu Báo Giá Thành Công!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
                Cảm ơn <strong>{submittedData.fullName}</strong>. Kỹ sư phụ trách khu vực của TTKLight sẽ liên hệ qua số điện thoại <strong>{submittedData.phone}</strong> trong vòng 15-30 phút để cung cấp bảng giá chiết khấu và bản vẽ Dialux 3D.
              </p>
              <div className="pt-4 flex justify-center gap-3">
                <button
                  onClick={handleReset}
                  className="px-5 py-2.5 bg-[#0f172a] text-white text-xs font-bold uppercase rounded cursor-pointer hover:bg-slate-800"
                >
                  Tạo yêu cầu báo giá mới
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {formError && (
                <div className="p-3 rounded bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{formError}</span>
                </div>
              )}

              {/* 2-Column Names & Phones */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase font-mono text-slate-600 mb-1">
                    Họ và tên người đại diện *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Nguyễn Văn A"
                    className="w-full text-xs sm:text-sm bg-slate-50/70 border border-slate-300 rounded px-3.5 py-2.5 text-[#0f172a] focus:bg-white focus:outline-none focus:border-[#0f172a]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase font-mono text-slate-600 mb-1">
                    Số điện thoại liên hệ *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="09xx xxx xxx"
                    className="w-full text-xs sm:text-sm bg-slate-50/70 border border-slate-300 rounded px-3.5 py-2.5 text-[#0f172a] focus:bg-white focus:outline-none focus:border-[#0f172a] font-mono"
                  />
                </div>
              </div>

              {/* 2-Column Email & Factory Area */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase font-mono text-slate-600 mb-1">
                    Email công ty / cá nhân
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@congty.com"
                    className="w-full text-xs sm:text-sm bg-slate-50/70 border border-slate-300 rounded px-3.5 py-2.5 text-[#0f172a] focus:bg-white focus:outline-none focus:border-[#0f172a]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase font-mono text-slate-600 mb-1">
                    Diện tích nhà xưởng ước tính (m²)
                  </label>
                  <input
                    type="text"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    placeholder="VD: 1,500m² - Cao 9m"
                    className="w-full text-xs sm:text-sm bg-slate-50/70 border border-slate-300 rounded px-3.5 py-2.5 text-[#0f172a] focus:bg-white focus:outline-none focus:border-[#0f172a]"
                  />
                </div>
              </div>

              {/* Requirements & Location */}
              <div>
                <label className="block text-[11px] font-bold uppercase font-mono text-slate-600 mb-1">
                  Yêu cầu chiếu sáng cụ thể &amp; địa điểm công trình
                </label>
                <textarea
                  rows={3}
                  value={projectRequirements}
                  onChange={(e) => setProjectRequirements(e.target.value)}
                  placeholder="Ví dụ: Cần chiếu sáng nhà máy dệt may 2,000m² tại KCN Đại Đăng Bình Dương, cần đạt 300 Lux..."
                  className="w-full text-xs sm:text-sm bg-slate-50/70 border border-slate-300 rounded p-3 text-[#0f172a] focus:bg-white focus:outline-none focus:border-[#0f172a] resize-none"
                />
              </div>

              {/* Checkbox: Free Dialux Drawing */}
              <div className="flex items-center gap-2.5 pt-1">
                <input
                  type="checkbox"
                  id="dialux-checkbox"
                  checked={requestDialuxDrawing}
                  onChange={(e) => setRequestDialuxDrawing(e.target.checked)}
                  className="w-4 h-4 rounded border-slate-300 text-[#fea619] focus:ring-[#fea619] cursor-pointer"
                />
                <label
                  htmlFor="dialux-checkbox"
                  className="text-xs font-semibold text-slate-700 cursor-pointer select-none"
                >
                  Tôi muốn nhận bản vẽ thiết kế mô phỏng Dialux 3D miễn phí
                </label>
              </div>

              {/* Big Amber CTA Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#fea619] hover:bg-[#e69512] active:bg-[#c9800d] text-[#0f172a] font-bold text-xs sm:text-sm uppercase tracking-wider rounded transition-all shadow-md cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4 text-[#0f172a]" />
                  <span>
                    {isSubmitting ? 'ĐANG XỬ LÝ DỮ LIỆU...' : 'GỬI YÊU CẦU BÁO GIÁ & NHẬN BẢN VẼ DIALUX 3D'}
                  </span>
                </button>
              </div>

              {/* Trust Indicators below CTA */}
              <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-center gap-6 text-[11px] text-slate-500 font-mono">
                <div className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#fea619]" />
                  <span>Hotline kỹ thuật: <strong className="text-slate-700">0899 556 966</strong></span>
                </div>

                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>Phản hồi nhanh trong 15-30 phút</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Bảo mật thông tin dự án tuyệt đối</span>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
