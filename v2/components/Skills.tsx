import React from 'react';
import { SkillGroup, CVContent } from '../types';

interface Props {
  data: SkillGroup[];
  ui: CVContent['ui'];
}

const Skills: React.FC<Props> = ({ data, ui }) => {
  return (
    <section className="mb-16">
      <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6 border-b border-slate-800 pb-2">
        {ui.techStack}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-12">
        {data.map((group, idx) => (
          <div key={idx}>
            <h4 className="text-slate-100 font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-teal-500 rounded-full inline-block"></span>
              {group.category}
            </h4>
            <ul className="space-y-3">
              {group.items.map((skill, sIdx) => (
                <li key={sIdx} className="flex justify-between items-start border-l border-slate-800 pl-4">
                  <span className="font-mono text-sm text-slate-300 font-medium block min-w-[120px]">
                    {skill.name}
                  </span>
                  <span className="text-sm text-slate-500 text-right">
                    {skill.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;