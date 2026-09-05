export interface PlanTier {
  mealsPerDay: 1 | 2 | 3;
  price: number;
  pricePerMeal: number;
  popular?: boolean;
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  durationDays: number;
  tagline: string;
  badge?: string;
  accentColor: string;
  tiers: PlanTier[];
  features: string[];
  ctaText: string;
  description: string;
  recommendedGoals: string[];
}

export const SUBSCRIPTION_PLANS: SubscriptionPlan[] = [
  {
    id: 'trial-plan',
    name: '3 - Day Trial Box',
    durationDays: 3,
    tagline: 'Low-commitment first experience. Test the taste, quality & delivery.',
    accentColor: '#C8D8C0',
    tiers: [
      { mealsPerDay: 1, price: 1199, pricePerMeal: 400 },
      { mealsPerDay: 2, price: 1699, pricePerMeal: 283, popular: true }
    ],
    features: [
      '3 Days of freshly prepped meals',
      'Choose from full weekly menu',
      'Free Jagatpura & Jaipur delivery',
      'Macro & calorie breakdown label',
      'Zero commitment trial experience'
    ],
    ctaText: 'Start 3-Day Trial',
    description: 'A taste of zero-prep nutrition without long-term commitment.',
    recommendedGoals: ['Clean Eating', 'Quick Reset']
  },
  {
    id: 'routine-plan',
    name: '7 - Day Routine Plan',
    durationDays: 7,
    tagline: 'Short routine-building plan for busy work weeks and steady habits.',
    badge: '⚡ Ideal Weekly Starter',
    accentColor: '#F5A623',
    tiers: [
      { mealsPerDay: 1, price: 2399, pricePerMeal: 342 },
      { mealsPerDay: 2, price: 3999, pricePerMeal: 285, popular: true },
      { mealsPerDay: 3, price: 5499, pricePerMeal: 261 }
    ],
    features: [
      '7 Days of customized healthy meals',
      'Choose daily breakfast, lunch, or dinner',
      'Priority morning delivery slot (7 AM – 9:30 AM)',
      'WhatsApp menu selection every weekend',
      'Free insulated delivery bag included'
    ],
    ctaText: 'Start 7-Day Routine',
    description: 'Build a solid 7-day habit of clean, macro-counted eating.',
    recommendedGoals: ['PCOD/PCOS Nutrition', 'Fat Reduction', 'Clean Eating']
  },
  {
    id: 'copper-plan',
    name: '15 - Day Copper Plan',
    durationDays: 15,
    tagline: 'Transformation-focused mid-term option. Most popular consistency plan.',
    badge: '🌿 Most Popular Transformation Plan',
    accentColor: '#2E7D32',
    tiers: [
      { mealsPerDay: 1, price: 4444, pricePerMeal: 296 },
      { mealsPerDay: 2, price: 7777, pricePerMeal: 259, popular: true },
      { mealsPerDay: 3, price: 9999, pricePerMeal: 222 }
    ],
    features: [
      '15 Days of chef-crafted nutrition',
      'Full breakfast, lunch, & dinner options',
      'Weekly nutrition report via WhatsApp',
      'Free priority delivery slot in Jaipur',
      'Flexible pause anytime up to 7 days',
      'Personalized chef note & macro adjustments'
    ],
    ctaText: 'Start 15-Day Transformation',
    description: 'Transform your energy levels and metabolic rhythm in two weeks.',
    recommendedGoals: ['PCOD/PCOS Nutrition', 'Muscle Building', 'Fat Reduction']
  },
  {
    id: 'lifestyle-plan',
    name: '28 - Days Lifestyle Plan',
    durationDays: 28,
    tagline: 'Longer lifestyle routine. Complete daily nutrition managed by expert chefs.',
    badge: '👑 Best Value • Full Wellness Partner',
    accentColor: '#D9735A',
    tiers: [
      { mealsPerDay: 1, price: 6999, pricePerMeal: 250 },
      { mealsPerDay: 2, price: 12999, pricePerMeal: 232 },
      { mealsPerDay: 3, price: 17999, pricePerMeal: 214, popular: true }
    ],
    features: [
      '28 Full days of total nutritional care',
      '1-on-1 Nutrition & PCOS Consultation',
      'Monthly body progress check-in & report',
      'Exclusive seasonal menu preview access',
      'Dedicated delivery executive slot',
      'Zero delivery fees + insulated bag included'
    ],
    ctaText: 'Unlock 28-Day Lifestyle',
    description: 'The ultimate commitment to your body. Never worry about what to eat again.',
    recommendedGoals: ['PCOD/PCOS Nutrition', 'Peak Fitness', 'Muscle Building']
  }
];
