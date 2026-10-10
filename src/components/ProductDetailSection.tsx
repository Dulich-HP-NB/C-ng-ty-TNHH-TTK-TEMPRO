import React, { useState } from 'react';
import { Eye, Download, FileText, CheckCircle2, ChevronRight, ShieldCheck, Sparkles } from 'lucide-react';
import { HB_H03_SPECS } from '../data/lightingData';

interface ProductDetailSectionProps {
  onOpenQuoteWithWattage: (wattage: number) => void;
  onDownloadCatalogue: () => void;
}

export const ProductDetailSection: React.FC<ProductDetailSectionProps> = ({
  onOpenQuoteWithWattage,
  onDownloadCatalogue,
}) => {
  const [selectedWattage, setSelectedWattage] = useState<number>(100);
  const currentSpec = HB_H03_SPECS[selectedWattage] || HB_H03_SPECS[100];

  const wattages = [100, 150, 200, 240];

  return (
    <section id="spec-detail" className="py-12 sm:py-16 bg-[#f8f9ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 pb-4 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#b45309] uppercase tracking-wider font-mono mb-1.5">
              <span className="w-2 h-2 rounded-full bg-[#fea619]" />
              <span>Sản Phẩm Chủ Lực</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">
              Thông Số Kỹ Thuật Chi Tiết Model HB-H03
            </h2>
            <p className="text-sm text-slate-500 mt-1 max-w-2xl">
              Đạt tiêu chuẩn kiểm định nghiêm ngặt Quatest 1, CE, RoHS dành cho công trình dự án lớn.
            </p>
          </div>

          {/* Wattage selection tabs */}
          <div className="flex items-center gap-2 bg-white p-1 rounded-md border border-slate-300 shadow-sm shrink-0">
            <span className="text-xs font-semibold text-slate-500 px-2 font-mono hidden sm:inline">
              Dải công suất:
            </span>
            <div className="flex items-center gap-1">
              {wattages.map((w) => (
                <button
                  key={w}
                  onClick={() => setSelectedWattage(w)}
                  className={`px-3 py-1.5 text-xs font-mono font-bold rounded transition-all cursor-pointer ${
                    selectedWattage === w
                      ? 'bg-[#0f172a] text-[#fea619] shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {w}W
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 2-Column Specs Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Schematic Drawing & Optical Metrics */}
          <div className="lg:col-span-5 space-y-4">
            {/* Technical Diagram Container */}
            <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs text-slate-500 font-mono">
                <span className="font-bold text-slate-700">TTKLight HB-H03</span>
                <span>Bản vẽ kỹ thuật {selectedWattage}W</span>
              </div>

              {/* Engineering Blueprint CAD SVG graphic */}
              <div className="py-4 flex items-center justify-center relative bg-slate-50/50 rounded my-2 border border-dashed border-slate-200">
                <svg
                  viewBox="0 0 400 240"
                  className="w-full h-56 max-h-56 select-none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="finGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#1e293b" />
                      <stop offset="50%" stopColor="#334155" />
                      <stop offset="100%" stopColor="#0f172a" />
                    </linearGradient>
                    <linearGradient id="lensGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#fea619" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#e2e8f0" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>

                  {/* Suspension Ring Hook */}
                  <g className="cursor-pointer">
                    <circle cx="200" cy="30" r="14" fill="none" stroke="#0f172a" strokeWidth="4" />
                    <circle cx="200" cy="30" r="7" fill="none" stroke="#64748b" strokeWidth="1.5" strokeDasharray="3 2" />
                    <rect x="194" y="44" width="12" height="12" fill="#0f172a" rx="2" />
                    <text x="220" y="34" fontSize="10" fill="#64748b" fontFamily="JetBrains Mono">Móc treo chịu lực M10</text>
                  </g>

                  {/* Driver Housing Compartment */}
                  <rect x="160" y="56" width="80" height="28" fill="#1e293b" rx="4" stroke="#0f172a" strokeWidth="2" />
                  <text x="200" y="74" fontSize="9" fill="#fea619" fontFamily="JetBrains Mono" textAnchor="middle" fontWeight="bold">
                    MEANWELL DRIVER
                  </text>

                  {/* Heatsink Finned Radiator Body */}
                  <path
                    d="M 120,84 L 280,84 L 320,135 L 80,135 Z"
                    fill="url(#finGrad)"
                    stroke="#0f172a"
                    strokeWidth="2"
                  />

                  {/* Cooling fins details */}
                  {[-90, -70, -50, -30, -10, 10, 30, 50, 70, 90].map((offset, i) => (
                    <line
                      key={i}
                      x1={200 + offset}
                      y1={86}
                      x2={200 + offset * 1.3}
                      y2={133}
                      stroke="#475569"
                      strokeWidth="2"
                    />
                  ))}

                  {/* Optical Ring & Diode PCB */}
                  <ellipse cx="200" cy="138" rx="120" ry="14" fill="#0f172a" />
                  <ellipse cx="200" cy="139" rx="112" ry="11" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />

                  {/* LED Chip Array dots */}
                  {[-80, -60, -40, -20, 0, 20, 40, 60, 80].map((dx, i) => (
                    <circle key={i} cx={200 + dx} cy={139} r="3" fill="#fea619" />
                  ))}

                  {/* Light Cone Beam Angle Indicator */}
                  <polygon
                    points="90,145 310,145 360,220 40,220"
                    fill="url(#lensGrad)"
                    opacity="0.25"
                  />
                  <line x1="200" y1="145" x2="40" y2="220" stroke="#fea619" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.7" />
                  <line x1="200" y1="145" x2="360" y2="220" stroke="#fea619" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.7" />

                  {/* Technical Dimensions Labels */}
                  <text x="200" y="210" fontSize="11" fill="#0f172a" fontFamily="JetBrains Mono" textAnchor="middle" fontWeight="bold">
                    Góc chiếu: 90° / 120°
                  </text>
                  <text x="310" y="105" fontSize="10" fill="#64748b" fontFamily="JetBrains Mono">
                    ADC12 Nhôm đúc
                  </text>
                  <text x="65" y="105" fontSize="10" fill="#0284c7" fontFamily="JetBrains Mono" textAnchor="end">
                    {currentSpec.diameter}
                  </text>
                  <text x="65" y="120" fontSize="9" fill="#64748b" fontFamily="JetBrains Mono" textAnchor="end">
                    H: {currentSpec.height}
                  </text>
                </svg>

                {/* Badge inside diagram */}
                <div className="absolute bottom-2 right-2 bg-white/95 px-2 py-1 rounded border border-slate-200 text-[10px] font-mono text-slate-700">
                  Khối lượng: <strong className="text-[#0f172a]">{currentSpec.weight}</strong>
                </div>
              </div>

              {/* 3 Metric Highlight Boxes */}
              <div className="grid grid-cols-3 gap-2.5 pt-2">
                <div className="bg-[#eff4ff] border border-blue-100 rounded p-2.5 text-center">
                  <div className="text-[10px] font-mono uppercase font-bold text-slate-500">Quang Thông</div>
                  <div className="text-sm sm:text-base font-extrabold text-[#0284c7] font-mono mt-0.5">
                    {currentSpec.lumens.toLocaleString()} lm
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono mt-0.5">(Bản {selectedWattage}W)</div>
                </div>

                <div className="bg-[#eff4ff] border border-blue-100 rounded p-2.5 text-center">
                  <div className="text-[10px] font-mono uppercase font-bold text-slate-500">Hệ Số PF</div>
                  <div className="text-sm sm:text-base font-extrabold text-[#0f172a] font-mono mt-0.5">
                    &gt; 0.95
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono mt-0.5">Triệt phản kháng</div>
                </div>

                <div className="bg-[#eff4ff] border border-blue-100 rounded p-2.5 text-center">
                  <div className="text-[10px] font-mono uppercase font-bold text-slate-500">Chỉ Số Hoàn Màu</div>
                  <div className="text-sm sm:text-base font-extrabold text-[#0f172a] font-mono mt-0.5">
                    &gt; 80 Ra
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono mt-0.5">Chuẩn màu thật</div>
                </div>
              </div>
            </div>

            {/* Flicker-Free Callout Box */}
            <div className="bg-[#fef3c7]/60 border border-[#fde68a] rounded-lg p-3.5 flex items-start gap-3">
              <div className="w-8 h-8 rounded bg-[#fea619]/30 text-[#92400e] flex items-center justify-center shrink-0 mt-0.5">
                <Eye className="w-4 h-4 text-[#92400e]" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#92400e] leading-snug">
                  Công nghệ Flicker-Free (Không nhấp nháy)
                </h4>
                <p className="text-[12px] text-slate-700 leading-relaxed mt-1">
                  Nguồn Driver ổn định triệt tiêu hiện tượng nhấp nháy tần số cao, bảo vệ thị lực tuyệt đối cho công nhân đứng máy liên tục 8-12 tiếng.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Certified Specification Table */}
          <div className="lg:col-span-7 bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm">
            {/* Table Header Bar */}
            <div className="bg-[#0f172a] text-white px-5 py-3.5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded bg-[#fea619]" />
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider font-mono">
                  Bảng Kiểm Định Thông Số Model HB-H03
                </h3>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#1e293b] text-[#fea619] border border-slate-700">
                Standard Spec
              </span>
            </div>

            {/* Specification Rows */}
            <div className="divide-y divide-slate-100 text-xs sm:text-sm">
              <div className="grid grid-cols-12 p-3 sm:px-5 hover:bg-slate-50 transition-colors">
                <div className="col-span-5 text-slate-500 font-medium">Mã sản phẩm (Model)</div>
                <div className="col-span-7 font-bold text-[#0f172a] font-mono">TTKLight HB-H03</div>
              </div>

              <div className="grid grid-cols-12 p-3 sm:px-5 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                <div className="col-span-5 text-slate-500 font-medium">Công suất tiêu thụ (Rated Wattage)</div>
                <div className="col-span-7 font-bold text-[#0f172a] font-mono">
                  {selectedWattage}W <span className="font-normal text-slate-500">(Tùy chọn: 100W / 150W / 200W / 240W)</span>
                </div>
              </div>

              <div className="grid grid-cols-12 p-3 sm:px-5 hover:bg-slate-50 transition-colors">
                <div className="col-span-5 text-slate-500 font-medium">Hiệu suất phát quang (Luminous Efficacy)</div>
                <div className="col-span-7">
                  <span className="font-bold text-[#b45309] font-mono">150 Lm/W</span>{' '}
                  <span className="text-slate-600 font-mono text-xs">
                    (Tổng quang thông {currentSpec.lumens.toLocaleString()} lm @ {selectedWattage}W)
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-12 p-3 sm:px-5 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                <div className="col-span-5 text-slate-500 font-medium">Cấp bảo vệ ngoại vi (Ingress Protection)</div>
                <div className="col-span-7 flex flex-wrap gap-1.5 font-mono">
                  <span className="px-2 py-0.5 rounded bg-blue-50 border border-blue-200 text-[#0284c7] font-semibold text-xs">
                    IP65 Chống nước &amp; bụi
                  </span>
                  <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-300 text-slate-700 font-semibold text-xs">
                    IK08 Chống va đập
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-12 p-3 sm:px-5 hover:bg-slate-50 transition-colors">
                <div className="col-span-5 text-slate-500 font-medium">Dải điện áp đầu vào (Input Voltage)</div>
                <div className="col-span-7 text-slate-700 font-mono text-xs sm:text-sm">
                  AC 120V - 277V ~ 50/60Hz <span className="text-slate-500">(Kháng sụt áp lưới điện công nghiệp)</span>
                </div>
              </div>

              <div className="grid grid-cols-12 p-3 sm:px-5 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                <div className="col-span-5 text-slate-500 font-medium">Hệ số công suất (Power Factor)</div>
                <div className="col-span-7 text-slate-700 font-mono text-xs sm:text-sm">
                  <strong className="text-[#0f172a]">PF &gt; 0.95</strong> <span className="text-slate-500">(Tiết kiệm điện tối đa, giảm tổn hao đường dây)</span>
                </div>
              </div>

              <div className="grid grid-cols-12 p-3 sm:px-5 hover:bg-slate-50 transition-colors">
                <div className="col-span-5 text-slate-500 font-medium">Chip LED &amp; Nguồn Driver</div>
                <div className="col-span-7 font-medium text-slate-800">
                  Philips Lumileds / Bridgelux + Nguồn Meanwell / Philips
                </div>
              </div>

              <div className="grid grid-cols-12 p-3 sm:px-5 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                <div className="col-span-5 text-slate-500 font-medium">Vật liệu tản nhiệt</div>
                <div className="col-span-7 text-slate-800">
                  Nhôm đúc ADC12 nguyên khối xử lý sơn tĩnh điện chống ăn mòn
                </div>
              </div>

              <div className="grid grid-cols-12 p-3 sm:px-5 hover:bg-slate-50 transition-colors">
                <div className="col-span-5 text-slate-500 font-medium">Nhiệt độ màu (CCT) &amp; CRI</div>
                <div className="col-span-7 font-mono text-xs sm:text-sm text-slate-800">
                  5000K - 6500K (Trắng ngày tự nhiên), CRI &gt; 80 Ra
                </div>
              </div>

              <div className="grid grid-cols-12 p-3 sm:px-5 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                <div className="col-span-5 text-slate-500 font-medium">Tuổi thọ &amp; Bảo hành</div>
                <div className="col-span-7 font-mono text-xs sm:text-sm text-[#0f172a]">
                  <strong>L70 &gt; 50,000 Giờ</strong> — Bảo hành chính hãng 5 năm
                </div>
              </div>
            </div>

            {/* Bottom Actions Bar */}
            <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 space-y-3">
              <div className="flex items-center gap-2 text-xs text-slate-600 font-mono">
                <Download className="w-3.5 h-3.5 text-[#0284c7]" />
                <span>Đầy đủ file mô phỏng trắc quang IES &amp; bản vẽ Revit BIM</span>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  onClick={onDownloadCatalogue}
                  className="flex items-center gap-2 px-4 py-2.5 bg-[#0f172a] hover:bg-[#1e293b] text-white font-bold text-xs uppercase tracking-wider rounded transition-colors cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-slate-300" />
                  <span>Tải Catalogue PDF</span>
                </button>

                <button
                  onClick={() => onOpenQuoteWithWattage(selectedWattage)}
                  className="flex items-center gap-2 px-5 py-2.5 bg-[#fea619] hover:bg-[#e69512] active:bg-[#c9800d] text-[#0f172a] font-bold text-xs uppercase tracking-wider rounded transition-all shadow-sm cursor-pointer"
                >
                  <span>Báo Giá Dự Án</span>
                  <ChevronRight className="w-4 h-4 text-[#0f172a]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
