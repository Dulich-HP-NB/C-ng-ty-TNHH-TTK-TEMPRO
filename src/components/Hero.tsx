import React from 'react';
import { ArrowRight, Box, ShieldCheck, Zap, Clock, Shield, Sparkles } from 'lucide-react';

interface HeroProps {
  onExploreProducts: () => void;
  onOpenDialux: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProducts, onOpenDialux }) => {
  return (
    <section id="hero" className="bg-[#0f172a] text-white pt-10 pb-12 sm:pt-14 sm:pb-16 border-b border-[#1e293b] relative overflow-hidden">
      {/* Subtle industrial blueprint grid background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fea619 1px, transparent 1px), linear-gradient(90deg, #fea619 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Technical Narrative & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Standard Compliance Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#1e293b] border border-slate-700 text-[#fea619] text-xs font-semibold tracking-wide font-mono">
              <ShieldCheck className="w-4 h-4 text-[#fea619] shrink-0" />
              <span>CHUẨN CHIẾU SÁNG CÔNG NGHIỆP CHÂU ÂU &amp; TCVN 7114</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Đèn Nhà Xưởng LED <br />
                <span className="text-[#fea619]">TTKLight Highbay</span>
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-slate-300">
                Hiệu suất cao — Tiết kiệm điện — Bền bỉ vượt trội
              </p>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">
              Giải pháp chiếu sáng quang học chuẩn xác lý tưởng cho nhà xưởng sản xuất, kho bãi logistics, nhà thi đấu, trung tâm thương mại và tổ hợp công nghiệp nặng.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreProducts}
                className="flex items-center gap-2.5 px-6 py-3.5 bg-[#fea619] hover:bg-[#e69512] active:bg-[#c9800d] text-[#0f172a] font-bold text-sm tracking-wider uppercase rounded transition-all shadow-md hover:shadow-lg cursor-pointer group"
              >
                <span>Xem sản phẩm &amp; Báo giá</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenDialux}
                className="flex items-center gap-2.5 px-6 py-3.5 bg-[#1e293b] hover:bg-[#283548] border border-slate-700 text-white font-semibold text-sm rounded transition-all cursor-pointer group"
              >
                <Box className="w-4 h-4 text-[#fea619] group-hover:rotate-12 transition-transform" />
                <span>Tính toán Dialux 3D</span>
              </button>
            </div>

            {/* 4 Feature Cards Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
              <div className="bg-[#1e293b]/90 border border-slate-800 rounded p-3">
                <div className="flex items-center gap-1.5 text-[11px] font-bold font-mono text-[#fea619] uppercase tracking-wider mb-1">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Tiết Kiệm</span>
                </div>
                <div className="text-xl font-extrabold text-white font-mono">Đến 75%</div>
                <div className="text-[11px] text-slate-400">So với đèn Halogen</div>
              </div>

              <div className="bg-[#1e293b]/90 border border-slate-800 rounded p-3">
                <div className="flex items-center gap-1.5 text-[11px] font-bold font-mono text-[#fea619] uppercase tracking-wider mb-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Độ Bền</span>
                </div>
                <div className="text-xl font-extrabold text-white font-mono">&gt;50,000h</div>
                <div className="text-[11px] text-slate-400">Vận hành liên tục</div>
              </div>

              <div className="bg-[#1e293b]/90 border border-slate-800 rounded p-3">
                <div className="flex items-center gap-1.5 text-[11px] font-bold font-mono text-[#fea619] uppercase tracking-wider mb-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Bảo Hành</span>
                </div>
                <div className="text-xl font-extrabold text-white font-mono">3 - 5 Năm</div>
                <div className="text-[11px] text-slate-400">1 đổi 1 tận nơi</div>
              </div>

              <div className="bg-[#1e293b]/90 border border-slate-800 rounded p-3">
                <div className="flex items-center gap-1.5 text-[11px] font-bold font-mono text-[#fea619] uppercase tracking-wider mb-1">
                  <Shield className="w-3.5 h-3.5" />
                  <span>Bảo Vệ</span>
                </div>
                <div className="text-xl font-extrabold text-white font-mono">IP65 / IP66</div>
                <div className="text-[11px] text-slate-400">Kháng bụi và nước</div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-lg overflow-hidden border border-slate-700 bg-[#1e293b] shadow-2xl">
              {/* Top Right Tag */}
              <div className="absolute top-3 right-3 z-20">
                <span className="px-2.5 py-1 text-[11px] font-extrabold font-mono uppercase tracking-wider bg-[#fea619] text-[#0f172a] rounded shadow">
                  TOP 1 HIGHBAY 2025
                </span>
              </div>

              {/* Luminaire factory visual with authentic highbay light rendering */}
              <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-900 group">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
                  alt="Nhà máy công nghiệp chiếu sáng đèn Highbay TTKLight"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-90"
                  onError={(e) => {
                    // Fallback to high-tech SVG factory scene if network drops
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    if (target.nextElementSibling) {
                      (target.nextElementSibling as HTMLElement).style.display = 'flex';
                    }
                  }}
                />
                
                {/* SVG Visual Fallback container */}
                <div className="hidden absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0b1c30] flex-col items-center justify-center p-6 text-center">
                  <div className="w-20 h-20 rounded-full border-4 border-[#fea619] bg-[#fea619]/10 flex items-center justify-center mb-3">
                    <Sparkles className="w-10 h-10 text-[#fea619]" />
                  </div>
                  <h4 className="text-white font-bold text-lg">Mô Phỏng Chiếu Sáng Công Nghiệp</h4>
                  <p className="text-slate-400 text-xs mt-1">Đèn LED Highbay TTKLight HB-H03</p>
                </div>

                {/* Lighting glow overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-black/20 pointer-events-none" />

                {/* Interactive Lamp beam visual nodes */}
                <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#fea619] rounded-full shadow-[0_0_20px_10px_rgba(254,166,25,0.8)] animate-pulse" />
                <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-[#fea619] rounded-full shadow-[0_0_20px_10px_rgba(254,166,25,0.8)] animate-pulse delay-150" />
                <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-[#fea619] rounded-full shadow-[0_0_20px_10px_rgba(254,166,25,0.8)] animate-pulse delay-300" />
              </div>

              {/* Bottom Spec Footer Bar */}
              <div className="p-3.5 bg-white text-[#0f172a] flex items-center justify-between border-t border-slate-200">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded bg-[#fea619]/20 text-[#fea619] flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-[#92400e]" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold tracking-wider text-slate-500 font-mono">
                      Hiệu Suất Quang Thông
                    </div>
                    <div className="text-sm font-extrabold text-[#0f172a] font-mono">
                      150 Lm/W Lumens
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <span className="inline-block px-2 py-0.5 rounded text-[11px] font-bold font-mono uppercase bg-slate-100 text-slate-700 border border-slate-300">
                    HB-H03 Series
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
