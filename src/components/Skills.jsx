import React, { useState } from 'react';
import { 
  Code2, Terminal, Cpu, Atom, Layout, Palette, Wand2, Layers, Zap, 
  Server, Workflow, Globe, MessageSquare, Lock, Database, FileCode2, Table, 
  Binary, BarChart3, Brain, Sparkles, Network, GitBranch, Github, Code, Send, 
  Cloud, Bot, FileSpreadsheet, CloudSun, Image, Mail, ShieldCheck, Check
} from 'lucide-react';
import { skillsData } from '../data/skills';

// Map icon strings to Lucide components safely
const iconMap = {
  Code2, Terminal, Cpu, Atom, Layout, Palette, Wand2, Layers, Zap, 
  Server, Workflow, Globe, MessageSquare, Lock, Database, FileCode2, Table, 
  Binary, BarChart3, Brain, Sparkles, Network, GitBranch, Github, Code, Send, 
  Cloud, Bot, FileSpreadsheet, CloudSun, Image, Mail, ShieldCheck
};

export const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...skillsData.map((group) => group.category)];

  const filteredGroups = selectedCategory === 'All'
    ? skillsData
    : skillsData.filter((group) => group.category === selectedCategory);

  return (
    <section id="skills" className="py-20 relative bg-dark-900/60 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Full Stack & <span className="text-gradient-cyan">Technical Skills</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mt-2 font-sans">
            Hands-on experience with modern frontend, backend, database systems, AI/ML tools, and cloud developer services.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-cyan to-brand-blue rounded-full mt-3" />
        </div>

        {/* Filter Bar */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-brand-cyan to-brand-blue text-dark-900 font-semibold shadow-glow-cyan'
                  : 'bg-dark-800/80 text-slate-400 border border-slate-800 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.map((group) => (
            <div
              key={group.category}
              className="glass-card p-6 rounded-2xl border border-slate-800/80 hover:border-brand-cyan/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-cyan" />
                    {group.category}
                  </h3>
                  <span className="text-[11px] font-mono text-slate-400 bg-slate-800/60 px-2 py-0.5 rounded-full border border-slate-700/60">
                    {group.skills.length} skills
                  </span>
                </div>
                <p className="text-xs text-slate-400 mb-5 font-sans leading-relaxed">
                  {group.description}
                </p>

                {/* Badges Container */}
                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => {
                    const IconComponent = iconMap[skill.icon] || Code;
                    return (
                      <div
                        key={skill.name}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border bg-gradient-to-r ${skill.color} text-xs font-medium shadow-sm hover:scale-105 transition-transform duration-200 cursor-default`}
                      >
                        <IconComponent className="w-3.5 h-3.5 shrink-0" />
                        <span>{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
