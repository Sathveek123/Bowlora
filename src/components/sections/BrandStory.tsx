import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';

interface BrandStoryProps {
  onOpenAboutModal?: () => void;
}

export const BrandStory: React.FC<BrandStoryProps> = ({ onOpenAboutModal }) => {
  return (
    <section id="story" className="py-24 sm:py-32 bg-[#F5F1E8] text-[#1F2418]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column (45% Image Column) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <div className="rounded-[24px] overflow-hidden border border-[#DDD6C4] shadow-sm bg-white aspect-[4/3]">
              <img
                src="/images/4.jpeg"
                alt="Chef preparing fresh ingredients in Jaipur kitchen"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-display italic text-xs text-[#7A7868] text-center lg:text-left">
              Prepared fresh in our Jaipur kitchen, every morning.
            </span>
          </div>

          {/* Right Column (55% Story Text Column) */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">

            {/* Eyebrow label */}
            <span className="font-accent text-xs font-bold uppercase tracking-[3px] text-[#B08D57]">
              OUR PHILOSOPHY
            </span>

            {/* Headline */}
            <h2 className="font-display font-semibold text-3xl sm:text-[44px] text-[#1F2418] leading-[1.2]">
              Healthy food that actually tastes good.
            </h2>

            {/* Story Paragraphs */}
            <div className="space-y-4 font-body text-base sm:text-[17px] text-[#4A4A3E] leading-[1.8] max-w-xl">
              <p>
                We built Bowlora because healthy eating in Jaipur felt like a trade-off — you could have convenience, or you could have nutrition, but rarely both. So we set out to fix that.
              </p>
              <p>
                Every Bowlora meal is chef-crafted first, macro-counted second — because food you don't enjoy is food you won't stick to. No bland diet food. No boring bowls. Just real meals that happen to be good for you.
              </p>
            </div>

            {/* Practical Routine Callout Box */}
            <div className="bg-[#EFEADD] rounded-xl p-4 px-5 border border-[#DDD6C4] max-w-xl">
              <p className="font-body italic text-sm text-[#4A4A3E]">
                "Practical. Tasty. Sustainable — not a fad, a routine you can actually keep."
              </p>
            </div>

            {/* Action Buttons / Links */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {onOpenAboutModal && (
                <button
                  onClick={onOpenAboutModal}
                  className="inline-flex items-center gap-2 bg-[#4A5D2A] text-[#F5F1E8] px-6 py-3 rounded-full font-accent text-xs font-bold uppercase tracking-wider hover:bg-[#2E3A1A] transition-all shadow-sm"
                >
                  <BookOpen className="w-4 h-4 text-[#C9A876]" />
                  <span>Read Our Full Story & Philosophy</span>
                </button>
              )}
              <a
                href="#menu"
                className="group inline-flex items-center gap-2 font-body text-base font-semibold text-[#4A5D2A] hover:text-[#2E3A1A] transition-colors"
              >
                <span className="underline underline-offset-4 decoration-[#4A5D2A]/40 group-hover:decoration-[#4A5D2A]">
                  Explore our meals
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

