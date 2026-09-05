import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { partnershipsData } from '../../data/partnerships';

interface FitnessPartnershipsProps {
  onOpenPartnerModal?: () => void;
}

export const FitnessPartnerships: React.FC<FitnessPartnershipsProps> = ({ onOpenPartnerModal }) => {
  return (
    <section id="partnerships" className="py-24 bg-[#F5F1E8] text-[#1F2418]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column (50% Visual) */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-[24px] overflow-hidden border border-[#DDD6C4] shadow-sm bg-white aspect-[4/3]">
              <img
                src="/images/1.jpeg"
                alt="Bowlora Fitness Meal Partner Box"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-5 left-6 bg-white border border-[#DDD6C4] px-4 py-3 rounded-xl shadow-md flex items-center gap-2">
              <span className="text-base">🤝</span>
              <span className="font-body text-xs sm:text-sm font-semibold text-[#1F2418]">
                Trusted by Jaipur fitness communities
              </span>
            </div>
          </div>

          {/* Right Column (50% Content) */}
          <div className="lg:col-span-6 flex flex-col items-start gap-6">

            {/* Eyebrow label */}
            <span className="font-accent text-xs font-bold uppercase tracking-[3px] text-[#B08D57]">
              BOWLORA X FITNESS
            </span>

            {/* Headline */}
            <h2 className="font-display font-semibold text-3xl sm:text-[38px] text-[#1F2418] leading-[1.25]">
              {partnershipsData.headline}
            </h2>

            {/* Body copy */}
            <p className="font-body text-base sm:text-lg text-[#4A4A3E] leading-relaxed">
              {partnershipsData.subheadline}
            </p>

            {/* Benefit List */}
            <div className="space-y-3 pt-1">
              {partnershipsData.benefits.map((b) => (
                <div key={b.id} className="flex items-center gap-3 font-body text-sm text-[#1F2418]">
                  <div className="w-5 h-5 rounded-full bg-[#4A5D2A]/15 text-[#4A5D2A] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span>{b.title} — {b.description}</span>
                </div>
              ))}
            </div>

            {/* Primary CTA */}
            {onOpenPartnerModal ? (
              <button
                onClick={onOpenPartnerModal}
                className="inline-flex items-center gap-2.5 bg-[#4A5D2A] text-[#F5F1E8] px-8 py-4 rounded-full font-accent text-xs uppercase tracking-[1.5px] font-bold hover:bg-[#2E3A1A] hover:scale-[1.02] transition-all shadow-md mt-2"
              >
                <span>EXPLORE GYM PARTNERSHIPS</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <a
                href="https://wa.me/919119222601?text=Hi%20Bowlora!%20I'm%20interested%20in%20a%20gym/fitness%20partnership."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#4A5D2A] text-[#F5F1E8] px-8 py-4 rounded-full font-accent text-xs uppercase tracking-[1.5px] font-bold hover:bg-[#2E3A1A] hover:scale-[1.02] transition-all shadow-md mt-2"
              >
                <span>PARTNER WITH BOWLORA</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            )}

          </div>

        </div>
      </div>
    </section>
  );
};

