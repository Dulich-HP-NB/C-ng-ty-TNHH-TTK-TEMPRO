import React from 'react';
import { Sparkles, Cpu, Layers, ThermometerSnowflake, Wrench } from 'lucide-react';

export const ValuePropositionBar: React.FC = () => {
  const values = [
    {
      icon: Sparkles,
      title: 'Hiệu suất cực đại',
      desc: '> 150 Lm/Watt',
    },
    {
      icon: Cpu,
      title: 'Chip LED cao cấp',
      desc: 'Philips / Bridgelux',
    },
    {
      icon: Layers,
      title: 'Vỏ nhôm nguyên khối',
      desc: 'Tản nhiệt đối lưu sâu',
    },
    {
      icon: ThermometerSnowflake,
      title: 'Vận hành bền bỉ',
      desc: '-20°C đến +50°C',
    },
    {
      icon: Wrench,
      title: 'Dễ dàng lắp đặt',
      desc: 'Móc treo / Giá chữ U',
    },
  ];

  return (
    <div className="bg-white border-b border-slate-200 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {values.map((v, idx) => {
            const Icon = v.icon;
            return (
              <div 
                key={idx} 
                className="flex items-center gap-3 p-2 rounded hover:bg-slate-50 transition-colors"
              >
                <div className="w-9 h-9 rounded bg-[#fea619]/15 text-[#92400e] flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-[#fea619]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0f172a] leading-tight">
                    {v.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-mono mt-0.5">
                    {v.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
