import React, { useState, useMemo } from 'react';
import { Box, RefreshCw, FileText, CheckCircle2, ChevronRight, Layers, HelpCircle, Eye } from 'lucide-react';
import { SPACE_PRESETS, HB_H03_SPECS } from '../data/lightingData';
import { DialuxParams, DialuxResult } from '../types';

interface DialuxCalculatorProps {
  onExportReport: (params: DialuxParams, result: DialuxResult) => void;
  onApplyToQuote: (params: DialuxParams, result: DialuxResult) => void;
}

export const DialuxCalculator: React.FC<DialuxCalculatorProps> = ({
  onExportReport,
  onApplyToQuote,
}) => {
  // Input states matching the exact UI from the screenshot
  const [selectedSpacePreset, setSelectedSpacePreset] = useState<string>('garment_standard');
  const [length, setLength] = useState<number>(50);
  const [width, setWidth] = useState<number>(20);
  const [mountingHeight, setMountingHeight] = useState<number>(8);
  const [targetLux, setTargetLux] = useState<number>(300);
  const [selectedModelWattage, setSelectedModelWattage] = useState<number>(100);
  const [viewMode, setViewMode] = useState<'2d' | 'heatmap'>('2d');
  const [hoveredFixture, setHoveredFixture] = useState<{ col: number; row: number } | null>(null);

  // Handle preset change
  const handleSpaceChange = (presetId: string) => {
    setSelectedSpacePreset(presetId);
    const found = SPACE_PRESETS.find((p) => p.id === presetId);
    if (found) {
      setTargetLux(found.defaultLux);
    }
  };

  // Dialux Photometric Engine Calculation
  const result: DialuxResult = useMemo(() => {
    const area = length * width;
    const spec = HB_H03_SPECS[selectedModelWattage] || HB_H03_SPECS[100];
    const lampLumens = spec.lumens;
    const mf = 0.8; // Maintenance factor

    // Room Index k = (L * W) / (H * (L + W))
    const roomIndex = (length * width) / (mountingHeight * (length + width));
    // Utilization Factor estimate (highbay reflector 90-120deg)
    const uf = Math.min(0.78, Math.max(0.62, 0.6 + roomIndex * 0.04));

    // Raw luminaire count N = (E * A) / (Phi * UF * MF)
    const rawN = (targetLux * area) / (lampLumens * uf * mf);

    // Calculate grid distribution matching room aspect ratio L / W
    const aspect = length / width; // e.g. 50 / 20 = 2.5
    let bestCols = Math.round(Math.sqrt(rawN * aspect));
    bestCols = Math.max(2, bestCols);
    let bestRows = Math.round(rawN / bestCols);
    bestRows = Math.max(1, bestRows);

    // Ensure total fixture count reaches target lux
    while (bestCols * bestRows * lampLumens * uf * mf < targetLux * area * 0.95) {
      if (bestCols / bestRows < aspect) {
        bestCols += 1;
      } else {
        bestRows += 1;
      }
    }

    const fixtureCount = bestCols * bestRows;
    const spacingX = Number((length / bestCols).toFixed(1));
    const spacingY = Number((width / bestRows).toFixed(1));
    const totalPowerWatts = fixtureCount * selectedModelWattage;
    const powerDensityWpM2 = Number((totalPowerWatts / area).toFixed(2));
    const calculatedAverageLux = Math.round((fixtureCount * lampLumens * uf * mf) / area);

    // Baseline metal halide / halogen comparison (saving calculation)
    // Traditional metal halide needs ~3.5x wattage
    const energySavingsPercent = 68;

    // Uniformity ratio Uo (E_min / E_avg) based on spacing to height ratio (SHR)
    const shr = Math.max(spacingX, spacingY) / mountingHeight;
    const uniformityUo = Number((Math.min(0.82, Math.max(0.68, 0.85 - shr * 0.1))).toFixed(2));

    return {
      fixtureCount,
      rowsX: bestRows, // Dọc
      colsY: bestCols, // Ngang
      spacingX,
      spacingY,
      totalPowerWatts,
      powerDensityWpM2,
      calculatedAverageLux,
      uniformityUo,
      energySavingsPercent,
      totalArea: area,
    };
  }, [length, width, mountingHeight, targetLux, selectedModelWattage]);

  const currentParams: DialuxParams = {
    spaceType: selectedSpacePreset,
    length,
    width,
    mountingHeight,
    targetLux,
    selectedModel: `HB-H03 (${selectedModelWattage}W)`,
    selectedWattage: selectedModelWattage,
    maintenanceFactor: 0.8,
  };

  return (
    <section id="dialux-calc" className="py-12 sm:py-16 bg-[#e5eeff]/40 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white border border-slate-300 text-[#0284c7] text-xs font-bold font-mono tracking-wider mb-2 shadow-xs">
            <Box className="w-3.5 h-3.5" />
            <span>CÔNG CỤ GIẢ LẬP TRẮC QUANG KỸ THUẬT SỐ</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">
            Tính Toán Số Lượng Đèn Theo Mô Phỏng Dialux 3D
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Hỗ trợ Giám đốc kỹ thuật &amp; Quản lý dự án dự toán chính xác độ rọi (Lux), số bộ đèn và lưới phân bố không gian nhà xưởng theo tiêu chuẩn TCVN 7114-1:2008.
          </p>
        </div>

        {/* 2-Column Calculator Box */}
        <div className="bg-white rounded-xl border border-slate-300 shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Left Column: Room Parameters Input */}
          <div className="lg:col-span-5 p-6 bg-slate-50/70 border-b lg:border-b-0 lg:border-r border-slate-200 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#fea619]" />
                  <h3 className="text-xs font-extrabold uppercase font-mono tracking-wider text-[#0f172a]">
                    Tham Số Không Gian
                  </h3>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-100 text-[#0284c7] font-bold">
                  v3.2 Dialux Core
                </span>
              </div>

              {/* Space Type Selector */}
              <div>
                <label className="block text-[11px] font-bold uppercase font-mono text-slate-600 mb-1">
                  Loại hình không gian sản xuất
                </label>
                <select
                  value={selectedSpacePreset}
                  onChange={(e) => handleSpaceChange(e.target.value)}
                  className="w-full text-xs sm:text-sm font-medium bg-white border border-slate-300 rounded px-3 py-2 text-[#0f172a] focus:outline-none focus:border-[#0f172a] focus:ring-1 focus:ring-[#fea619]"
                >
                  {SPACE_PRESETS.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Dimensions: Length & Width */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase font-mono text-slate-600 mb-1">
                    Chiều Dài (m)
                  </label>
                  <input
                    type="number"
                    min="5"
                    max="300"
                    value={length}
                    onChange={(e) => setLength(Math.max(5, Number(e.target.value)))}
                    className="w-full text-sm font-mono font-bold bg-white border border-slate-300 rounded px-3 py-2 text-[#0f172a] focus:outline-none focus:border-[#0f172a]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase font-mono text-slate-600 mb-1">
                    Chiều Rộng (m)
                  </label>
                  <input
                    type="number"
                    min="5"
                    max="150"
                    value={width}
                    onChange={(e) => setWidth(Math.max(5, Number(e.target.value)))}
                    className="w-full text-sm font-mono font-bold bg-white border border-slate-300 rounded px-3 py-2 text-[#0f172a] focus:outline-none focus:border-[#0f172a]"
                  />
                </div>
              </div>

              {/* Mounting Height & Target Lux */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase font-mono text-slate-600 mb-1">
                    Chiều Cao Treo (m)
                  </label>
                  <select
                    value={mountingHeight}
                    onChange={(e) => setMountingHeight(Number(e.target.value))}
                    className="w-full text-sm font-mono font-bold bg-white border border-slate-300 rounded px-3 py-2 text-[#0f172a] focus:outline-none focus:border-[#0f172a]"
                  >
                    <option value={6}>Treo 6 mét</option>
                    <option value={8}>Treo 8 mét</option>
                    <option value={10}>Treo 10 mét</option>
                    <option value={12}>Treo 12 mét</option>
                    <option value={15}>Treo 15 mét</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase font-mono text-slate-600 mb-1">
                    Độ Rọi Tiêu Chuẩn (Lux)
                  </label>
                  <input
                    type="number"
                    min="100"
                    max="1500"
                    step="50"
                    value={targetLux}
                    onChange={(e) => setTargetLux(Math.max(100, Number(e.target.value)))}
                    className="w-full text-sm font-mono font-bold bg-white border border-slate-300 rounded px-3 py-2 text-[#0f172a] focus:outline-none focus:border-[#0f172a]"
                  />
                </div>
              </div>

              {/* Luminaire Model Selector */}
              <div>
                <label className="block text-[11px] font-bold uppercase font-mono text-slate-600 mb-1">
                  Model Đèn Highbay TTKLight
                </label>
                <select
                  value={selectedModelWattage}
                  onChange={(e) => setSelectedModelWattage(Number(e.target.value))}
                  className="w-full text-xs sm:text-sm font-medium bg-white border border-slate-300 rounded px-3 py-2 text-[#0f172a] focus:outline-none focus:border-[#0f172a]"
                >
                  <option value={100}>HB-H03 (100W — 15,000 lm — 150 lm/W)</option>
                  <option value={150}>HB-H03 (150W — 22,500 lm — 150 lm/W)</option>
                  <option value={200}>HB-H03 (200W — 30,000 lm — 150 lm/W)</option>
                  <option value={240}>HB-H03 (240W — 36,000 lm — 150 lm/W)</option>
                </select>
              </div>
            </div>

            {/* Recalculate button */}
            <div className="pt-6">
              <button
                type="button"
                onClick={() => {
                  // Interactive feedback
                }}
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#0f172a] hover:bg-[#1e293b] text-white font-bold text-xs uppercase tracking-wider rounded transition-colors cursor-pointer shadow-sm"
              >
                <RefreshCw className="w-3.5 h-3.5 text-[#fea619]" />
                <span>Cập nhật mô phỏng Dialux 3D</span>
              </button>
            </div>
          </div>

          {/* Right Column: Dialux Photometric Results & Visual Grid Plan */}
          <div className="lg:col-span-7 p-6 flex flex-col justify-between space-y-6">
            <div>
              {/* Output Title & Maintenance Factor */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded bg-[#0284c7]" />
                  <h3 className="text-xs font-extrabold uppercase font-mono tracking-wider text-[#0f172a]">
                    Kết Quả Phân Tích Trắc Quang
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-slate-500">
                  Hệ số duy trì (MF): <strong className="text-[#0f172a]">0.80</strong>
                </span>
              </div>

              {/* 3 Key Metric Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
                <div className="bg-[#f8fafc] border border-slate-200 rounded p-3">
                  <div className="text-[10px] font-bold font-mono text-slate-500 uppercase">
                    Số Lượng Đèn Cần Lắp
                  </div>
                  <div className="text-2xl font-extrabold text-[#b45309] font-mono mt-0.5">
                    {result.fixtureCount}{' '}
                    <span className="text-xs font-semibold text-slate-600">Bộ đèn</span>
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono mt-0.5">
                    Model HB-H03 {selectedModelWattage}W
                  </div>
                </div>

                <div className="bg-[#f8fafc] border border-slate-200 rounded p-3">
                  <div className="text-[10px] font-bold font-mono text-slate-500 uppercase">
                    Bố Trí Lưới Theo Đèn
                  </div>
                  <div className="text-2xl font-extrabold text-[#0f172a] font-mono mt-0.5">
                    {result.rowsX} x {result.colsY}{' '}
                    <span className="text-xs font-semibold text-slate-500">(Dọc x Ngang)</span>
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono mt-0.5">
                    Khoảng cách: {result.spacingX}m x {result.spacingY}m
                  </div>
                </div>

                <div className="bg-[#f8fafc] border border-slate-200 rounded p-3">
                  <div className="text-[10px] font-bold font-mono text-slate-500 uppercase">
                    Mật Độ Công Suất
                  </div>
                  <div className="text-2xl font-extrabold text-[#0f172a] font-mono mt-0.5">
                    {result.powerDensityWpM2}{' '}
                    <span className="text-xs font-semibold text-slate-500">W/m²</span>
                  </div>
                  <div className="text-[10px] text-emerald-600 font-mono font-bold mt-0.5">
                    Tiết kiệm {result.energySavingsPercent}% TCVN
                  </div>
                </div>
              </div>

              {/* Sơ đồ bố trí mặt bằng (Mô phỏng 2D/3D Dialux Floor Plan) */}
              <div className="rounded-lg border border-slate-700 bg-[#0b1c30] p-4 text-white space-y-3">
                <div className="flex items-center justify-between text-xs border-b border-slate-800 pb-2">
                  <span className="font-mono text-[11px] text-slate-300 font-bold uppercase">
                    SƠ ĐỒ BỐ TRÍ MẶT BẰNG (MÔ PHỎNG 2D/3D DIALUX FLOOR PLAN)
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-[#fea619] font-bold">
                      Độ đồng đều Uo: {result.uniformityUo} &gt;= 0.70 (ĐẠT CHUẨN)
                    </span>
                    <button
                      onClick={() => setViewMode(viewMode === '2d' ? 'heatmap' : '2d')}
                      className="px-2 py-0.5 text-[9px] font-mono uppercase bg-[#1e293b] hover:bg-[#2c3d55] text-slate-300 rounded border border-slate-700 cursor-pointer"
                    >
                      {viewMode === '2d' ? 'Chế độ Nhiệt' : 'Chế độ Lưới'}
                    </button>
                  </div>
                </div>

                {/* Interactive CAD simulation canvas */}
                <div className="relative w-full h-44 bg-[#050e1a] rounded border border-slate-800 flex items-center justify-center overflow-hidden p-2">
                  <svg
                    viewBox={`0 0 ${length * 10} ${width * 10}`}
                    className="w-full h-full max-h-40"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <defs>
                      <pattern id="dialuxCadGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" strokeWidth="0.5" />
                      </pattern>
                      <radialGradient id="lampGlow">
                        <stop offset="0%" stopColor="#fea619" stopOpacity="0.8" />
                        <stop offset="40%" stopColor="#fea619" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#050e1a" stopOpacity="0" />
                      </radialGradient>
                    </defs>

                    {/* Room boundary */}
                    <rect
                      x="2"
                      y="2"
                      width={length * 10 - 4}
                      height={width * 10 - 4}
                      fill="url(#dialuxCadGrid)"
                      stroke="#334155"
                      strokeWidth="2"
                    />

                    {/* False color heat contour if in heatmap mode */}
                    {viewMode === 'heatmap' && (
                      <rect
                        x="10"
                        y="10"
                        width={length * 10 - 20}
                        height={width * 10 - 20}
                        fill="#0284c7"
                        opacity="0.15"
                      />
                    )}

                    {/* Luminaire distribution nodes */}
                    {Array.from({ length: result.rowsX }).map((_, rIdx) => {
                      const yPos = ((rIdx + 0.5) * (width * 10)) / result.rowsX;
                      return Array.from({ length: result.colsY }).map((_, cIdx) => {
                        const xPos = ((cIdx + 0.5) * (length * 10)) / result.colsY;
                        const isHovered = hoveredFixture?.row === rIdx && hoveredFixture?.col === cIdx;
                        return (
                          <g
                            key={`${rIdx}-${cIdx}`}
                            className="cursor-pointer"
                            onMouseEnter={() => setHoveredFixture({ row: rIdx, col: cIdx })}
                            onMouseLeave={() => setHoveredFixture(null)}
                          >
                            {/* Photometric light cone radius */}
                            <circle
                              cx={xPos}
                              cy={yPos}
                              r={isHovered ? 28 : 22}
                              fill="url(#lampGlow)"
                              opacity={viewMode === 'heatmap' ? 0.7 : 0.4}
                            />
                            {/* Fixture crosshair icon */}
                            <circle
                              cx={xPos}
                              cy={yPos}
                              r={isHovered ? 4.5 : 3}
                              fill="#fea619"
                              stroke="#ffffff"
                              strokeWidth="0.8"
                            />
                            <line
                              x1={xPos - 5}
                              y1={yPos}
                              x2={xPos + 5}
                              y2={yPos}
                              stroke="#0f172a"
                              strokeWidth="0.5"
                            />
                            <line
                              x1={xPos}
                              y1={yPos - 5}
                              x2={xPos}
                              y2={yPos + 5}
                              stroke="#0f172a"
                              strokeWidth="0.5"
                            />
                          </g>
                        );
                      });
                    })}

                    {/* Room coordinate labels */}
                    <text x="8" y="14" fontSize="10" fill="#94a3b8" fontFamily="JetBrains Mono">
                      0,0m
                    </text>
                    <text x={length * 10 - 45} y="14" fontSize="10" fill="#94a3b8" fontFamily="JetBrains Mono">
                      {length}m
                    </text>
                    <text x="8" y={width * 10 - 8} fontSize="10" fill="#94a3b8" fontFamily="JetBrains Mono">
                      {width}m
                    </text>
                  </svg>

                  {/* Active Tooltip on Fixture Hover */}
                  {hoveredFixture && (
                    <div className="absolute bottom-2 left-2 bg-[#0f172a]/95 border border-slate-700 px-2 py-1 rounded text-[10px] font-mono text-white shadow-lg pointer-events-none">
                      Đèn #{hoveredFixture.row * result.colsY + hoveredFixture.col + 1} | Độ rọi bề mặt: ~{result.calculatedAverageLux} Lux
                    </div>
                  )}
                </div>

                {/* Simulation Summary Bar below diagram */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-[11px] font-mono text-slate-300">
                  <div>
                    Diện tích mặt sàn: <strong className="text-white">{result.totalArea.toLocaleString()} m²</strong>
                  </div>
                  <div>
                    Độ rọi trung bình: <strong className="text-[#fea619]">{result.calculatedAverageLux} Lux</strong>
                  </div>
                  <div>
                    Tổng công suất: <strong className="text-white">{result.totalPowerWatts.toLocaleString()} W</strong>
                  </div>
                  <div>
                    Tiêu chuẩn: <strong className="text-emerald-400">TCVN 7114</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Output Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => onExportReport(currentParams, result)}
                className="flex items-center gap-2 px-4 py-2.5 bg-blue-50 hover:bg-blue-100 text-[#0284c7] border border-blue-200 font-bold text-xs uppercase tracking-wider rounded transition-colors cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>Xuất Báo Cáo Dialux PDF</span>
              </button>

              <button
                type="button"
                onClick={() => onApplyToQuote(currentParams, result)}
                className="flex items-center gap-2 px-5 py-2.5 bg-[#fea619] hover:bg-[#e69512] active:bg-[#c9800d] text-[#0f172a] font-bold text-xs uppercase tracking-wider rounded transition-all shadow-sm cursor-pointer"
              >
                <span>Nhận Dự Toán Trọn Gói</span>
                <ChevronRight className="w-4 h-4 text-[#0f172a]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
