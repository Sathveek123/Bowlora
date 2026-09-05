export interface Goal {
  id: string;
  order: number;
  name: string;
  isPriority: boolean;
  priorityLabel?: string;
  shortDescription: string;
  fullDescription: string;
  nutritionHighlights: { label: string }[];
  recommendedPlanIds: string[];
  image: string;
  slug: string;
}

export const GOALS_DATA: Goal[] = [
  {
    id: 'pcos-pcod-friendly-nutrition',
    order: 1,
    name: 'PCOD/PCOS-Friendly Nutrition',
    isPriority: true,
    priorityLabel: "WOMEN'S WELLNESS",
    shortDescription: 'Meals thoughtfully built around hormonal balance and blood sugar stability — lower GI ingredients & anti-inflammatory foods.',
    fullDescription: 'Meals thoughtfully built around hormonal balance and blood sugar stability — lower glycemic ingredients, anti-inflammatory foods, and consistent protein, without the confusion of generic diet advice.',
    nutritionHighlights: [
      { label: 'Low Glycemic Focus' },
      { label: 'Anti-Inflammatory Ingredients' },
      { label: 'Consistent Protein Timing' },
      { label: 'No Refined Sugar' },
    ],
    recommendedPlanIds: ['copper-plan', 'lifestyle-plan'],
    image: '/images/3.jpeg',
    slug: 'pcos-pcod-friendly-nutrition',
  },
  {
    id: 'fat-reduction-body-transformation',
    order: 2,
    name: 'Fat Reduction & Body Transformation',
    isPriority: false,
    shortDescription: 'Sustainable, calorie-conscious meals that support fat loss without extreme restriction — built for real progress.',
    fullDescription: 'Sustainable, calorie-conscious meals that support fat loss without extreme restriction — built for real progress, not crash dieting.',
    nutritionHighlights: [
      { label: 'High Fiber Content' },
      { label: 'Controlled Portions' },
      { label: 'Balanced Macros' },
      { label: 'No Empty Calories' },
    ],
    recommendedPlanIds: ['copper-plan', 'lifestyle-plan'],
    image: '/images/1.jpeg',
    slug: 'fat-reduction-body-transformation',
  },
  {
    id: 'healthy-muscle-building',
    order: 3,
    name: 'Healthy Muscle Building',
    isPriority: false,
    shortDescription: 'High-protein, nutrient-dense meals timed and portioned to support muscle growth and fast recovery.',
    fullDescription: 'High-protein, nutrient-dense meals timed and portioned to support muscle growth and fast recovery.',
    nutritionHighlights: [
      { label: 'High Protein Per Meal' },
      { label: 'Complex Carbs for Energy' },
      { label: 'Post-Workout Friendly' },
      { label: 'Balanced Amino Profile' },
    ],
    recommendedPlanIds: ['lifestyle-plan'],
    image: '/images/4.jpeg',
    slug: 'healthy-muscle-building',
  },
  {
    id: 'healthy-lifestyle-clean-eating',
    order: 4,
    name: 'Healthy Lifestyle & Clean Eating',
    isPriority: false,
    shortDescription: 'No specific target, just consistently good food — balanced, whole-food meals for everyday living.',
    fullDescription: 'No specific target, just consistently good food — balanced, whole-food meals for people who want to eat better every day.',
    nutritionHighlights: [
      { label: 'Whole Food Ingredients' },
      { label: 'Balanced Everyday Nutrition' },
      { label: 'No Ultra-Processed Additives' },
      { label: 'Sustainable Long-Term' },
    ],
    recommendedPlanIds: ['mini-plan', 'copper-plan'],
    image: '/images/5.jpeg',
    slug: 'healthy-lifestyle-clean-eating',
  },
  {
    id: 'peak-fitness-performance',
    order: 5,
    name: 'Peak Fitness & Performance',
    isPriority: false,
    shortDescription: 'Performance-focused fuel for serious training — meals built around energy timing and recovery.',
    fullDescription: 'Performance-focused fuel for serious training — meals built around energy timing and recovery, not just calorie counts.',
    nutritionHighlights: [
      { label: 'Performance Carbs' },
      { label: 'Recovery-Focused Protein' },
      { label: 'Electrolyte-Conscious' },
      { label: 'Pre/Post Training Friendly' },
    ],
    recommendedPlanIds: ['lifestyle-plan'],
    image: '/images/7.jpeg',
    slug: 'peak-fitness-performance',
  },
  {
    id: 'high-protein-nutrition',
    order: 6,
    name: 'High-Protein Nutrition',
    isPriority: false,
    shortDescription: 'Protein-forward meals for anyone prioritizing protein intake — without needing to cook or weigh it yourself.',
    fullDescription: 'Protein-forward meals for anyone prioritizing protein intake — without needing to cook, weigh, or meal-prep it yourself.',
    nutritionHighlights: [
      { label: 'Protein-First Design' },
      { label: 'Consistent Protein Across Meals' },
      { label: 'Low Filler Carbs' },
      { label: 'Fitness-Community Favorite' },
    ],
    recommendedPlanIds: ['copper-plan', 'lifestyle-plan'],
    image: '/images/8.jpeg',
    slug: 'high-protein-nutrition',
  },
  {
    id: 'gut-health-digestive-wellness',
    order: 7,
    name: 'Gut Health & Digestive Wellness',
    isPriority: false,
    shortDescription: 'Gentle, fiber-rich meals designed to support digestion — real food that works with your body, not against it.',
    fullDescription: 'Gentle, fiber-rich meals designed to support digestion — real food that works with your body, not against it.',
    nutritionHighlights: [
      { label: 'High Fiber Content' },
      { label: 'Gut-Friendly Ingredients' },
      { label: 'Reduced Processed Additives' },
      { label: 'Balanced Fermented Options' },
    ],
    recommendedPlanIds: ['copper-plan'],
    image: '/images/6.jpeg',
    slug: 'gut-health-digestive-wellness',
  },
];
