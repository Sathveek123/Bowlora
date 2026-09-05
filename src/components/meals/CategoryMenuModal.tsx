import React, { useState } from 'react';
import { MEALS_DATA, Meal } from '../../data/meals';
import { X, Flame, Dumbbell, Wheat, Apple, ShieldAlert, ArrowRight, Filter } from 'lucide-react';
import { MealDetailModal } from './MealDetailModal';

interface CategoryMenuModalProps {
  categoryName: string | null;
  roleDescription?: string;
  onClose: () => void;
}

export const CategoryMenuModal: React.FC<CategoryMenuModalProps> = ({
  categoryName,
  roleDescription,
  onClose,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedMealForDetail, setSelectedMealForDetail] = useState<Meal | null>(null);

  if (!categoryName) return null;

  let categoryMeals = MEALS_DATA.filter(
    (m) => m.category.toLowerCase() === categoryName.toLowerCase() || categoryName === 'All'
  );

  if (categoryMeals.length === 0) {
    categoryMeals = MEALS_DATA;
  }

  const filteredMeals = categoryMeals.filter((meal) => {
    if (activeFilter === 'PCOS') return meal.isPCOS;
    if (activeFilter === 'HighProtein') return meal.isHighProtein || parseInt(meal.protein) >= 20;
    if (activeFilter === 'Under400') return meal.calories < 400;
    return true;
  });

  return (
    <div className="fixed inset-0 z-[9990] bg-[#141810]/90 backdrop-blur-lg flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in">
      <div className="bg-[#141810] border border-[#2E3324] rounded-[28px] max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-[0_32px_80px_rgba(0,0,0,0.8)] text-[#F5F1E8] relative flex flex-col my-auto">

        {/* Modal Header */}
        <div className="sticky top-0 z-30 bg-[#141810]/95 backdrop-blur-md p-6 sm:p-8 border-b border-[#2E3324] flex items-start justify-between gap-4">
          <div>
            <span className="font-accent text-xs font-bold uppercase tracking-[3px] text-[#B08D57]">
              MENU CATEGORY VIEW
            </span>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl text-[#F5F1E8] mt-1">
              {categoryName}
            </h2>
            {roleDescription && (
              <p className="font-body text-sm text-[#D8D2C0] mt-1">
                {roleDescription}
              </p>
            )}
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-[#1F2418] border border-[#2E3324] text-[#F5F1E8] hover:bg-[#4A5D2A] transition-colors flex items-center justify-center shrink-0"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Bar */}
        <div className="px-6 sm:px-8 py-4 bg-[#1F2418] border-b border-[#2E3324] flex items-center gap-2 overflow-x-auto no-scrollbar">
          <span className="font-accent text-xs font-bold text-[#C9A876] uppercase tracking-wider flex items-center gap-1 shrink-0 mr-2">
            <Filter className="w-3.5 h-3.5" />
            Filter:
          </span>

          {[
            { id: 'All', label: 'All Dishes' },
            { id: 'PCOS', label: '🌸 PCOS/PCOD Friendly' },
            { id: 'HighProtein', label: '💪 High Protein (20g+)' },
            { id: 'Under400', label: '🔥 Under 400 kcal' },
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 rounded-full font-body text-xs font-bold transition-all whitespace-nowrap border ${
                activeFilter === f.id
                  ? 'bg-[#4A5D2A] text-[#F5F1E8] border-[#7A9450]'
                  : 'bg-[#141810] text-[#D8D2C0] border-[#2E3324] hover:bg-white/5'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Meal Cards Grid */}
        <div className="p-6 sm:p-8 flex-1">
          {filteredMeals.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <p className="font-display text-lg text-[#D8D2C0]">No dishes match the selected filter.</p>
              <button
                onClick={() => setActiveFilter('All')}
                className="text-xs font-accent text-[#C9A876] underline uppercase tracking-wider font-bold"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMeals.map((meal) => (
                <div
                  key={meal.id}
                  className="bg-[#1F2418] border border-[#2E3324] rounded-[20px] overflow-hidden flex flex-col justify-between hover:border-[#B08D57]/50 hover:-translate-y-1 transition-all duration-300 shadow-md group"
                >
                  <div>
                    {/* Meal Photo (4:3 aspect ratio) */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#141810]">
                      <img
                        src={meal.image}
                        alt={meal.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1F2418] via-transparent to-transparent pointer-events-none" />

                      {/* Dietary Badges */}
                      <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                        {meal.isPCOS && (
                          <span className="bg-[#4A5D2A] text-[#F5F1E8] px-2.5 py-1 rounded-full font-accent text-[10px] font-bold uppercase tracking-wider">
                            🌸 PCOS
                          </span>
                        )}
                        {meal.isHighProtein && (
                          <span className="bg-[#B08D57] text-[#141810] px-2.5 py-1 rounded-full font-accent text-[10px] font-bold uppercase tracking-wider">
                            💪 High Protein
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Meal Content */}
                    <div className="p-5 space-y-3">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-display font-semibold text-base sm:text-lg text-[#F5F1E8] leading-tight truncate" title={meal.name}>
                          {meal.name}
                        </h3>
                        <span className="font-display font-bold text-base sm:text-lg text-[#7A9450] shrink-0">
                          ₹{meal.price}
                        </span>
                      </div>

                      <p className="font-body text-xs text-[#D8D2C0] line-clamp-2 leading-relaxed">
                        {meal.description}
                      </p>

                      {/* Standardized Macro Strip (Calories → Protein → Carbs → Fats) */}
                      <div className="py-2 px-3 bg-[#141810] border border-[#2E3324] rounded-xl flex items-center justify-between font-accent text-[11px] text-[#F5F1E8]">
                        <span className="flex items-center gap-1 text-[#C9A876]" title="Calories">
                          <Flame className="w-3.5 h-3.5" />
                          <span>{meal.calories} kcal</span>
                        </span>
                        <span className="flex items-center gap-1 text-[#7A9450]" title="Protein">
                          <Dumbbell className="w-3.5 h-3.5" />
                          <span>{meal.protein}</span>
                        </span>
                        <span className="flex items-center gap-1 text-[#C9A876]" title="Carbs">
                          <Wheat className="w-3.5 h-3.5" />
                          <span>{meal.carbs}</span>
                        </span>
                        <span className="flex items-center gap-1 text-[#7A9450]" title="Fats">
                          <Apple className="w-3.5 h-3.5" />
                          <span>{meal.fats}</span>
                        </span>
                      </div>

                      {/* Allergen Warning Pill (if present) */}
                      {meal.allergens && meal.allergens.length > 0 && (
                        <div className="bg-[#B0563E]/15 border border-[#B0563E]/30 rounded-lg p-2 flex items-center gap-1.5 text-[11px] text-[#F5F1E8]">
                          <ShieldAlert className="w-3.5 h-3.5 text-[#B0563E] shrink-0" />
                          <span className="font-accent truncate">Contains: {meal.allergens.join(', ')}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Footer Action */}
                  <div className="p-5 pt-0">
                    <button
                      onClick={() => setSelectedMealForDetail(meal)}
                      className="w-full py-3 rounded-full border border-[#4A5D2A] text-[#7A9450] font-accent text-xs uppercase tracking-wider font-bold hover:bg-[#4A5D2A] hover:text-[#F5F1E8] transition-all flex items-center justify-center gap-1.5"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>

      {/* Meal Detail Modal Popup */}
      <MealDetailModal
        meal={selectedMealForDetail}
        onClose={() => setSelectedMealForDetail(null)}
      />
    </div>
  );
};
