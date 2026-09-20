import React, { useState } from 'react';
import { TOOLS_EXPERTISE } from '../data/portfolioData';
import { ToolItem } from '../types';
import { 
  Target, 
  BarChart2, 
  Share2, 
  Search, 
  Palette, 
  TrendingUp, 
  Globe, 
  CheckCircle2, 
  Award,
  Sparkles,
  ShieldCheck
} from 'lucide-react';

export const ToolsExpertise: React.FC = () => {
  const [selectedToolId, setSelectedToolId] = useState<string>(TOOLS_EXPERTISE[0].id);

  const getToolIcon = (iconType: string) => {
    switch (iconType) {
      case 'target': return <Target className="w-6 h-6 text-blue-400" />;
      case 'bar-chart-2': return <BarChart2 className="w-6 h-6 text-amber-400" />;
      case 'share-2': return <Share2 className="w-6 h-6 text-indigo-400" />;
      case 'search': return <Search className="w-6 h-6 text-cyan-400" />;
      case 'palette': return <Palette className="w-6 h-6 text-pink-400" />;
      case 'trending-up': return <TrendingUp className="w-6 h-6 text-emerald-400" />;
      case 'globe': return <Globe className="w-6 h-6 text-sky-400" />;
      default: return <Sparkles className="w-6 h-6 text-cyan-400" />;
    }
  };

  const selectedTool = TOOLS_EXPERTISE.find(t => t.id === selectedToolId) || TOOLS_EXPERTISE[0];

  return (
    <section id="tools" className="py-20 bg-slate-900 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tech Stack & Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tools & Technical Expertise
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            Mastery of the industry's essential growth platforms. Only showing the battle-tested tools used daily to deliver client outcomes.
          </p>
        </div>

        {/* Tools Showcase: Grid of 7 Tools + Detail Drawer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: 7 Tools Interactive Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TOOLS_EXPERTISE.map((tool) => {
              const isSelected = tool.id === selectedToolId;
              return (
                <div
                  key={tool.id}
                  id={`tool-card-${tool.id}`}
                  onClick={() => setSelectedToolId(tool.id)}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-slate-950 border-cyan-500/80 shadow-lg shadow-cyan-950/40 ring-1 ring-cyan-500/30'
                      : 'bg-slate-950/70 border-slate-800 hover:border-slate-700 hover:bg-slate-950'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                        {getToolIcon(tool.iconType)}
                      </div>
                      <span className="text-[11px] font-bold text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                        {tool.yearsOfExperience}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white tracking-tight">
                      {tool.name}
                    </h3>
                    <div className="text-xs text-slate-400 mt-0.5">{tool.category}</div>
                  </div>

                  {/* Proficiency Meter */}
                  <div className="mt-4 pt-3 border-t border-slate-800/80">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-slate-400">Proficiency</span>
                      <span className="font-bold text-cyan-400">{tool.proficiency}%</span>
                    </div>
                    <div className="h-1.5 bg-slate-900 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full transition-all duration-500"
                        style={{ width: `${tool.proficiency}%` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Selected Tool Deep-Dive Inspector */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="bg-slate-950 rounded-2xl border border-slate-800 p-6 sm:p-7 shadow-2xl space-y-6">
              
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center">
                    {getToolIcon(selectedTool.iconType)}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">{selectedTool.name}</h4>
                    <div className="text-xs text-cyan-400 font-semibold">{selectedTool.category}</div>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs text-slate-400 block">Experience</span>
                  <span className="text-sm font-bold text-white">{selectedTool.yearsOfExperience}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {selectedTool.description}
              </p>

              {/* Certification Badge */}
              {selectedTool.certification && (
                <div className="p-3.5 rounded-xl bg-blue-950/30 border border-blue-800/40 flex items-center gap-3">
                  <Award className="w-5 h-5 text-cyan-400 shrink-0" />
                  <div className="text-xs">
                    <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider">
                      Verified Certification
                    </span>
                    <span className="text-white font-semibold">{selectedTool.certification}</span>
                  </div>
                </div>
              )}

              {/* Core Daily Workflows */}
              <div className="space-y-3 pt-2 border-t border-slate-800">
                <h5 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  Key Use Cases & Strategic Workflows
                </h5>
                <div className="space-y-2">
                  {selectedTool.keyUseCases.map((useCase, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-slate-900 border border-slate-800/80 text-xs text-slate-200 flex items-start gap-2">
                      <span className="text-cyan-400 font-bold">•</span>
                      <span>{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Integration statement */}
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-[11px] text-slate-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Synchronized with custom GA4 server-side reporting pipelines.</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
