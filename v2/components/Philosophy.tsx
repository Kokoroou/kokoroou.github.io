import React from 'react';
import { Quote } from 'lucide-react';
import { Philosophy as PhilosophyType, CVContent } from '../types';

interface Props {
  data: PhilosophyType[];
  ui: CVContent['ui'];
}

const Philosophy: React.FC<Props> = ({ data, ui }) => {
  return (
    <section className="mb-16 bg-slate-900/20 rounded-xl p-8 border border-dashed border-slate-800">
      <div className="flex items-center gap-3 mb-6">
        <Quote className="text-slate-600 transform rotate-180" size={24} />
        <h3 className="text-xl font-bold text-slate-200">{ui.howIWork}</h3>
      </div>
      
      <div className="grid grid-cols-1 gap-6">
        {data.map((item, idx) => (
          <div key={idx} className="flex flex-col md:flex-row gap-2 md:gap-8 md:items-baseline">
            <h4 className="text-teal-400 font-bold whitespace-nowrap min-w-[240px]">
              {item.principle}
            </h4>
            <p className="text-slate-400 text-sm italic border-l-2 border-slate-800 pl-4">
              "{item.detail}"
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Philosophy;