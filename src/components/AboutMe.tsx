import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { User, Edit3, Award, Target, TrendingUp, Mail, MapPin } from 'lucide-react';
import { MouseReflectionCard } from './effects/MouseReflectionCard';

interface AboutMeProps {
  onOpenEditProfile: () => void;
}

export const AboutMe: React.FC<AboutMeProps> = ({ onOpenEditProfile }) => {
  const { profile } = usePortfolio();

  return (
    <section id="about" className="py-20 sm:py-24 bg-zinc-950 border-y border-zinc-800/80 text-zinc-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-semibold uppercase tracking-wider mb-2">
              <User className="w-3.5 h-3.5 text-zinc-400" />
              <span>About Me</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Driven by Data, Crafted for Growth.
            </h2>
          </div>

          <button
            onClick={onOpenEditProfile}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 text-xs font-semibold transition-colors self-start sm:self-auto cursor-pointer"
          >
            <Edit3 className="w-3.5 h-3.5 text-zinc-400" />
            <span>Edit About Me</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Portrait & Quick Meta */}
          <div className="lg:col-span-4 space-y-4">
            <MouseReflectionCard className="p-4 space-y-4 bg-zinc-900/60 border-zinc-800">
              <div className="aspect-square rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800">
                <img
                  src={profile.photoUrl}
                  alt={profile.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">{profile.name}</h3>
                <p className="text-xs text-zinc-400 font-medium">{profile.title}</p>
              </div>

              <div className="space-y-2 pt-2 border-t border-zinc-800 text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                  <span>{profile.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-zinc-500" />
                  <a href={`mailto:${profile.email}`} className="text-zinc-300 hover:text-white truncate transition-colors">
                    {profile.email}
                  </a>
                </div>
              </div>
            </MouseReflectionCard>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-2.5">
              <div className="bg-zinc-900/50 p-3.5 rounded-xl border border-zinc-800 text-center">
                <div className="text-[11px] text-zinc-500 font-medium">Experience</div>
                <div className="text-base font-bold text-white mt-0.5">{profile.experienceYears}</div>
              </div>
              <div className="bg-zinc-900/50 p-3.5 rounded-xl border border-zinc-800 text-center">
                <div className="text-[11px] text-zinc-500 font-medium">Avg Client ROAS</div>
                <div className="text-base font-bold text-zinc-100 mt-0.5">{profile.avgRoas}</div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio, Philosophy & Focus */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Bio Card */}
            <MouseReflectionCard className="p-6 sm:p-7 bg-zinc-900/60 border-zinc-800 space-y-4">
              <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                Biography & Marketing Philosophy
              </h4>
              <p className="text-sm sm:text-base text-zinc-200 leading-relaxed font-light">
                {profile.bio}
              </p>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Over the past 6+ years, I have engineered multi-channel marketing engines for high-growth brands and service businesses. My approach blends rigorous analytical experimentation with compelling creative storytelling to capture high-intent audiences and maximize return on ad spend.
              </p>
            </MouseReflectionCard>

            {/* Core Competencies Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <MouseReflectionCard className="p-4 bg-zinc-900/40 border-zinc-800 space-y-2">
                <TrendingUp className="w-4 h-4 text-zinc-300" />
                <div className="font-bold text-white text-xs">Search Engine Optimization</div>
                <p className="text-[11px] text-zinc-400 leading-relaxed">
                  Technical site architecture, high-intent keyword mapping, and local Google Map pack dominance.
                </p>
              </MouseReflectionCard>

              <MouseReflectionCard className="p-4 bg-zinc-900/40 border-zinc-800 space-y-2">
                <Target className="w-4 h-4 text-zinc-300" />
                <div className="font-bold text-white text-xs">Performance Paid Ads</div>
                <p className="text-[11px] text-zinc-400 leading-relaxed">
                  Google Search & Performance Max, Meta Ads funnel scaling, and granular audience retargeting.
                </p>
              </MouseReflectionCard>

              <MouseReflectionCard className="p-4 bg-zinc-900/40 border-zinc-800 space-y-2">
                <Award className="w-4 h-4 text-zinc-300" />
                <div className="font-bold text-white text-xs">Social Growth & Creative</div>
                <p className="text-[11px] text-zinc-400 leading-relaxed">
                  Content planning, high-converting ad creative in Canva, and organic community engagement.
                </p>
              </MouseReflectionCard>
            </div>

            {/* Action CTA */}
            <div className="flex items-center justify-between p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs">
              <span className="text-zinc-300 font-medium">Interested in collaborating on a growth project?</span>
              <a
                href="#contact"
                className="px-4 py-2 rounded-lg bg-white hover:bg-zinc-200 text-zinc-950 font-semibold transition-colors cursor-pointer"
              >
                Get In Touch
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
