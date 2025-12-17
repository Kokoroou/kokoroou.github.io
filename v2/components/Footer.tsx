import React from 'react';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { ContactInfo, DigitalFootprint, CVContent } from '../types';

interface Props {
  footprint: DigitalFootprint[];
  contact: ContactInfo;
  ui: CVContent['ui'];
}

const Footer: React.FC<Props> = ({ footprint, contact, ui }) => {
  return (
    <footer className="pt-12 pb-12 border-t border-slate-800/50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div>
          <h4 className="text-slate-100 font-bold mb-4">{ui.digitalFootprint}</h4>
          <ul className="space-y-3">
            {footprint.map((item, idx) => (
              <li key={idx}>
                <a href={item.url} className="group flex items-center gap-2 text-slate-400 hover:text-teal-400 transition-colors">
                  <span className="font-medium text-slate-200 group-hover:text-teal-400">{item.label}</span>
                  <span className="text-xs text-slate-600 group-hover:text-teal-500/70">— {item.desc}</span>
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex flex-col justify-start md:justify-end md:items-end">
          <p className="text-slate-400 text-sm max-w-xs md:text-right leading-relaxed mb-4">
            {ui.builtWith}
          </p>
          {contact.location && (
             <div className="flex items-center gap-2 text-slate-500 text-sm">
               <MapPin size={14} />
               {contact.location}
             </div>
          )}
        </div>
      </div>
      
      <div className="text-center text-slate-600 text-xs">
        © {new Date().getFullYear()} {contact.email.split('@')[0]}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;