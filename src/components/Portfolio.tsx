import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { PortfolioProject } from '../types';
import { 
  FolderKanban, 
  Plus, 
  Trash2, 
  ArrowUpRight
} from 'lucide-react';
import { MouseReflectionCard } from './effects/MouseReflectionCard';

interface PortfolioProps {
  onSelectProject: (project: PortfolioProject) => void;
  onOpenAddProject: () => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectProject, onOpenAddProject }) => {
  const { projects, deleteProject } = usePortfolio();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'seo', label: 'SEO & Organic' },
    { id: 'ads', label: 'Paid Advertising' },
    { id: 'social', label: 'Social Media' },
    { id: 'design', label: 'Graphic Design' },
    { id: 'local', label: 'Local Search' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 sm:py-24 bg-zinc-950 border-y border-zinc-800/80 text-zinc-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-semibold uppercase tracking-wider mb-2">
              <FolderKanban className="w-3.5 h-3.5 text-zinc-400" />
              <span>Project Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Case Studies.
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2 max-w-xl">
              Explore real-world client engagements with verified conversion lifts, search ranking gains, and ROAS improvements.
            </p>
          </div>

          <button
            onClick={onOpenAddProject}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 text-xs font-semibold transition-all shadow-sm self-start sm:self-auto cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Add Project</span>
          </button>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center justify-between gap-4 overflow-x-auto pb-4 mb-8">
          <div className="flex items-center gap-1.5 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-white text-zinc-950'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <span className="text-xs text-zinc-500 hidden sm:block whitespace-nowrap font-medium">
            Showing {filteredProjects.length} of {projects.length} Works
          </span>
        </div>

        {/* Projects Grid with Mouse Reflection */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <MouseReflectionCard
              key={project.id}
              className="bg-zinc-900/50 border-zinc-800 flex flex-col justify-between"
            >
              {/* 16:9 Aspect Ratio Image Frame */}
              <div 
                className="aspect-video relative overflow-hidden bg-zinc-950 cursor-pointer"
                onClick={() => onSelectProject(project)}
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/25 to-transparent" />

                {/* Category Pill Over Image */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className="px-2.5 py-1 rounded-md bg-zinc-900/90 backdrop-blur-md text-[10px] font-bold text-zinc-300 border border-zinc-700/60 uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                {/* Delete button if custom added */}
                {project.id.startsWith('proj-') && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteProject(project.id);
                    }}
                    className="absolute top-3 right-3 p-1.5 rounded-md bg-zinc-900/90 text-zinc-400 hover:text-rose-400 border border-zinc-700/60 transition-colors"
                    title="Delete Project"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                )}

                {/* Primary Metric Badge Over Bottom of Image */}
                {project.metrics && project.metrics[0] && (
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <div className="px-2.5 py-1 rounded-lg bg-zinc-900/95 backdrop-blur-md border border-zinc-800 text-xs flex items-center gap-1.5">
                      <span className="font-bold text-white">{project.metrics[0].value}</span>
                      <span className="text-[11px] text-zinc-400 truncate max-w-[130px]">{project.metrics[0].label}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Project Card Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="text-[11px] text-zinc-400 font-medium flex items-center justify-between">
                    <span>{project.client}</span>
                    <span>{project.industry}</span>
                  </div>

                  <h3 
                    onClick={() => onSelectProject(project)}
                    className="text-base font-bold text-white tracking-tight group-hover:text-zinc-200 transition-colors cursor-pointer line-clamp-1"
                  >
                    {project.title}
                  </h3>

                  <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                    {project.objective}
                  </p>
                </div>

                {/* Card Action Footer */}
                <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] text-zinc-400">
                    <span>{project.servicesProvided[0]}</span>
                    {project.servicesProvided[1] && (
                      <>
                        <span>•</span>
                        <span>{project.servicesProvided[1]}</span>
                      </>
                    )}
                  </div>

                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-300 hover:text-white transition-colors cursor-pointer"
                  >
                    <span>Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

            </MouseReflectionCard>
          ))}
        </div>

      </div>
    </section>
  );
};
