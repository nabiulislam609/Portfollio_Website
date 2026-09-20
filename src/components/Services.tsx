import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { 
  Sparkles, 
  Plus, 
  Trash2, 
  Check, 
  Search, 
  MapPin, 
  Target, 
  Share2, 
  Palette, 
  ArrowRight
} from 'lucide-react';
import { MouseReflectionCard } from './effects/MouseReflectionCard';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
  onOpenAddService: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService, onOpenAddService }) => {
  const { services, deleteService } = usePortfolio();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'seo', label: 'SEO & Organic' },
    { id: 'ads', label: 'Paid Advertising' },
    { id: 'social', label: 'Social & Brand' },
    { id: 'creative', label: 'Creative & Design' },
  ];

  const filteredServices = activeCategory === 'all'
    ? services
    : services.filter(s => s.category === activeCategory || (activeCategory === 'seo' && s.category === 'local'));

  const getServiceIcon = (name: string, category: string) => {
    if (category === 'ads' || name.includes('Ads')) return <Target className="w-5 h-5 text-zinc-300" />;
    if (category === 'social' || name.includes('Social') || name.includes('Facebook')) return <Share2 className="w-5 h-5 text-zinc-300" />;
    if (category === 'creative' || name.includes('Design')) return <Palette className="w-5 h-5 text-zinc-300" />;
    if (name.includes('Local')) return <MapPin className="w-5 h-5 text-zinc-300" />;
    return <Search className="w-5 h-5 text-zinc-300" />;
  };

  return (
    <section id="services" className="py-20 sm:py-24 bg-zinc-950 text-zinc-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-zinc-400" />
              <span>Services & Offerings</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              High-Impact Growth Solutions.
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2 max-w-xl">
              From organic search authority to high-converting paid media campaigns, explore the core capabilities designed to scale your revenue.
            </p>
          </div>

          <button
            onClick={onOpenAddService}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 text-xs font-semibold transition-all shadow-sm self-start sm:self-auto cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Add Service</span>
          </button>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-white text-zinc-950'
                  : 'bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Cards Grid with Mouse Reflection */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredServices.map((service) => (
            <MouseReflectionCard
              key={service.id}
              className="p-5 bg-zinc-900/50 border-zinc-800 flex flex-col justify-between"
            >
              <div className="space-y-3">
                
                {/* Card Top: Icon & Category */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center">
                    {getServiceIcon(service.name, service.category)}
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-300 bg-zinc-800/80 border border-zinc-700/60 px-2 py-0.5 rounded">
                      {service.focus.split('&')[0].trim()}
                    </span>

                    {/* Delete button if custom added */}
                    {service.id.startsWith('srv-') && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteService(service.id);
                        }}
                        className="p-1 rounded text-zinc-500 hover:text-rose-400 transition-colors"
                        title="Delete Service"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Service Name & Description */}
                <div>
                  <h3 className="text-base font-bold text-white tracking-tight group-hover:text-zinc-100 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>

                {/* Deliverables List */}
                <div className="pt-2 border-t border-zinc-800/60 space-y-1.5">
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block">
                    Key Deliverables
                  </span>
                  {service.deliverables.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-[11px] text-zinc-300">
                      <Check className="w-3 h-3 text-zinc-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Card Footer: Impact Metric & Inquiry Action */}
              <div className="pt-4 mt-4 border-t border-zinc-800/80 flex items-center justify-between">
                <span className="text-[11px] text-zinc-300 font-medium truncate max-w-[160px]">
                  {service.metricHighlight}
                </span>

                <button
                  onClick={() => onSelectService(service.name)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-300 hover:text-white transition-colors cursor-pointer"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

            </MouseReflectionCard>
          ))}
        </div>

      </div>
    </section>
  );
};
