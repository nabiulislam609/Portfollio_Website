import React, { useState } from 'react';
import { X, Plus, Sparkles } from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';

interface AddServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AddServiceModal: React.FC<AddServiceModalProps> = ({ isOpen, onClose }) => {
  const { addService } = usePortfolio();

  const [name, setName] = useState('');
  const [focus, setFocus] = useState('');
  const [category, setCategory] = useState<'seo' | 'ads' | 'social' | 'creative' | 'local'>('seo');
  const [description, setDescription] = useState('');
  const [deliverablesInput, setDeliverablesInput] = useState('');
  const [metricHighlight, setMetricHighlight] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const deliverables = deliverablesInput
      .split('\n')
      .map(d => d.trim())
      .filter(Boolean);

    addService({
      name: name.trim(),
      focus: focus.trim() || 'Strategy & Execution',
      category,
      description: description.trim() || 'Tailored digital marketing service focused on high-intent lead generation and revenue growth.',
      deliverables: deliverables.length > 0 ? deliverables : [
        'Strategic audit & initial discovery roadmap',
        'Weekly optimization & sprint reporting',
        'Custom analytics dashboard integration'
      ],
      iconName: category === 'ads' ? 'Target' : category === 'social' ? 'Share2' : 'Search',
      metricHighlight: metricHighlight.trim() || '+45% average performance lift'
    });

    setName('');
    setFocus('');
    setDescription('');
    setDeliverablesInput('');
    setMetricHighlight('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-950/60">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-zinc-800 text-zinc-200 flex items-center justify-center border border-zinc-700">
              <Plus className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white tracking-tight">Add Service Offering</h3>
              <p className="text-xs text-zinc-400">Expand your client services menu</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
          <div>
            <label className="block font-semibold text-zinc-300 uppercase tracking-wider mb-1">
              Service Name <span className="text-zinc-500">*</span>
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Email Lifecycle & Retention Marketing"
              className="w-full px-3 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-white focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 outline-none text-xs"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                Core Focus Area
              </label>
              <input
                type="text"
                value={focus}
                onChange={(e) => setFocus(e.target.value)}
                placeholder="e.g. Automated Klaviyo flows"
                className="w-full px-3 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-white focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 outline-none text-xs"
              />
            </div>

            <div>
              <label className="block font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as any)}
                className="w-full px-3 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-white focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 outline-none text-xs"
              >
                <option value="seo">SEO</option>
                <option value="ads">Paid Advertising</option>
                <option value="social">Social Media</option>
                <option value="creative">Creative & Design</option>
                <option value="local">Local Marketing</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block font-semibold text-zinc-300 uppercase tracking-wider mb-1">
              Service Description
            </label>
            <textarea
              rows={2}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe what you solve and the outcomes you deliver..."
              className="w-full px-3 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-white focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 outline-none text-xs resize-none"
            />
          </div>

          <div>
            <label className="block font-semibold text-zinc-300 uppercase tracking-wider mb-1">
              Key Deliverables (One per line)
            </label>
            <textarea
              rows={3}
              value={deliverablesInput}
              onChange={(e) => setDeliverablesInput(e.target.value)}
              placeholder="Welcome flow setup & list segmentation&#10;Bi-weekly email campaign design & copy&#10;A/B subject line testing & deliverability audits"
              className="w-full px-3 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-white focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 outline-none text-xs resize-none font-mono"
            />
          </div>

          <div>
            <label className="block font-semibold text-zinc-300 uppercase tracking-wider mb-1">
              Metric Highlight
            </label>
            <input
              type="text"
              value={metricHighlight}
              onChange={(e) => setMetricHighlight(e.target.value)}
              placeholder="e.g. +38% increase in repeat customer revenue"
              className="w-full px-3 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-white focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 outline-none text-xs text-zinc-200 font-medium"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 font-semibold text-xs tracking-wide shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Add Service</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
