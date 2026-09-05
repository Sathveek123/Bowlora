import React from 'react';
import { Ban, Scale, Sprout, BarChart3, AlertTriangle, Flame } from 'lucide-react';

export const NutritionPhilosophy: React.FC = () => {
  const cards = [
    {
      icon: Ban,
      title: 'Zero Ultra-Processed Foods',
      desc: 'No packaged sauces, no artificial flavorings, no MSG shortcuts. Our gravy and dressings are made from real vegetables every single day.'
    },
    {
      icon: Scale,
      title: 'Macro-Balanced Every Meal',
      desc: 'Each dish is calibrated for an optimal ratio of complex carbohydrates, lean proteins, and healthy fats matched to your goal.'
    },
    {
      icon: Sprout,
      title: 'Seasonal & Local Produce',
      desc: 'We update our recipes every 30 days based on fresh seasonal produce from local Jaipur markets. Fresher veggies mean more micronutrients.'
    },
    {
      icon: BarChart3,
      title: 'Full Calorie Transparency',
      desc: 'Every meal comes with a WhatsApp-sent nutrition breakdown: exact calories, protein, carbs, and fats. Zero secrets.'
    },
    {
      icon: AlertTriangle,
      title: 'Allergy & Intolerance Ready',
      desc: 'Gluten-free, dairy-free, nut-free, or strictly vegan — specify your requirements at signup and we customize your box.'
    },
    {
      icon: Flame,
      title: 'Freshly Cooked, Not Reheated',
      desc: 'We cook in small batches starting at 5:30 AM. Your meal is never reheated, never frozen, and never sitting in storage.'
    }
  ];

  const ingredients = [
    '🥬 Spinach', '🥑 Avocado', '🍋 Lemon', '🫘 Chickpeas', '🍚 Brown Rice',
    '🥦 Broccoli', '🫚 Cold-Pressed Oil', '🌿 Coriander', '🥕 Carrots', '🧅 Red Onion',
    '🫛 Green Peas', '🫐 Blueberries', '🍓 Strawberries', '🌾 Quinoa', '🥒 Cucumber',
    '🧄 Garlic', '🥚 Free-Range Eggs', '🥜 Toasted Almonds', '🍯 Raw Honey'
  ];

  return (
    <section className="py-24 bg-[#1B1F16] text-[#F5F1E8] border-t border-[#2E3324]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Heading Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="font-accent text-xs font-bold uppercase tracking-[3px] text-[#B08D57]">
            OUR FOOD PHILOSOPHY
          </span>
          <h2 className="font-display font-semibold text-3xl sm:text-5xl text-[#F5F1E8] leading-tight">
            "Food should heal, fuel, and delight — in that order."
          </h2>
          <p className="font-body text-base sm:text-lg text-[#D8D2C0] leading-relaxed">
            We believe nutrition isn't about restriction — it's about addition. Adding more fiber, more color, more real protein, and more joy into your daily life.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-[#1F2418] border border-[#2E3324] rounded-[20px] p-8 shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:border-[#B08D57]/50 hover:-translate-y-1.5 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#4A5D2A]/20 border border-[#7A9450]/30 text-[#C9A876] flex items-center justify-center mb-6 group-hover:bg-[#4A5D2A] group-hover:text-[#F5F1E8] transition-colors duration-300">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-body font-bold text-xl text-[#F5F1E8] mb-3">
                  {card.title}
                </h3>
                <p className="font-body text-sm sm:text-base text-[#D8D2C0] leading-relaxed">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>

      {/* Full-width Ingredient Parade Band */}
      <div className="w-full bg-[#1F2418] py-8 border-y border-[#2E3324] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-3 text-center">
          <span className="font-accent text-xs font-semibold uppercase tracking-widest text-[#B08D57]">
            🌱 100% Real Ingredients Sourced Daily
          </span>
        </div>
        <div className="flex gap-4 overflow-x-auto no-scrollbar py-2 px-8 animate-marquee">
          {ingredients.concat(ingredients).map((ing, i) => (
            <span
              key={i}
              className="inline-flex items-center px-4 py-2 bg-[#141810] rounded-full border border-[#2E3324] text-sm font-medium text-[#F5F1E8] whitespace-nowrap shadow-sm hover:border-[#B08D57]/50 hover:bg-[#1F2418] transition-all cursor-default"
            >
              {ing}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
