import React from 'react';
import { OrderCTA } from '../common/OrderCTA';
import { Flame, ChevronDown, HeartPulse } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-[#141810] text-[#F5F1E8] pt-36 pb-20 flex flex-col justify-between overflow-hidden">
      {/* Background Radial Olive Glow (#3A4A22) */}
      <div className="absolute top-1/4 right-10 w-[550px] h-[550px] bg-[#3A4A22] rounded-full opacity-35 blur-[120px] pointer-events-none -z-0" />
      <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-[#2E3A1A] rounded-full opacity-20 blur-[100px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex items-center relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-center w-full">

          {/* ── LEFT COLUMN (55% width on desktop) ── */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">

            {/* Eyebrow tag */}
            <div className="inline-flex items-center gap-2 bg-[#4A5D2A]/20 border border-[#B08D57]/40 px-4 py-2 rounded-full font-accent text-xs uppercase tracking-[2px] text-[#C9A876] shadow-sm">
              <span>🥗 Jaipur's Fresh Meal Subscription</span>
            </div>

            {/* Primary Headline */}
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-[64px] text-[#F5F1E8] leading-[1.12] tracking-tight max-w-2xl">
              Healthy Food,<br />
              <span className="text-[#7A9450]">Finally Made Easy.</span>
            </h1>

            {/* Sub-headline */}
            <p className="font-body text-base sm:text-lg text-[#D8D2C0] max-w-xl leading-relaxed">
              Fresh, chef-crafted, macro-counted meals delivered across Jaipur. No guesswork, no compromise — just food that actually works for your goals.
            </p>

            {/* Quiet Brand Tagline Signature */}
            <div className="flex items-center gap-3 pt-1">
              <div className="w-10 h-[1px] bg-[#B08D57]/60" />
              <span className="font-display italic text-sm sm:text-base text-[#C9A876]">
                "Junk is everywhere. Health is rare. That's why Bowlora."
              </span>
            </div>

            {/* PCOS Priority Audience Callout Link */}
            <a
              href="#goals"
              className="group inline-flex items-center gap-2 text-xs sm:text-sm font-body text-[#7A9450] hover:text-[#C9A876] transition-colors pt-1"
            >
              <HeartPulse className="w-4 h-4 text-[#B08D57]" />
              <span className="underline underline-offset-4 decoration-[#7A9450]/40 group-hover:decoration-[#C9A876]">
                Looking for PCOS/PCOD-friendly meals? → Explore this collection
              </span>
            </a>

            {/* CTA Button Row using OrderCTA Component */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              <OrderCTA
                label="SUBSCRIBE NOW"
                destination="internal_route"
                destinationValue="#plans"
                context="Healthy Subscription Meal Plan"
                size="large"
                style="filled"
              />

              <OrderCTA
                label="EXPLORE OUR MEALS"
                destination="internal_route"
                destinationValue="#menu"
                context="Chef-Crafted Healthy Menu"
                size="large"
                style="outline"
                showIcon={false}
              />
            </div>

            {/* Factual Trust Strip */}
            <div className="pt-6 border-t border-[#2E3324] w-full flex flex-wrap items-center gap-6 font-accent text-xs text-[#A8A292]">
              <div className="flex items-center gap-2">
                <span className="text-base">🥗</span>
                <span>Freshly Prepared Daily</span>
              </div>
              <span className="text-[#2E3324] hidden sm:inline">•</span>
              <div className="flex items-center gap-2">
                <span className="text-base">💪</span>
                <span>Macro-Counted Meals</span>
              </div>
              <span className="text-[#2E3324] hidden sm:inline">•</span>
              <div className="flex items-center gap-2">
                <span className="text-base">📍</span>
                <span>Delivered Across Jaipur</span>
              </div>
            </div>

          </div>

          {/* ── RIGHT COLUMN (45% width visual composition) ── */}
          <div className="lg:col-span-5 flex items-center justify-center relative">

            {/* Radial glow background behind image */}
            <div className="absolute inset-0 flex items-center justify-center -z-10">
              <div className="w-80 h-80 sm:w-96 sm:h-96 bg-[#3A4A22]/50 rounded-full blur-3xl" />
            </div>

            {/* Photo Container */}
            <div className="relative z-10">
              <div className="w-[300px] sm:w-[360px] aspect-[4/5] rounded-[24px] overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.6)] border-2 border-[#2E3324] bg-[#1F2418]">
                <img
                  src="/images/1.jpeg"
                  alt="Bowlora Chef-Crafted Meal Bowl"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141810]/70 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Macro Micro-Card (Bottom-Left) */}
              <div className="absolute -bottom-5 -left-6 bg-[#F5F1E8] text-[#1F2418] px-4 py-3 rounded-2xl shadow-xl border border-[#DDD6C4] flex items-center gap-3 z-20 max-w-[210px]">
                <div className="w-9 h-9 rounded-full bg-[#3A4A22] text-[#F5F1E8] flex items-center justify-center shrink-0">
                  <Flame className="w-4.5 h-4.5 text-[#C9A876]" />
                </div>
                <div>
                  <div className="text-[10px] font-accent uppercase text-[#7A7868] font-bold tracking-wider">Nutrition Label</div>
                  <div className="text-xs font-accent font-bold text-[#1F2418] whitespace-nowrap">🔥 420 kcal · 32g Protein</div>
                </div>
              </div>

              {/* Floating Circular Badge (Top-Right) */}
              <div className="absolute -top-4 -right-5 z-20 bg-[#2E3A1A] border-2 border-[#B08D57] rounded-full p-3 shadow-xl text-center flex flex-col items-center justify-center w-20 h-20">
                <span className="font-display italic text-[11px] text-[#F5F1E8] leading-tight">Chef</span>
                <span className="font-accent text-[9px] font-bold uppercase tracking-wider text-[#C9A876]">Crafted</span>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Desktop Scroll Indicator */}
      <div className="hidden lg:flex flex-col items-center justify-center gap-1 text-[#A8A292] font-accent text-[11px] tracking-wider uppercase mt-8 z-10">
        <span>Scroll to explore</span>
        <a href="#why-us" className="text-[#C9A876] animate-bounce-slow">
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};
