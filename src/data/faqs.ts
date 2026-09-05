export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Subscription' | 'Food & Quality' | 'Delivery' | 'Payments';
}

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Subscription',
    question: 'How does the Bowlora subscription work?',
    answer: 'You pick a plan duration — 3-Day Mini, 15-Day Copper Consistency, or 28-Day Lifestyle — select your daily meal count (1, 2, or 3 meals/day), state your dietary preferences, and we handle the rest. Meals are prepped fresh every morning and delivered to your doorstep before 10 AM.'
  },
  {
    id: 'faq-2',
    category: 'Subscription',
    question: 'Can I pause or cancel my subscription anytime?',
    answer: 'Absolutely! You can pause your plan for up to 14 days or cancel anytime directly via WhatsApp. No awkward forms, no holding on call. Message +91 9119222601 and our support team updates your account within 2 hours.'
  },
  {
    id: 'faq-3',
    category: 'Delivery',
    question: 'Do you deliver across all areas in Jaipur?',
    answer: 'Yes! We deliver across all major Jaipur localities including Vaishali Nagar, C-Scheme, Malviya Nagar, Mansarovar, Raja Park, Bani Park, Jagatpura, and Civil Lines. If you are unsure about your pincode, drop us a WhatsApp message.'
  },
  {
    id: 'faq-4',
    category: 'Food & Quality',
    question: 'What if I have dietary restrictions or allergies?',
    answer: 'Tell us during signup — whether you are gluten-free, dairy-free, nut-free, Jain, or strictly vegan — we log it into your kitchen profile. Every meal prepared for you will strictly adhere to your requirements.'
  },
  {
    id: 'faq-5',
    category: 'Food & Quality',
    question: 'Can I choose specific meals or is it pre-decided?',
    answer: 'On our 15-Day and 28-Day plans, you get to choose your preferred daily meals from our weekly rotating menu via a simple WhatsApp menu card sent every Sunday.'
  },
  {
    id: 'faq-6',
    category: 'Delivery',
    question: 'What time is delivery? Can I request a priority morning slot?',
    answer: 'Our standard delivery window is between 7:00 AM and 10:00 AM. 15-Day and 28-Day subscribers can lock in a priority delivery slot (7:00 AM – 8:15 AM) at no extra charge.'
  },
  {
    id: 'faq-7',
    category: 'Food & Quality',
    question: 'Is the packaging eco-friendly & food grade?',
    answer: 'Yes. All our meal containers are made from 100% food-grade recyclable material. Our delivery bags are insulated, thermal-lined, and reusable.'
  },
  {
    id: 'faq-8',
    category: 'Subscription',
    question: 'Do you offer a trial or taster box?',
    answer: 'Yes! While we do not give free samples, we offer our 3-Day Mini Plan starting at just ₹1,199 so you can test the quality, freshness, and delivery service before upgrading to a longer subscription.'
  },
  {
    id: 'faq-9',
    category: 'Payments',
    question: 'How do I pay? Are there split or EMI payment options?',
    answer: 'We accept UPI, Google Pay, PhonePe, Paytm, credit/debit cards, and net banking. For 28-Day Lifestyle plans, we offer 0% interest two-part split payments via WhatsApp.'
  },
  {
    id: 'faq-10',
    category: 'Delivery',
    question: 'What happens if I am not at home during delivery?',
    answer: 'Our delivery partner leaves your thermal-insulated box safely at your door or with security, and sends a picture confirmation on WhatsApp. Meals stay chill and fresh inside our insulated bag for up to 3 hours.'
  },
  {
    id: 'faq-11',
    category: 'Food & Quality',
    question: 'Are the calories and macros accurately calculated?',
    answer: 'Yes! Our recipes are designed in collaboration with certified sports nutritionists. Every bowl comes with a barcode & label detailing Calories, Protein, Carbs, and Healthy Fats.'
  },
  {
    id: 'faq-12',
    category: 'Subscription',
    question: 'Can I gift a Bowlora meal subscription to a friend?',
    answer: '100%! DM us on Instagram @bowlora.co.in or WhatsApp +91 9119222601 with the recipient’s details. We will include a personalized handwritten greeting card with their first delivery box.'
  }
];
