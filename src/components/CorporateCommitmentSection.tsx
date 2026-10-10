import React from 'react';
import { ShieldCheck, Box, RefreshCw, Headset, Building2, MapPin, Phone, Hash } from 'lucide-react';

export const CorporateCommitmentSection: React.FC = () => {
  return (
    <section id="about" className="py-12 sm:py-16 bg-[#0f172a] text-white border-b border-[#1e293b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Guarantees & Technical Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="text-xs font-bold text-[#fea619] uppercase tracking-wider font-mono mb-1.5">
                CÔNG TY CỔ PHẦN TTK VIỆT NAM
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                Cam Kết Chất Lượng Đỉnh Cao Cho Mọi Dự Án Chiếu Sáng
              </h2>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                Chúng tôi không chỉ bán thiết bị chiếu sáng — TTKLight là đối tác kỹ thuật đồng hành từ bản vẽ quy hoạch, tính toán trắc quang Dialux 3D chuyên sâu đến quá trình lắp đặt và bảo hành thực địa.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-[#1e293b] border border-slate-700/80 rounded p-4 space-y-1.5">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#fea619] shrink-0" />
                  <h4 className="text-xs font-bold text-white uppercase font-mono tracking-wider">
                    100% Chính Hãng Đầy Đủ CO/CQ
                  </h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Hóa đơn VAT, chứng chỉ xuất xưởng và kết quả thử nghiệm Quatest 1, Quatest 3.
                </p>
              </div>

              <div className="bg-[#1e293b] border border-slate-700/80 rounded p-4 space-y-1.5">
                <div className="flex items-center gap-2">
                  <Box className="w-4 h-4 text-[#fea619] shrink-0" />
                  <h4 className="text-xs font-bold text-white uppercase font-mono tracking-wider">
                    Mô Phỏng Dialux 3D Miễn Phí
                  </h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Đội ngũ kỹ sư chiếu sáng thiết kế chuẩn xác theo từng công năng xưởng và dải trần.
                </p>
              </div>

              <div className="bg-[#1e293b] border border-slate-700/80 rounded p-4 space-y-1.5">
                <div className="flex items-center gap-2">
                  <RefreshCw className="w-4 h-4 text-[#fea619] shrink-0" />
                  <h4 className="text-xs font-bold text-white uppercase font-mono tracking-wider">
                    Bảo Hành 1 Đổi 1 Từ 3-5 Năm
                  </h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Xử lý sự cố trong vòng 24h, đổi mới linh kiện chính hãng nhanh chóng.
                </p>
              </div>

              <div className="bg-[#1e293b] border border-slate-700/80 rounded p-4 space-y-1.5">
                <div className="flex items-center gap-2">
                  <Headset className="w-4 h-4 text-[#fea619] shrink-0" />
                  <h4 className="text-xs font-bold text-white uppercase font-mono tracking-wider">
                    Hỗ Trợ Kỹ Thuật 24/7
                  </h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Tư vấn trực tiếp tại công trường bởi kỹ sư điện công nghiệp kinh nghiệm thực địa.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Headquarters Office Card */}
          <div className="lg:col-span-5">
            <div className="bg-white text-[#0f172a] rounded-lg overflow-hidden border border-slate-300 shadow-xl">
              {/* Modern Commercial Tower Photo */}
              <div className="relative aspect-16/9 bg-slate-900 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
                  alt="Trụ sở điều hành TTKLight Việt Nam"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover brightness-95"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    if (target.nextElementSibling) {
                      (target.nextElementSibling as HTMLElement).style.display = 'flex';
                    }
                  }}
                />
                <div className="hidden absolute inset-0 bg-[#0f172a] flex-col items-center justify-center text-center p-4">
                  <Building2 className="w-10 h-10 text-[#fea619] mb-2" />
                  <span className="text-white text-xs font-bold">Toà nhà Việt Á — Hà Nội</span>
                </div>
              </div>

              {/* Office Details */}
              <div className="p-5 space-y-3">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider font-bold text-[#b45309]">
                    TRỤ SỞ ĐIỀU HÀNH
                  </div>
                  <h3 className="text-base font-extrabold text-[#0f172a] mt-0.5">
                    CÔNG TY CỔ PHẦN TTK VIỆT NAM
                  </h3>
                </div>

                <div className="space-y-2 text-xs text-slate-600">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <span>Tầng 6, Toà nhà Việt Á, Số 09 Phố Duy Tân, Phường Cầu Giấy, TP Hà Nội</span>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-100 font-mono text-xs">
                    <div className="flex items-center gap-1.5 text-slate-700">
                      <Hash className="w-3.5 h-3.5 text-slate-400" />
                      <span>Mã số thuế: <strong>0105395267</strong></span>
                    </div>

                    <a 
                      href="tel:0899556966"
                      className="flex items-center gap-1.5 text-[#b45309] font-bold hover:underline"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>0899 556 966</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
