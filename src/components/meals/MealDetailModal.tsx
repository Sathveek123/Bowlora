import React from 'react';
import { Meal } from '../../data/meals';
import { X, Flame, Dumbbell, Wheat, Apple, ShieldAlert, Check, MessageCircle } from 'lucide-react';

interface MealDetailModalProps {
  meal: Meal | null;
  onClose: () => void;
}

export const MealDetailModal: React.FC<MealDetailModalProps> = ({ meal, onClose }) => {
  if (!meal) return null;

  const whatsappMessage = encodeURIComponent(
    `Hi Bowlora! I'm interested in ordering the ${meal.name} (₹${meal.price}). Please guide me with the subscription or delivery steps.`
  );

  return (
    <div className="fixed inset-0 z-[9999] bg-[#141810]/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
      <div className="bg-[#1F2418] border border-[#2E3324] rounded-[24px] max-w-lg w-full overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.6)] text-[#F5F1E8] relative my-8">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-[#141810]/70 backdrop-blur-md text-[#F5F1E8] hover:bg-[#4A5D2A] hover:text-white transition-colors flex items-center justify-center border border-[#2E3324]"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Meal Photo Header */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#141810]">
          <img
            src={meal.image}
            alt={meal.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F2418] via-transparent to-transparent pointer-events-none" />

          {/* Badges Overlay */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {meal.isPCOS && (
              <span className="bg-[#4A5D2A] text-[#F5F1E8] px-3 py-1 rounded-full font-accent text-[11px] font-bold uppercase tracking-wider shadow-md">
                🌸 PCOS/PCOD Friendly
              </span>
            )}
            {meal.isHighProtein && (
              <span className="bg-[#B08D57] text-[#141810] px-3 py-1 rounded-full font-accent text-[11px] font-bold uppercase tracking-wider shadow-md">
                💪 High Protein
              </span>
            )}
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">

          {/* Title & Price */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="font-accent text-[11px] uppercase tracking-wider text-[#C9A876] font-bold">
                {meal.category}
              </span>
              <h3 className="font-display font-bold text-2xl text-[#F5F1E8] mt-0.5">
                {meal.name}
              </h3>
            </div>
            <div className="text-right">
              <span className="font-display font-bold text-2xl text-[#7A9450]">
                ₹{meal.price}
              </span>
              <div className="font-accent text-[10px] text-[#D8D2C0]">Per Serving</div>
            </div>
          </div>

          {/* Description */}
          <p className="font-body text-sm text-[#D8D2C0] leading-relaxed">
            {meal.description}
          </p>

          {/* Standardized Macro Strip */}
          <div className="bg-[#141810] border border-[#2E3324] rounded-2xl p-4 space-y-2">
            <span className="font-accent text-[10px] uppercase tracking-[2px] text-[#B08D57] font-bold">
              SCANNABLE NUTRITION BREAKDOWN
            </span>
            <div className="grid grid-cols-4 gap-2 text-center pt-1">
              <div className="p-2 bg-[#1F2418] rounded-xl border border-[#2E3324]">
                <div className="flex items-center justify-center gap-1 text-[#C9A876] text-xs mb-1">
                  <Flame className="w-3.5 h-3.5" />
                  <span className="font-accent text-[10px] font-bold">CALORIES</span>
                </div>
                <div className="font-body font-bold text-base text-[#F5F1E8]">{meal.calories} kcal</div>
              </div>

              <div className="p-2 bg-[#1F2418] rounded-xl border border-[#2E3324]">
                <div className="flex items-center justify-center gap-1 text-[#7A9450] text-xs mb-1">
                  <Dumbbell className="w-3.5 h-3.5" />
                  <span className="font-accent text-[10px] font-bold">PROTEIN</span>
                </div>
                <div className="font-body font-bold text-base text-[#F5F1E8]">{meal.protein}</div>
              </div>

              <div className="p-2 bg-[#1F2418] rounded-xl border border-[#2E3324]">
                <div className="flex items-center justify-center gap-1 text-[#C9A876] text-xs mb-1">
                  <Wheat className="w-3.5 h-3.5" />
                  <span className="font-accent text-[10px] font-bold">CARBS</span>
                </div>
                <div className="font-body font-bold text-base text-[#F5F1E8]">{meal.carbs}</div>
              </div>

              <div className="p-2 bg-[#1F2418] rounded-xl border border-[#2E3324]">
                <div className="flex items-center justify-center gap-1 text-[#7A9450] text-xs mb-1">
                  <Apple className="w-3.5 h-3.5" />
                  <span className="font-accent text-[10px] font-bold">FATS</span>
                </div>
                <div className="font-body font-bold text-base text-[#F5F1E8]">{meal.fats}</div>
              </div>
            </div>
          </div>

          {/* Allergen Warning (if present) */}
          {meal.allergens && meal.allergens.length > 0 && (
            <div className="bg-[#B0563E]/15 border border-[#B0563E]/40 rounded-xl p-3.5 flex items-center gap-2.5 text-[#F5F1E8]">
              <ShieldAlert className="w-4 h-4 text-[#B0563E] shrink-0" />
              <span className="font-accent text-xs font-semibold">
                Contains Allergens: {meal.allergens.join(', ')}
              </span>
            </div>
          )}

          {/* Quality Proof */}
          <div className="space-y-2 font-body text-xs text-[#D8D2C0] pt-1 border-t border-[#2E3324]">
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-[#7A9450]" />
              <span>Prepared fresh in small batches at 5:30 AM</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-[#7A9450]" />
              <span>Zero refined sugar, zero preservatives</span>
            </div>
          </div>

          {/* Action CTA */}
          <div className="pt-2">
            <a
              href={`https://wa.me/919119222601?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-full bg-[#4A5D2A] text-[#F5F1E8] font-accent text-xs uppercase tracking-[1.5px] font-bold flex items-center justify-center gap-2 hover:bg-[#7A9450] transition-all shadow-lg border border-[#7A9450]/30"
            >
              <MessageCircle className="w-4.5 h-4.5 text-[#C9A876]" />
              <span>ORDER THIS MEAL VIA WHATSAPP</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
