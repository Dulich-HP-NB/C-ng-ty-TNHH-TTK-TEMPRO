import React from 'react';
import { Phone, Mail, MapPin, Hash, ShieldCheck, Download, Award } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenDialux: () => void;
  onDownloadCatalogue: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenDialux,
  onDownloadCatalogue,
}) => {
  return (
    <footer className="bg-[#f8f9ff] text-[#0b1c30] pt-12 pb-8 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-slate-200">
          {/* Brand & Corporate details */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded bg-[#fea619] flex items-center justify-center font-bold text-[#0f172a] text-lg font-mono">
                TTK
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight text-[#0f172a]">
                  TTK<span className="text-[#b45309]">Light</span>
                </span>
                <p className="text-[10px] tracking-wider text-slate-500 uppercase font-semibold font-mono">
                  BETTER LIGHT — BRIGHTER FUTURE
                </p>
              </div>
            </div>

            <div className="text-xs text-slate-600 space-y-1.5 pt-1">
              <div className="font-bold text-[#0f172a]">
                CÔNG TY CỔ PHẦN TTK VIỆT NAM
              </div>
              <div className="font-mono text-[11px] text-slate-500">
                MÃ SỐ THUẾ: <strong className="text-slate-800">0105395267</strong>
              </div>
              <div className="leading-relaxed">
                ĐỊA CHỈ: Tầng 6, Toà nhà Việt Á, Số 09 Phố Duy Tân, Phường Cầu Giấy, TP Hà Nội
              </div>
              <div className="pt-1">
                HOTLINE:{' '}
                <a href="tel:0899556966" className="font-mono font-bold text-[#b45309] hover:underline">
                  0899 556 966
                </a>
              </div>
              <div>
                EMAIL:{' '}
                <a href="mailto:info@ttklight.vn" className="font-mono text-slate-800 hover:underline">
                  info@ttklight.vn
                </a>
              </div>
            </div>
          </div>

          {/* DÒNG SẢN PHẨM HIGHBAY */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold uppercase font-mono tracking-wider text-[#0f172a]">
              DÒNG SẢN PHẨM HIGHBAY
            </h4>
            <ul className="text-xs space-y-2 text-slate-600">
              <li>
                <button
                  onClick={() => onNavigate('spec-detail')}
                  className="hover:text-[#b45309] transition-colors text-left cursor-pointer"
                >
                  Đèn LED Highbay UFO 100W - 240W
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-[#b45309] transition-colors text-left cursor-pointer"
                >
                  Đèn Highbay Chống Cháy Nổ ATEX
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-[#b45309] transition-colors text-left cursor-pointer"
                >
                  Đèn Highbay Tuyến Tính Linear
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-[#b45309] transition-colors text-left cursor-pointer"
                >
                  Hệ Thống Đèn Thông Minh Zigbee/DALI
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('spec-detail')}
                  className="hover:text-[#b45309] transition-colors text-left cursor-pointer"
                >
                  Phụ Kiện Nguồn Philips / Meanwell
                </button>
              </li>
            </ul>
          </div>

          {/* HỖ TRỢ KỸ THUẬT */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold uppercase font-mono tracking-wider text-[#0f172a]">
              HỖ TRỢ KỸ THUẬT
            </h4>
            <ul className="text-xs space-y-2 text-slate-600">
              <li>
                <button
                  onClick={onOpenDialux}
                  className="hover:text-[#b45309] transition-colors text-left cursor-pointer"
                >
                  Mô phỏng Dialux evo
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenDialux}
                  className="hover:text-[#b45309] transition-colors text-left cursor-pointer"
                >
                  Tiêu chuẩn TCVN 7114
                </button>
              </li>
              <li>
                <button
                  onClick={onDownloadCatalogue}
                  className="hover:text-[#b45309] transition-colors text-left cursor-pointer"
                >
                  Tải hồ sơ IES/BIM
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#b45309] transition-colors text-left cursor-pointer"
                >
                  Chính sách bảo hành 5 năm
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#b45309] transition-colors text-left cursor-pointer"
                >
                  Tư vấn trắc quang tại chỗ
                </button>
              </li>
            </ul>
          </div>

          {/* TIÊU CHUẨN */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-extrabold uppercase font-mono tracking-wider text-[#0f172a]">
              TIÊU CHUẨN
            </h4>
            <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
              <span className="px-2 py-1 rounded bg-blue-50 border border-blue-200 text-[#0284c7] font-semibold">
                IP65 / IP66
              </span>
              <span className="px-2 py-1 rounded bg-slate-100 border border-slate-300 text-slate-700 font-semibold">
                IK08 / IK10
              </span>
              <span className="px-2 py-1 rounded bg-[#fef3c7] border border-[#fde68a] text-[#92400e] font-semibold">
                160 Lm/W
              </span>
              <span className="px-2 py-1 rounded bg-slate-100 border border-slate-300 text-slate-700 font-semibold">
                CRI &gt; 80
              </span>
              <span className="px-2 py-1 rounded bg-slate-100 border border-slate-300 text-slate-700 font-semibold">
                ISO 9001:2015
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
          <div>
            © 2025 TTKLight - CÔNG TY CỔ PHẦN TTK VIỆT NAM. Bảo lưu mọi quyền.
          </div>
          <div className="font-mono text-[11px] text-slate-400">
            Designed for Heavy Industrial Lighting Excellence
          </div>
        </div>
      </div>
    </footer>
  );
};
