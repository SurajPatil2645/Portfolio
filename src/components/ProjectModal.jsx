import React, { useEffect } from 'react';
import { X, Github, ExternalLink, CheckCircle2, Cpu, AlertCircle, Lightbulb, Workflow, GraduationCap } from 'lucide-react';

export const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-dark-900/80 backdrop-blur-md animate-fadeIn">
      {/* Backdrop Click */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-dark-800 border border-slate-700/80 rounded-2xl shadow-2xl overflow-y-auto z-10 p-6 sm:p-8 space-y-6">
        
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-dark-900 text-slate-400 hover:text-slate-100 hover:bg-slate-700 border border-slate-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-3 pr-10">
          <div className="flex flex-wrap items-center gap-2">
            {project.category.map((cat) => (
              <span key={cat} className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/30">
                {cat}
              </span>
            ))}
            <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-brand-purple/20 text-brand-purple border border-brand-purple/30">
              {project.subtitle}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
            {project.name}
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
            {project.description}
          </p>
        </div>

        {/* Problem & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl bg-dark-900/90 border border-slate-800 space-y-2">
            <h4 className="text-xs font-bold text-red-400 uppercase tracking-wider flex items-center gap-1.5 font-mono">
              <AlertCircle className="w-4 h-4" /> Problem Statement
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              {project.problem}
            </p>
          </div>

          <div className="p-5 rounded-xl bg-dark-900/90 border border-slate-800 space-y-2">
            <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5 font-mono">
              <Lightbulb className="w-4 h-4" /> Solution Overview
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Key Features List */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider font-mono flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-brand-cyan" /> Key Features & Functionality
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-dark-900/60 border border-slate-800/80 text-xs sm:text-sm text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan mt-2 shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture & Approach */}
        <div className="p-5 rounded-xl bg-dark-900/90 border border-slate-800 space-y-2">
          <h3 className="text-xs font-bold text-brand-cyan uppercase tracking-wider font-mono flex items-center gap-2">
            <Workflow className="w-4 h-4" /> Architecture & Technical Approach
          </h3>
          <p className="text-xs sm:text-sm font-mono text-slate-300 leading-relaxed bg-dark-900 p-3 rounded-lg border border-slate-800/80">
            {project.architecture}
          </p>
        </div>

        {/* Technology Stack Detailed Breakdown */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider font-mono flex items-center gap-2">
            <Cpu className="w-4 h-4 text-brand-purple" /> Complete Technology Stack
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {Object.entries(project.technologies).map(([layer, techList]) => (
              <div key={layer} className="p-4 rounded-xl bg-dark-900/60 border border-slate-800/80 space-y-2">
                <span className="text-[11px] font-mono text-brand-cyan capitalize font-bold tracking-wider">
                  {layer.replace(/([AZ])/g, ' $1')}
                </span>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {techList.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-dark-800 text-slate-200 border border-slate-700/60">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Engineering Learning */}
        <div className="p-5 rounded-xl bg-brand-purple/10 border border-brand-purple/20 space-y-2">
          <h3 className="text-xs font-bold text-brand-purple uppercase tracking-wider font-mono flex items-center gap-2">
            <GraduationCap className="w-4 h-4" /> Key Engineering Learning
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
            {project.keyLearning}
          </p>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-dark-900 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors"
          >
            Close
          </button>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-dark-900 hover:bg-slate-700 text-slate-100 border border-slate-600 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>View GitHub</span>
            </a>
          )}

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-brand-cyan to-brand-blue text-dark-900 shadow-glow-cyan transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          )}
        </div>

      </div>
    </div>
  );
};
