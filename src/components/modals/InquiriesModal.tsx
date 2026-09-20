import React from 'react';
import { X, Mail, Calendar, MessageSquare, Trash2, CheckCircle2 } from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';

interface InquiriesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InquiriesModal: React.FC<InquiriesModalProps> = ({ isOpen, onClose }) => {
  const { inquiries } = usePortfolio();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-xl max-h-[85vh] bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-950/60">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-zinc-800 text-zinc-200 flex items-center justify-center border border-zinc-700">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white tracking-tight">Client Inquiries ({inquiries.length})</h3>
              <p className="text-xs text-zinc-400">Messages received from your Contact form</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-3 flex-1 text-xs">
          {inquiries.length === 0 ? (
            <div className="py-12 text-center text-zinc-500 space-y-2">
              <MessageSquare className="w-8 h-8 mx-auto stroke-1" />
              <p className="text-sm font-medium text-zinc-400">No Inquiries Yet</p>
              <p className="text-xs max-w-xs mx-auto">
                When someone submits the Contact Me form, their message and project scope will appear here.
              </p>
            </div>
          ) : (
            inquiries.map((inq) => (
              <div key={inq.id} className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="font-bold text-white text-sm">{inq.name}</div>
                  <span className="text-[10px] text-zinc-500 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {inq.date}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-[11px] text-zinc-400">
                  <span>{inq.email}</span>
                  <span>•</span>
                  <span className="text-zinc-200 font-medium">{inq.service}</span>
                  {inq.budget && (
                    <>
                      <span>•</span>
                      <span className="text-zinc-400">{inq.budget}</span>
                    </>
                  )}
                </div>
                <p className="text-zinc-300 text-xs bg-zinc-900/80 p-3 rounded-lg border border-zinc-800/80 leading-relaxed">
                  "{inq.message}"
                </p>
                <div className="pt-1 flex justify-end">
                  <a
                    href={`mailto:${inq.email}?subject=Re: Inquiry regarding ${inq.service}`}
                    className="text-[11px] font-semibold text-zinc-300 hover:text-white underline flex items-center gap-1 transition-colors"
                  >
                    Reply via Email →
                  </a>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
