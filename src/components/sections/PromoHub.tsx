import React, { useState } from 'react';
import { Tag, Sparkles, Flame, Gift, ArrowRight } from 'lucide-react';

export const PROMO_CARDS = [
  {
    id: 'pcos-launch',
    badge: '🌸 SPECIAL LAUNCH',
    title: 'Jaipur Women\'s Health & PCOS Nutrition Drive',
    subtitle: 'Get a free 1-on-1 Dietitian Consultation with any 15-Day or 28-Day Plan purchase this month.',
    cta: 'Claim Free Consultation',
    link: '#plans',
    accent: '#2E7D32',
    bg: '#F0F7EE'
  },
  {
    id: 'taster-box',
    badge: '🎁 SPECIAL OFFER',
    title: 'Try the 3-Day Reset Trial Box at ₹1,199',
    subtitle: 'Experience zero-prep, chef-crafted healthy bowls delivered straight to your door before commitment.',
    cta: 'Order Taster Box',
    link: '#plans',
    accent: '#F5A623',
    bg: '#FEF3DC'
  },
  {
    id: 'referral-perk',
    badge: '🌱 COMMUNITY PERK',
    title: 'Refer a Friend, Get 2 Free Meals',
    subtitle: 'Share the healthy lifestyle! When your friend subscribes to any plan, both of you get 2 extra meals added.',
    cta: 'Share via WhatsApp',
    link: 'https://wa.me/919119222601?text=Hi!%20I%20want%20to%20refer%20a%20friend%20to%20Bowlora.',
    accent: '#D9735A',
    bg: '#FAE8E3'
  }
];

export const PromoHub: React.FC = () => {
  return (
    <section className="py-16 bg-white border-t border-[#E8E8E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <span className="font-accent text-xs font-bold uppercase tracking-widest text-[#2E7D32]">
              COMMUNITY & PROMO HUB
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#1A1A1A]">
              Special Offers & New Launches
            </h3>
          </div>
          <span className="text-xs font-body text-[#777777] italic">
            Updated weekly for Jaipur subscribers
          </span>
        </div>

        {/* Promo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROMO_CARDS.map((promo) => (
            <div
              key={promo.id}
              className="rounded-2xl p-7 border border-[#E8E8E8] flex flex-col justify-between hover:shadow-lg transition-all duration-300 group"
              style={{ backgroundColor: promo.bg }}
            >
              <div className="space-y-3">
                <span
                  className="inline-block px-3 py-1 rounded-full font-accent text-[10px] font-extrabold uppercase tracking-wider text-white shadow-sm"
                  style={{ backgroundColor: promo.accent }}
                >
                  {promo.badge}
                </span>

                <h4 className="font-display font-bold text-xl text-[#1A1A1A] leading-snug group-hover:text-[#2E7D32] transition-colors">
                  {promo.title}
                </h4>

                <p className="font-body text-xs sm:text-sm text-[#555555] leading-relaxed">
                  {promo.subtitle}
                </p>
              </div>

              <div className="pt-6">
                <a
                  href={promo.link}
                  className="inline-flex items-center gap-2 font-body text-xs font-bold text-[#1A1A1A] hover:underline"
                >
                  <span>{promo.cta}</span>
                  <ArrowRight className="w-4 h-4 text-[#2E7D32]" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
