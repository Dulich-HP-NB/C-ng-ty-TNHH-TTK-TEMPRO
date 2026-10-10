import React from 'react';
import { X, Check, ShieldCheck, Sparkles, ChevronRight, Download } from 'lucide-react';
import { CatalogProduct } from '../types';

interface ProductModalProps {
  product: CatalogProduct | null;
  isOpen: boolean;
  onClose: () => void;
  onRequestQuote: (productName: string) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  isOpen,
  onClose,
  onRequestQuote,
}) => {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-slate-300 overflow-hidden my-6">
        {/* Top Header */}
        <div className="bg-[#0f172a] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded bg-[#fea619]" />
            <h3 className="text-sm font-extrabold uppercase font-mono tracking-wider">
              {product.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:text-white cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5 text-xs sm:text-sm">
          {/* Key badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 rounded bg-[#fea619] text-[#0f172a] font-mono font-bold text-xs uppercase">
              {product.badge}
            </span>
            <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-800 font-mono font-semibold text-xs border border-slate-300">
              {product.wattages}
            </span>
            <span className="px-2.5 py-1 rounded bg-blue-50 text-[#0284c7] font-mono font-semibold text-xs border border-blue-200">
              {product.ipRating}
            </span>
            <span className="px-2.5 py-1 rounded bg-emerald-50 text-emerald-700 font-mono font-semibold text-xs border border-emerald-200">
              Bảo hành 5 năm
            </span>
          </div>

          <div>
            <h4 className="font-bold text-[#0f172a] text-sm">Đặc tính kỹ thuật &amp; Ứng dụng</h4>
            <p className="text-slate-600 mt-1 leading-relaxed">
              {product.suitability}
            </p>
          </div>

          {/* Quick Spec List */}
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-2 text-xs">
            <div className="flex justify-between py-1 border-b border-slate-200">
              <span className="text-slate-500 font-medium">Hiệu suất quang thông:</span>
              <strong className="text-[#b45309] font-mono">{product.efficacy}</strong>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-200">
              <span className="text-slate-500 font-medium">Cấp bảo vệ:</span>
              <strong className="text-slate-800 font-mono">{product.ipRating}</strong>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-200">
              <span className="text-slate-500 font-medium">Chip LED &amp; Nguồn Driver:</span>
              <span className="text-slate-800">Philips Lumileds / Bridgelux + Nguồn Meanwell</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-slate-500 font-medium">Tuổi thọ L70:</span>
              <span className="text-slate-800 font-mono font-bold">&gt; 50,000 Giờ vận hành liên tục</span>
            </div>
          </div>

          <div className="bg-blue-50/70 border border-blue-200 rounded p-3 text-[11px] text-[#0284c7] flex items-center gap-2 font-mono">
            <Download className="w-4 h-4 shrink-0" />
            <span>Đã sẵn sàng file IES trắc quang và thư viện BIM Revit cho dự án.</span>
          </div>
        </div>

        {/* Footer actions */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex items-center justify-between">
          <button
            onClick={onClose}
            className="text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
          >
            Đóng
          </button>
          <button
            onClick={() => {
              onClose();
              onRequestQuote(product.name);
            }}
            className="flex items-center gap-2 px-5 py-2.5 bg-[#fea619] hover:bg-[#e69512] text-[#0f172a] font-bold text-xs uppercase tracking-wider rounded cursor-pointer shadow-sm"
          >
            <span>Yêu cầu báo giá {product.name}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
