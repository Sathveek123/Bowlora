import React from 'react';
import { CHEFS_DATA } from '../../data/chefs';
import { Award } from 'lucide-react';

export const ChefProfiles: React.FC = () => {
  const marqueeText = '🌿 Freshly prepared every morning • 👨‍🍳 No shortcuts in our kitchen • 🥣 Real food, real hands • 🌱 Locally sourced daily • 🔥 Zero artificial flavors • ⭐ Nutrition-first always • ';

  return (
    <section className="py-24 bg-white border-t border-[#E8E8E8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="font-body text-[11px] font-bold uppercase tracking-[4px] text-[#2E7D32]">
            OUR KITCHEN TEAM
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-[#1A1A1A] leading-tight">
            "Real chefs. Real passion. <br className="hidden sm:inline" />
            Real food."
          </h2>
          <p className="font-body text-base text-[#666666]">
            Our kitchen isn't a factory. It's a team of passionate culinary artists in Jaipur who genuinely care about what goes into your body.
          </p>
        </div>

        {/* 3 Chef Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CHEFS_DATA.map((chef) => (
            <div
              key={chef.id}
              className="bg-white rounded-[24px] overflow-hidden shadow-[0_6px_28px_rgba(0,0,0,0.08)] border border-[#E8E8E8] hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Photo Container */}
                <div className="relative h-[280px] w-full overflow-hidden bg-[#F0F7EE]">
                  <img
                    src={chef.image}
                    alt={chef.name}
                    className="w-full h-full object-cover"
                  />

                  {/* Overlapping Floating Name Tag */}
                  <div className="absolute -bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-lg border border-[#E8E8E8]">
                    <h3 className="font-body font-bold text-lg text-[#1A1A1A] leading-tight">
                      {chef.name}
                    </h3>
                    <div className="font-body text-xs text-[#2E7D32] font-semibold mt-0.5">
                      {chef.role}
                    </div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 pt-8 space-y-4">
                  <p className="font-body text-sm text-[#555555] leading-relaxed">
                    {chef.bio}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {chef.specialties.map((spec) => (
                      <span
                        key={spec}
                        className="bg-[#F0F7EE] text-[#2E7D32] border border-[#C8D8C0] px-2.5 py-1 rounded-full text-[11px] font-body font-medium"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-[#F0F7EE] flex items-center justify-between font-accent text-xs text-[#A8D832] font-bold">
                <span className="flex items-center gap-1 text-[#2E7D32]">
                  <Award className="w-4 h-4" />
                  {chef.experience}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Marquee Strip */}
      <div className="w-full bg-[#1A1A1A] py-4 text-white overflow-hidden font-body text-sm tracking-wider">
        <div className="animate-marquee whitespace-nowrap opacity-90 flex gap-8">
          <span>{marqueeText}</span>
          <span>{marqueeText}</span>
          <span>{marqueeText}</span>
        </div>
      </div>
    </section>
  );
};
