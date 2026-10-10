import React, { useState } from 'react';
import { X, Download, FileText, CheckCircle2, ShieldCheck } from 'lucide-react';

interface CatalogueDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CatalogueDownloadModal: React.FC<CatalogueDownloadModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloaded(true);
    // Trigger virtual file download for the catalogue summary
    const content = `TTKLIGHT VIET NAM - CATALOGUE DEN LED HIGHBAY CONG NGHIEP 2025
============================================================
Công ty Cổ phần TTK Việt Nam
Địa chỉ: Tầng 6, Toà nhà Việt Á, Số 09 Phố Duy Tân, Cầu Giấy, Hà Nội
Hotline: 0899 556 966 - Email: info@ttklight.vn

DANH MUC SAN PHAM CHINH:
1. UFO Highbay HB-H03 (100W, 150W, 200W, 240W) - Efficacy: 150 Lm/W, IP65, IK08
2. Highbay Bracket (100W, 150W, 200W) - Góc quay 180 độ
3. Linear Highbay (100W, 150W, 200W) - Chuyên kho kệ pallet cao
4. Highbay Chống Nổ ATEX Zone 1, 2 (100W, 150W, 200W)
5. Highbay Module (300W, 400W, 500W) - Sân vận động, cảng biển

TIÊU CHUẨN THỬ NGHIỆM: Quatest 1, CE, RoHS, TCVN 7114-1:2008.
`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'TTKLight_Catalogue_Highbay_2025.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="relative w-full max-w-md bg-white rounded-xl shadow-2xl border border-slate-300 overflow-hidden my-6">
        <div className="bg-[#0f172a] text-white px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded bg-[#fea619]" />
            <h3 className="text-sm font-extrabold uppercase font-mono tracking-wider">
              Tải Tài Liệu &amp; Catalogue 2025
            </h3>
          </div>
          <button onClick={onClose} className="p-1 rounded text-slate-400 hover:text-white cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4 text-xs">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-blue-50 text-[#0284c7] flex items-center justify-center mx-auto">
              <FileText className="w-6 h-6" />
            </div>
            <h4 className="text-sm font-bold text-[#0f172a]">
              TTKLight Highbay Technical Catalogue (PDF / IES / BIM)
            </h4>
            <p className="text-slate-600 leading-relaxed">
              Tài liệu bao gồm đầy đủ biểu đồ trắc quang, bảng kiểm định Quatest 1, thông số quang học và hướng dẫn lắp đặt tiêu chuẩn công nghiệp.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded p-3 space-y-1.5 font-mono text-[11px]">
            <div className="flex justify-between">
              <span className="text-slate-500">Dung lượng file:</span>
              <span className="font-bold text-[#0f172a]">8.4 MB (PDF + IES Package)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Phiên bản:</span>
              <span className="font-bold text-slate-700">v2025.2 Industrial Edition</span>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={handleDownload}
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#0f172a] hover:bg-[#1e293b] text-white font-bold text-xs uppercase tracking-wider rounded transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4 text-[#fea619]" />
              <span>{downloaded ? 'Đã tải thành công — Tải lại' : 'Tải Catalogue PDF Ngay'}</span>
            </button>
          </div>

          {downloaded && (
            <div className="text-center text-emerald-600 font-semibold flex items-center justify-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>Tài liệu đã được tải xuống thiết bị của bạn.</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
