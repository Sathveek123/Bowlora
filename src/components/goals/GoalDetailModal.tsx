import React from 'react';
import { Goal } from '../../data/goals';
import { MEALS_DATA } from '../../data/meals';
import { X, Check, Flame, Dumbbell, ArrowRight, Sparkles, MessageCircle } from 'lucide-react';

interface GoalDetailModalProps {
  goal: Goal | null;
  onClose: () => void;
  onSelectPlan: (goalSlug: string) => void;
}

export const GoalDetailModal: React.FC<GoalDetailModalProps> = ({
  goal,
  onClose,
  onSelectPlan,
}) => {
  if (!goal) return null;

  // Filter example meals matching this goal
  const exampleMeals = MEALS_DATA.filter((m) => {
    if (goal.id === 'pcos-pcod-friendly-nutrition') return m.isPCOS;
    if (goal.id === 'high-protein-nutrition' || goal.id === 'healthy-muscle-building') return m.isHighProtein || parseInt(m.protein) >= 20;
    if (goal.id === 'fat-reduction-body-transformation') return m.calories < 450;
    return true;
  }).slice(0, 3);

  return (
    <div className="fixed inset-0 z-[9990] bg-[#141810]/90 backdrop-blur-lg flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in">
      <div className="bg-[#141810] border border-[#2E3324] rounded-[28px] max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-[0_32px_80px_rgba(0,0,0,0.8)] text-[#F5F1E8] relative flex flex-col my-auto">

        {/* Modal Header */}
        <div className="sticky top-0 z-30 bg-[#141810]/95 backdrop-blur-md p-6 sm:p-8 border-b border-[#2E3324] flex items-start justify-between gap-4">
          <div>
            {goal.isPriority && (
              <span className="inline-block bg-[#B08D57]/20 border border-[#B08D57]/40 text-[#C9A876] px-3 py-1 rounded-full font-accent text-xs uppercase tracking-widest font-bold mb-2">
                🌸 {goal.priorityLabel}
              </span>
            )}
            <h2 className="font-display font-semibold text-3xl sm:text-4xl text-[#F5F1E8]">
              {goal.name}
            </h2>
            <p className="font-body text-sm sm:text-base text-[#D8D2C0] mt-2 max-w-2xl leading-relaxed">
              {goal.fullDescription}
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-[#1F2418] border border-[#2E3324] text-[#F5F1E8] hover:bg-[#4A5D2A] transition-colors flex items-center justify-center shrink-0"
            aria-label="Close goal view"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-8 flex-1">

          {/* Nutrition Highlights Grid */}
          <div className="bg-[#1F2418] border border-[#2E3324] rounded-2xl p-6 space-y-3">
            <span className="font-accent text-xs font-bold uppercase tracking-[2px] text-[#B08D57]">
              NUTRITION HIGHLIGHTS & DESIGN
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
              {goal.nutritionHighlights.map((h, idx) => (
                <div key={idx} className="bg-[#141810] border border-[#2E3324] rounded-xl p-3 flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#4A5D2A]/20 text-[#7A9450] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="font-body text-xs text-[#F5F1E8] font-semibold">{h.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Example Curated Dishes */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-accent text-xs font-bold uppercase tracking-[2px] text-[#B08D57]">
                RECOMMENDED DISHES FOR THIS GOAL
              </span>
              <span className="font-body text-xs text-[#D8D2C0]">Showing {exampleMeals.length} example meals</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {exampleMeals.map((meal) => (
                <div key={meal.id} className="bg-[#1F2418] border border-[#2E3324] rounded-xl p-4 space-y-3">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden bg-[#141810]">
                    <img src={meal.image} alt={meal.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-[#F5F1E8] truncate">{meal.name}</h4>
                    <div className="flex items-center gap-3 font-accent text-[11px] text-[#C9A876] mt-1">
                      <span>🔥 {meal.calories} kcal</span>
                      <span>•</span>
                      <span>💪 {meal.protein}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Goal-First to Plan Selection Handoff Banner */}
          <div className="bg-[#4A5D2A] rounded-2xl p-6 sm:p-8 text-[#F5F1E8] flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#7A9450]/40 shadow-lg">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F5F1E8]">
                Ready to start your {goal.name} journey?
              </h3>
              <p className="font-body text-sm text-[#D8D2C0]">
                Select a subscription plan pre-configured for your daily routine.
              </p>
            </div>

            <button
              onClick={() => {
                onClose();
                onSelectPlan(goal.slug);
              }}
              className="inline-flex items-center gap-2 bg-[#141810] text-[#F5F1E8] px-6 py-3.5 rounded-full font-accent text-xs uppercase tracking-[1.5px] font-bold hover:bg-[#1F2418] transition-all whitespace-nowrap border border-[#2E3324]"
            >
              <span>SEE RECOMMENDED PLANS</span>
              <ArrowRight className="w-4 h-4 text-[#C9A876]" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
