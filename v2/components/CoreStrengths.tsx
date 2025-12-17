import React from 'react';
import { CoreStrength, CVContent } from '../types';

interface Props {
  data: CoreStrength[];
  ui: CVContent['ui'];
}

const CoreStrengths: React.FC<Props> = ({ data, ui }) => {
  return (
    <section className="mb-16">
      <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6 border-b border-slate-800 pb-2">
        {ui.coreStrengths}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map((strength, idx) => (
          <div key={idx} className="group">
            <h4 className="text-lg font-semibold text-slate-200 mb-2 group-hover:text-teal-400 transition-colors">
              {strength.title}
            </h4>
            <p className="text-slate-400 leading-relaxed text-sm">
              {strength.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreStrengths;