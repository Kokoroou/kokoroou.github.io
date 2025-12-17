import React, { useState, useEffect } from 'react';
import { Certification, CVContent } from '../types';
import { Award, ExternalLink } from 'lucide-react';

interface Props {
  data: Record<string, Certification[]>;
  ui: CVContent['ui'];
}

const Certifications: React.FC<Props> = ({ data, ui }) => {
  const tabs = Object.keys(data);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  // Reset active tab if language changes and the key might (or might not) change
  useEffect(() => {
    if (!data[activeTab]) {
      setActiveTab(tabs[0]);
    }
  }, [data]);

  return (
    <section className="mb-16">
      <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6 border-b border-slate-800 pb-2">
        {ui.certifications}
      </h3>
      
      <div className="bg-slate-900/30 rounded-lg border border-slate-800 overflow-hidden">
        <div className="flex border-b border-slate-800 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 text-sm font-medium transition-colors whitespace-nowrap ${
                activeTab === tab 
                  ? 'bg-slate-800 text-teal-400 border-b-2 border-teal-400' 
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="p-6">
          <div className="grid gap-4">
            {data[activeTab]?.map((cert, idx) => (
              <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded bg-slate-950/50 border border-slate-800/50">
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-teal-500">
                    <Award size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-200">{cert.name}</h4>
                    <p className="text-sm text-slate-500">{cert.issuer} • {cert.year}</p>
                    {cert.context && (
                      <p className="text-xs text-slate-400 mt-2 italic bg-slate-900 py-1 px-2 rounded inline-block">
                        {cert.context}
                      </p>
                    )}
                  </div>
                </div>
                {cert.url && (
                  <a href={cert.url} className="text-xs flex items-center gap-1 text-slate-500 hover:text-teal-400 transition-colors whitespace-nowrap">
                    {ui.verify} <ExternalLink size={12} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;