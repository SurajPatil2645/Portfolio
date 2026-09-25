import React, { useState } from 'react';
import { FolderGit2 } from 'lucide-react';
import { projectsData } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filterCategories = ['All', 'Full Stack', 'Backend', 'AI/ML', 'Automation', 'Real-Time'];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(project => project.category.includes(activeCategory));

  return (
    <section id="projects" className="py-20 relative bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-mono mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Hands-On Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Featured <span className="text-gradient-cyan">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mt-2 font-sans">
            Real-world full-stack platforms, secure banking backends, automated threat scrapers, and supervised/unsupervised machine learning systems.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-cyan to-brand-purple rounded-full mt-3" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {filterCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-brand-cyan to-brand-blue text-dark-900 font-semibold shadow-glow-cyan'
                  : 'bg-dark-800/80 text-slate-400 border border-slate-800 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={setSelectedProject}
            />
          ))}
        </div>

        {/* Project Details Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

      </div>
    </section>
  );
};
