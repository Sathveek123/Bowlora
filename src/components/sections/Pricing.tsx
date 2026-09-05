import React from 'react';
import { SUBSCRIPTION_PLANS } from '../../data/plans';
import { GOALS_DATA } from '../../data/goals';
import { MessageCircle, ShieldCheck, HeartPulse, Sparkles } from 'lucide-react';

interface PricingProps {
  selectedGoalSlug?: string | null;
  onClearGoalContext?: () => void;
}

export const Pricing: React.FC<PricingProps> = ({
  selectedGoalSlug,
  onClearGoalContext,
}) => {
  const activeGoal = GOALS_DATA.find((g) => g.slug === selectedGoalSlug);

  return (
    <section id="plans" className="py-24 sm:py-32 bg-[#141810] text-[#F5F1E8] border-t border-[#2E3324]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contextual Goal Banner (if arrived from Goal selection) */}
        {activeGoal ? (
          <div className="mb-12 p-6 rounded-2xl border border-[#B08D57] bg-[#1F2418] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#4A5D2A] text-[#F5F1E8] flex items-center justify-center shrink-0">
                <HeartPulse className="w-5 h-5 text-[#C9A876]" />
              </div>
              <div>
                <span className="font-accent text-[10px] uppercase tracking-wider text-[#C9A876] font-bold">
                  {activeGoal.isPriority ? "🌸 WOMEN'S WELLNESS CONTEXT" : "TARGET GOAL CONTEXT"}
                </span>
                <h3 className="font-display font-semibold text-lg text-[#F5F1E8]">
                  Curated Subscription Plans for: {activeGoal.name}
                </h3>
              </div>
            </div>

            {onClearGoalContext && (
              <button
                onClick={onClearGoalContext}
                className="font-accent text-xs text-[#C9A876] hover:text-[#F5F1E8] underline uppercase tracking-wider"
              >
                View all plans without goal filter
              </button>
            )}
          </div>
        ) : (
          /* Cold Entry Goal Prompt */
          <div className="mb-12 bg-[#1F2418] border border-[#2E3324] rounded-2xl p-4 sm:p-5 text-center flex items-center justify-center gap-2">
            <span className="font-body text-xs sm:text-sm text-[#D8D2C0]">Not sure which plan fits you best?</span>
            <a href="#goals" className="font-accent text-xs text-[#C9A876] hover:text-[#F5F1E8] font-bold underline uppercase tracking-wider">
              Find your goal first →
            </a>
          </div>
        )}

        {/* Section Heading with Gold Eyebrow & Accent */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="font-accent text-xs font-bold uppercase tracking-[3px] text-[#B08D57]">
            SUBSCRIPTION PLANS
          </span>
          <h2 className="font-display font-semibold text-3xl sm:text-5xl text-[#F5F1E8] leading-tight">
            "Invest in your body. <br className="hidden sm:inline" />
            It's the only place you have to <span className="text-[#C9A876] italic font-medium">live.</span>"
          </h2>
          <p className="font-body text-base sm:text-lg text-[#D8D2C0]">
            Select your plan duration. Prepped fresh daily in Jagatpura, Jaipur with free doorstep delivery.
          </p>
        </div>

        {/* Simplified Plan Cards Grid (Fix 4: Clean, Uncluttered 6-Item Order) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-12">
          {SUBSCRIPTION_PLANS.map((plan) => {
            const isFeatured = plan.id === 'copper-plan' || (activeGoal && activeGoal.recommendedPlanIds.includes(plan.id));
            const primaryTier = plan.tiers[1] || plan.tiers[0]; // 2 meals per day tier

            const whatsappMessage = encodeURIComponent(
              `Hi Bowlora! I want to subscribe to the ${plan.name} (₹${primaryTier.price.toLocaleString()} for ${plan.durationDays} Days) ${activeGoal ? `for my goal: ${activeGoal.name}` : ''}. Please guide me with the next steps.`
            );

            return (
              <div
                key={plan.id}
                className={`relative bg-[#1F2418] rounded-[24px] p-8 flex flex-col justify-between transition-all duration-300 ${
                  isFeatured
                    ? 'border-2 border-[#B08D57] shadow-[0_16px_50px_rgba(176,141,87,0.2)] md:-translate-y-2'
                    : 'border border-[#2E3324] shadow-md hover:border-[#B08D57]/50'
                }`}
              >
                {/* 1. Featured Gold Badge */}
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#B08D57] text-[#141810] font-accent text-[11px] font-bold px-4 py-1 rounded-full shadow-sm whitespace-nowrap flex items-center gap-1.5 uppercase tracking-wider">
                    <Sparkles className="w-3 h-3 fill-[#141810]" />
                    <span>{activeGoal && activeGoal.recommendedPlanIds.includes(plan.id) ? `Recommended Plan` : `Most Popular`}</span>
                  </div>
                )}

                <div className="space-y-4">
                  {/* 1. Plan Name */}
                  <h3 className="font-display font-bold text-2xl text-[#F5F1E8]">
                    {plan.name}
                  </h3>

                  {/* 2. Positioning Tagline (one line, italic, small) */}
                  <p className="font-display italic text-xs text-[#C9A876] font-medium min-h-[18px]">
                    "{plan.tagline}"
                  </p>

                  {/* 3. Price (large, prominent) */}
                  <div className="pt-2">
                    <span className="font-display font-bold text-4xl text-[#7A9450]">
                      ₹{primaryTier.price.toLocaleString()}
                    </span>
                  </div>

                  {/* 4. Duration Meta */}
                  <div className="font-accent text-xs uppercase tracking-wider text-[#D8D2C0]/80 font-semibold">
                    {plan.durationDays} Days · 2 Fresh Meals / Day (₹{primaryTier.pricePerMeal}/meal)
                  </div>

                  {/* 5. One Short Description (max 2 lines) */}
                  <p className="font-body text-sm text-[#D8D2C0] leading-relaxed pt-1">
                    {plan.description || `Chef-crafted macro-balanced nutrition delivered fresh daily to your doorstep in Jaipur.`}
                  </p>
                </div>

                {/* 6. One CTA Button */}
                <div className="pt-8">
                  <a
                    href={`https://wa.me/919119222601?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-4 rounded-full font-accent text-xs uppercase tracking-[1.5px] font-bold flex items-center justify-center gap-2.5 transition-all duration-300 shadow-md ${
                      isFeatured
                        ? 'bg-[#4A5D2A] text-[#F5F1E8] hover:bg-[#7A9450] hover:scale-[1.02] shadow-[#4A5D2A]/40 border border-[#7A9450]/30'
                        : 'bg-[#141810] text-[#F5F1E8] hover:bg-[#4A5D2A] border border-[#2E3324]'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4 text-[#C9A876]" />
                    <span>Subscribe Now</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Fine Print Note */}
        <div className="text-center font-body text-xs text-[#A8A292] flex flex-wrap items-center justify-center gap-4 pt-6 border-t border-[#2E3324]">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-4 h-4 text-[#7A9450]" />
            All plans include GST
          </span>
          <span>•</span>
          <span>Delivery available across Jaipur</span>
          <span>•</span>
          <span>Pause or resume subscription anytime via WhatsApp</span>
        </div>

      </div>
    </section>
  );
};
