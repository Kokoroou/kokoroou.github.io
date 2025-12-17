import React from 'react';
import { Activity, Layers, Server } from 'lucide-react';
import { SnapshotData, CVContent } from '../types';

interface Props {
  data: SnapshotData;
  ui: CVContent['ui'];
}

const Snapshot: React.FC<Props> = ({ data, ui }) => {
  return (
    <section className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-slate-900/50 border border-slate-800 p-5 rounded-lg">
        <div className="flex items-center gap-2 text-slate-400 mb-2 text-sm uppercase tracking-wider font-semibold">
          <Activity size={16} /> {ui.level}
        </div>
        <div className="text-slate-100 font-medium">{data.level}</div>
      </div>
      <div className="bg-slate-900/50 border border-slate-800 p-5 rounded-lg">
        <div className="flex items-center gap-2 text-slate-400 mb-2 text-sm uppercase tracking-wider font-semibold">
          <Layers size={16} /> {ui.focus}
        </div>
        <div className="text-slate-100 font-medium">{data.focus}</div>
      </div>
      <div className="bg-slate-900/50 border border-slate-800 p-5 rounded-lg">
        <div className="flex items-center gap-2 text-slate-400 mb-2 text-sm uppercase tracking-wider font-semibold">
          <Server size={16} /> {ui.environment}
        </div>
        <div className="text-slate-100 font-medium">{data.environment}</div>
      </div>
    </section>
  );
};

export default Snapshot;