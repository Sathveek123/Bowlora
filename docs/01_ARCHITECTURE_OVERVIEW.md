# 🏛️ Bowlora — Architecture & Frontend System Overview

## 1. Executive Summary
**Bowlora** is a premium, chef-crafted healthy meal delivery platform built specifically for the Jaipur market (with primary operations in Jagatpura). The web application provides a high-converting, mobile-first experience that highlights macro-balanced bowls, specialized PCOS/PCOD nutrition, subscription plans, and gym/fitness partnership pathways.

---

## 2. Technology Stack & Tooling

| Layer | Technology / Package | Purpose |
| :--- | :--- | :--- |
| **Core Framework** | React 18 + TypeScript | Component-driven UI development with strict typing |
| **Build Tooling** | Vite v6.4 | Ultra-fast HMR and optimized production bundling |
| **Styling** | Vanilla CSS + Tailwind CSS utilities | Custom design system with exact HSL/HEX token control |
| **Typography** | Google Fonts (`Fraunces`, `DM Sans`, `Space Grotesk`) | Premium editorial serif + modern sans-serif hierarchy |
| **Iconography** | Lucide React | Clean, scalable vector icons |
| **Animations** | Tailwind CSS transitions + Canvas Confetti | Smooth hover states, drawer slide-ins, and confetti triggers |
| **Deployment** | Vercel Production + GitHub CI/CD | Auto-deploying main branch to `https://bowlora.vercel.app` |

---

## 3. Directory Structure

```
d:\Client Projects\MY PROJECTS\Bowlora\
├── docs/                                  # Modular Frontend Documentation
│   ├── 01_ARCHITECTURE_OVERVIEW.md
│   ├── 02_DESIGN_SYSTEM_AND_THEMING.md
│   ├── 03_HOMEPAGE_SECTIONS_SPECIFICATION.md
│   ├── 04_PCOS_AND_SPECIALIZED_NUTRITION.md
│   ├── 05_SUBSCRIPTION_AND_PRICING_SYSTEM.md
│   ├── 06_MODALS_AND_ADMIN_CMS.md
│   └── 07_DEPLOYS_AND_VERCEL_SETUP.md
├── public/                                # Public static assets
│   ├── images/                            # Food photography (1.jpeg - 6.jpeg)
│   └── logo/                              # Bowlora brand logos
├── src/
│   ├── components/                        # UI Components
│   │   ├── about/                         # About modal & brand story docs
│   │   ├── admin/                         # CMS Admin Drawer for dynamic live edits
│   │   ├── common/                        # Reusable buttons, badges, promo slots
│   │   ├── layout/                        # Navbar, Footer, SplashScreen
│   │   ├── legal/                         # Privacy Policy, Terms, Refund modals
│   │   ├── meals/                         # Category & Meal detail modals
│   │   ├── partnerships/                  # Fitness partnership modal & forms
│   │   └── sections/                      # 14 modular homepage sections
│   ├── data/                              # Static JSON/TS data models
│   │   ├── faqs.ts                        # FAQ items dataset
│   │   ├── goals.ts                       # Target wellness & PCOS goals dataset
│   │   ├── howItWorks.ts                  # Process steps dataset
│   │   ├── meals.ts                       # Complete menu dataset with macros
│   │   └── plans.ts                       # 3/7/15/28-day subscription tiers
│   ├── lib/                               # Business logic & SEO helpers
│   │   └── seo.ts                         # Dynamic meta tags & JSON-LD schema
│   ├── App.tsx                            # Main App entry with global modals & state
│   ├── main.tsx                           # React DOM mount point
│   └── index.css                          # Global design system tokens & font imports
├── index.html                             # Root HTML document with SEO head tags
├── package.json                           # Dependency definitions & npm scripts
├── tsconfig.json                          # TypeScript configuration
└── vite.config.ts                         # Vite configuration
```

---

## 4. Key Architectural Patterns

### A. State Management & Flow
- **Goal-to-Plan Contextual Filtering**: Selecting a goal in `FitnessGoals.tsx` passes a `selectedGoalSlug` state up to `App.tsx`, which propagates down to `Pricing.tsx` to display contextual goal banners and highlight recommended subscription tiers.
- **Modal Control System**: Controlled modal states (`isAboutOpen`, `isPartnerOpen`, `selectedCategory`, `selectedMealForDetail`, `activeLegalSlug`) are decoupled from page navigation to ensure zero page reloads.

### B. SEO & Structured Data (`src/lib/seo.ts`)
- **LocalBusiness JSON-LD Schema**: Automatically injected into the document `<head>` on load to boost local search relevance for "healthy meal delivery Jagatpura Jaipur".
- **Dynamic Meta Tags**: Page titles, OpenGraph image tags, and meta descriptions are programmatically controlled for all routes.

---

## 5. Performance Metrics & Verification
- **Vite Production Build Time**: ~2.0 seconds
- **Production Asset Bundle**: Single HTML file (1.33 kB) + Minified CSS (60.6 kB) + Minified JS (373 kB)
- **Vercel CDN Edge Latency**: ~20ms
