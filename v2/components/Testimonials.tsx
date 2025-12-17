import React from 'react';
import { Testimonial, CVContent } from '../types';

interface Props {
  data: Testimonial[];
  ui: CVContent['ui'];
}

const Testimonials: React.FC<Props> = ({ data, ui }) => {
  return (
    <section className="mb-16">
      <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6 border-b border-slate-800 pb-2">
        {ui.testimonials}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.map((t, idx) => (
          <div key={idx} className="bg-slate-900 p-6 rounded-lg border border-slate-800 relative">
            <span className="absolute top-4 left-4 text-4xl text-slate-800 font-serif leading-none">“</span>
            <p className="text-slate-300 text-sm leading-relaxed mb-4 relative z-10 pl-2">
              {t.text}
            </p>
            <div className="pl-2">
              <div className="text-slate-100 font-semibold text-sm">{t.author}</div>
              <div className="text-slate-500 text-xs">{t.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;