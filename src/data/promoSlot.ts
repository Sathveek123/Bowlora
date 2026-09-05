export interface PromoSlotData {
  id: string;
  is_active: boolean;
  type: 'text_only' | 'text_with_image' | 'banner_link';
  headline: string;
  body_text?: string | null;
  image?: string | null;
  cta_label?: string | null;
  cta_link?: string | null;
  start_date?: string | null; // ISO string e.g. "2026-09-01"
  end_date?: string | null;   // ISO string e.g. "2026-09-30"
}

// Default CMS Promo Configuration (can be updated via CMS without code changes)
export const activePromoConfig: PromoSlotData = {
  id: 'promo-festive-01',
  is_active: true,
  type: 'text_with_image',
  headline: '🌿 New meals added every month. Stay fresh with Bowlora.',
  body_text: 'Try our newly launched Jaipur PCOS Recovery Bowls & 3-Day Reset Box.',
  image: '/images/2.jpeg',
  cta_label: 'Explore Menu Drops',
  cta_link: '#menu',
  start_date: '2026-09-01T00:00:00Z',
  end_date: '2026-12-31T23:59:59Z',
};

export const fallbackPromoConfig: PromoSlotData = {
  id: 'promo-evergreen',
  is_active: true,
  type: 'text_only',
  headline: '🌿 New meals added every month. Stay fresh with Bowlora.',
  body_text: 'Fresh, chef-crafted, macro-counted nutrition delivered daily in Jaipur.',
  cta_label: 'View Subscription Plans',
  cta_link: '#plans',
};
