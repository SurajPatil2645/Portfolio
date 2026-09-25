import React from 'react';
import { Award, Calendar, CheckCircle2, ShieldCheck } from 'lucide-react';
import { certificationsData } from '../data/certifications';

export const Certifications = () => {
  return (
    <section id="certifications" className="py-20 relative bg-dark-900/60 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-brand-purple text-xs font-mono mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Learning</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Certifications & <span className="text-gradient-purple">Credentials</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-purple to-brand-cyan rounded-full mt-3" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certificationsData.map((cert) => (
            <div
              key={cert.title}
              className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-brand-purple/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-mono font-medium border bg-gradient-to-r ${cert.badgeColor}`}>
                    {cert.issuer}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-dark-900 px-2.5 py-1 rounded-md border border-slate-800">
                    <Calendar className="w-3 h-3 text-brand-purple" /> {cert.year}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-100 group-hover:text-brand-purple transition-colors">
                  {cert.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {cert.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <ShieldCheck className="w-4 h-4" /> Course Verified
                </span>
                <span className="text-slate-500">Official Certification</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
