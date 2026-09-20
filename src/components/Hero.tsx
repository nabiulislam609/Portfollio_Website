import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Plus, Edit3, ArrowRight } from 'lucide-react';
import { MouseReflectionCard } from './effects/MouseReflectionCard';

interface HeroProps {
  onOpenAddProject: () => void;
  onOpenEditProfile: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAddProject, onOpenEditProfile }) => {
  const { profile, projects } = usePortfolio();

  return (
    <section id="hero" className="pt-32 pb-20 sm:pt-40 sm:pb-28 relative overflow-hidden bg-zinc-950 text-zinc-100">
      {/* Subtle ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Minimal Typography & Intro */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Minimal Status Badge */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-300">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-400"></span>
                <span>Available for Select Client Projects</span>
              </div>

              <button
                onClick={onOpenEditProfile}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs text-zinc-400 hover:text-white transition-colors"
                title="Edit Headline & Bio"
              >
                <Edit3 className="w-3 h-3" />
                <span>Edit Profile</span>
              </button>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                {profile.tagline}
              </h1>
              <p className="text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed">
                {profile.subheadline}
              </p>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#portfolio"
                className="px-5 py-2.5 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 font-semibold text-xs tracking-wide shadow-sm transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>View Portfolio ({projects.length} Works)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#contact"
                className="px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-800 text-xs font-medium transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>Contact Me</span>
              </a>

              <button
                onClick={onOpenAddProject}
                className="px-4 py-2.5 rounded-xl bg-zinc-900/60 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-750 hover:border-zinc-500 text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Project</span>
              </button>
            </div>

            {/* Minimal Metric Strips */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-zinc-850/80 max-w-lg">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {profile.experienceYears}
                </div>
                <div className="text-[11px] text-zinc-500 font-medium mt-0.5">Industry Experience</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-zinc-200 tracking-tight">
                  {profile.adSpendManaged}
                </div>
                <div className="text-[11px] text-zinc-500 font-medium mt-0.5">Media Spend Managed</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-zinc-100 tracking-tight">
                  {profile.avgRoas}
                </div>
                <div className="text-[11px] text-zinc-500 font-medium mt-0.5">Average Client ROAS</div>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Minimal Showcase Card with Mouse Reflection */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              <MouseReflectionCard className="p-2.5 bg-zinc-900/80 border-zinc-800/90 shadow-2xl">
                <div className="aspect-[4/3] rounded-xl overflow-hidden relative bg-zinc-950">
                  <img
                    src={profile.photoUrl}
                    alt={`${profile.name} - Digital Marketer & Growth Strategist`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/25 to-transparent" />
                  
                  {/* Floating Tag */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between p-3 rounded-xl bg-zinc-900/95 backdrop-blur-md border border-zinc-800">
                    <div>
                      <div className="text-xs font-bold text-white tracking-tight">{profile.name}</div>
                      <div className="text-[11px] text-zinc-400">{profile.title}</div>
                    </div>
                    <span className="text-[10px] bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded border border-zinc-700 font-medium">
                      {profile.location.split('/')[0].trim()}
                    </span>
                  </div>
                </div>

                {/* Quick Capabilities */}
                <div className="p-3 pt-4 flex items-center justify-between text-[11px] text-zinc-400">
                  <span>SEO • Paid Media • Analytics</span>
                  <a href="#about" className="text-zinc-300 hover:text-white flex items-center gap-1 font-medium transition-colors">
                    Read Bio →
                  </a>
                </div>
              </MouseReflectionCard>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
