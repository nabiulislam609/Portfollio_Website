import React, { useState, useEffect } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { 
  Mail, 
  Linkedin, 
  Twitter, 
  Send, 
  CheckCircle2, 
  Copy, 
  ExternalLink
} from 'lucide-react';
import { MouseReflectionCard } from './effects/MouseReflectionCard';

interface ContactProps {
  initialService?: string;
  onOpenInquiries: () => void;
}

export const Contact: React.FC<ContactProps> = ({ initialService, onOpenInquiries }) => {
  const { profile, services, addInquiry, inquiries } = usePortfolio();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: initialService || 'SEO',
    budget: '$3,000 - $7,500 / mo',
    message: ''
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) return;

    addInquiry({
      name: formData.name.trim(),
      email: formData.email.trim(),
      service: formData.service,
      budget: formData.budget,
      message: formData.message.trim() || 'General marketing inquiry.'
    });

    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-24 bg-zinc-950 text-zinc-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-semibold uppercase tracking-wider mb-2">
            <Mail className="w-3.5 h-3.5 text-zinc-400" />
            <span>Contact & Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Grow Your Business Together.
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">
            Have a project in mind or looking to audit your current search rankings and ad campaigns? Send me a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Direct Email Card with Mouse Reflection */}
            <MouseReflectionCard className="p-6 space-y-4 bg-zinc-900/50 border-zinc-800">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-zinc-950 text-zinc-300 flex items-center justify-center border border-zinc-800">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-[11px] text-zinc-400 font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-400"></span>
                  Replies within 24 hours
                </span>
              </div>

              <div>
                <span className="text-[11px] text-zinc-500 block font-medium">Direct Email Contact</span>
                <a 
                  href={`mailto:${profile.email}`}
                  className="text-base font-bold text-white hover:text-zinc-300 transition-colors break-all mt-0.5 block"
                >
                  {profile.email}
                </a>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex-1 py-2 px-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-zinc-200" />
                      <span className="text-zinc-200 font-medium">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-zinc-400" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${profile.email}?subject=Project%20Inquiry`}
                  className="py-2 px-4 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Open Mail</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </MouseReflectionCard>

            {/* Social & Professional Links with Mouse Reflection */}
            <MouseReflectionCard className="p-6 space-y-3 bg-zinc-900/50 border-zinc-800">
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">
                Connect Directly
              </span>

              <div className="grid grid-cols-2 gap-2.5 pt-1">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-zinc-950 hover:bg-zinc-900 text-zinc-300 hover:text-white border border-zinc-800 text-xs font-semibold flex items-center justify-center gap-2 transition-colors group cursor-pointer"
                >
                  <Linkedin className="w-4 h-4 text-zinc-400 group-hover:text-white" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={profile.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-zinc-950 hover:bg-zinc-900 text-zinc-300 hover:text-white border border-zinc-800 text-xs font-semibold flex items-center justify-center gap-2 transition-colors group cursor-pointer"
                >
                  <Twitter className="w-4 h-4 text-zinc-400 group-hover:text-white" />
                  <span>Twitter / X</span>
                </a>
              </div>
            </MouseReflectionCard>

            {/* Inquiries Access */}
            <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80 flex items-center justify-between text-xs">
              <span className="text-zinc-400">Stored Submissions: <strong className="text-white">{inquiries.length}</strong></span>
              <button
                type="button"
                onClick={onOpenInquiries}
                className="text-zinc-300 hover:text-white font-semibold underline transition-colors cursor-pointer"
              >
                View Client Inquiries →
              </button>
            </div>

          </div>

          {/* Right Column: Contact Form with Mouse Reflection */}
          <div className="lg:col-span-7">
            <MouseReflectionCard className="p-6 sm:p-7 bg-zinc-900/60 border-zinc-800 shadow-xl">
              
              {submitted ? (
                <div className="py-10 text-center space-y-4 animate-fadeIn">
                  <div className="w-14 h-14 rounded-2xl bg-zinc-800 text-white mx-auto flex items-center justify-center border border-zinc-700">
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Thank You, {formData.name}!</h3>
                  <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto leading-relaxed">
                    Your inquiry regarding <strong>{formData.service}</strong> has been saved. I will review your project details and follow up within 24 hours.
                  </p>
                  <div className="pt-2 flex items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          service: 'SEO',
                          budget: '$3,000 - $7,500 / mo',
                          message: ''
                        });
                      }}
                      className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                    <button
                      type="button"
                      onClick={onOpenInquiries}
                      className="px-4 py-2 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 text-xs font-semibold transition-colors cursor-pointer"
                    >
                      View in Inquiries Box
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  
                  <div className="border-b border-zinc-800 pb-3">
                    <h3 className="text-base font-bold text-white">Send a Project Inquiry</h3>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      Tell me about your marketing goals and what you'd like to achieve.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                        Your Full Name <span className="text-zinc-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Connor"
                        className="w-full px-3 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 outline-none text-xs"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                        Work Email Address <span className="text-zinc-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@company.com"
                        className="w-full px-3 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 outline-none text-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                        Service Needed
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 outline-none text-xs"
                      >
                        {services.map((s) => (
                          <option key={s.id} value={s.name}>
                            {s.name}
                          </option>
                        ))}
                        <option value="Multi-Channel Full Funnel Growth">
                          Multi-Channel Full Funnel Growth
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                        Estimated Monthly Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 outline-none text-xs"
                      >
                        <option value="$1,500 - $3,000 / mo">$1,500 - $3,000 / mo</option>
                        <option value="$3,000 - $7,500 / mo">$3,000 - $7,500 / mo</option>
                        <option value="$7,500 - $15,000 / mo">$7,500 - $15,000 / mo</option>
                        <option value="$15,000+ / mo">$15,000+ / mo (Enterprise)</option>
                        <option value="Project-based Sprint">Project-based Sprint</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                      Project Goals & Message <span className="text-zinc-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share current metrics, upcoming launches, or core marketing bottlenecks..."
                      className="w-full px-3 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 outline-none text-xs resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 font-semibold text-xs tracking-wide shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Send Project Inquiry</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>

                </form>
              )}

            </MouseReflectionCard>
          </div>

        </div>

      </div>
    </section>
  );
};
