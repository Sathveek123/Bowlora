export interface LegalSection {
  heading: string;
  body: string;
}

export interface LegalPolicy {
  slug: 'privacy' | 'terms' | 'refund';
  title: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
}

export const legalPolicies: Record<'privacy' | 'terms' | 'refund', LegalPolicy> = {
  privacy: {
    slug: 'privacy',
    title: 'Privacy Policy',
    lastUpdated: 'September 5, 2026',
    intro:
      'At Bowlora (Jaipur, Rajasthan), we respect your privacy and are committed to protecting the personal information you share with us through our website and ordering channels.',
    sections: [
      {
        heading: '1. What Information We Collect',
        body:
          'We collect information you provide directly to us when subscribing, filling out contact/enquiry forms, or contacting us via WhatsApp. This includes your name, phone number, email address, delivery pincode in Jaipur, and health/dietary preferences (including PCOS/PCOD nutrition requests).'
      },
      {
        heading: '2. How We Use Your Information',
        body:
          'Your information is used strictly to fulfill your daily meal orders, customize macro targets, communicate delivery updates via WhatsApp or phone, and provide customer support. We do not sell or rent your personal information to third parties.'
      },
      {
        heading: '3. Third-Party Services & Communications',
        body:
          'We utilize trusted third-party tools to facilitate communication and analytics, including WhatsApp (Meta Platforms) for direct messaging, Google Forms for optional enquiry tracking, and privacy-focused analytics tools. Note for client: this section should be reviewed by legal counsel before Phase 2 payment processing activation.'
      },
      {
        heading: '4. Data Deletion & Privacy Rights',
        body:
          'You may request a copy of your stored data or ask us to delete your contact record from our database at any time by messaging our Jaipur team directly on WhatsApp (+91 9119222601) or submitting a request via our Contact page.'
      }
    ]
  },
  terms: {
    slug: 'terms',
    title: 'Terms & Conditions',
    lastUpdated: 'September 5, 2026',
    intro:
      'Welcome to Bowlora. By accessing our website, subscribing to our meal plans, or interacting with our Jaipur kitchen services, you agree to comply with and be bound by the following terms and conditions.',
    sections: [
      {
        heading: '1. Use of Website & Service Scope',
        body:
          'Bowlora provides chef-crafted, macro-counted fresh meal deliveries operating out of Jagatpura, Jaipur. Meal subscriptions are subject to daily preparation cutoffs and delivery coverage across specified Jaipur pincodes.'
      },
      {
        heading: '2. Accuracy of Nutrition & Menu Information',
        body:
          'Nutrition profiles, calorie counts, and macro breakdowns provided on our menu cards and digital channels are calculated using standard raw ingredient databases. Values may naturally vary up to ±10% due to seasonal produce variations and artisanal hand preparation.'
      },
      {
        heading: '3. Subscription Plan Terms (Pause & Cancellation)',
        body:
          'Subscribers may pause or resume their active plan with a minimum 24-hour advance notice via WhatsApp (+91 9119222601). Unused days will be credited to your account balance for future delivery resumption.'
      },
      {
        heading: '4. Limitation of Liability & Governing Law',
        body:
          'Bowlora is not liable for indirect or consequential damages arising from service delays caused by weather or traffic conditions. These terms are governed by and construed in accordance with the laws of Jaipur, Rajasthan, India.'
      }
    ]
  },
  refund: {
    slug: 'refund',
    title: 'Refund & Cancellation Policy',
    lastUpdated: 'September 5, 2026',
    intro:
      'We stand behind the freshness and quality of every Bowlora meal. Our refund and cancellation policy is designed to be fair, transparent, and simple for all Jaipur subscribers.',
    sections: [
      {
        heading: '1. How to Cancel or Pause a Subscription',
        body:
          'Subscription cancellations or pause requests must be submitted directly to our support desk on WhatsApp (+91 9119222601) before 8:00 PM on the day preceding scheduled delivery.'
      },
      {
        heading: '2. Refund Eligibility Windows',
        body:
          'Full or pro-rata refunds are eligible if a cancellation is requested prior to meal preparation. Approved refunds will be processed back to the original source account within 5–7 business days.'
      },
      {
        heading: '3. Non-Refundable Circumstances',
        body:
          'Orders cannot be cancelled or refunded once early morning kitchen prep has commenced (after 5:30 AM on the day of delivery) or if delivery fails due to an incorrect address/unreachable contact number provided by the customer.'
      },
      {
        heading: '4. Quality Assurance & Meal Replacement',
        body:
          'If your meal box arrives damaged or fails to meet our quality standards, notify us on WhatsApp with a photo within 2 hours of delivery for an immediate free replacement box or meal credit.'
      }
    ]
  }
};
