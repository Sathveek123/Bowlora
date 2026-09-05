import React from 'react';
import { X, ShieldCheck, FileText, RefreshCw, MessageCircle } from 'lucide-react';
import { legalPolicies } from '../../data/legal';

interface LegalModalProps {
  slug: 'privacy' | 'terms' | 'refund' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ slug, onClose }) => {
  if (!slug) return null;

  const policy = legalPolicies[slug];
  if (!policy) return null;

  return (
    <div className="fixed inset-0 z-[9990] bg-[#141810]/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in">
      <div className="bg-[#F5F1E8] border border-[#DDD6C4] rounded-[24px] max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-[0_32px_80px_rgba(0,0,0,0.5)] text-[#1F2418] relative flex flex-col my-auto">

        {/* Top Sticky Header Bar */}
        <div className="sticky top-0 z-30 bg-[#F5F1E8]/95 backdrop-blur-md px-6 py-5 sm:px-8 border-b border-[#DDD6C4] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#4A5D2A]/10 text-[#4A5D2A] flex items-center justify-center">
              {slug === 'privacy' && <ShieldCheck className="w-5 h-5" />}
              {slug === 'terms' && <FileText className="w-5 h-5" />}
              {slug === 'refund' && <RefreshCw className="w-5 h-5" />}
            </div>
            <div>
              <span className="font-accent text-[11px] font-bold uppercase tracking-[2px] text-[#4A5D2A]">
                LEGAL POLICIES
              </span>
              <h3 className="font-body font-bold text-lg text-[#1F2418] leading-tight">
                {policy.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#EAE4D4] border border-[#DDD6C4] text-[#1F2418] hover:bg-[#4A5D2A] hover:text-[#F5F1E8] transition-colors flex items-center justify-center shrink-0"
            aria-label="Close legal policy document"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 720px Centered Legal Reader Body (Exact Brief Specification) */}
        <div className="p-6 sm:p-10 flex-1">
          <div className="max-w-[720px] mx-auto space-y-6">

            {/* Document Header */}
            <div className="border-b border-[#DDD6C4] pb-6 space-y-2">
              <h1 className="font-body font-bold text-[32px] text-[#1F2418] leading-tight">
                {policy.title}
              </h1>
              <p className="font-body text-[13px] text-[#777777]">
                Last updated: {policy.lastUpdated}
              </p>
            </div>

            {/* Intro paragraph */}
            <p className="font-body text-base text-[#4A4A3E] leading-[1.8]">
              {policy.intro}
            </p>

            {/* Render document sections */}
            <div className="space-y-8 pt-2">
              {policy.sections.map((section, idx) => (
                <div key={idx} className="mt-[40px]">
                  <h2 className="font-body font-bold text-[20px] text-[#1F2418] mb-3 leading-snug">
                    {section.heading}
                  </h2>
                  <p className="font-body text-base text-[#4A4A3E] leading-[1.8]">
                    {section.body}
                  </p>
                </div>
              ))}
            </div>

            {/* Contact Assistance Footer Strip */}
            <div className="mt-12 p-6 bg-[#EAE4D4] border border-[#DDD6C4] rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-body font-bold text-sm text-[#1F2418]">Questions about our policies?</h4>
                <p className="font-body text-xs text-[#666666]">Our Jaipur team is available on WhatsApp for any legal or service inquiries.</p>
              </div>
              <a
                href="https://wa.me/919119222601?text=Hi%20Bowlora!%20I%20have%20a%20question%20regarding%20your%20legal%20policies."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-[#4A5D2A] text-[#F5F1E8] rounded-full font-accent text-xs font-bold uppercase tracking-wider hover:bg-[#2E3A1A] transition-all flex items-center gap-2 whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 text-[#C9A876]" />
                <span>Ask on WhatsApp</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
