import React from 'react';
import { Mail, Github, Linkedin, Download, Terminal } from 'lucide-react';
import { HeroData, ContactInfo, CVContent } from '../types';

interface Props {
  data: HeroData;
  contact: ContactInfo;
  ui: CVContent['ui'];
}

const Hero: React.FC<Props> = ({ data, contact, ui }) => {
  return (
    <section className="mb-16 pt-12 md:pt-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-100 tracking-tight mb-2">
            {data.name}
          </h1>
          <h2 className="text-xl md:text-2xl text-teal-400 font-medium flex items-center gap-2">
            <Terminal size={20} />
            {data.role}
          </h2>
        </div>
        <div className="mt-6 md:mt-0 flex gap-4">
          <a href={`https://${contact.github}`} className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors text-slate-300 hover:text-white" aria-label="GitHub">
            <Github size={24} />
          </a>
          <a href={`https://${contact.linkedin}`} className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors text-slate-300 hover:text-white" aria-label="LinkedIn">
            <Linkedin size={24} />
          </a>
          <a href={`mailto:${contact.email}`} className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors text-slate-300 hover:text-white" aria-label="Email">
            <Mail size={24} />
          </a>
        </div>
      </div>

      <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed mb-8">
        {data.tagline}
      </p>

      <div className="flex flex-wrap gap-4">
        <button className="flex items-center gap-2 px-5 py-2.5 bg-slate-100 text-slate-900 font-semibold rounded hover:bg-white transition-colors">
          <Download size={18} />
          {ui.downloadCv}
        </button>
        <button className="flex items-center gap-2 px-5 py-2.5 border border-slate-700 text-slate-300 font-medium rounded hover:bg-slate-800 hover:text-white transition-colors" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
          {ui.viewProjects}
        </button>
      </div>
    </section>
  );
};

export default Hero;