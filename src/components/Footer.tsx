import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { ArrowUp, RotateCcw } from 'lucide-react';

export const Footer: React.FC = () => {
  const { profile, resetDefaults } = usePortfolio();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    if (window.confirm('Reset portfolio to initial demo projects and services?')) {
      resetDefaults();
    }
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 text-zinc-400 text-xs py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-900">
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white font-bold text-xs">
              {profile.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <div className="font-bold text-white text-sm">{profile.name}</div>
              <div className="text-[11px] text-zinc-500">{profile.title}</div>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs text-zinc-400">
            <a href="#about" className="hover:text-white transition-colors">About Me</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact Me</a>
          </div>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} {profile.name}. Clean & minimal digital marketing showcase.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={handleReset}
              className="hover:text-zinc-300 flex items-center gap-1 transition-colors cursor-pointer"
              title="Reset all customized items to default"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset Demo Data</span>
            </button>

            <button
              onClick={scrollToTop}
              className="hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3 h-3 text-zinc-400" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
