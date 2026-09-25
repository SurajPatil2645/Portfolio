import React from 'react';
import { Briefcase, Calendar, MapPin, Building2, CheckCircle2 } from 'lucide-react';
import { experienceData } from '../data/experience';

export const Experience = () => {
  return (
    <section id="experience" className="py-20 relative bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-brand-purple text-xs font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Work <span className="text-gradient-purple">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-purple to-brand-cyan rounded-full mt-3" />
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Timeline Line */}
          <div className="hidden sm:block absolute left-8 top-0 bottom-0 w-0.5 bg-slate-800" />

          <div className="space-y-8">
            {experienceData.map((exp) => (
              <div key={exp.id} className="relative sm:pl-20">
                
                {/* Timeline Icon Node */}
                <div className="hidden sm:flex absolute left-4 top-1 -translate-x-1/2 w-9 h-9 rounded-full bg-dark-900 border-2 border-brand-purple text-brand-purple items-center justify-center shadow-glow-purple">
                  <Briefcase className="w-4 h-4" />
                </div>

                {/* Experience Card */}
                <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 hover:border-brand-purple/40 transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-brand-purple/5 rounded-full blur-3xl pointer-events-none" />

                  {/* Header Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-slate-800/80">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-100 group-hover:text-brand-purple transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-slate-300 font-medium mt-1">
                        <Building2 className="w-4 h-4 text-brand-cyan" />
                        <span>{exp.company}</span>
                        <span className="text-slate-600">•</span>
                        <span className="text-xs px-2.5 py-0.5 rounded-full bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-dark-900/80 px-3 py-1.5 rounded-lg border border-slate-800 self-start sm:self-center">
                      <Calendar className="w-3.5 h-3.5 text-brand-purple" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Description Paragraph */}
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-sans">
                    "{exp.description}"
                  </p>

                  {/* Highlight Bullet Points */}
                  <div className="space-y-2 mb-6">
                    {exp.bulletPoints.map((point, index) => (
                      <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies Badges */}
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                      Technologies & Tools Used
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-md text-xs font-mono bg-slate-800/80 text-slate-200 border border-slate-700/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
