import React, { useState } from 'react';
import { Phone, FileText, User, Menu, X, ChevronRight, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  onOpenQuote: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuote, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Trang chủ', id: 'hero' },
    { label: 'Sản phẩm', id: 'spec-detail' },
    { label: 'Giải pháp chiếu sáng', id: 'solutions' },
    { label: 'Công cụ tính toán Dialux', id: 'dialux-calc' },
    { label: 'Dự án', id: 'projects' },
    { label: 'Về chúng tôi', id: 'about' },
    { label: 'Liên hệ', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0f172a] text-white border-b border-[#1e293b] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Brand Wordmark */}
          <div 
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-3 cursor-pointer group shrink-0"
          >
            <div className="w-10 h-10 rounded bg-[#fea619] flex items-center justify-center font-bold text-[#0f172a] text-xl shadow-inner font-mono">
              TTK
            </div>
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl font-extrabold tracking-tight text-white group-hover:text-[#fea619] transition-colors">
                  TTK<span className="text-[#fea619]">Light</span>
                </span>
                <span className="text-[10px] tracking-widest text-[#fea619] uppercase font-bold font-mono">PRO</span>
              </div>
              <p className="text-[9px] tracking-wider text-slate-400 font-medium uppercase">
                Better Light — Brighter Future
              </p>
            </div>
          </div>

          {/* Nav Links (Desktop) */}
          <nav className="hidden xl:flex items-center gap-5 text-[13px] font-medium text-slate-200">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="whitespace-nowrap transition-colors hover:text-[#fea619] py-2 border-b-2 border-transparent hover:border-[#fea619] focus-visible:outline-none focus-visible:text-[#fea619]"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Action Zone: Hotline & CTA */}
          <div className="hidden lg:flex items-center gap-5 shrink-0">
            {/* Hotline */}
            <a 
              href="tel:0899556966"
              className="flex items-center gap-2.5 text-left group hover:opacity-90 transition-opacity"
            >
              <div className="w-8 h-8 rounded bg-[#1e293b] border border-slate-700 flex items-center justify-center text-[#fea619]">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Hotline Kỹ Thuật</div>
                <div className="text-sm font-bold font-mono text-[#fea619] leading-tight tracking-tight">0899 556 966</div>
              </div>
            </a>

            {/* Primary Quote CTA */}
            <button
              onClick={onOpenQuote}
              className="flex items-center gap-2 px-4 py-2.5 bg-[#fea619] hover:bg-[#e69512] active:bg-[#c9800d] text-[#0f172a] font-bold text-xs uppercase tracking-wider rounded transition-all shadow-sm hover:shadow active:scale-[0.99] cursor-pointer whitespace-nowrap"
            >
              <FileText className="w-4 h-4 text-[#0f172a]" />
              <span>Nhận báo giá</span>
            </button>

            {/* User portal icon */}
            <button 
              onClick={onOpenQuote}
              title="Cổng kỹ sư & Nhà thầu" 
              className="w-9 h-9 rounded bg-[#1e293b] border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <User className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={onOpenQuote}
              className="sm:flex hidden items-center gap-1.5 px-3 py-1.5 bg-[#fea619] text-[#0f172a] font-bold text-xs rounded"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Báo giá</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded bg-[#1e293b] text-slate-300 hover:text-white"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#1e293b] border-t border-slate-700 px-4 py-5 space-y-3">
          <div className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="w-full flex items-center justify-between px-3 py-2.5 text-left text-sm font-medium text-slate-200 hover:bg-[#0f172a] rounded transition-colors"
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-700 flex flex-col gap-3">
            <a 
              href="tel:0899556966"
              className="flex items-center gap-3 px-3 py-2 bg-[#0f172a] rounded text-white"
            >
              <Phone className="w-4 h-4 text-[#fea619]" />
              <div>
                <div className="text-[10px] text-slate-400 font-mono">Hotline Kỹ Thuật 24/7</div>
                <div className="text-sm font-bold text-[#fea619] font-mono">0899 556 966</div>
              </div>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#fea619] text-[#0f172a] font-bold text-sm uppercase rounded tracking-wider"
            >
              <FileText className="w-4 h-4" />
              <span>Nhận báo giá dự án</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
