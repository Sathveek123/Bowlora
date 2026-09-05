import React, { useState } from 'react';
import { GOALS_DATA, Goal } from '../../data/goals';
import { GoalDetailModal } from '../goals/GoalDetailModal';
import { ArrowRight, Flame, Dumbbell, Sparkles, Activity, ShieldCheck, Smile, HeartPulse } from 'lucide-react';

const iconMap: { [key: string]: any } = {
  'fat-reduction-body-transformation': Flame,
  'healthy-muscle-building': Dumbbell,
  'healthy-lifestyle-clean-eating': Sparkles,
  'peak-fitness-performance': Activity,
  'high-protein-nutrition': ShieldCheck,
  'gut-health-digestive-wellness': Smile,
};

interface FitnessGoalsProps {
  onSelectGoalForPlans?: (goalSlug: string) => void;
}

export const FitnessGoals: React.FC<FitnessGoalsProps> = ({ onSelectGoalForPlans }) => {
  const [selectedGoal, setSelectedGoal] = useState<Goal | null>(null);

  const priorityGoal = GOALS_DATA.find((g) => g.isPriority) || GOALS_DATA[0];
  const standardGoals = GOALS_DATA.filter((g) => !g.isPriority);

  const handleSelectPlanForGoal = (goalSlug: string) => {
    onSelectGoalForPlans?.(goalSlug);
    const plansSection = document.getElementById('plans');
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="goals" className="py-24 sm:py-32 bg-[#F5F1E8] text-[#1F2418]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="font-accent text-xs font-bold uppercase tracking-[3px] text-[#4A5D2A]">
            CHOOSE YOUR GOAL
          </span>
          <h2 className="font-display font-semibold text-3xl sm:text-[44px] text-[#1F2418] leading-tight">
            Tell us your goal. We'll handle the food.
          </h2>
          <p className="font-body text-base sm:text-lg text-[#4A4A3E]">
            Every goal comes with its own curated meals, macros and subscription path — built around what your body actually needs.
          </p>
        </div>

        {/* Tier 1 — Featured Goal Banner (PCOS/PCOD Priority) */}
        <div className="bg-[#4A5D2A]/10 border border-[#B08D57]/40 rounded-[24px] p-8 sm:p-12 mb-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start gap-4">
              <span className="bg-[#B08D57]/20 border border-[#B08D57]/40 text-[#8A6F44] px-3.5 py-1 rounded-full font-accent text-xs uppercase tracking-wider font-bold flex items-center gap-1.5">
                <HeartPulse className="w-3.5 h-3.5" />
                🌸 {priorityGoal.priorityLabel}
              </span>
              <h3 className="font-display font-semibold text-2xl sm:text-3xl text-[#1F2418]">
                {priorityGoal.name}
              </h3>
              <p className="font-body text-base text-[#4A4A3E] leading-relaxed max-w-lg">
                {priorityGoal.shortDescription}
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => setSelectedGoal(priorityGoal)}
                  className="inline-flex items-center gap-2 bg-[#4A5D2A] text-[#F5F1E8] px-6 py-3.5 rounded-full font-body text-sm font-bold hover:bg-[#2E3A1A] transition-all shadow-sm"
                >
                  <span>Explore PCOS/PCOD Meals</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Visual */}
            <div
              onClick={() => setSelectedGoal(priorityGoal)}
              className="lg:col-span-5 rounded-2xl overflow-hidden border border-[#DDD6C4] shadow-sm aspect-[4/3] cursor-pointer group"
            >
              <img
                src={priorityGoal.image}
                alt={priorityGoal.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

          </div>
        </div>

        {/* Tier 2 — Standard Goal Grid (6 Remaining Goals) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {standardGoals.map((g) => {
            const Icon = iconMap[g.id] || Sparkles;
            return (
              <div
                key={g.id}
                onClick={() => setSelectedGoal(g)}
                className="bg-[#EFEADD] border border-[#DDD6C4] rounded-[18px] p-7 shadow-sm hover:border-[#4A5D2A]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#F5F1E8] text-[#4A5D2A] flex items-center justify-center group-hover:bg-[#4A5D2A] group-hover:text-[#F5F1E8] transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-body font-bold text-lg text-[#1F2418] leading-snug">
                    {g.name}
                  </h4>
                  <p className="font-body text-sm text-[#4A4A3E] leading-relaxed">
                    {g.shortDescription}
                  </p>
                </div>
                <div className="pt-6 flex items-center gap-1 font-body text-xs font-bold text-[#4A5D2A] group-hover:text-[#2E3A1A]">
                  <span>View goal details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Goal Detail Modal */}
      <GoalDetailModal
        goal={selectedGoal}
        onClose={() => setSelectedGoal(null)}
        onSelectPlan={handleSelectPlanForGoal}
      />
    </section>
  );
};
