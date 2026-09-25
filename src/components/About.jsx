import React from 'react';
import { User, Award, Code2, Briefcase, GraduationCap, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export const About = () => {
  return (
    <section id="about" className="py-20 relative bg-dark-900/60 border-y border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-mono mb-3">
            <User className="w-3.5 h-3.5" />
            <span>Background & Mindset</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            About <span className="text-gradient-cyan">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-cyan to-brand-purple rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Bio Card */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/5 rounded-full blur-2xl pointer-events-none" />
              
              <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base font-sans">
                <p>
                  I am a final-year Computer Engineering student at <strong className="text-slate-100 font-semibold">Marathwada Mitra Mandal's College of Engineering (MMCOE), Pune</strong>. I enjoy building software that combines clean user experiences, reliable backend systems, and intelligent technologies.
                </p>
                <p>
                  My primary development experience is in Full Stack Development using <span className="text-brand-cyan font-medium">React.js, Node.js, Express.js, and MongoDB</span>. Alongside software development, I have developed a strong foundation in Machine Learning and Deep Learning using <span className="text-brand-purple font-medium">Python, NumPy, Pandas, and Scikit-learn</span>.
                </p>
                <p>
                  Through academic, internship, and personal projects, I have worked on real-time communication systems, secure financial transaction processing, vulnerability monitoring, smart-city solutions, and machine learning applications.
                </p>
                <p className="text-slate-200 font-medium">
                  I am currently looking for opportunities where I can contribute to real-world software products, learn from experienced engineers, and continue growing as a Software Engineer.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Key Stats Area */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            
            {/* Stat 1: TE CGPA */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-brand-cyan/40 transition-all duration-300 group">
              <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-5 h-5 text-brand-cyan" />
              </div>
              <p className="text-3xl sm:text-4xl font-extrabold text-slate-100 font-mono">9.22</p>
              <p className="text-xs font-semibold text-slate-400 mt-1 uppercase tracking-wider">TE CGPA</p>
              <p className="text-[11px] text-slate-500 mt-0.5">FE 9.82 | SE 9.16 | TE 9.22</p>
            </div>

            {/* Stat 2: Major Projects */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-brand-purple/40 transition-all duration-300 group">
              <div className="w-10 h-10 rounded-xl bg-brand-purple/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Code2 className="w-5 h-5 text-brand-purple" />
              </div>
              <p className="text-3xl sm:text-4xl font-extrabold text-slate-100 font-mono">6+</p>
              <p className="text-xs font-semibold text-slate-400 mt-1 uppercase tracking-wider">Major Projects</p>
              <p className="text-[11px] text-slate-500 mt-0.5">Full Stack, AI/ML & Security</p>
            </div>

            {/* Stat 3: Internship */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-brand-blue/40 transition-all duration-300 group">
              <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Briefcase className="w-5 h-5 text-brand-blue" />
              </div>
              <p className="text-3xl sm:text-4xl font-extrabold text-slate-100 font-mono">2026</p>
              <p className="text-xs font-semibold text-slate-400 mt-1 uppercase tracking-wider">Web Dev Internship</p>
              <p className="text-[11px] text-slate-500 mt-0.5">The Developers Arena</p>
            </div>

            {/* Stat 4: Core Focus */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-brand-emerald/40 transition-all duration-300 group">
              <div className="w-10 h-10 rounded-xl bg-brand-emerald/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Sparkles className="w-5 h-5 text-brand-emerald" />
              </div>
              <p className="text-base sm:text-lg font-extrabold text-slate-100 leading-tight">Full Stack + AI/ML</p>
              <p className="text-xs font-semibold text-slate-400 mt-1 uppercase tracking-wider">Core Focus</p>
              <p className="text-[11px] text-slate-500 mt-0.5">Web Apps & ML Integration</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
