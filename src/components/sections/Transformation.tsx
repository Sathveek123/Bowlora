import React from 'react';
import { ArrowRight, CheckCircle2, TrendingUp, Zap, Moon } from 'lucide-react';

export const Transformation: React.FC = () => {
  const stories = [
    {
      name: 'Rishika Agarwal',
      meta: '28 yrs • Jaipur',
      plan: '28-DAY LIFESTYLE PLAN • 8 WEEKS',
      weight: '5.2 kg',
      energy: '⬆️ Significantly Higher',
      sleep: '😴 Much Better',
      quote: "I stopped reaching for biscuits at 3 PM. Bowlora's portions actually keep me full all afternoon. I didn't think that was possible with healthy food.",
    },
    {
      name: 'Mayank Joshi',
      meta: '34 yrs • Jaipur',
      plan: '15-DAY COPPER PLAN • 6 WEEKS',
      weight: '3.8 kg',
      energy: '⚡ High All Day',
      sleep: '😴 Deep & Restful',
      quote: "As someone who travels for work, I used to eat terribly on weekdays. Bowlora's subscription means I don't think about food — it shows up prepped and delicious.",
    },
    {
      name: 'Tanvi Bhatnagar',
      meta: '24 yrs • Jaipur',
      plan: '3-DAY MINI PLAN • 4 WEEKS',
      weight: '2.1 kg',
      energy: '🌿 Noticeable Boost',
      sleep: '✨ Stable & Consistent',
      quote: "I started with just the smoothie bowls because they looked pretty on Instagram. Four weeks later, I am genuinely hooked on clean eating.",
    },
  ];

  return (
    <section className="py-24 bg-white border-t border-[#E8E8E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="font-body text-[11px] font-bold uppercase tracking-[4px] text-[#2E7D32]">
            REAL RESULTS
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-[#1A1A1A] leading-tight">
            "What happens when you <br className="hidden sm:inline" />
            eat right for 30 days?"
          </h2>
          <p className="font-body text-base text-[#666666]">
            These aren't sponsored stories. These are real Bowlora subscribers in Jaipur who gave consistent nutrition a real shot.
          </p>
        </div>

        {/* 3 Story Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stories.map((story, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[24px] overflow-hidden shadow-[0_6px_28px_rgba(0,0,0,0.06)] border border-[#E8E8E8] flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Top Accent Bar */}
              <div className="h-2 bg-[#2E7D32] w-full" />

              <div className="p-8 space-y-6">
                <div>
                  <h3 className="font-body font-bold text-xl text-[#1A1A1A]">{story.name}</h3>
                  <div className="font-body text-xs text-[#777777]">{story.meta}</div>
                  <div className="font-accent text-[11px] font-bold text-[#2E7D32] mt-1 tracking-wide">
                    {story.plan}
                  </div>
                </div>

                {/* Stats 2x2 Grid */}
                <div className="grid grid-cols-2 gap-3 p-4 bg-[#F0F7EE] rounded-2xl border border-[#C8D8C0]">
                  <div>
                    <div className="text-[10px] font-accent text-[#777777] uppercase">Weight Lost</div>
                    <div className="font-display font-bold text-2xl text-[#2E7D32]">{story.weight}</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-accent text-[#777777] uppercase">Energy</div>
                    <div className="font-body font-semibold text-xs text-[#1A1A1A] mt-1">{story.energy}</div>
                  </div>
                  <div className="col-span-2 pt-2 border-t border-[#C8D8C0]/50">
                    <div className="text-[10px] font-accent text-[#777777] uppercase">Sleep Quality</div>
                    <div className="font-body font-semibold text-xs text-[#1A1A1A]">{story.sleep}</div>
                  </div>
                </div>

                <p className="font-body italic text-sm text-[#444444] leading-relaxed">
                  "{story.quote}"
                </p>
              </div>

              <div className="p-8 pt-0 flex items-center justify-between font-accent text-xs text-[#2E7D32] font-semibold">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#A8D832]" />
                  Verified Jaipur Subscriber
                </span>
                <span>⭐⭐⭐⭐⭐</span>
              </div>
            </div>
          ))}
        </div>

        {/* Centered CTA */}
        <div className="text-center space-y-4 pt-4">
          <h3 className="font-display font-bold text-2xl text-[#1A1A1A]">
            Ready to write your own story?
          </h3>
          <div>
            <a
              href="#plans"
              className="inline-flex items-center gap-3 bg-[#2E7D32] text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-[#1B5E20] hover:scale-105 transition-all duration-300 shadow-lg shadow-[#2E7D32]/25"
            >
              <span>Start Your 30-Day Journey</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
