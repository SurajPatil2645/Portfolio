import React from 'react';
import { ExternalLink, Github, Info, Layers, Sparkles } from 'lucide-react';

export const ProjectCard = ({ project, onOpenDetails }) => {
  return (
    <div className="glass-card rounded-2xl border border-slate-800/90 hover:border-brand-cyan/40 transition-all duration-300 flex flex-col justify-between overflow-hidden group">
      
      {/* Top Banner Accent */}
      <div className="p-6 relative space-y-4">
        
        {/* Header Tags */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-1.5">
            {project.category.map((cat) => (
              <span
                key={cat}
                className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20"
              >
                {cat}
              </span>
            ))}
          </div>

          {project.isFeatured && (
            <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-brand-purple/20 text-brand-purple border border-brand-purple/30">
              <Sparkles className="w-3 h-3" /> Featured
            </span>
          )}
        </div>

        {/* Project Title & Subtitle */}
        <div>
          <h3 className="text-xl font-bold text-slate-100 group-hover:text-brand-cyan transition-colors leading-snug">
            {project.name}
          </h3>
          <p className="text-xs text-brand-accent font-mono mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Short Description */}
        <p className="text-slate-300 text-sm font-sans line-clamp-3 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack Badges */}
        <div className="pt-2">
          <div className="flex flex-wrap gap-1.5">
            {project.techBadgeList.slice(0, 6).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-dark-900/80 text-slate-300 border border-slate-800"
              >
                {tech}
              </span>
            ))}
            {project.techBadgeList.length > 6 && (
              <span className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-800/40 text-slate-400">
                +{project.techBadgeList.length - 6} more
              </span>
            )}
          </div>
        </div>

      </div>

      {/* Bottom Action Footer */}
      <div className="p-4 bg-dark-900/70 border-t border-slate-800/80 flex items-center justify-between gap-2">
        <button
          onClick={() => onOpenDetails(project)}
          className="flex-1 py-2 px-3 rounded-lg text-xs font-semibold bg-brand-cyan/10 hover:bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/30 flex items-center justify-center gap-1.5 transition-colors"
        >
          <Info className="w-3.5 h-3.5" />
          <span>View Details</span>
        </button>

        <div className="flex items-center gap-2">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-dark-800 text-slate-300 hover:text-white hover:bg-slate-700 border border-slate-700 transition-colors"
              title="View GitHub Repository"
              aria-label="GitHub Repository"
            >
              <Github className="w-4 h-4" />
            </a>
          ) : (
            <button
              disabled
              className="p-2 rounded-lg bg-dark-900 text-slate-600 border border-slate-800 opacity-50 cursor-not-allowed"
              title="Repository link configured in codebase"
            >
              <Github className="w-4 h-4" />
            </button>
          )}

          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-brand-cyan/20 text-brand-cyan hover:bg-brand-cyan/30 border border-brand-cyan/30 transition-colors"
              title="Live Demo"
              aria-label="Live Demo"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          ) : null}
        </div>
      </div>

    </div>
  );
};
