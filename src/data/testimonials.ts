export interface Testimonial {
  id: string;
  name: string;
  location: string;
  plan: string;
  quote: string;
  rating: number;
  avatarColor: string;
}

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'priya-s',
    name: 'Priya Sharma',
    location: 'C-Scheme, Jaipur',
    plan: '15-DAY COPPER PLAN',
    quote: "I've tried so many diet plans in Jaipur, but Bowlora is the only one I actually stuck to. The grilled paneer salad wrap is dangerously good!",
    rating: 5,
    avatarColor: '#2E7D32',
  },
  {
    id: 'rohit-k',
    name: 'Rohit Khandelwal',
    location: 'Vaishali Nagar, Jaipur',
    plan: '28-DAY LIFESTYLE PLAN',
    quote: "Lost 4 kgs in 6 weeks without feeling hungry once. The portion sizes are perfect and the food is genuinely fresh, never reheated.",
    rating: 5,
    avatarColor: '#A8D832',
  },
  {
    id: 'ananya-m',
    name: 'Ananya Mathur',
    location: 'Raja Park, Jaipur',
    plan: '3-DAY MINI PLAN',
    quote: "The smoothie bowls are absolutely stunning. I share them on Instagram every morning — yes I'm that person now!",
    rating: 5,
    avatarColor: '#F5A623',
  },
  {
    id: 'dev-r',
    name: 'Dev Rathore',
    location: 'Mansarovar, Jaipur',
    plan: '15-DAY COPPER PLAN',
    quote: "Finally healthy food in Jaipur that doesn't taste like punishment. The roasted veggie quinoa bowl hits different at lunch.",
    rating: 5,
    avatarColor: '#D9735A',
  },
  {
    id: 'meera-g',
    name: 'Meera Gupta',
    location: 'Malviya Nagar, Jaipur',
    plan: '28-DAY LIFESTYLE PLAN',
    quote: "Delivery is always on time before 8:30 AM. Food is always fresh, crisp, and neatly packaged. Subscribing for 4 months straight now.",
    rating: 5,
    avatarColor: '#1B5E20',
  },
  {
    id: 'arjun-b',
    name: 'Arjun Bansal',
    location: 'Bani Park, Jaipur',
    plan: '15-DAY COPPER PLAN',
    quote: "The WhatsApp nutrition reports are a total game-changer. I actually know my daily protein and calorie intake now.",
    rating: 5,
    avatarColor: '#4CAF50',
  },
  {
    id: 'shweta-v',
    name: 'Shweta Verma',
    location: 'Jagatpura, Jaipur',
    plan: '28-DAY LIFESTYLE PLAN',
    quote: "As a working doctor, Bowlora saves me 2 hours of meal prep every single day. Nourishing, wholesome, and completely hassle-free.",
    rating: 5,
    avatarColor: '#A8D832',
  },
  {
    id: 'kabir-s',
    name: 'Kabir Singh',
    location: 'Civil Lines, Jaipur',
    plan: '3-DAY MINI PLAN',
    quote: "Ordered the 3-day reset after a week of heavy wedding food. Cleaned out my system completely. Immediately upgraded to the 28-day plan!",
    rating: 5,
    avatarColor: '#F5A623',
  }
];
