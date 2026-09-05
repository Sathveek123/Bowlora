# 📄 Bowlora — Homepage Sections Specification

## 1. Overview
The Bowlora homepage consists of **10 core brief-approved sections** plus the **Splash Screen** entrance experience.

---

## 2. Detailed Section Breakdown

### 0. Splash Screen (`src/components/layout/SplashScreen.tsx`)
- **Duration**: ~4.5 seconds with progress bar animation and instant `"SKIP INTRO →"` UX override.
- **Visuals**: Centered golden circular logo ring (`border-2 border-[#B08D57]`), `#B08D57` gold ambient glow, and high-impact tagline: *"Junk is everywhere. Health is rare. That's why Bowlora."*

### 1. Hero Section (`src/components/sections/Hero.tsx`)
- **Theme**: Dark (`#141810`)
- **Headline**: Massive **80px (`text-5xl lg:text-[80px]`)** gradient typography: *"Healthy Food, Finally Made Easy."*
- **Food Showcase**: **500px (`xl:w-[500px]`) Circular Masterpiece Bowl** wrapped in a 4px gold border with floating badges:
  - *Chef-Crafted / Jaipur Kitchen* (Top-Left)
  - *Macro Verified 🔥 420 kcal · 32g Protein* (Bottom-Right)
- **CTAs**: `SUBSCRIBE NOW` (Primary Olive) & `EXPLORE OUR MENU` (Secondary Gold Outline).

### 2. Why Bowlora — 5 Pillars (`src/components/sections/WhyBowlora.tsx`)
- **Theme**: Dark (`#1B1F16`)
- **Pillars**:
  1. *Freshly Prepared* (Cooked daily at 5:30 AM in Jagatpura)
  2. *Chef Crafted* (Real chefs, no shortcuts)
  3. *Macro Counted* (Exact calories, protein, carbs, fats)
  4. *Conveniently Delivered* (Doorstep delivery across Jaipur)
  5. *No Compromise on Taste* (Craveable, delicious recipes)

### 3. Food Philosophy (`src/components/sections/NutritionPhilosophy.tsx`)
- **Theme**: Dark (`#1B1F16`)
- **Core Message**: *"Food should heal, fuel, and delight — in that order."*
- **Ingredient Parade**: Full-width scrolling marquee featuring 100% real ingredients (Avocado, Quinoa, Cold-Pressed Oil, Free-Range Eggs).

### 4. Brand Story (`src/components/sections/BrandStory.tsx`)
- **Theme**: **Warm Cream (`#F5F1E8`)** ⚡
- **Content**: Story behind Bowlora's founding in Jaipur, chef credentials, and modal trigger to read the full story.

### 5. Explore Menu Categories (`src/components/sections/MealsShowcase.tsx`)
- **Theme**: Dark (`#141810`)
- **Grid**: 7 Menu Categories (Bowls, High-Protein, Salads, Wraps, Breakfast, Smart Snacks, Smoothies) opening the `CategoryMenuModal`.
- **PCOS Discovery Strip**: Banner pointing users to specialized PCOS/PCOD nutrition.

### 6. Target Goals & PCOS Priority (`src/components/sections/FitnessGoals.tsx`)
- **Theme**: **Warm Cream (`#F5F1E8`)** ⚡
- **Featured Card**: **PCOD/PCOS-Friendly Nutrition Banner** styled with `border-2 border-[#B08D57] bg-[#EFEADD]` and `🌸 WOMEN'S WELLNESS` gold pill badge.
- **Other Goals**: Fat Reduction, Muscle Building, Clean Eating.

### 7. Simple Process — How It Works (`src/components/sections/HowItWorks.tsx`)
- **Theme**: Dark (`#141810`)
- **4 Timeline Steps**:
  1. Choose Your Goal / Plan
  2. Select Your Weekly Bowls on WhatsApp
  3. Fresh Prep Every Morning
  4. Doorstep Delivery in Jaipur

### 8. Bowlora x Fitness Partnerships (`src/components/sections/FitnessPartnerships.tsx`)
- **Theme**: **Warm Cream (`#F5F1E8`)** ⚡
- **Content**: B2B Gym & Fitness Studio partnership program (`"Healthy eating made easier for your members"`), triggering `PartnerModal`.

### 9. Special Offers & Promo Hub (`src/components/sections/PromoHub.tsx`)
- **Theme**: Dark (`#141810`)
- **Color Discipline**: Enforces brand-only backgrounds (Olive `#4A5D2A`/15, Brown `#7A5A2A`/15, Dark `#1F2418`) with gold `#B08D57` badges and zero off-brand hues.

### 10. Subscription Plans & Pricing (`src/components/sections/Pricing.tsx`)
- **Theme**: Dark (`#141810`)
- **Plans**: 3-Day Trial, 7-Day Routine, 15-Day Copper Plan (Most Popular), 28-Day Lifestyle.

### 11. FAQ Accordion (`src/components/sections/FAQ.tsx`)
- **Theme**: **Warm Cream (`#F5F1E8`)** ⚡
- **Styling**: 16px item spacing, live search filter, and **3px gold left border indicator (`border-l-4 border-l-[#B08D57]`)** on active open items.

### 12. Testimonials (`src/components/sections/Testimonials.tsx`)
- **Theme**: Dark (`#141810`)
- **Visuals**: Infinite marquee carousel of verified customer reviews with 5 gold stars.

### 13. Newsletter (`src/components/sections/Newsletter.tsx`)
- **Theme**: **Warm Cream (`#F5F1E8`)** ⚡
- **Functionality**: WhatsApp number signup with confetti burst animation.

### 14. Instagram Feed & Contact/Footer (`src/components/sections/InstagramFeed.tsx` & `Footer.tsx`)
- **Theme**: Cream Feed (`#F5F1E8`) / Dark Footer (`#141810`)
- **Footer**: 4-column layout with quick links, contact info, Instagram QR code, and legal modal links.
