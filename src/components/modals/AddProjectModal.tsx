import React, { useState } from 'react';
import { X, Plus, Sparkles, Image as ImageIcon } from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';

interface AddProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PRESET_IMAGES = [
  { label: 'E-Commerce / Analytics', url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80' },
  { label: 'SEO & Search Rankings', url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80' },
  { label: 'Social Media & Creative', url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80' },
  { label: 'Brand & Visual Design', url: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80' },
  { label: 'Local Business & Maps', url: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80' }
];

export const AddProjectModal: React.FC<AddProjectModalProps> = ({ isOpen, onClose }) => {
  const { addProject } = usePortfolio();

  const [title, setTitle] = useState('');
  const [client, setClient] = useState('');
  const [industry, setIndustry] = useState('');
  const [category, setCategory] = useState<'seo' | 'ads' | 'social' | 'design' | 'local'>('seo');
  const [objective, setObjective] = useState('');
  const [strategyInput, setStrategyInput] = useState('');
  const [metricLabel, setMetricLabel] = useState('Traffic Growth');
  const [metricValue, setMetricValue] = useState('+240%');
  const [metricDesc, setMetricDesc] = useState('Net organic gain over 90 days');
  const [imageUrl, setImageUrl] = useState(PRESET_IMAGES[0].url);
  const [testimonialQuote, setTestimonialQuote] = useState('');
  const [testimonialAuthor, setTestimonialAuthor] = useState('');
  const [testimonialRole, setTestimonialRole] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !client.trim()) return;

    const strategies = strategyInput
      .split('\n')
      .map(s => s.trim())
      .filter(Boolean);

    addProject({
      title: title.trim(),
      client: client.trim(),
      industry: industry.trim() || 'Digital Marketing',
      category,
      objective: objective.trim() || 'Accelerate digital performance and customer acquisition.',
      servicesProvided: [category.toUpperCase(), 'Digital Strategy', 'Growth Marketing'],
      strategy: strategies.length > 0 ? strategies : [
        'Analyzed existing analytics baseline and competitive landscape.',
        'Executed targeted multi-channel campaign sprints.',
        'Continually optimized conversion funnels through iterative A/B testing.'
      ],
      metrics: [
        {
          label: metricLabel || 'Performance Metric',
          value: metricValue || '+150%',
          trend: 'up',
          description: metricDesc || 'Measurable marketing growth'
        }
      ],
      duration: '3 Months',
      mockupType: category === 'ads' ? 'ads' : category === 'social' ? 'social' : 'seo',
      imageUrl: imageUrl.trim() || PRESET_IMAGES[0].url,
      aspectRatio: '16:9',
      testimonial: testimonialQuote.trim() ? {
        quote: testimonialQuote.trim(),
        author: testimonialAuthor.trim() || 'Client Partner',
        role: testimonialRole.trim() || 'Executive'
      } : undefined
    });

    // Reset and close
    setTitle('');
    setClient('');
    setIndustry('');
    setObjective('');
    setStrategyInput('');
    setMetricLabel('Traffic Growth');
    setMetricValue('+240%');
    setMetricDesc('Net organic gain over 90 days');
    setTestimonialQuote('');
    setTestimonialAuthor('');
    setTestimonialRole('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-950/60">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-zinc-800 text-zinc-200 flex items-center justify-center border border-zinc-700">
              <Plus className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white tracking-tight">Add Project to Showcase</h3>
              <p className="text-xs text-zinc-400">Add a new case study to your portfolio</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4 flex-1 text-xs">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                Project Title <span className="text-zinc-500">*</span>
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. B2B Search Scaling & Pipeline Engine"
                className="w-full px-3 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-white focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 outline-none text-xs"
              />
            </div>

            <div>
              <label className="block font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                Client / Brand Name <span className="text-zinc-500">*</span>
              </label>
              <input
                type="text"
                required
                value={client}
                onChange={(e) => setClient(e.target.value)}
                placeholder="e.g. Apex Dynamics"
                className="w-full px-3 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-white focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 outline-none text-xs"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                Industry / Niche
              </label>
              <input
                type="text"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                placeholder="e.g. SaaS & Tech, E-Commerce, Local Services"
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
                <option value="seo">SEO & Organic Growth</option>
                <option value="ads">Paid Ads (Google / Meta)</option>
                <option value="social">Social Media Marketing</option>
                <option value="design">Branding & Creative Design</option>
                <option value="local">Local SEO & Google Maps</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block font-semibold text-zinc-300 uppercase tracking-wider mb-1">
              Project Objective
            </label>
            <textarea
              rows={2}
              value={objective}
              onChange={(e) => setObjective(e.target.value)}
              placeholder="Briefly state the client's bottleneck or primary growth target..."
              className="w-full px-3 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-white focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 outline-none text-xs resize-none"
            />
          </div>

          {/* Key Metric Highlight */}
          <div className="bg-zinc-950/80 p-3.5 rounded-xl border border-zinc-800/80 space-y-3">
            <span className="font-semibold text-zinc-300 block uppercase tracking-wider">
              Primary Result / Key Metric
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-zinc-400 mb-1">Metric Value</label>
                <input
                  type="text"
                  value={metricValue}
                  onChange={(e) => setMetricValue(e.target.value)}
                  placeholder="+320% or 4.5x ROAS"
                  className="w-full px-2.5 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-white outline-none text-xs font-bold"
                />
              </div>
              <div>
                <label className="block text-zinc-400 mb-1">Metric Label</label>
                <input
                  type="text"
                  value={metricLabel}
                  onChange={(e) => setMetricLabel(e.target.value)}
                  placeholder="Organic Search Traffic"
                  className="w-full px-2.5 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-white outline-none text-xs"
                />
              </div>
              <div>
                <label className="block text-zinc-400 mb-1">Description</label>
                <input
                  type="text"
                  value={metricDesc}
                  onChange={(e) => setMetricDesc(e.target.value)}
                  placeholder="Within 90 days"
                  className="w-full px-2.5 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-white outline-none text-xs"
                />
              </div>
            </div>
          </div>

          {/* Image Selection & URL */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="font-semibold text-zinc-300 uppercase tracking-wider">
                16:9 Showcase Image
              </label>
              <span className="text-[11px] text-zinc-400">Choose a preset or paste custom URL</span>
            </div>
            
            <div className="flex flex-wrap gap-1.5 mb-2">
              {PRESET_IMAGES.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setImageUrl(img.url)}
                  className={`px-2.5 py-1 rounded-lg border text-[11px] transition-colors cursor-pointer ${
                    imageUrl === img.url
                      ? 'bg-white text-zinc-950 border-white font-semibold'
                      : 'bg-zinc-950 text-zinc-400 border-zinc-800 hover:text-white'
                  }`}
                >
                  {img.label}
                </button>
              ))}
            </div>

            <input
              type="url"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="https://..."
              className="w-full px-3 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-white focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 outline-none text-xs"
            />
          </div>

          {/* Strategy Bullets */}
          <div>
            <label className="block font-semibold text-zinc-300 uppercase tracking-wider mb-1">
              Strategy & Execution Points (One per line)
            </label>
            <textarea
              rows={3}
              value={strategyInput}
              onChange={(e) => setStrategyInput(e.target.value)}
              placeholder="Executed technical keyword audit and link architecture&#10;Scaled Meta Ads with 3 fresh creative angles&#10;Integrated GA4 event tracking for precise attribution"
              className="w-full px-3 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-white focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 outline-none text-xs resize-none font-mono"
            />
          </div>

          {/* Testimonial (Optional) */}
          <div className="bg-zinc-950/80 p-3.5 rounded-xl border border-zinc-800/80 space-y-2">
            <span className="font-semibold text-zinc-300 block uppercase tracking-wider">
              Client Testimonial (Optional)
            </span>
            <input
              type="text"
              value={testimonialQuote}
              onChange={(e) => setTestimonialQuote(e.target.value)}
              placeholder='"Nabiul transformed our customer acquisition funnel..."'
              className="w-full px-2.5 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-white outline-none text-xs italic"
            />
            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                value={testimonialAuthor}
                onChange={(e) => setTestimonialAuthor(e.target.value)}
                placeholder="Author Name (e.g. Sarah J.)"
                className="w-full px-2.5 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-white outline-none text-xs"
              />
              <input
                type="text"
                value={testimonialRole}
                onChange={(e) => setTestimonialRole(e.target.value)}
                placeholder="Role / Title (e.g. VP Growth)"
                className="w-full px-2.5 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-white outline-none text-xs"
              />
            </div>
          </div>

          {/* Footer Submit */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 font-semibold text-xs tracking-wide shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Publish Project to Showcase</span>
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};
