import React, { useState } from 'react';
import { SUBSCRIPTION_PLANS } from '../../data/plans';
import { GOALS_DATA } from '../../data/goals';
import { Check, Sparkles, MessageCircle, ShieldCheck, HeartPulse, ArrowRight } from 'lucide-react';

interface PricingProps {
  selectedGoalSlug?: string | null;
  onClearGoalContext?: () => void;
}

export const Pricing: React.FC<PricingProps> = ({
  selectedGoalSlug,
  onClearGoalContext,
}) => {
  const [selectedMeals, setSelectedMeals] = useState<{ [planId: string]: 1 | 2 | 3 }>({
    'mini-plan': 2,
    'copper-plan': 2,
    'lifestyle-plan': 3,
  });

  const activeGoal = GOALS_DATA.find((g) => g.slug === selectedGoalSlug);

  const handleMealChange = (planId: string, meals: 1 | 2 | 3) => {
    setSelectedMeals({ ...selectedMeals, [planId]: meals });
  };

  return (
    <section id="plans" className="py-24 sm:py-32 bg-[#141810] text-[#F5F1E8] border-t border-[#2E3324]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contextual Goal Banner (if arrived from Goal selection) */}
        {activeGoal ? (
          <div className={`mb-12 p-6 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg ${
            activeGoal.isPriority
              ? 'bg-[#4A5D2A]/20 border-[#B08D57]'
              : 'bg-[#1F2418] border-[#7A9450]'
          }`}>
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

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-block bg-[#4A5D2A]/20 border border-[#B08D57]/40 text-[#C9A876] px-4 py-1.5 rounded-full font-accent text-xs font-bold uppercase tracking-[3px]">
            SUBSCRIPTION PLANS
          </span>
          <h2 className="font-display font-semibold text-3xl sm:text-5xl text-[#F5F1E8] leading-tight">
            "Invest in your body. <br className="hidden sm:inline" />
            It's the only place you have to live."
          </h2>
          <p className="font-body text-base sm:text-lg text-[#D8D2C0]">
            Select your plan duration and daily meal frequency. All plans are prepped fresh daily in Jaipur with free morning doorstep delivery.
          </p>
        </div>

        {/* Plan Cards 3-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-12">
          {SUBSCRIPTION_PLANS.map((plan) => {
            const currentMealsPerDay = selectedMeals[plan.id] || plan.tiers[0].mealsPerDay;
            const activeTier = plan.tiers.find((t) => t.mealsPerDay === currentMealsPerDay) || plan.tiers[0];
            const isFeatured = plan.id === 'copper-plan' || (activeGoal && activeGoal.recommendedPlanIds.includes(plan.id));

            const whatsappMessage = encodeURIComponent(
              `Hi Bowlora! I want to subscribe to the ${plan.name} (${currentMealsPerDay} Meal(s)/day for ₹${activeTier.price.toLocaleString()}) ${activeGoal ? `for my goal: ${activeGoal.name}` : ''}. Please guide me with the next steps.`
            );

            return (
              <div
                key={plan.id}
                className={`relative bg-[#1F2418] rounded-[28px] p-8 flex flex-col justify-between transition-all duration-300 ${
                  isFeatured
                    ? 'border-2 border-[#B08D57] shadow-[0_16px_50px_rgba(58,74,34,0.4)] lg:-translate-y-4'
                    : 'border border-[#2E3324] shadow-md hover:border-[#B08D57]/40'
                }`}
              >
                {/* Featured Badge floating header */}
                {(plan.badge || (activeGoal && activeGoal.recommendedPlanIds.includes(plan.id))) && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#B08D57] text-[#141810] font-accent text-xs font-bold px-4 py-1.5 rounded-full shadow-sm whitespace-nowrap flex items-center gap-1.5 uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5 fill-[#141810]" />
                    <span>{activeGoal && activeGoal.recommendedPlanIds.includes(plan.id) ? `Recommended for ${activeGoal.name}` : plan.badge}</span>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Plan Name & Tagline */}
                  <div>
                    <h3 className="font-display font-bold text-2xl text-[#F5F1E8]">
                      {plan.name}
                    </h3>
                    <p className="font-body text-xs text-[#D8D2C0]/70 mt-1">
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Meal Count Switcher Tabs inside card */}
                  <div className="space-y-2">
                    <label className="font-accent text-[11px] uppercase tracking-wider text-[#C9A876] font-bold">
                      Select Daily Meals:
                    </label>
                    <div className="grid grid-cols-3 gap-1.5 p-1 bg-[#141810] rounded-xl border border-[#2E3324]">
                      {plan.tiers.map((tier) => (
                        <button
                          key={tier.mealsPerDay}
                          onClick={() => handleMealChange(plan.id, tier.mealsPerDay)}
                          className={`py-2 px-1 rounded-lg font-body text-xs font-bold transition-all cursor-pointer ${
                            currentMealsPerDay === tier.mealsPerDay
                              ? 'bg-[#4A5D2A] text-[#F5F1E8] shadow-sm'
                              : 'text-[#D8D2C0] hover:bg-white/5'
                          }`}
                        >
                          {tier.mealsPerDay} {tier.mealsPerDay === 1 ? 'Meal/day' : 'Meals/day'}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Pricing Box */}
                  <div className="p-4 rounded-2xl bg-[#141810]/70 border border-[#2E3324]">
                    <div className="flex items-baseline gap-1">
                      <span className="font-display font-bold text-4xl text-[#7A9450]">
                        ₹{activeTier.price.toLocaleString()}
                      </span>
                      <span className="font-body text-xs text-[#D8D2C0] font-medium">
                        / {plan.durationDays} days
                      </span>
                    </div>
                    <div className="font-accent text-xs text-[#C9A876] font-medium mt-1 flex items-center gap-2">
                      <span className="bg-[#4A5D2A]/30 px-2 py-0.5 rounded text-[#7A9450] font-bold">
                        ₹{activeTier.pricePerMeal} / meal
                      </span>
                      <span>• Includes delivery</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 pt-2">
                    <span className="font-accent text-xs font-bold text-[#F5F1E8] uppercase tracking-wider">
                      Included in Plan:
                    </span>
                    <ul className="space-y-2.5">
                      {plan.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm font-body text-[#D8D2C0]">
                          <div className="w-5 h-5 rounded-full bg-[#4A5D2A]/20 text-[#7A9450] flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Subscribe CTA Button */}
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
                    <MessageCircle className="w-4.5 h-4.5 text-[#C9A876]" />
                    <span>{plan.ctaText}</span>
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
          <span>Delivery available across all Jaipur pincodes</span>
          <span>•</span>
          <span>Pause or resume subscription anytime via WhatsApp</span>
        </div>

      </div>
    </section>
  );
};
