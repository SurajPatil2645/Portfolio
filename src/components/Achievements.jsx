import React from 'react';
import { Trophy, Star, Target, CheckCircle2 } from 'lucide-react';
import { achievementsData } from '../data/achievements';

export const Achievements = () => {
  return (
    <section id="achievements" className="py-20 relative bg-dark-900 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-mono mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors & Participation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Key <span className="text-gradient-cyan">Achievements</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-cyan to-brand-blue rounded-full mt-3" />
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {achievementsData.map((item, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-brand-cyan/40 transition-all duration-300 flex items-start gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-brand-cyan/20 to-brand-purple/20 border border-brand-cyan/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                {index === 0 ? (
                  <Trophy className="w-6 h-6 text-yellow-400" />
                ) : (
                  <Star className="w-6 h-6 text-brand-cyan" />
                )}
              </div>

              <div className="space-y-1">
                <span className="text-xs font-mono text-brand-cyan bg-brand-cyan/10 px-2.5 py-0.5 rounded-full border border-brand-cyan/20">
                  {item.category}
                </span>

                <h3 className="text-xl font-bold text-slate-100 group-hover:text-brand-cyan transition-colors pt-1">
                  {item.title}
                </h3>

                <p className="text-xs font-semibold text-slate-300 font-mono">
                  {item.event} — <span className="text-slate-400 font-normal">{item.organizer}</span>
                </p>

                <p className="text-xs sm:text-sm text-slate-400 font-sans pt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
