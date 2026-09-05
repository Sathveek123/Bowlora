import React from 'react';
import { X, Heart, ShieldCheck, Sparkles } from 'lucide-react';
import { aboutData } from '../../data/about';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9990] bg-[#141810]/90 backdrop-blur-lg flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in">
      <div className="bg-[#141810] border border-[#2E3324] rounded-[28px] max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-[0_32px_80px_rgba(0,0,0,0.8)] text-[#F5F1E8] relative flex flex-col my-auto">

        {/* Modal Header */}
        <div className="sticky top-0 z-30 bg-[#141810]/95 backdrop-blur-md p-6 sm:p-8 border-b border-[#2E3324] flex items-start justify-between gap-4">
          <div>
            <span className="font-accent text-xs font-bold uppercase tracking-[3px] text-[#C9A876]">
              ABOUT BOWLORA
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#F5F1E8] mt-1">
              "Junk is everywhere. Health is rare. That's why Bowlora."
            </h2>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-[#1F2418] border border-[#2E3324] text-[#F5F1E8] hover:bg-[#4A5D2A] transition-colors flex items-center justify-center shrink-0"
            aria-label="Close story page"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-12 flex-1">

          {/* Section 1 — Why Bowlora Was Started (Page Hero / Intro with bracketed placeholder convention) */}
          <div className="space-y-4 font-body text-base text-[#D8D2C0] leading-relaxed bg-[#1F2418] p-8 rounded-[24px] border border-[#2E3324]">
            <span className="font-accent text-xs font-bold uppercase tracking-[2px] text-[#C9A876] block mb-1">
              WHY BOWLORA WAS STARTED
            </span>
            <p className="text-[#F5F1E8] font-medium text-lg leading-relaxed">
              {aboutData.founding_story}
            </p>
          </div>

          {/* Section 2 — The Bowlora Philosophy */}
          <div className="bg-[#1F2418] border border-[#2E3324] rounded-[24px] p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-4">
              <span className="font-accent text-xs font-bold uppercase tracking-[2px] text-[#C9A876]">
                THE BOWLORA PHILOSOPHY
              </span>
              <h3 className="font-display font-bold text-2xl text-[#F5F1E8]">
                {aboutData.philosophy_headline}
              </h3>
              <p className="font-body text-sm text-[#D8D2C0] leading-relaxed">
                {aboutData.philosophy_body}
              </p>
            </div>
            <div className="md:col-span-5 rounded-2xl overflow-hidden border border-[#2E3324] aspect-[4/3] bg-[#141810]">
              <img
                src={aboutData.philosophy_image}
                alt="The Bowlora Philosophy Kitchen Prep"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/logo/WhatsApp Image 2026-09-04 at 7.59.18 PM.jpeg';
                }}
              />
            </div>
          </div>

          {/* Section 3 — What the Brand Believes About Healthy Eating (3-card belief grid) */}
          <div className="space-y-4">
            <span className="font-accent text-xs font-bold uppercase tracking-[2px] text-[#C9A876]">
              WHAT WE BELIEVE ABOUT HEALTHY EATING
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {aboutData.beliefs.map((belief) => (
                <div key={belief.id} className="bg-[#1F2418] border border-[#2E3324] rounded-[20px] p-6 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#141810] text-[#7A9450] flex items-center justify-center">
                    {belief.iconName === 'Heart' && <Heart className="w-5 h-5" />}
                    {belief.iconName === 'ShieldCheck' && <ShieldCheck className="w-5 h-5 text-[#C9A876]" />}
                    {belief.iconName === 'Sparkles' && <Sparkles className="w-5 h-5" />}
                  </div>
                  <h4 className="font-body font-bold text-base text-[#F5F1E8]">{belief.title}</h4>
                  <p className="font-body text-xs text-[#D8D2C0] leading-relaxed">
                    {belief.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4 — Why Healthy Food Should Not Feel Like Punishment (Pull-Quote Styling) */}
          <div className="bg-[#4A5D2A]/15 border border-[#C9A876]/40 rounded-[24px] p-8 text-center my-6 shadow-inner">
            <span className="font-accent text-[11px] uppercase tracking-[2px] font-bold text-[#C9A876] block mb-2">
              OUR CORE PROMISE
            </span>
            <blockquote className="font-display italic font-semibold text-xl sm:text-2xl text-[#F5F1E8] leading-relaxed max-w-2xl mx-auto">
              "{aboutData.punishment_statement}"
            </blockquote>
          </div>

          {/* Section 5 — How Bowlora Balances Nutrition, Convenience & Taste (3 Columns) */}
          <div className="space-y-4">
            <span className="font-accent text-xs font-bold uppercase tracking-[2px] text-[#C9A876]">
              BALANCE OF NUTRITION, CONVENIENCE & TASTE
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {aboutData.balance_points.map((point) => (
                <div key={point.pillar_name} className="bg-[#1F2418] border border-[#2E3324] rounded-[20px] p-6 space-y-2">
                  <h5 className="font-accent text-xs font-bold uppercase tracking-wider" style={{ color: point.accentColor }}>
                    PILLAR {point.pillar_number}
                  </h5>
                  <h4 className="font-body font-bold text-lg text-[#F5F1E8]">{point.pillar_name}</h4>
                  <p className="font-body text-xs text-[#D8D2C0] leading-relaxed">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

