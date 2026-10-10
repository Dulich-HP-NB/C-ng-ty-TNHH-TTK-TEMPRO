import React from 'react';
import { X, Printer, Download, CheckCircle2, FileText, Layers, ShieldCheck } from 'lucide-react';
import { DialuxParams, DialuxResult } from '../types';

interface DialuxReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  params: DialuxParams;
  result: DialuxResult;
  onApplyToQuote: () => void;
}

export const DialuxReportModal: React.FC<DialuxReportModalProps> = ({
  isOpen,
  onClose,
  params,
  result,
  onApplyToQuote,
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white rounded-xl shadow-2xl border border-slate-300 overflow-hidden my-6">
        {/* Modal Top Control Bar */}
        <div className="bg-[#0f172a] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-[#fea619] text-[#0f172a] flex items-center justify-center font-bold font-mono text-sm">
              DLX
            </div>
            <div>
              <h3 className="text-sm font-extrabold uppercase font-mono tracking-wider">
                Báo Cáo Mô Phỏng Quang Học Dialux 3D
              </h3>
              <p className="text-[11px] text-slate-400 font-mono">
                Tiêu chuẩn kiểm định TCVN 7114-1:2008 &bull; Mã hồ sơ: DLX-{new Date().getFullYear()}-{Math.floor(1000 + Math.random() * 9000)}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#1e293b] hover:bg-[#2c3d55] text-slate-200 text-xs font-mono rounded cursor-pointer transition-colors"
            >
              <Printer className="w-3.5 h-3.5 text-[#fea619]" />
              <span>In Báo Cáo</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded hover:bg-slate-800 text-slate-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Formal Document Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto font-sans">
          {/* Document Header */}
          <div className="flex justify-between items-start border-b border-slate-200 pb-5">
            <div>
              <div className="text-xl font-extrabold text-[#0f172a]">
                TTK<span className="text-[#b45309]">Light</span> VIỆT NAM
              </div>
              <p className="text-xs text-slate-500 font-medium">
                Phòng Giải Pháp Chiếu Sáng Kỹ Thuật Số &amp; Dự Toán Quang Học
              </p>
              <p className="text-[11px] text-slate-400 font-mono mt-1">
                Tầng 6, Toà nhà Việt Á, Số 09 Duy Tân, Cầu Giấy, Hà Nội
              </p>
            </div>

            <div className="text-right">
              <span className="inline-block px-2.5 py-1 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold font-mono rounded">
                TCVN 7114: ĐẠT TIÊU CHUẨN
              </span>
              <p className="text-[11px] text-slate-500 font-mono mt-1.5">
                Ngày lập báo cáo: {new Date().toLocaleDateString('vi-VN')}
              </p>
            </div>
          </div>

          {/* Section 1: Geometric & Space Specs */}
          <div>
            <h4 className="text-xs font-extrabold uppercase font-mono tracking-wider text-[#0f172a] mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#fea619]" />
              1. Thông Tin Không Gian Nhà Xưởng
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-4 rounded-lg border border-slate-200 text-xs">
              <div>
                <span className="text-slate-500 font-mono">Kích thước:</span>
                <p className="font-bold text-[#0f172a] font-mono mt-0.5">{params.length}m x {params.width}m</p>
              </div>
              <div>
                <span className="text-slate-500 font-mono">Diện tích mặt sàn:</span>
                <p className="font-bold text-[#0f172a] font-mono mt-0.5">{result.totalArea.toLocaleString()} m²</p>
              </div>
              <div>
                <span className="text-slate-500 font-mono">Chiều cao treo đèn:</span>
                <p className="font-bold text-[#0f172a] font-mono mt-0.5">{params.mountingHeight} mét</p>
              </div>
              <div>
                <span className="text-slate-500 font-mono">Hệ số duy trì (MF):</span>
                <p className="font-bold text-[#0f172a] font-mono mt-0.5">0.80</p>
              </div>
            </div>
          </div>

          {/* Section 2: Luminaire & Calculation Results */}
          <div>
            <h4 className="text-xs font-extrabold uppercase font-mono tracking-wider text-[#0f172a] mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0284c7]" />
              2. Kết Quả Dự Toán Trắc Quang (Dialux Evo Engine)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg border border-slate-200 bg-white">
                <div className="text-[10px] font-mono text-slate-500 uppercase font-bold">Số lượng bộ đèn</div>
                <div className="text-2xl font-extrabold text-[#b45309] font-mono mt-1">
                  {result.fixtureCount} <span className="text-xs text-slate-600 font-normal">Bộ</span>
                </div>
                <div className="text-xs text-slate-600 mt-1">Model {params.selectedModel}</div>
              </div>

              <div className="p-4 rounded-lg border border-slate-200 bg-white">
                <div className="text-[10px] font-mono text-slate-500 uppercase font-bold">Độ rọi tính toán (Em)</div>
                <div className="text-2xl font-extrabold text-[#0f172a] font-mono mt-1">
                  {result.calculatedAverageLux} <span className="text-xs text-slate-600 font-normal">Lux</span>
                </div>
                <div className="text-xs text-emerald-600 font-semibold mt-1">
                  Mục tiêu chuẩn: {params.targetLux} Lux (Đạt)
                </div>
              </div>

              <div className="p-4 rounded-lg border border-slate-200 bg-white">
                <div className="text-[10px] font-mono text-slate-500 uppercase font-bold">Độ đồng đều (Uo)</div>
                <div className="text-2xl font-extrabold text-[#0284c7] font-mono mt-1">
                  {result.uniformityUo}
                </div>
                <div className="text-xs text-slate-600 mt-1">
                  Chuẩn TCVN 7114: &gt;= 0.70
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Layout Grid Table */}
          <div>
            <h4 className="text-xs font-extrabold uppercase font-mono tracking-wider text-[#0f172a] mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-slate-700" />
              3. Phương Án Bố Trí Lưới &amp; Mật Độ Công Suất
            </h4>
            <div className="border border-slate-200 rounded-lg overflow-hidden text-xs">
              <table className="w-full text-left">
                <thead className="bg-[#0f172a] text-white font-mono text-[11px]">
                  <tr>
                    <th className="p-2.5">Chỉ số kỹ thuật</th>
                    <th className="p-2.5">Giá trị thiết kế</th>
                    <th className="p-2.5">Tiêu chuẩn đối chiếu</th>
                    <th className="p-2.5">Đánh giá</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-mono">
                  <tr>
                    <td className="p-2.5 text-slate-600">Lưới bố trí (Dọc x Ngang)</td>
                    <td className="p-2.5 font-bold text-[#0f172a]">{result.rowsX} x {result.colsY}</td>
                    <td className="p-2.5 text-slate-500">Khoảng cách: {result.spacingX}m x {result.spacingY}m</td>
                    <td className="p-2.5 text-emerald-600 font-bold">Tối ưu quang học</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-2.5 text-slate-600">Mật độ công suất (W/m²)</td>
                    <td className="p-2.5 font-bold text-[#0f172a]">{result.powerDensityWpM2} W/m²</td>
                    <td className="p-2.5 text-slate-500">Quy chuẩn QCVN 09:2017 &lt; 8.0 W/m²</td>
                    <td className="p-2.5 text-emerald-600 font-bold">Tiết kiệm {result.energySavingsPercent}%</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 text-slate-600">Tổng công suất tiêu thụ</td>
                    <td className="p-2.5 font-bold text-[#0f172a]">{result.totalPowerWatts.toLocaleString()} W</td>
                    <td className="p-2.5 text-slate-500">{(result.totalPowerWatts / 1000).toFixed(2)} kW/h</td>
                    <td className="p-2.5 text-[#0284c7] font-bold">Hệ số PF &gt; 0.95</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Validation Stamp Block */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="text-slate-500 text-[11px] leading-relaxed">
              * Báo cáo được tính toán dựa trên file dữ liệu trắc quang định dạng IES chính xác của TTKLight và phần mềm mô phỏng quang học Dialux.
            </div>

            <div className="text-center sm:text-right shrink-0">
              <div className="font-bold text-[#0f172a]">KỸ SƯ TRƯỞNG DỰ ÁN</div>
              <div className="text-emerald-600 font-mono font-bold text-xs mt-1">ĐÃ PHÊ DUYỆT BỞI TTKLIGHT</div>
              <div className="text-[10px] text-slate-400 font-mono mt-0.5">TTK Light Engineering Center</div>
            </div>
          </div>
        </div>

        {/* Modal Bottom Action Controls */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
          >
            Đóng
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2.5 bg-white border border-slate-300 hover:bg-slate-100 text-[#0f172a] text-xs font-bold rounded cursor-pointer"
            >
              Lưu PDF / In
            </button>
            <button
              onClick={() => {
                onClose();
                onApplyToQuote();
              }}
              className="px-5 py-2.5 bg-[#fea619] hover:bg-[#e69512] text-[#0f172a] text-xs font-bold uppercase rounded cursor-pointer shadow-sm"
            >
              Chuyển Sang Báo Giá Dự Án
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
