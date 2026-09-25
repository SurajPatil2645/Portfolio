import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle2, TrendingUp } from 'lucide-react';
import { educationData } from '../data/education';

export const Education = () => {
  const edu = educationData[0];

  return (
    <section id="education" className="py-20 relative bg-dark-900 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-mono mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Education & <span className="text-gradient-cyan">Academics</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-cyan to-brand-purple rounded-full mt-3" />
        </div>

        {/* Main Education Card */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-6 sm:p-10 rounded-2xl border border-slate-800 hover:border-brand-cyan/40 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />

            {/* Header Information */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-1.5 text-xs font-mono text-brand-cyan bg-brand-cyan/10 px-2.5 py-0.5 rounded-full border border-brand-cyan/20 mb-1">
                  <TrendingUp className="w-3 h-3" /> Consistent High Distinction
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-100">
                  {edu.degree}
                </h3>
                <p className="text-base text-slate-300 font-semibold">
                  {edu.institution}
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 font-sans">
                  <span>{edu.university}</span>
                  <span className="text-slate-600">•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" /> {edu.city}
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:items-end gap-2 shrink-0">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-300 bg-dark-900 px-3.5 py-1.5 rounded-lg border border-slate-800">
                  <Calendar className="w-3.5 h-3.5 text-brand-cyan" />
                  <span>{edu.period}</span>
                </div>
                <span className="text-xs text-slate-400 font-mono">
                  Current: {edu.status}
                </span>
              </div>
            </div>

            {/* Academic Performance Matrix */}
            <div className="pt-8">
              <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider font-mono mb-4 flex items-center gap-2">
                <Award className="w-4 h-4 text-brand-purple" /> CGPA & SGPA Score Breakdown
              </h4>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {edu.details.map((item) => (
                  <div
                    key={item.year}
                    className="p-4 rounded-xl bg-dark-900/90 border border-slate-800/90 hover:border-brand-cyan/30 transition-colors text-center space-y-1"
                  >
                    <span className="text-[11px] font-mono text-slate-400 block font-medium">
                      {item.year}
                    </span>
                    <p className="text-xl font-bold text-brand-cyan font-mono">
                      {item.score}
                    </p>
                    <span className="text-[10px] text-slate-500 block line-clamp-1">
                      {item.highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
