export interface Chef {
  id: string;
  name: string;
  role: string;
  bio: string;
  specialties: string[];
  experience: string;
  image: string;
}

export const CHEFS_DATA: Chef[] = [
  {
    id: 'chef-anand',
    name: 'Anand Kumar Sharma',
    role: 'Head Chef & Nutrition Consultant',
    bio: 'Trained in holistic culinary arts in Rishikesh, Anand brings his philosophy of "food as medicine" to Bowlora. He calibrates every base recipe for high nutrient density and authentic Indian taste.',
    specialties: ['Anti-Inflammatory Bowls', 'Macro Balancing', 'Indian Spice Infusions'],
    experience: '12 YEARS IN WELLNESS KITCHENS',
    image: '/images/3.jpeg',
  },
  {
    id: 'chef-priya',
    name: 'Priya Meena',
    role: 'Smoothie & Superfood Specialist',
    bio: 'Priya’s passion for functional micronutrients inspired Bowlora’s signature smoothie bowl line. She sources raw superfoods to craft refreshing, gut-healing breakfast bowls.',
    specialties: ['Smoothie Science', 'Raw Superfoods', 'Vegan Dressings'],
    experience: '6 YEARS CULINARY ARTISTRY',
    image: '/images/6.jpeg',
  },
  {
    id: 'chef-vikram',
    name: 'Vikram Singh',
    role: 'Prep & Quality Lead',
    bio: 'Vikram inspects every vegetable arriving at 5:00 AM from local Jaipur farms. He ensures triple-washing, precision knife skills, and zero reheating in batch prep.',
    specialties: ['Farm-Fresh Sourcing', 'Cold-Prep Precision', 'Zero-Preservative Storage'],
    experience: '9 YEARS HIGH-PRECISION PREP',
    image: '/images/7.jpeg',
  }
];
