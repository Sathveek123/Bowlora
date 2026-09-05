# 💳 Bowlora — Subscription & Pricing System

## 1. Overview
The Subscription & Pricing architecture (`src/components/sections/Pricing.tsx` & `src/data/plans.ts`) follows the brief's strict instruction: **"Keep plan comparison simple; do not overload the user with too many fields."**

---

## 2. Subscription Tiers Specification

| Plan Name | Duration | Primary Tier (2 Meals/Day) | Per Meal Cost | Recommended For |
| :--- | :---: | :---: | :---: | :--- |
| **3 - Day Trial Box** | 3 Days | ₹1,699 | ₹283 | Low-commitment taste test |
| **7 - Day Routine Plan** | 7 Days | ₹3,999 | ₹285 | Weekly routine starter |
| **15 - Day Copper Plan** ⭐ | 15 Days | **₹7,777** | **₹259** | **Recommended Transformation** |
| **28 - Days Lifestyle Plan** | 28 Days | ₹12,999 | ₹232 | Full wellness lifestyle partner |

---

## 3. Indicative Pricing & Business Sign-off Note
> [!IMPORTANT]
> **Pricing Disclaimer**: Listed package prices (₹1,699, ₹3,999, ₹7,777, ₹12,999) are indicative starting estimates. Final customized subscription pricing is confirmed directly during WhatsApp consultation based on specific caloric targets and dietary preferences.

---

## 4. Simplified 6-Item Card Architecture

Every pricing card displays ONLY these 6 elements in exact top-to-bottom order:

1. **Plan Name** (`font-display text-2xl font-bold`)
2. **Positioning Tagline** (one line italic: `"Transformation-focused mid-term option..."`)
3. **Large Prominent Price** (`₹7,777` in `#7A9450` green)
4. **Duration Meta** (`15 Days · 2 Fresh Meals / Day (₹259/meal)`)
5. **Short Description** (max 2 lines)
6. **Single CTA Button** (`Subscribe Now`)

> **Removed Clutter**: Feature checkmarks, nested secondary pricing tables, and fine-print disclaimers were moved into the meal detail modal/FAQ to preserve visual breathing room.

---

## 5. Recommended Gold Card Highlight
The **15-Day Copper Plan** carries:
- `border-2 border-[#B08D57]` (gold border)
- `shadow-[0_16px_50px_rgba(176,141,87,0.2)]`
- Honest, verifiable Gold pill badge: `✨ RECOMMENDED PLAN` (avoiding artificial superlative claims prior to verified usage data).

---

## 5. Automated WhatsApp Integration

Clicking **"Subscribe Now"** on any plan constructs an automated, pre-filled WhatsApp message sent to Bowlora's hotline (`+91 9119222601`):

```javascript
const whatsappMessage = encodeURIComponent(
  `Hi Bowlora! I want to subscribe to the ${plan.name} (₹${primaryTier.price.toLocaleString()} for ${plan.durationDays} Days) ${activeGoal ? `for my goal: ${activeGoal.name}` : ''}. Please guide me with the next steps.`
);
```
