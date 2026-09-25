import React from 'react';
import { ArrowRight, Github, Linkedin, Mail, Code, Terminal, Sparkles, Database, Cpu, Layers } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Decorative Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-brand-cyan/15 via-brand-purple/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Grid Pattern Background overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/60 text-xs font-mono text-slate-300 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse" />
              <span>Final-Year BE Computer Engineering @ MMCOE</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight leading-[1.15]">
                Hi, I'm <span className="text-gradient-cyan">Suraj Patil</span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-300 font-mono tracking-tight flex flex-wrap items-center gap-2">
                <span className="text-brand-cyan">Software Engineer</span>
                <span className="text-slate-600">|</span>
                <span className="text-slate-200">Full Stack Developer</span>
                <span className="text-slate-600">|</span>
                <span className="text-brand-purple">AI/ML Enthusiast</span>
              </h2>
            </div>

            {/* Short Intro */}
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl font-sans">
              {personalInfo.shortIntro}
            </p>

            {/* CTA Buttons & Social Links */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="group px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-brand-cyan to-brand-blue text-dark-900 shadow-glow-cyan hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center gap-2"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-xl font-semibold text-sm bg-dark-800 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-500 transition-all duration-200"
              >
                Let's Connect
              </a>

              {/* Divider */}
              <div className="hidden sm:block w-px h-8 bg-slate-800 mx-1" />

              {/* Social Icons */}
              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-dark-800/80 border border-slate-800 text-slate-400 hover:text-brand-cyan hover:border-brand-cyan/40 hover:bg-slate-800/80 transition-all duration-200"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>

                <a
                  href={personalInfo.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-dark-800/80 border border-slate-800 text-slate-400 hover:text-brand-cyan hover:border-brand-cyan/40 hover:bg-slate-800/80 transition-all duration-200"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                <a
                  href={`mailto:${personalInfo.contact.email}`}
                  className="p-3 rounded-xl bg-dark-800/80 border border-slate-800 text-slate-400 hover:text-brand-cyan hover:border-brand-cyan/40 hover:bg-slate-800/80 transition-all duration-200"
                  aria-label="Send Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Specs Bar */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-800/80 max-w-lg">
              <div>
                <p className="text-2xl font-bold text-slate-100 font-mono">9.22</p>
                <p className="text-xs text-slate-400">TE CGPA</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-100 font-mono">6+</p>
                <p className="text-xs text-slate-400">Major Projects</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-100 font-mono">Pune</p>
                <p className="text-xs text-slate-400">Location, India</p>
              </div>
            </div>
          </div>

          {/* Right Column: Developer Code & AI Visualization Terminal */}
          <div className="lg:col-span-5 relative">
            
            {/* Glowing Backdrop */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-brand-cyan/30 via-brand-purple/20 to-brand-blue/30 blur-xl opacity-75 group-hover:opacity-100 transition duration-1000" />
            
            {/* Terminal Window Card */}
            <div className="relative rounded-2xl bg-dark-800/90 border border-slate-700/80 shadow-2xl overflow-hidden font-mono text-xs text-slate-300">
              
              {/* Terminal Top Bar */}
              <div className="px-4 py-3 bg-dark-900/90 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-[11px] text-slate-400 font-medium">developer.profile.ts</span>
                <Terminal className="w-4 h-4 text-slate-500" />
              </div>

              {/* Terminal Body */}
              <div className="p-5 space-y-3 leading-relaxed">
                <div className="text-slate-500">
                  <span className="text-brand-purple">// Suraj Patil Developer Stack Overview</span>
                </div>
                
                <div>
                  <span className="text-purple-400">const</span> <span className="text-blue-400">engineer</span> = &#123;
                </div>

                <div className="pl-4 space-y-1">
                  <div>
                    <span className="text-slate-400">name:</span> <span className="text-emerald-400">"Suraj Patil"</span>,
                  </div>
                  <div>
                    <span className="text-slate-400">education:</span> <span className="text-emerald-400">"BE Computer Engineering"</span>,
                  </div>
                  <div>
                    <span className="text-slate-400">cgpaTE:</span> <span className="text-amber-400">9.22</span>,
                  </div>
                  <div>
                    <span className="text-slate-400">stack:</span> [
                  </div>
                  <div className="pl-4 text-cyan-300">
                    "React.js", "Node.js", "Express", "MongoDB", "Python", "Scikit-Learn", "Socket.IO"
                  </div>
                  <div>
                    ],
                  </div>
                  <div>
                    <span className="text-slate-400">focus:</span> <span className="text-emerald-400">"Full Stack + AI/ML Integration"</span>,
                  </div>
                  <div>
                    <span className="text-slate-400">status:</span> <span className="text-emerald-400">"Ready for SWE Opportunities"</span>
                  </div>
                </div>

                <div>
                  &#125;;
                </div>

                <div className="pt-2 border-t border-slate-800/80 text-slate-400 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <Sparkles className="w-3.5 h-3.5" /> Ready for real-world software engineering
                  </span>
                  <span className="text-[10px] text-slate-500">UTF-8</span>
                </div>
              </div>
            </div>

            {/* Floating Tech Badges around Terminal */}
            <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-dark-800/90 border border-slate-700/80 px-3 py-2 rounded-xl shadow-lg items-center gap-2 backdrop-blur-md">
              <Code className="w-4 h-4 text-brand-cyan" />
              <span className="text-xs font-semibold text-slate-200">React 19 & Node.js</span>
            </div>

            <div className="hidden sm:flex absolute -top-5 -right-5 bg-dark-800/90 border border-slate-700/80 px-3 py-2 rounded-xl shadow-lg items-center gap-2 backdrop-blur-md">
              <Cpu className="w-4 h-4 text-brand-purple" />
              <span className="text-xs font-semibold text-slate-200">Scikit-Learn & Py ML</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
