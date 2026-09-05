import React from 'react';
import { HOW_IT_WORKS_STEPS, ProcessStep } from '../../data/howItWorks';
import { OrderCTA } from '../common/OrderCTA';
import { ClipboardList, ChefHat, Bike, Utensils, MessageCircle } from 'lucide-react';

const iconMap: { [key: string]: any } = {
  ClipboardList,
  ChefHat,
  Bike,
  Utensils,
};

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 sm:py-32 dark-section grain-overlay text-[#F5F1E8] border-t border-[#3D4530]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
          <span className="font-accent text-xs font-bold uppercase tracking-[3px] text-[#B08D57]">
            SIMPLE PROCESS
          </span>
          <h2 className="font-display font-semibold text-3xl sm:text-[44px] text-[#F5F1E8] leading-tight">
            From our kitchen to your door — simply.
          </h2>
        </div>

        {/* Dynamic Process Steps Timeline */}
        <div className="relative mb-20">
          {/* Dashed Horizontal Connecting Line */}
          <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[1px] border-t-2 border-dashed border-[#B08D57]/30 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {HOW_IT_WORKS_STEPS.map((s) => {
              const Icon = iconMap[s.iconName] || Utensils;
              return (
                <div key={s.id} className="flex flex-col items-center text-center group">
                  <span className="font-accent text-xs font-bold tracking-[2px] text-[#B08D57]/70 uppercase mb-3">
                    {s.stepNum}
                  </span>

                  {/* 64px Icon Circle Badge */}
                  <div className="w-16 h-16 rounded-full bg-[#1F2418] border-1.5 border-[#B08D57]/40 text-[#7A9450] flex items-center justify-center mb-6 group-hover:border-[#B08D57] group-hover:bg-[#4A5D2A] group-hover:text-[#F5F1E8] transition-all shadow-md">
                    <Icon className="w-7 h-7 stroke-[1.5]" />
                  </div>

                  <h3 className="font-body font-bold text-lg text-[#F5F1E8] mb-2">{s.title}</h3>
                  <p className="font-body text-sm text-[#D8D2C0] leading-relaxed max-w-[220px]">
                    {s.message}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Reusable Ordering CTA Banner */}
        <div className="bg-[#4A5D2A] rounded-[24px] p-8 sm:p-12 text-[#F5F1E8] flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_16px_48px_rgba(0,0,0,0.5)] border border-[#7A9450]/40">
          <div className="text-center md:text-left space-y-2">
            <h3 className="font-display font-semibold text-2xl sm:text-3xl text-[#F5F1E8]">
              Ready to eat better starting tomorrow?
            </h3>
            <p className="font-body text-sm text-[#D8D2C0]">
              Order now or start a subscription — whichever fits your routine.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            {/* Reusable OrderCTA Component Contract */}
            <OrderCTA
              label="ORDER NOW"
              destination="whatsapp"
              context="a fresh daily meal plan"
              size="large"
              style="filled"
              className="bg-[#141810] text-[#F5F1E8] hover:bg-[#1F2418]"
            />

            {/* Standalone Persistent WhatsApp Icon Button */}
            <a
              href="https://wa.me/919119222601?text=Hi%20Bowlora!%20I%20have%20a%20question."
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-full bg-[#1F2418] text-[#C9A876] hover:bg-[#141810] transition-colors border border-[#2E3324]"
              title="Direct WhatsApp Chat"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
