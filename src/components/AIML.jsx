import React, { useState } from 'react';
import { Brain, Binary, CheckCircle2, Network, Zap, Compass, Info, BookOpen } from 'lucide-react';
import { aimlData } from '../data/aiml';

const categoryIconMap = {
  Binary, Brain, CheckCircle2, Network, Zap, Compass
};

export const AIML = () => {
  const [activeTab, setActiveTab] = useState(aimlData.categories[0].id);

  const activeCategoryData = aimlData.categories.find(cat => cat.id === activeTab) || aimlData.categories[0];

  return (
    <section id="aiml" className="py-20 relative bg-dark-900/60 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-brand-purple text-xs font-mono mb-3">
            <Brain className="w-3.5 h-3.5" />
            <span>Specialized Domain Knowledge</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            AI & <span className="text-gradient-purple">Machine Learning</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mt-2 font-sans">
            Comprehensive study of mathematical foundations, machine learning algorithms, evaluation metrics, deep neural architectures, and optimization techniques.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-purple to-brand-cyan rounded-full mt-3" />
        </div>

        {/* Disclaimer / Academic Note Banner */}
        <div className="mb-10 max-w-4xl mx-auto p-4 rounded-2xl bg-dark-800/80 border border-brand-purple/30 flex items-start gap-3 text-xs sm:text-sm text-slate-300">
          <Info className="w-5 h-5 text-brand-purple shrink-0 mt-0.5" />
          <p className="leading-relaxed font-sans">
            <strong className="text-slate-100">Academic & Project Foundations Note:</strong> {aimlData.disclaimer}
          </p>
        </div>

        {/* Interactive Category Selector Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 mb-10">
          {aimlData.categories.map((category) => {
            const IconComponent = categoryIconMap[category.icon] || Brain;
            const isActive = activeTab === category.id;

            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-brand-purple to-brand-blue text-white font-semibold shadow-glow-purple scale-105'
                    : 'bg-dark-800/80 text-slate-400 border border-slate-800 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span>{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Detail Display */}
        <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/5 rounded-full blur-3xl pointer-events-none" />

          <div className="mb-8 pb-4 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-100 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-brand-purple" />
                {activeCategoryData.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 font-sans">
                {activeCategoryData.description}
              </p>
            </div>

            <span className="text-xs font-mono text-brand-cyan bg-brand-cyan/10 px-3 py-1 rounded-full border border-brand-cyan/20 self-start sm:self-auto">
              {activeCategoryData.subgroups.reduce((acc, sg) => acc + sg.items.length, 0)} Knowledge Areas
            </span>
          </div>

          {/* Subgroups Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeCategoryData.subgroups.map((group) => (
              <div
                key={group.name}
                className="p-5 rounded-xl bg-dark-900/90 border border-slate-800/90 hover:border-brand-purple/40 transition-colors"
              >
                <h4 className="text-sm font-bold text-slate-200 font-mono mb-3 text-gradient-cyan">
                  {group.name}
                </h4>

                <div className="space-y-2">
                  {group.items.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs font-sans text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-purple shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
