import React from 'react';
import { FileText, Download, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export const ResumeSection = () => {
  return (
    <section className="py-16 relative bg-dark-900/80 border-t border-slate-800/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative glass-card p-8 sm:p-12 rounded-3xl border border-slate-800 hover:border-brand-cyan/40 transition-all duration-300 overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8">
          
          {/* Background Decorative Blur */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />

          {/* Text Content */}
          <div className="space-y-3 max-w-xl z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-mono">
              <FileText className="w-3.5 h-3.5" />
              <span>Curriculum Vitae</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight">
              Want to know more about my work?
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
              Explore my resume to learn more about my technical experience, projects, education, and skills.
            </p>
          </div>

          {/* Download CTA Button */}
          <div className="z-10 shrink-0">
            <a
              href={personalInfo.resumePath}
              download="Suraj_Patil_Resume.pdf"
              className="group px-8 py-4 rounded-2xl font-bold text-sm bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple text-dark-900 shadow-glow-cyan hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-3"
            >
              <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
              <span>Download Resume</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
