import React from 'react';
import { X, Building2, Calendar, CheckCircle2, ChevronRight, Layers } from 'lucide-react';
import { ProjectCaseStudy } from '../types';

interface CaseStudyModalProps {
  caseStudy: ProjectCaseStudy | null;
  isOpen: boolean;
  onClose: () => void;
  onRequestQuote: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  caseStudy,
  isOpen,
  onClose,
  onRequestQuote,
}) => {
  if (!isOpen || !caseStudy) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-slate-300 overflow-hidden my-6">
        <div className="bg-[#0f172a] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded bg-[#fea619]" />
            <h3 className="text-sm font-extrabold uppercase font-mono tracking-wider">
              {caseStudy.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:text-white cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4 text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
            <span className="font-bold text-[#0f172a]">{caseStudy.location}</span>
            <span>&bull;</span>
            <span>Nghiệm thu: {caseStudy.acceptanceYear}</span>
          </div>

          <p className="text-slate-700 leading-relaxed">
            {caseStudy.description}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-slate-50 p-4 rounded-lg border border-slate-200 text-xs">
            <div>
              <span className="text-slate-500 font-mono">Quy mô diện tích:</span>
              <p className="font-bold text-[#0f172a] font-mono mt-0.5">{caseStudy.scale}</p>
            </div>
            <div>
              <span className="text-slate-500 font-mono">Đèn lắp đặt:</span>
              <p className="font-bold text-[#0f172a] mt-0.5">{caseStudy.fixturesInstalled}</p>
            </div>
            <div>
              <span className="text-slate-500 font-mono">Độ rọi thực tế đo đạc:</span>
              <p className="font-bold text-[#0284c7] font-mono mt-0.5">{caseStudy.measuredLux}</p>
            </div>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded p-3 text-emerald-800 text-xs flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
            <span>Dự án được bàn giao nghiệm thu đạt 100% tiêu chuẩn TCVN 7114-1:2008 không phát sinh lỗi trong suốt 12 tháng vận hành.</span>
          </div>
        </div>

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
              onRequestQuote();
            }}
            className="flex items-center gap-2 px-5 py-2.5 bg-[#fea619] hover:bg-[#e69512] text-[#0f172a] font-bold text-xs uppercase tracking-wider rounded cursor-pointer"
          >
            <span>Tư vấn dự án tương tự</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
