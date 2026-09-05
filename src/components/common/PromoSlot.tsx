import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { PromoSlotData, activePromoConfig, fallbackPromoConfig } from '../../data/promoSlot';

interface PromoSlotProps {
  promoData?: PromoSlotData;
  className?: string;
}

export const PromoSlot: React.FC<PromoSlotProps> = ({
  promoData = activePromoConfig,
  className = '',
}) => {
  // Scheduling check logic
  const isScheduledAndActive = (): boolean => {
    if (!promoData || !promoData.is_active) return false;
    const now = new Date().getTime();

    if (promoData.start_date) {
      const start = new Date(promoData.start_date).getTime();
      if (now < start) return false;
    }

    if (promoData.end_date) {
      const end = new Date(promoData.end_date).getTime();
      if (now > end) return false;
    }

    return true;
  };

  const activePromo = isScheduledAndActive() ? promoData : fallbackPromoConfig;
  const { type, headline, body_text, image, cta_label, cta_link } = activePromo;

  const contentMarkup = (
    <div className={`bg-[#1F2418] border border-[#C9A876]/20 rounded-[18px] p-6 sm:px-8 sm:py-6 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6 transition-all duration-300 ${className}`}>
      <div className="flex items-center gap-4 text-center sm:text-left">
        {type === 'text_with_image' && image && (
          <div className="w-14 h-14 rounded-xl overflow-hidden border border-[#C9A876]/30 bg-[#141810] shrink-0 hidden sm:block">
            <img
              src={image}
              alt={headline}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
        )}

        <div className="space-y-1">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <Sparkles className="w-4 h-4 text-[#C9A876] shrink-0" />
            <h4 className="font-display font-semibold text-base sm:text-lg text-[#F5F1E8] leading-snug">
              {headline}
            </h4>
          </div>
          {body_text && (
            <p className="font-body text-xs sm:text-sm text-[#D8D2C0] leading-relaxed">
              {body_text}
            </p>
          )}
        </div>
      </div>

      {cta_label && cta_link && (
        <div className="shrink-0">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#4A5D2A] text-[#F5F1E8] font-accent text-xs font-bold uppercase tracking-wider hover:bg-[#7A9450] transition-all border border-[#7A9450]/30 shadow-sm">
            <span>{cta_label}</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C9A876]" />
          </span>
        </div>
      )}
    </div>
  );

  if (type === 'banner_link' && cta_link) {
    return (
      <a href={cta_link} className="block group">
        {contentMarkup}
      </a>
    );
  }

  return contentMarkup;
};
