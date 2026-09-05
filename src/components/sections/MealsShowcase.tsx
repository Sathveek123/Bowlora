import React, { useState } from 'react';
import { ArrowRight, Sparkles, HeartPulse } from 'lucide-react';
import { CategoryMenuModal } from '../meals/CategoryMenuModal';

const categories = [
  {
    id: 'bowls',
    name: 'Bowls',
    desc: 'Signature bowls, rice & protein bowls',
    image: '/images/1.jpeg',
    featured: true,
  },
  {
    id: 'high-protein',
    name: 'High-Protein Meals',
    desc: 'Protein-forward meals for active routines',
    image: '/images/2.jpeg',
    featured: false,
  },
  {
    id: 'salads',
    name: 'Salads & Fresh Plates',
    desc: 'Fresh salads, chana & sprout bowls',
    image: '/images/3.jpeg',
    featured: false,
  },
  {
    id: 'wraps',
    name: 'Wraps & Sandwiches',
    desc: 'Healthy wraps & compact meal options',
    image: '/images/4.jpeg',
    featured: false,
  },
  {
    id: 'breakfast',
    name: 'Breakfast & Brunch',
    desc: 'Morning bowls & fresh starter plates',
    image: '/images/5.jpeg',
    featured: false,
  },
  {
    id: 'smart-snacks',
    name: 'Smart Snacks',
    desc: 'Better-for-you snacks & small bites',
    image: '/images/6.jpeg',
    featured: false,
  },
  {
    id: 'smoothies',
    name: 'Smoothies & Healthy Treats',
    desc: 'Protein smoothies & healthier desserts',
    image: '/images/1.jpeg',
    featured: false,
  },
];

export const MealsShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<{ name: string; desc: string } | null>(null);

  return (
    <section id="menu" className="py-24 sm:py-32 dark-section grain-overlay text-[#F5F1E8] border-t border-[#3D4530]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="font-accent text-xs font-bold uppercase tracking-[3px] text-[#B08D57]">
            OUR MENU
          </span>
          <h2 className="font-display font-semibold text-3xl sm:text-[44px] text-[#F5F1E8] leading-tight">
            Something fresh for every craving.
          </h2>
          <p className="font-body text-base sm:text-lg text-[#D8D2C0]">
            From protein bowls to smart snacks — explore meals built around how you actually eat.
          </p>
        </div>

        {/* Asymmetric 7-Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => setSelectedCategory({ name: cat.name, desc: cat.desc })}
              className={`group relative rounded-[20px] overflow-hidden border border-[#2E3324] hover:border-[#B08D57]/60 transition-all duration-500 cursor-pointer ${
                cat.featured ? 'md:col-span-2 aspect-[16/9] md:aspect-[21/9]' : 'aspect-[4/5]'
              }`}
            >
              {/* Background Food Photography */}
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#141810]/90 via-[#141810]/30 to-transparent" />

              {/* Signature Pill Badge on Bowls */}
              {cat.featured && (
                <div className="absolute top-5 left-5 bg-[#B08D57]/20 backdrop-blur-md border border-[#B08D57]/40 px-3.5 py-1.5 rounded-full font-accent text-xs uppercase tracking-wider text-[#C9A876] font-bold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#C9A876]" />
                  <span>★ Signature</span>
                </div>
              )}

              {/* Bottom Content Overlaid */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                <div>
                  <h3 className="font-display font-semibold text-xl sm:text-2xl text-[#F5F1E8] mb-1">
                    {cat.name}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-[#D8D2C0]">
                    {cat.desc}
                  </p>
                </div>
                <div className="w-9 h-9 rounded-full bg-[#141810]/60 border border-[#B08D57]/40 text-[#C9A876] flex items-center justify-center group-hover:bg-[#4A5D2A] group-hover:text-white group-hover:translate-x-1 transition-all shrink-0 ml-3">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* PCOS/PCOD Discoverability Banner Strip */}
        <div className="bg-[#4A5D2A]/15 border border-[#B08D57]/30 rounded-2xl p-5 sm:p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#4A5D2A] text-[#F5F1E8] flex items-center justify-center shrink-0">
              <HeartPulse className="w-5 h-5 text-[#C9A876]" />
            </div>
            <span className="font-body font-semibold text-sm sm:text-base text-[#F5F1E8]">
              Eating for PCOS/PCOD? We've got a meal collection built for you.
            </span>
          </div>
          <button
            onClick={() => setSelectedCategory({ name: 'PCOS/PCOD Friendly 🌸', desc: 'Meals thoughtfully built around hormonal balance and blood sugar stability' })}
            className="inline-flex items-center gap-1.5 font-body text-xs sm:text-sm font-bold text-[#7A9450] hover:text-[#C9A876] transition-colors whitespace-nowrap"
          >
            <span>View collection →</span>
          </button>
        </div>

        {/* View Full Menu CTA */}
        <div className="text-center">
          <button
            onClick={() => setSelectedCategory({ name: 'All', desc: 'Browse our complete chef-crafted healthy menu' })}
            className="inline-flex items-center gap-2 border-1.5 border-[#B08D57] text-[#C9A876] px-8 py-4 rounded-full font-accent text-xs uppercase tracking-[1.5px] font-bold hover:bg-[#B08D57]/15 hover:text-[#F5F1E8] transition-all"
          >
            <span>VIEW FULL MENU</span>
          </button>
        </div>

      </div>

      {/* Category Menu View Modal */}
      <CategoryMenuModal
        categoryName={selectedCategory?.name || null}
        roleDescription={selectedCategory?.desc}
        onClose={() => setSelectedCategory(null)}
      />
    </section>
  );
};
