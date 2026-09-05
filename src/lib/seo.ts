import { MEALS_DATA, MEAL_CATEGORIES } from '../data/meals';
import { GOALS_DATA, Goal } from '../data/goals';

export interface SEOMetadata {
  title: string;
  description: string;
  canonical?: string;
  h1?: string;
}

export const SEO_PAGES: Record<string, SEOMetadata> = {
  home: {
    title: 'Bowlora — Fresh, Chef-Crafted Healthy Meals in Jaipur',
    description: 'Chef-crafted, macro-counted meals delivered across Jaipur. Bowls, salads, wraps & subscriptions for every fitness goal.',
    h1: 'Fresh Chef-Crafted Bowls Delivered Daily in Jaipur',
  },
  subscriptions: {
    title: 'Meal Subscription Plans | Bowlora Jaipur',
    description: 'Flexible 3-day, 7-day, 15-day and 28-day healthy meal plans in Jaipur. Pause or cancel anytime.',
    h1: 'Subscribe to Clean Daily Nutrition in Jaipur',
  },
  about: {
    title: 'About Bowlora | Healthy Food, Jaipur',
    description: 'Learn why Bowlora started in Jagatpura, Jaipur — crafting real, macro-balanced food that heals, fuels, and delights.',
    h1: 'About Bowlora — Junk is Everywhere. Health is Rare.',
  },
  partner: {
    title: 'Partner With Bowlora — Gyms & Fitness Communities',
    description: 'Bring fresh, macro-counted meals to your gym or fitness community in Jaipur. Simple partnership terms.',
    h1: 'Healthy eating made easier for your members.',
  },
  contact: {
    title: 'Contact Bowlora | Jaipur',
    description: 'Get in touch with Bowlora for orders, subscriptions, or partnership enquiries in Jagatpura, Jaipur.',
    h1: "Let's talk food.",
  },
};

/**
 * Injects LocalBusiness JSON-LD Structured Data into document head
 */
export const injectLocalBusinessJSONLD = () => {
  if (typeof document === 'undefined') return;

  const scriptId = 'jsonld-localbusiness';
  if (document.getElementById(scriptId)) return;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Bowlora',
    image: 'https://bowlora.com/logo/WhatsApp%20Image%202026-09-04%20at%207.59.18%20PM.jpeg',
    '@id': 'https://bowlora.com',
    url: 'https://bowlora.com',
    telephone: '+919119222601',
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jagatpura',
      addressLocality: 'Jaipur',
      addressRegion: 'Rajasthan',
      postalCode: '302017',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 26.8236,
      longitude: 75.8617,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '05:30',
      closes: '21:00',
    },
    sameAs: [
      'https://instagram.com/bowlora',
      'https://wa.me/919119222601',
    ],
  };

  const script = document.createElement('script');
  script.id = scriptId;
  script.type = 'application/ld+json';
  script.text = JSON.stringify(schema);
  document.head.appendChild(script);
};

/**
 * Dynamically updates head title and meta description
 */
export const updateSEOMetadata = (metadata: SEOMetadata) => {
  if (typeof document === 'undefined') return;

  document.title = metadata.title;

  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute('content', metadata.description);
};

/**
 * Auto-generates dynamic XML sitemap content
 */
export const generateSitemapXml = (): string => {
  const baseUrl = 'https://bowlora.com';
  const staticRoutes = [
    '',
    '/subscriptions',
    '/about',
    '/partner',
    '/contact',
    '/legal/privacy-policy',
    '/legal/terms-and-conditions',
    '/legal/refund-policy',
  ];

  const categoryRoutes = MEAL_CATEGORIES.map(
    (cat) => `/meals/${cat.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
  );

  const goalRoutes = GOALS_DATA.map(
    (goal: Goal) => `/goals/${goal.slug}`
  );

  const allUrls = [...staticRoutes, ...categoryRoutes, ...goalRoutes];

  const urlEntries = allUrls
    .map(
      (path) => `  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${path === '' ? '1.0' : '0.8'}</priority>
  </url>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
};
