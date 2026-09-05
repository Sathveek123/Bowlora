# 🥗 Bowlora — Fresh, Chef-Crafted Healthy Meals in Jaipur

> **"Junk is everywhere. Health is rare. That's why Bowlora."**

Bowlora is a premier, chef-crafted healthy meal delivery platform operating out of **Jagatpura, Jaipur, Rajasthan**. Designed specifically for fitness enthusiasts, weight management, and specialized PCOS/PCOD hormonal balance, Bowlora combines nutrition science with culinary craft to deliver daily macro-counted meal boxes directly to doorsteps across Jaipur.

---

## ✨ Key Features & Architecture

### 🥗 1. B2C Meal Subscriptions & Showcase
- **Goal-Oriented Plans**:
  - 🌸 **PCOS/PCOD Friendly Nutrition**: Low GI, anti-inflammatory ingredients, zero refined sugar.
  - 💪 **High-Protein Transformation**: Protein-forward meals for muscle growth & recovery.
  - 🧘 **Gut Health & Everyday Wellness**: Fiber-rich whole food meals.
- **Flexible Subscription Tiers**:
  - **3-Day Reset Trial Box**: Experience clean eating before committing.
  - **7-Day Routine Plan**: Build a healthy daily habit.
  - **15-Day Copper Plan**: Mid-term transformation with dietitian access.
  - **28-Day Lifestyle Plan**: Maximum value long-term wellness plan.

### 🏋️ 2. Bowlora x Fitness (Gym & B2B Partnerships)
- Dedicated B2B partner system (`/partner` & `PartnerModal`).
- Gym member meal box distribution model with custom delivery slots and member discounts.
- Structured B2B enquiry portal tagged for WhatsApp routing and CRM context (`context="Gym Partnership"`).

### 🌿 3. Nutrition Philosophy & Kitchen Transparency
- **Zero Ultra-Processed Foods Guarantee**: No artificial sauces, packaged gravies, or MSG.
- **Jaipur Local Sourcing**: Ingredients sourced fresh daily starting at 5:30 AM.
- **Macro Transparency**: Detailed calorie, protein, carb, and fat counts provided for every single bowl.

### 🎁 4. Future Content Promotional Slot (`PromoSlot`)
- Reusable marketing banner component with **automated scheduling logic**.
- Auto-checks `start_date` and `end_date` against current system time.
- Displays active campaign banners (`text_only`, `text_with_image`, `banner_link`) and falls back to evergreen neutral announcements (*"🌿 New meals added every month. Stay fresh with Bowlora."*).

### 📜 5. Complete Legal Pages System
- Neutral, high-contrast 720px reader modals for:
  - 🛡️ **Privacy Policy**: Data handling, third-party services, and deletion requests.
  - 📄 **Terms & Conditions**: Ordering terms, ±10% macro variance disclaimer, governing law (Jaipur, Rajasthan, India).
  - 🔄 **Refund & Cancellation Policy**: 24-hour advance pause/cancel rules and quality replacement guarantee.

### 📱 6. Mobile-First UX & Accessibility
- 44×44px minimum touch targets across all interactive buttons, filter pills, and drawer triggers.
- Responsive Macro Strip components (wraps to 2×2 grid on 375px screens).
- WebP image optimization and lazy-loading (`loading="lazy"`) with priority loading for Hero visuals.

### 🔍 7. SEO Baseline & Local Business Schema
- **LocalBusiness JSON-LD**: Injected structured data schema (address, telephone `+919119222601`, geo-coordinates, operating hours, opening prices).
- **XML Sitemap**: Auto-generated dynamic sitemap (`/sitemap.xml`) covering all categories, goals, plans, and legal pages.
- **Clean URLs**: SEO-friendly canonical URLs without query parameters.

### 📊 8. Analytics & Event Engine
- Unified tracking helpers for:
  - `order_cta_click`: Captures destination, context, page, and button label.
  - `form_submit`: Fires on successful Contact or Partner form completion with `{ form_type: "contact" | "partnership", success }`.

### 🛡️ 9. Security & Bot Spam Protection
- Invisible **Honeypot fields** (`website_hp`) integrated into all forms to block automated spam bots without user friction or CAPTCHA.
- Field validation for 10-digit Indian mobile numbers, valid emails, and minimum character thresholds.

---

## 🛠️ Technology Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite 6
- **Styling**: TailwindCSS v4 + Vanilla CSS
- **Icons**: Lucide React
- **Animations**: Canvas Confetti (`canvas-confetti`)
- **Version Control**: Git + GitHub CLI (`gh`)

---

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have Node.js (v18+) and npm installed on your system.

### 2. Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/Sathveek123/Bowlora.git
cd Bowlora
npm install
```

### 3. Running Locally
Start the Vite development server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

### 4. Building for Production
To build the production bundle and run type-checking:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

---

## 📂 Project Structure

```
Bowlora/
├── public/
│   ├── images/               # Meal and section imagery
│   ├── logo/                 # Official Bowlora brand logomarks
│   ├── robots.txt            # Search engine crawler instructions
│   └── sitemap.xml           # Static XML sitemap
├── src/
│   ├── components/
│   │   ├── about/            # About Us story modal
│   │   ├── admin/            # Admin control drawer
│   │   ├── common/           # OrderCTA & PromoSlot reusable components
│   │   ├── goals/            # Fitness goal modal reader
│   │   ├── layout/           # Navbar, Footer, SplashScreen
│   │   ├── legal/            # Legal policies reader (Privacy, Terms, Refund)
│   │   ├── meals/            # Category & Meal detail modals
│   │   ├── partnerships/     # Bowlora x Fitness partner page & modal
│   │   ├── sections/         # Page sections (Hero, Meals, Philosophy, FAQ, etc.)
│   │   └── ui/               # Low-level UI primitives
│   ├── data/                 # CMS-editable TypeScript data models
│   │   ├── about.ts
│   │   ├── chefs.ts
│   │   ├── faqs.ts
│   │   ├── goals.ts
│   │   ├── legal.ts
│   │   ├── meals.ts
│   │   ├── partnerships.ts
│   │   ├── plans.ts
│   │   └── promoSlot.ts
│   ├── lib/
│   │   ├── analytics.ts      # GA4 event tracking engine
│   │   └── seo.ts            # LocalBusiness JSON-LD & SEO metadata helpers
│   ├── App.tsx               # Main application layout & state orchestrator
│   ├── index.css             # Base styles & typography
│   └── main.tsx              # Application entry point
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 📞 Contact & Support

- **Operation Hub**: Jagatpura, Jaipur, Rajasthan
- **Phone / Call Support**: [+91 9119222601](tel:+919119222601)
- **WhatsApp Support**: [+91 9119222601](https://wa.me/919119222601)
- **Instagram**: [@bowlora](https://instagram.com/bowlora)

---

© 2026 Bowlora. All rights reserved.
