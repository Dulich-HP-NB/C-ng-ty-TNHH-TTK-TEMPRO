import React, { useState } from 'react';
import { Building2, CheckCircle2, ChevronRight, Eye, Calendar, Sparkles } from 'lucide-react';
import { CASE_STUDIES } from '../data/lightingData';
import { ProjectCaseStudy } from '../types';

interface CaseStudiesSectionProps {
  onSelectCaseStudy: (caseStudy: ProjectCaseStudy) => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onSelectCaseStudy }) => {
  // Direct high-quality industrial facility photography
  const getProjectImage = (type: string) => {
    switch (type) {
      case 'auto':
        return 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80';
      case 'logistics':
        return 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80';
      case 'food':
        return 'https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?auto=format&fit=crop&w=800&q=80';
      case 'stadium':
        return 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80';
      default:
        return 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80';
    }
  };

  return (
    <section id="projects" className="py-12 sm:py-16 bg-[#f8f9ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#b45309] uppercase tracking-wider font-mono mb-1.5">
              <span>Hồ Sơ Năng Lực Triển Khai</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">
              Hình Ảnh Thực Tế Từ Các Dự Án Tiêu Biểu
            </h2>
            <p className="text-sm text-slate-500 mt-1 max-w-2xl">
              Đồng hành cùng hàng trăm tổng thầu xây dựng và nhà máy công nghiệp trên toàn quốc.
            </p>
          </div>

          <div className="shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-blue-50 border border-blue-200 text-[#0284c7] text-xs font-bold font-mono tracking-wider">
              &gt; 350 Dự án thành công
            </span>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CASE_STUDIES.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectCaseStudy(item)}
              className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Photo with Overlay Location Tag */}
                <div className="relative aspect-16/10 overflow-hidden bg-slate-900">
                  <img
                    src={getProjectImage(item.imageType)}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-95"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      if (target.nextElementSibling) {
                        (target.nextElementSibling as HTMLElement).style.display = 'flex';
                      }
                    }}
                  />
                  {/* SVG Fallback */}
                  <div className="hidden absolute inset-0 bg-[#0f172a] flex-col items-center justify-center p-4 text-center">
                    <Building2 className="w-8 h-8 text-[#fea619] mb-1" />
                    <span className="text-xs font-bold text-white">{item.location}</span>
                  </div>

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                  {/* Top Location Pill */}
                  <div className="absolute top-2.5 left-2.5 z-10">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#0f172a]/90 text-white border border-slate-700">
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-4 space-y-2">
                  <h3 className="text-sm font-bold text-[#0f172a] group-hover:text-[#b45309] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Bottom Inspection Stats */}
              <div className="px-4 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono">
                <span className="text-slate-600 font-semibold">
                  Độ rọi: <strong className="text-[#0f172a]">{item.measuredLux}</strong>
                </span>
                <span className="text-slate-400">
                  Nghiệm thu {item.acceptanceYear}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
