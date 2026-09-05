import React from 'react';
import { Sprout, ChefHat, BarChart3, Bike, Utensils } from 'lucide-react';

const pillars = [
  {
    icon: Sprout,
    title: 'Freshly Prepared',
    desc: 'Cooked in small batches every single morning — never frozen, never sitting around.',
  },
  {
    icon: ChefHat,
    title: 'Chef Crafted',
    desc: 'Every recipe built by real chefs who care about flavor as much as function.',
  },
  {
    icon: BarChart3,
    title: 'Macro Counted',
    desc: 'Calories, protein, carbs and fats — calculated for every single meal, every time.',
  },
  {
    icon: Bike,
    title: 'Conveniently Delivered',
    desc: 'Straight to your door across Jaipur, on a schedule that fits your life.',
  },
  {
    icon: Utensils,
    title: 'No Compromise on Taste',
    desc: "Healthy doesn't mean boring. If it's not craveable, it doesn't make the menu.",
  },
];

export const WhyBowlora: React.FC = () => {
  return (
    <section id="why-us" className="py-24 dark-section grain-overlay text-[#F5F1E8] border-t border-[#3D4530]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-accent text-xs font-bold uppercase tracking-[3px] text-[#B08D57]">
            WHY BOWLORA
          </span>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-[#F5F1E8] leading-tight mt-3">
            Five reasons your body will thank you.
          </h2>
        </div>

        {/* 5 Pillar Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="bg-[#2D3423] border border-[#3D4530] rounded-[20px] p-8 shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:border-[#B08D57]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4 group"
              >
                {/* 56px Circular Icon Badge */}
                <div className="w-14 h-14 rounded-full bg-[#4A5D2A]/20 border border-[#7A9450]/30 text-[#7A9450] flex items-center justify-center group-hover:bg-[#4A5D2A] group-hover:text-[#F5F1E8] transition-colors shrink-0">
                  <Icon className="w-6 h-6 stroke-[1.5]" />
                </div>

                <div>
                  <h3 className="font-body font-bold text-[17px] text-[#F5F1E8] mb-2">{p.title}</h3>
                  {/* 24px Gold Underline Accent */}
                  <div className="w-6 h-[1px] bg-[#B08D57] mb-3" />
                  <p className="font-body text-sm text-[#D8D2C0] leading-relaxed">{p.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
