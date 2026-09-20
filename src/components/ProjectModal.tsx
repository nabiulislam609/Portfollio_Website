import React from 'react';
import { PortfolioProject } from '../types';
import { X, CheckCircle2, TrendingUp, Calendar, Quote, ExternalLink } from 'lucide-react';

interface ProjectModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  onContactClick: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onContactClick }) => {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-zinc-800 bg-zinc-900/95 sticky top-0 z-10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-bold text-zinc-300 bg-zinc-950 border border-zinc-800 px-2.5 py-0.5 rounded-full uppercase">
                {project.category.toUpperCase()} CASE STUDY
              </span>
              {project.isSample && (
                <span className="text-[11px] font-medium text-zinc-400 bg-zinc-950 border border-zinc-800 px-2 py-0.5 rounded-full">
                  Sample Illustrative Model
                </span>
              )}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
          </div>
          
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          
          {/* 16:9 Mockup / Visual Image */}
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800 shadow-md">
            <img
              src={project.imageUrl}
              alt={`${project.title} mockup and analytics visuals`}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-zinc-300">
              <div className="bg-zinc-900/90 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-zinc-800">
                Client: <strong className="text-white">{project.client}</strong> ({project.industry})
              </div>
              <div className="bg-zinc-900/90 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-zinc-800 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                <span>{project.duration} Engagement</span>
              </div>
            </div>
          </div>

          {/* Results & Performance Metrics Grid (High Contrast) */}
          <div>
            <h4 className="text-sm font-bold text-zinc-300 uppercase tracking-wider mb-3 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-zinc-400" />
              Verified Results & Performance Metrics
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="bg-zinc-950 p-3.5 rounded-xl border border-zinc-800">
                  <div className="text-xl sm:text-2xl font-black text-white tracking-tight">
                    {metric.value}
                  </div>
                  <div className="text-xs font-semibold text-zinc-200 mt-0.5">{metric.label}</div>
                  <div className="text-[11px] text-zinc-400 mt-1 leading-tight">{metric.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Project Objective & Challenge */}
          <div className="bg-zinc-950 p-5 rounded-xl border border-zinc-800 space-y-2">
            <h4 className="text-xs font-bold text-zinc-300 uppercase tracking-wider">
              Project Objective & Problem Statement
            </h4>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {project.objective}
            </p>
          </div>

          {/* Services Provided */}
          <div>
            <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
              Services Delivered
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.servicesProvided.map((service, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-zinc-950 text-zinc-300 border border-zinc-800 text-xs font-medium"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Strategy Implemented (Step-by-Step) */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-zinc-400" />
              Strategic Implementation Blueprint
            </h4>
            <div className="space-y-2.5">
              {project.strategy.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-zinc-950 border border-zinc-800/80 text-xs sm:text-sm text-zinc-300">
                  <span className="w-6 h-6 rounded-full bg-zinc-800 text-zinc-300 flex items-center justify-center shrink-0 font-bold text-xs">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial Quote if available */}
          {project.testimonial && (
            <div className="p-5 rounded-xl bg-zinc-950 border border-zinc-800 relative">
              <Quote className="w-8 h-8 text-zinc-700 absolute top-4 right-4" />
              <p className="text-sm text-zinc-300 italic mb-3 relative z-10">
                "{project.testimonial.quote}"
              </p>
              <div className="text-xs">
                <span className="font-bold text-white block">{project.testimonial.author}</span>
                <span className="text-zinc-500">{project.testimonial.role}</span>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer CTA */}
        <div className="p-5 sm:p-6 border-t border-zinc-800 bg-zinc-900/95 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-zinc-400">
            Want similar growth metrics for your business?
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-zinc-300 hover:text-white bg-zinc-800 hover:bg-zinc-700 transition-colors cursor-pointer"
            >
              Close Window
            </button>
            <button
              onClick={() => {
                onClose();
                onContactClick(project.title);
              }}
              className="px-5 py-2 rounded-xl text-xs font-semibold bg-white hover:bg-zinc-200 text-zinc-950 shadow-sm transition-all cursor-pointer flex items-center gap-1.5"
            >
              <span>Request Strategy Session</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
