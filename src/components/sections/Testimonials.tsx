import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Priya S.',
    city: 'Jaipur',
    quote: "I finally stopped skipping meals because I didn't want to cook. Bowlora just shows up and it's actually good.",
    initial: 'P',
  },
  {
    name: 'Rohan K.',
    city: 'Jaipur',
    quote: 'The macro breakdown on every meal makes tracking so much easier. No more guessing.',
    initial: 'R',
  },
  {
    name: 'Ananya V.',
    city: 'Jaipur',
    quote: 'Ordered the trial plan not expecting much — ended up subscribing for the month.',
    initial: 'A',
  },
  {
    name: 'Vikram M.',
    city: 'Jaipur',
    quote: "Finally a healthy meal option that doesn't taste like punishment.",
    initial: 'V',
  },
  {
    name: 'Sneha G.',
    city: 'Jaipur',
    quote: 'Delivery has been consistent every single time. That reliability matters more than people think.',
    initial: 'S',
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#141810] text-[#F5F1E8] border-t border-[#2E3324] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center space-y-3">
        <span className="font-accent text-xs font-bold uppercase tracking-[3px] text-[#B08D57]">
          TESTIMONIALS
        </span>
        <h2 className="font-display font-semibold text-3xl sm:text-[42px] text-[#F5F1E8] leading-tight">
          What Our Customers Say
        </h2>
      </div>

      {/* Infinite Horizontal Marquee Carousel */}
      <div className="w-full overflow-hidden relative">
        <div className="animate-marquee-slow flex gap-6 py-4">
          {reviews.concat(reviews).map((r, idx) => (
            <div
              key={idx}
              className="w-[320px] sm:w-[360px] bg-[#1F2418] border border-[#2E3324] rounded-[20px] p-7 shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:border-[#B08D57]/40 transition-all duration-300 flex-shrink-0 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header: 5 Stars + Quote Mark */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#B08D57] fill-[#B08D57]" />
                    ))}
                  </div>
                  <span className="font-display text-4xl text-[#B08D57]/30 leading-none">“</span>
                </div>

                {/* Review Text */}
                <p className="font-body italic text-sm text-[#D8D2C0] leading-relaxed">
                  "{r.quote}"
                </p>
              </div>

              {/* Reviewer Details Row */}
              <div className="pt-6 border-t border-[#2E3324] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#4A5D2A] text-[#F5F1E8] font-display font-bold flex items-center justify-center text-sm shadow-sm shrink-0">
                  {r.initial}
                </div>
                <div>
                  <h4 className="font-body font-bold text-sm text-[#F5F1E8]">{r.name}</h4>
                  <div className="font-accent text-[11px] font-semibold text-[#B08D57] uppercase tracking-wider">
                    {r.city}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
