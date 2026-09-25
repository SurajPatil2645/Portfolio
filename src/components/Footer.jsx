import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Code2 } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-900 border-t border-slate-800/80 py-10 text-xs text-slate-400 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand Copyright */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-md bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan">
            <Code2 className="w-4 h-4" />
          </div>
          <div>
            <p className="text-slate-300 font-medium">
              © 2026 Suraj Patil. Built with React.
            </p>
            <p className="text-[11px] text-slate-500 font-mono">
              Full Stack Developer & AI/ML Enthusiast • Pune, India
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a
            href={personalInfo.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-slate-400 hover:text-brand-cyan transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          <span className="text-slate-700">•</span>

          <a
            href={personalInfo.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-slate-400 hover:text-brand-cyan transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>

          <span className="text-slate-700">•</span>

          <a
            href={`mailto:${personalInfo.contact.email}`}
            className="flex items-center gap-1.5 text-slate-400 hover:text-brand-cyan transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>Email</span>
          </a>
        </div>

        {/* Back To Top Button */}
        <button
          onClick={scrollToTop}
          className="p-2.5 rounded-xl bg-dark-800 border border-slate-800 text-slate-400 hover:text-brand-cyan hover:border-brand-cyan/30 transition-all flex items-center gap-1.5 font-mono text-[11px]"
          title="Back to Top"
        >
          <span>Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
};
