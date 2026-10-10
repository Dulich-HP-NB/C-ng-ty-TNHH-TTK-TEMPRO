import React, { useState } from 'react';
import { X, Send, CheckCircle2, Phone, ShieldCheck } from 'lucide-react';

interface QuickQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultNote?: string;
}

export const QuickQuoteModal: React.FC<QuickQuoteModalProps> = ({
  isOpen,
  onClose,
  defaultNote = '',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [note, setNote] = useState(defaultNote);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="relative w-full max-w-md bg-white rounded-xl shadow-2xl border border-slate-300 overflow-hidden my-6">
        {/* Header */}
        <div className="bg-[#0f172a] text-white px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded bg-[#fea619]" />
            <h3 className="text-sm font-extrabold uppercase font-mono tracking-wider">
              Yêu Cầu Báo Giá Dự Án Nhanh
            </h3>
          </div>
          <button
            onClick={handleClose}
            className="p-1 rounded text-slate-400 hover:text-white cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-4 space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-base font-bold text-[#0f172a]">
                Đã Tiếp Nhận Thông Tin!
              </h4>
              <p className="text-xs text-slate-600">
                Kỹ sư TTKLight sẽ gọi lại cho <strong>{name}</strong> qua số <strong>{phone}</strong> trong vòng 15-30 phút kèm bảng chiết khấu dự án tốt nhất.
              </p>
              <button
                onClick={handleClose}
                className="mt-3 px-5 py-2 bg-[#0f172a] text-white text-xs font-bold uppercase rounded cursor-pointer"
              >
                Hoàn tất
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              <div>
                <label className="block text-[11px] font-bold uppercase font-mono text-slate-600 mb-1">
                  Họ và tên người liên hệ *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ví dụ: Nguyễn Văn A"
                  className="w-full text-xs bg-slate-50 border border-slate-300 rounded px-3 py-2 text-[#0f172a] focus:bg-white focus:outline-none focus:border-[#0f172a]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase font-mono text-slate-600 mb-1">
                  Số điện thoại *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="09xx xxx xxx"
                  className="w-full text-xs font-mono bg-slate-50 border border-slate-300 rounded px-3 py-2 text-[#0f172a] focus:bg-white focus:outline-none focus:border-[#0f172a]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase font-mono text-slate-600 mb-1">
                  Ghi chú yêu cầu / quy mô công trình
                </label>
                <textarea
                  rows={2}
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Ví dụ: Cần 50 bộ đèn 150W cho xưởng may mặc tại Bình Dương..."
                  className="w-full text-xs bg-slate-50 border border-slate-300 rounded p-2.5 text-[#0f172a] focus:bg-white focus:outline-none focus:border-[#0f172a] resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 bg-[#fea619] hover:bg-[#e69512] text-[#0f172a] font-bold text-xs uppercase tracking-wider rounded transition-colors shadow-sm cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Gửi Yêu Cầu Cho Kỹ Sư</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[10px] text-slate-500 font-mono pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Bảo mật thông tin &bull; Hỗ trợ kỹ thuật 24/7</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
