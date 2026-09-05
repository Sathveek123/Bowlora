import React from 'react';
import { ArrowRight, HeartPulse, Gift, Users } from 'lucide-react';

export const PROMO_CARDS = [
  {
    id: 'pcos-launch',
    icon: HeartPulse,
    badge: '🌸 SPECIAL LAUNCH',
    title: 'Jaipur Women\'s Health & PCOS Nutrition Drive',
    subtitle: 'Get a free 1-on-1 Dietitian Consultation with any 15-Day or 28-Day Plan purchase this month.',
    cta: 'Claim Free Consultation',
    link: '#plans',
    bgClass: 'bg-[#4A5D2A]/15 border border-[#B08D57]/40',
  },
  {
    id: 'taster-box',
    icon: Gift,
    badge: '🎁 SPECIAL OFFER',
    title: 'Try the 3-Day Reset Trial Box at ₹1,199',
    subtitle: 'Experience zero-prep, chef-crafted healthy bowls delivered straight to your door before commitment.',
    cta: 'Order Taster Box',
    link: '#plans',
    bgClass: 'bg-[#7A5A2A]/15 border border-[#B08D57]/40',
  },
  {
    id: 'referral-perk',
    icon: Users,
    badge: '🌱 COMMUNITY PERK',
    title: 'Refer a Friend, Get 2 Free Meals',
    subtitle: 'Share the healthy lifestyle! When your friend subscribes to any plan, both of you get 2 extra meals added.',
    cta: 'Share via WhatsApp',
    link: 'https://wa.me/919119222601?text=Hi!%20I%20want%20to%20refer%20a%20friend%20to%20Bowlora.',
    bgClass: 'bg-[#2D3423] border border-[#B08D57]/40',
  }
];

export const PromoHub: React.FC = () => {
  return (
    <section className="py-16 dark-section grain-overlay text-[#F5F1E8] border-t border-[#3D4530]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <span className="font-accent text-xs font-bold uppercase tracking-[3px] text-[#B08D57]">
              COMMUNITY & PROMO HUB
            </span>
            <h3 className="font-display font-semibold text-2xl sm:text-3xl text-[#F5F1E8] mt-1">
              Special Offers & New Launches
            </h3>
          </div>
          <span className="text-xs font-accent text-[#C9A876]/80 italic uppercase tracking-wider">
            Updated weekly for Jaipur subscribers
          </span>
        </div>

        {/* Promo Grid with Distinct Card Icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROMO_CARDS.map((promo) => {
            const Icon = promo.icon;
            return (
              <div
                key={promo.id}
                className={`rounded-[20px] p-7 flex flex-col justify-between hover:shadow-[0_12px_32px_rgba(176,141,87,0.15)] hover:-translate-y-1 transition-all duration-300 group ${promo.bgClass}`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-block px-3 py-1 rounded-full font-accent text-[10px] font-extrabold uppercase tracking-wider bg-[#B08D57]/20 border border-[#B08D57]/40 text-[#C9A876] shadow-sm">
                      {promo.badge}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#B08D57]/15 border border-[#B08D57]/30 text-[#C9A876] flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h4 className="font-display font-semibold text-xl text-[#F5F1E8] leading-snug group-hover:text-[#C9A876] transition-colors">
                    {promo.title}
                  </h4>

                  <p className="font-body text-xs sm:text-sm text-[#D8D2C0] leading-relaxed">
                    {promo.subtitle}
                  </p>
                </div>

                <div className="pt-6">
                  <a
                    href={promo.link}
                    className="inline-flex items-center gap-2 font-accent text-xs font-bold uppercase tracking-wider text-[#C9A876] hover:text-[#F5F1E8] transition-colors"
                  >
                    <span>{promo.cta}</span>
                    <ArrowRight className="w-4 h-4 text-[#B08D57]" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
