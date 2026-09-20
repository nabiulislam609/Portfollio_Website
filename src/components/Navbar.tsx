import React, { useState, useEffect } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Plus, Mail, Menu, X, Sparkles, FolderKanban } from 'lucide-react';

interface NavbarProps {
  onOpenAddProject: () => void;
  onOpenInquiries: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenAddProject,
  onOpenInquiries
}) => {
  const { profile, inquiries } = usePortfolio();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Me', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact Me', href: '#contact' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80 py-3 shadow-md'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <a
            href="#"
            id="brand-logo"
            className="flex items-center gap-2.5 group"
          >
            <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-750 flex items-center justify-center text-white font-bold text-xs tracking-wider group-hover:border-zinc-500 transition-colors">
              {profile.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-white tracking-tight text-sm sm:text-base">
                  {profile.name}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-pulse hidden sm:inline-block"></span>
              </div>
              <p className="text-[11px] text-zinc-500 font-medium hidden sm:block">
                Portfolio Showcase
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-medium text-zinc-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Inquiries Counter */}
            <button
              onClick={onOpenInquiries}
              className="relative p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors"
              title="View Client Inquiries"
            >
              <Mail className="w-3.5 h-3.5" />
              {inquiries.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-white text-zinc-950 font-bold text-[9px] rounded-full flex items-center justify-center">
                  {inquiries.length}
                </span>
              )}
            </button>

            {/* Add Project CTA */}
            <button
              onClick={onOpenAddProject}
              className="px-3.5 py-1.5 rounded-lg bg-white hover:bg-zinc-200 text-zinc-950 font-semibold text-xs tracking-wide transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Project</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenAddProject}
              className="p-2 rounded-lg bg-white text-zinc-950 text-xs font-bold"
              title="Add Project"
            >
              <Plus className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-zinc-800 px-4 py-4 space-y-3 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-zinc-300 hover:text-white"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-zinc-800 flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAddProject();
              }}
              className="flex-1 py-2 rounded-lg bg-white text-zinc-950 font-semibold text-xs flex items-center justify-center gap-1.5"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Project</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiries();
              }}
              className="py-2 px-3 rounded-lg bg-zinc-900 text-zinc-300 border border-zinc-800 text-xs flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Inquiries ({inquiries.length})</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
