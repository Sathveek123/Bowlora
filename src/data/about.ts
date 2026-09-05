export interface AboutCMSData {
  founding_story: string;
  philosophy_headline: string;
  philosophy_body: string;
  philosophy_image: string;
  beliefs: Array<{
    id: string;
    title: string;
    description: string;
    iconName: string;
  }>;
  punishment_statement: string;
  balance_points: Array<{
    pillar_number: string;
    pillar_name: string;
    description: string;
    accentColor: string;
  }>;
}

export const aboutData: AboutCMSData = {
  founding_story:
    "Bowlora started with a simple frustration — healthy food in Jaipur was either inconvenient, boring, or both. [Full founder story coming soon.] Every bowl we make starts with a single question: will this actually make you feel better tomorrow? Our chefs obsess over nutrient density, portion balance, and flavor — because we believe that food that's good for you should also taste like it.",
  philosophy_headline: '"We started because we were tired of eating wrong."',
  philosophy_body:
    "Junk food is everywhere in Jaipur. Authentic health food crafted specifically for fitness routines, weight management, and PCOS balance is rare. That's why Bowlora exists — to make clean nutrition automatic and delicious.",
  philosophy_image: "/images/3.jpeg",
  beliefs: [
    {
      id: "b1",
      title: "Consistency Over Intensity",
      description:
        "Healthy eating isn't a 7-day punishment — it's a daily routine you actually look forward to every morning.",
      iconName: "Heart",
    },
    {
      id: "b2",
      title: "Uncompromised Freshness",
      description:
        "Cooked in small batches every single morning from 5:30 AM using local Jaipur produce. Never frozen, zero preservatives.",
      iconName: "ShieldCheck",
    },
    {
      id: "b3",
      title: "Chef-Crafted Flavors",
      description:
        "Nutritionists count the macros, but chefs craft the flavor — so healthy food never tastes bland or boring.",
      iconName: "Sparkles",
    },
  ],
  punishment_statement:
    "Healthy food should not feel like punishment — if it's not craveable, it doesn't make the menu.",
  balance_points: [
    {
      pillar_number: "01",
      pillar_name: "Nutrition",
      description:
        "Precise protein, carb, and fat ratios with complete calorie transparency shared for every single bowl.",
      accentColor: "#C9A876",
    },
    {
      pillar_number: "02",
      pillar_name: "Convenience",
      description:
        "Morning doorstep delivery across all Jagatpura and Jaipur pincodes right before your workout or office hour.",
      accentColor: "#7A9450",
    },
    {
      pillar_number: "03",
      pillar_name: "Taste",
      description:
        "Zero refined sugar, zero artificial sauces, zero junk — using house-made dressings and fresh herbs.",
      accentColor: "#C9A876",
    },
  ],
};
