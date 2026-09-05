import React from 'react';
import { OrderCTA } from '../common/OrderCTA';
import { Flame, ChevronDown, HeartPulse, Sparkles, ChefHat } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#141810] via-[#1A1F14] to-[#141810] text-[#F5F1E8] pt-32 sm:pt-36 pb-16 flex flex-col justify-between overflow-hidden">
      {/* Background Radial Gold & Olive Ambient Lighting */}
      <div className="absolute top-1/3 right-5 lg:right-20 w-[600px] h-[600px] bg-[#B08D57]/15 rounded-full blur-[140px] pointer-events-none -z-0 animate-pulse-slow" />
      <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-[#4A5D2A]/20 rounded-full blur-[120px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex items-center relative z-10 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">

          {/* ── LEFT COLUMN (55% width on desktop) ── */}
          <div className="lg:col-span-7 flex flex-col items-start gap-7">

            {/* Prominent Gold Eyebrow Tag */}
            <div className="inline-flex items-center gap-2.5 bg-[#B08D57]/15 border-2 border-[#B08D57]/60 px-5 py-2.5 rounded-full font-accent text-xs uppercase tracking-[2.5px] text-[#C9A876] font-bold shadow-[0_0_24px_rgba(176,141,87,0.2)]">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A876] fill-[#C9A876]" />
              <span>Jaipur's Fresh Meal Subscription</span>
            </div>

            {/* Dramatic Primary Headline (56px to 84px scale) */}
            <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-[72px] xl:text-[80px] text-[#F5F1E8] leading-[1.04] tracking-tight max-w-2xl">
              Healthy Food,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A876] via-[#B08D57] to-[#7A9450]">
                Finally Made Easy.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="font-body text-lg sm:text-xl text-[#D8D2C0] max-w-xl leading-relaxed">
              Chef-crafted, macro-counted meals delivered fresh daily across Jaipur. No prep, no guesswork — just delicious food that fuels your routine.
            </p>

            {/* Editorial Brand Tagline */}
            <div className="flex items-center gap-3 pt-1">
              <div className="w-12 h-[1px] bg-[#B08D57]" />
              <span className="font-display italic text-base sm:text-lg text-[#C9A876] font-medium">
                "Junk is everywhere. Health is rare. That's why Bowlora."
              </span>
            </div>

            {/* PCOS Priority Audience Direct Link */}
            <a
              href="#goals"
              className="group inline-flex items-center gap-2.5 text-sm sm:text-base font-body text-[#7A9450] hover:text-[#C9A876] transition-colors pt-1"
            >
              <div className="w-8 h-8 rounded-full bg-[#B08D57]/20 border border-[#B08D57]/40 flex items-center justify-center shrink-0">
                <HeartPulse className="w-4 h-4 text-[#C9A876]" />
              </div>
              <span className="font-semibold underline underline-offset-4 decoration-[#7A9450]/40 group-hover:decoration-[#C9A876]">
                Looking for PCOS/PCOD-friendly meals? Explore custom nutrition →
              </span>
            </a>

            {/* Proportional High-Impact CTA Button Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-3">
              <OrderCTA
                label="SUBSCRIBE NOW"
                destination="internal_route"
                destinationValue="#plans"
                context="Healthy Subscription Meal Plan"
                size="large"
                style="filled"
                className="py-4.5 px-9 font-accent text-xs sm:text-sm font-bold uppercase tracking-[2px] shadow-[0_12px_40px_rgba(74,93,42,0.4)] hover:scale-105 transition-all"
              />

              <OrderCTA
                label="EXPLORE OUR MENU"
                destination="internal_route"
                destinationValue="#menu"
                context="Chef-Crafted Healthy Menu"
                size="large"
                style="outline"
                showIcon={false}
                className="py-4.5 px-9 font-accent text-xs sm:text-sm font-bold uppercase tracking-[2px] border-2 border-[#B08D57]/60 hover:bg-[#B08D57]/10 text-[#F5F1E8] hover:scale-105 transition-all"
              />
            </div>

            {/* Factual Trust Indicators */}
            <div className="pt-8 border-t border-[#2E3324] w-full flex flex-wrap items-center gap-6 font-accent text-xs text-[#D8D2C0]/80 uppercase tracking-wider font-semibold">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#B08D57]" />
                <span>Freshly Prepared Daily</span>
              </div>
              <span className="text-[#2E3324] hidden sm:inline">•</span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#7A9450]" />
                <span>Macro-Counted Nutrition</span>
              </div>
              <span className="text-[#2E3324] hidden sm:inline">•</span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#B08D57]" />
                <span>Jaipur Doorstep Delivery</span>
              </div>
            </div>

          </div>

          {/* ── RIGHT COLUMN (Large 540px Circular Food Masterpiece) ── */}
          <div className="lg:col-span-5 flex items-center justify-center relative pt-8 lg:pt-0">

            {/* Massive Ambient Gold Glow behind bowl */}
            <div className="absolute inset-0 flex items-center justify-center -z-10">
              <div className="w-[360px] h-[360px] sm:w-[480px] sm:h-[480px] bg-[#B08D57]/25 rounded-full blur-[100px]" />
            </div>

            {/* Hero Main Circular Bowl Display */}
            <div className="relative z-10">
              <div className="w-[320px] sm:w-[420px] lg:w-[460px] xl:w-[500px] aspect-square rounded-full border-4 border-[#B08D57] shadow-[0_24px_80px_rgba(0,0,0,0.9)] bg-[#1F2418] relative group overflow-hidden">
                <img
                  src="/images/1.jpeg"
                  alt="Bowlora Chef-Crafted Healthy Meal Bowl"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141810]/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Chef-Crafted Badge (Top-Left) */}
              <div className="absolute -top-4 -left-4 sm:-left-8 z-20 bg-[#1F2418]/95 backdrop-blur-xl border-2 border-[#B08D57] p-3.5 sm:p-4 rounded-2xl shadow-2xl flex items-center gap-3 min-w-[190px]">
                <div className="w-10 h-10 rounded-full bg-[#B08D57]/20 border border-[#B08D57] text-[#C9A876] flex items-center justify-center shrink-0">
                  <ChefHat className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-accent uppercase text-[#B08D57] font-bold tracking-wider">Chef-Crafted</div>
                  <div className="text-xs font-display font-semibold text-[#F5F1E8]">Jaipur Kitchen</div>
                </div>
              </div>

              {/* Floating Macro Nutrition Card (Bottom-Right) */}
              <div className="absolute -bottom-5 -right-4 sm:-right-8 z-20 bg-[#1F2418]/95 backdrop-blur-xl border-2 border-[#B08D57] p-4 rounded-2xl shadow-2xl flex items-center gap-3.5 min-w-[230px]">
                <div className="w-11 h-11 rounded-full bg-[#4A5D2A] text-[#F5F1E8] flex items-center justify-center shrink-0 shadow-md">
                  <Flame className="w-5 h-5 text-[#C9A876]" />
                </div>
                <div>
                  <div className="text-[10px] font-accent uppercase text-[#C9A876] font-bold tracking-wider">Macro Verified</div>
                  <div className="text-xs sm:text-sm font-accent font-bold text-[#F5F1E8] whitespace-nowrap">🔥 420 kcal · 32g Protein</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Desktop Scroll Indicator */}
      <div className="hidden lg:flex flex-col items-center justify-center gap-1.5 text-[#D8D2C0]/70 font-accent text-[11px] tracking-[2px] uppercase z-10 pt-4">
        <span>Scroll to explore</span>
        <a href="#why-us" className="text-[#C9A876] animate-bounce-slow">
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};
