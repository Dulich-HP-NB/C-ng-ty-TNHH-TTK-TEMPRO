import React from 'react';
import { ArrowRight, ChevronRight, Sparkles, ShieldAlert, Compass, Box, Grid } from 'lucide-react';
import { CATALOG_PRODUCTS } from '../data/lightingData';
import { CatalogProduct } from '../types';

interface ProductCatalogSectionProps {
  onSelectProduct: (product: CatalogProduct) => void;
  onViewAllProducts: () => void;
}

export const ProductCatalogSection: React.FC<ProductCatalogSectionProps> = ({
  onSelectProduct,
  onViewAllProducts,
}) => {
  // Render technical SVG silhouette for each luminaire type
  const renderProductGraphic = (type: string) => {
    switch (type) {
      case 'ufo':
        return (
          <svg viewBox="0 0 200 140" className="w-full h-28 object-contain">
            <circle cx="100" cy="20" r="10" fill="none" stroke="#0f172a" strokeWidth="3" />
            <rect x="94" y="30" width="12" height="10" fill="#0f172a" />
            <rect x="75" y="40" width="50" height="18" rx="3" fill="#1e293b" />
            <path d="M 50,58 L 150,58 L 180,95 L 20,95 Z" fill="#334155" />
            {[-60, -40, -20, 0, 20, 40, 60].map((dx, i) => (
              <line key={i} x1={100 + dx} y1={60} x2={100 + dx * 1.25} y2={93} stroke="#0f172a" strokeWidth="2" />
            ))}
            <ellipse cx="100" cy="98" rx="80" ry="12" fill="#0f172a" />
            <ellipse cx="100" cy="99" rx="72" ry="9" fill="#f8fafc" stroke="#fea619" strokeWidth="1.5" />
            <circle cx="100" cy="99" r="4" fill="#fea619" />
          </svg>
        );
      case 'bracket':
        return (
          <svg viewBox="0 0 200 140" className="w-full h-28 object-contain">
            {/* U-Bracket mount */}
            <path d="M 30,25 L 30,75 L 170,75 L 170,25" fill="none" stroke="#0284c7" strokeWidth="5" strokeLinecap="round" />
            <circle cx="30" cy="50" r="6" fill="#0f172a" stroke="#ffffff" strokeWidth="2" />
            <circle cx="170" cy="50" r="6" fill="#0f172a" stroke="#ffffff" strokeWidth="2" />
            {/* Lamp fixture tilted */}
            <g transform="rotate(-15 100 70)">
              <rect x="55" y="55" width="90" height="30" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="2" />
              <line x1="60" y1="85" x2="140" y2="85" stroke="#fea619" strokeWidth="3" />
            </g>
          </svg>
        );
      case 'linear':
        return (
          <svg viewBox="0 0 200 140" className="w-full h-28 object-contain">
            {/* Long aluminum extrusion body */}
            <rect x="25" y="45" width="150" height="26" rx="3" fill="#1e293b" stroke="#334155" strokeWidth="2" />
            <line x1="25" y1="52" x2="175" y2="52" stroke="#475569" strokeWidth="1.5" />
            {/* Linear optical diffuser strips */}
            <rect x="35" y="71" width="130" height="10" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />
            <line x1="40" y1="76" x2="160" y2="76" stroke="#fea619" strokeWidth="2" strokeDasharray="6 3" />
            {/* Suspension wires */}
            <line x1="50" y1="15" x2="50" y2="45" stroke="#64748b" strokeWidth="1.5" strokeDasharray="2 2" />
            <line x1="150" y1="15" x2="150" y2="45" stroke="#64748b" strokeWidth="1.5" strokeDasharray="2 2" />
          </svg>
        );
      case 'atex':
        return (
          <svg viewBox="0 0 200 140" className="w-full h-28 object-contain">
            {/* Heavy cast-iron explosion proof cage */}
            <rect x="60" y="30" width="80" height="20" rx="3" fill="#991b1b" />
            <text x="100" y="44" fontSize="9" fill="#ffffff" fontFamily="JetBrains Mono" textAnchor="middle" fontWeight="bold">
              Ex d IIB T6
            </text>
            <path d="M 50,50 L 150,50 L 140,105 L 60,105 Z" fill="#7f1d1d" stroke="#ef4444" strokeWidth="2" />
            {/* Protective steel wire guard grid */}
            {[-30, -15, 0, 15, 30].map((dx, i) => (
              <line key={i} x1={100 + dx} y1={52} x2={100 + dx * 0.9} y2={103} stroke="#fca5a5" strokeWidth="1.5" />
            ))}
            <line x1="55" y1="75" x2="145" y2="75" stroke="#fca5a5" strokeWidth="1.5" />
          </svg>
        );
      case 'module':
        return (
          <svg viewBox="0 0 200 140" className="w-full h-28 object-contain">
            {/* 3 Modular LED pods connected together */}
            <g>
              <rect x="25" y="45" width="45" height="45" rx="3" fill="#1e293b" stroke="#334155" strokeWidth="1.5" />
              <rect x="77" y="45" width="45" height="45" rx="3" fill="#1e293b" stroke="#334155" strokeWidth="1.5" />
              <rect x="129" y="45" width="45" height="45" rx="3" fill="#1e293b" stroke="#334155" strokeWidth="1.5" />
              {/* Lenses */}
              <circle cx="47" cy="67" r="14" fill="#f8fafc" stroke="#fea619" strokeWidth="2" />
              <circle cx="99" cy="67" r="14" fill="#f8fafc" stroke="#fea619" strokeWidth="2" />
              <circle cx="151" cy="67" r="14" fill="#f8fafc" stroke="#fea619" strokeWidth="2" />
            </g>
            <rect x="20" y="35" width="160" height="6" fill="#0f172a" rx="2" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="products" className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#b45309] uppercase tracking-wider font-mono mb-1.5">
              <span>Hệ Sinh Thái Toàn Diện</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">
              Danh Mục Các Dòng Sản Phẩm Highbay TTKLight
            </h2>
            <p className="text-sm text-slate-500 mt-1 max-w-2xl">
              Đa dạng thiết kế, công suất và dải quang học đáp ứng mọi điều kiện khắc nghiệt của công nghiệp.
            </p>
          </div>

          <button
            onClick={onViewAllProducts}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0f172a] hover:text-[#fea619] transition-colors cursor-pointer shrink-0 uppercase tracking-wider font-mono"
          >
            <span>Xem tất cả sản phẩm</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 5 Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {CATALOG_PRODUCTS.map((product) => {
            return (
              <div
                key={product.id}
                onClick={() => onSelectProduct(product)}
                className="group bg-white rounded-lg border border-slate-200 hover:border-slate-400 p-4 flex flex-col justify-between transition-all hover:shadow-md cursor-pointer relative"
              >
                {/* Top Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span
                    className={`px-2 py-0.5 text-[10px] font-mono font-bold uppercase rounded ${
                      product.badgeType === 'amber'
                        ? 'bg-[#fea619] text-[#0f172a]'
                        : product.badgeType === 'blue'
                        ? 'bg-sky-100 text-[#0284c7] border border-sky-200'
                        : 'bg-slate-100 text-slate-700 border border-slate-200'
                    }`}
                  >
                    {product.badge}
                  </span>
                </div>

                {/* Fixture graphic canvas */}
                <div className="pt-6 pb-2 flex items-center justify-center bg-slate-50/60 rounded border border-slate-100 my-2 group-hover:bg-slate-50 transition-colors">
                  {renderProductGraphic(product.imageType)}
                </div>

                {/* Content */}
                <div className="space-y-1 mt-2">
                  <h3 className="text-sm font-bold text-[#0f172a] group-hover:text-[#b45309] transition-colors leading-snug">
                    {product.name}
                  </h3>

                  <div className="text-[11px] font-mono text-slate-500 font-semibold">
                    {product.wattages}
                  </div>

                  <div className="text-xs text-slate-600 flex items-center gap-1 pt-1">
                    <span className="text-[11px] font-medium text-slate-700">
                      {product.featureDesc}
                    </span>
                  </div>
                </div>

                {/* Bottom Detail Action */}
                <div className="pt-3 border-t border-slate-100 mt-3 flex items-center justify-between text-xs font-semibold text-[#0284c7] group-hover:text-[#0f172a]">
                  <span>Chi tiết</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
