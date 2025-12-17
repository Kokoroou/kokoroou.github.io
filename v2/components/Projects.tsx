import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Folder } from 'lucide-react';
import { Project, CVContent } from '../types';

const ProjectCard: React.FC<{ project: Project, ui: CVContent['ui'] }> = ({ project, ui }) => {
  const [isOpen, setIsOpen] = useState(project.isOpenDefault || false);

  return (
    <div className={`border rounded-lg transition-all duration-300 ${isOpen ? 'bg-slate-900/40 border-slate-700 shadow-lg' : 'bg-transparent border-slate-800 hover:border-slate-600'}`}>
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="p-5 cursor-pointer flex flex-col md:flex-row justify-between md:items-center gap-4 group"
      >
        <div className="flex items-start gap-4">
          <div className={`p-2 rounded mt-1 transition-colors ${isOpen ? 'bg-teal-500/10 text-teal-400' : 'bg-slate-800 text-slate-400 group-hover:text-slate-200'}`}>
            <Folder size={20} />
          </div>
          <div>
            <h4 className="text-lg font-bold text-slate-200 group-hover:text-teal-400 transition-colors">
              {project.title}
            </h4>
            <p className="text-sm text-slate-500 mt-1">
              <span className="text-slate-300 font-medium">{project.role}</span> • {project.context}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden md:flex gap-2">
            {project.techStack.slice(0, 3).map((tech) => (
              <span key={tech} className="text-xs px-2 py-1 bg-slate-800 rounded text-slate-400 font-mono">
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="text-xs px-2 py-1 text-slate-500">+{project.techStack.length - 3}</span>
            )}
          </div>
          <div className="text-slate-500">
            {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="px-5 pb-6 pt-0 border-t border-slate-800/50 mt-2">
          <div className="flex flex-wrap gap-2 mt-4 mb-6 md:hidden">
            {project.techStack.map((tech) => (
              <span key={tech} className="text-xs px-2 py-1 bg-slate-800 rounded text-slate-400 font-mono">
                {tech}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h5 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">{ui.responsibilities}</h5>
              <ul className="space-y-2">
                {project.responsibilities.map((item, idx) => (
                  <li key={idx} className="text-slate-300 text-sm leading-relaxed flex items-start gap-2">
                    <span className="text-teal-500 mt-1.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-sm font-semibold text-teal-500 uppercase tracking-wider mb-3">{ui.outcome}</h5>
              <p className="text-slate-200 text-sm font-medium leading-relaxed bg-teal-500/5 border border-teal-500/20 p-4 rounded">
                {project.outcome}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

interface ProjectsProps {
  data: Project[];
  ui: CVContent['ui'];
}

const Projects: React.FC<ProjectsProps> = ({ data, ui }) => {
  return (
    <section id="projects" className="mb-16">
      <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6 border-b border-slate-800 pb-2">
        {ui.majorProjects}
      </h3>
      <div className="flex flex-col gap-4">
        {data.map((project) => (
          <ProjectCard key={project.id} project={project} ui={ui} />
        ))}
      </div>
    </section>
  );
};

export default Projects;