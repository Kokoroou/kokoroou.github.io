import React, { useState } from 'react';
import Hero from './components/Hero';
import Snapshot from './components/Snapshot';
import CoreStrengths from './components/CoreStrengths';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Philosophy from './components/Philosophy';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { CV_DATA } from './constants';
import { Languages } from 'lucide-react';

const App: React.FC = () => {
  const [lang, setLang] = useState<'vi' | 'en'>('vi');
  const data = CV_DATA[lang];

  const toggleLanguage = () => {
    setLang(prev => prev === 'vi' ? 'en' : 'vi');
  };

  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-teal-500/30 selection:text-teal-200 relative">
      {/* Language Switcher */}
      <div className="absolute top-6 right-6 md:top-8 md:right-8 z-50">
        <button 
          onClick={toggleLanguage}
          className="flex items-center gap-2 px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-full text-slate-300 text-xs font-semibold hover:bg-slate-800 hover:text-white transition-all shadow-lg"
        >
          <Languages size={14} />
          <span className={lang === 'vi' ? 'text-teal-400' : 'text-slate-500'}>VI</span>
          <span className="text-slate-600">|</span>
          <span className={lang === 'en' ? 'text-teal-400' : 'text-slate-500'}>EN</span>
        </button>
      </div>

      <main className="max-w-4xl mx-auto px-6 md:px-8">
        <Hero data={data.hero} contact={data.contact} ui={data.ui} />
        <Snapshot data={data.snapshot} ui={data.ui} />
        <CoreStrengths data={data.coreStrengths} ui={data.ui} />
        <Skills data={data.skillGroups} ui={data.ui} />
        <Certifications data={data.certifications} ui={data.ui} />
        <Projects data={data.projects} ui={data.ui} />
        <Philosophy data={data.philosophy} ui={data.ui} />
        <Testimonials data={data.testimonials} ui={data.ui} />
        <Footer footprint={data.footprint} contact={data.contact} ui={data.ui} />
      </main>
    </div>
  );
};

export default App;