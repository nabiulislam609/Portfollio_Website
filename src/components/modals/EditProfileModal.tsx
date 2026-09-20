import React, { useState } from 'react';
import { X, Check, Sparkles, User, Image as ImageIcon } from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EditProfileModal: React.FC<EditProfileModalProps> = ({ isOpen, onClose }) => {
  const { profile, updateProfile } = usePortfolio();

  const [formData, setFormData] = useState({
    name: profile.name,
    title: profile.title,
    tagline: profile.tagline,
    subheadline: profile.subheadline,
    bio: profile.bio,
    experienceYears: profile.experienceYears,
    adSpendManaged: profile.adSpendManaged,
    avgRoas: profile.avgRoas,
    email: profile.email,
    location: profile.location,
    linkedin: profile.linkedin,
    photoUrl: profile.photoUrl
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-xl max-h-[90vh] bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-950/60">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-zinc-800 text-zinc-200 flex items-center justify-center border border-zinc-700">
              <User className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white tracking-tight">Edit Profile & About Me</h3>
              <p className="text-xs text-zinc-400">Update your personal bio, credentials, and links</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4 flex-1 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                Full Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-white focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 outline-none text-xs"
              />
            </div>

            <div>
              <label className="block font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                Professional Title
              </label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-white focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 outline-none text-xs"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-zinc-300 uppercase tracking-wider mb-1">
              Hero Headline
            </label>
            <input
              type="text"
              value={formData.tagline}
              onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
              className="w-full px-3 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-white focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 outline-none text-xs"
            />
          </div>

          <div>
            <label className="block font-semibold text-zinc-300 uppercase tracking-wider mb-1">
              Hero Subheadline
            </label>
            <textarea
              rows={2}
              value={formData.subheadline}
              onChange={(e) => setFormData({ ...formData, subheadline: e.target.value })}
              className="w-full px-3 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-white focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 outline-none text-xs resize-none"
            />
          </div>

          <div>
            <label className="block font-semibold text-zinc-300 uppercase tracking-wider mb-1">
              About Me Biography
            </label>
            <textarea
              rows={4}
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              className="w-full px-3 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-white focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 outline-none text-xs leading-relaxed"
            />
          </div>

          {/* Metrics Row */}
          <div className="grid grid-cols-3 gap-3 bg-zinc-950/80 p-3.5 rounded-xl border border-zinc-800/80">
            <div>
              <label className="block text-zinc-400 mb-1">Experience</label>
              <input
                type="text"
                value={formData.experienceYears}
                onChange={(e) => setFormData({ ...formData, experienceYears: e.target.value })}
                className="w-full px-2.5 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-white outline-none text-xs"
              />
            </div>
            <div>
              <label className="block text-zinc-400 mb-1">Ad Spend Managed</label>
              <input
                type="text"
                value={formData.adSpendManaged}
                onChange={(e) => setFormData({ ...formData, adSpendManaged: e.target.value })}
                className="w-full px-2.5 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-white outline-none text-xs font-bold"
              />
            </div>
            <div>
              <label className="block text-zinc-400 mb-1">Average ROAS</label>
              <input
                type="text"
                value={formData.avgRoas}
                onChange={(e) => setFormData({ ...formData, avgRoas: e.target.value })}
                className="w-full px-2.5 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-white outline-none text-xs font-bold"
              />
            </div>
          </div>

          {/* Contact & Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                Contact Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-white focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 outline-none text-xs"
              />
            </div>

            <div>
              <label className="block font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                Location
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-white focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 outline-none text-xs"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-zinc-300 uppercase tracking-wider mb-1">
              Profile Photo URL
            </label>
            <input
              type="url"
              value={formData.photoUrl}
              onChange={(e) => setFormData({ ...formData, photoUrl: e.target.value })}
              className="w-full px-3 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-white focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 outline-none text-xs"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 font-semibold text-xs tracking-wide shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Check className="w-4 h-4" />
              <span>Save Changes</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
