# 🎛️ Bowlora — Modals & Admin CMS Specification

## 1. Overview
To ensure seamless user navigation without page reloads, Bowlora incorporates a set of accessible, backdrop-blurred modals and a floating CMS Admin Drawer.

---

## 2. Modal Components Inventory

| Modal Component | Trigger Source | Purpose & Functionality |
| :--- | :--- | :--- |
| `CategoryMenuModal.tsx` | Menu category card click in `MealsShowcase.tsx` | Displays category-specific meals with live dietary filters (PCOS, High Protein, Under 400 kcal) |
| `MealDetailModal.tsx` | "View Details" button in `CategoryMenuModal.tsx` | Full nutrition breakdown (Calories, Protein, Carbs, Fats), ingredient list, allergen warnings, and custom order CTA |
| `AboutModal.tsx` | "About Us" navbar link / Brand Story button | Comprehensive brand story, Jaipur culinary team background, and quality promise |
| `PartnerModal.tsx` | "Gym Partner" navbar link / Partnerships CTA | B2B Gym & Fitness Studio partnership application form with custom commission calculator |
| `LegalModal.tsx` | Footer links (Privacy, Terms, Refund) | Complete legal policies rendering privacy, terms of service, and cancellation terms |
| `AdminDrawer.tsx` | Bottom-right fixed floating trigger | Live CMS preview panel allowing client editors to update prices, toggle promo banners, and preview text changes live. Persists settings across browser sessions via `localStorage`. |

---

## 3. CMS Persistence Architecture & Long-Term Backend Integration

### Current Persistence Model
- Uses `localStorage` key `'bowlora_cms_settings'` to store edits to taglines, contact numbers, promo flags, and pricing overrides.
- Changes made in the `AdminDrawer` survive browser reloads on the client device.

### Long-Term Headless CMS Integration Path
For full multi-device synchronization and team-wide CMS editing (per brief Section 09):
1. **Supabase / Firebase Integration**: Connect `AdminDrawer.tsx` save handler to update a `cms_settings` table in Supabase.
2. **Sanity.io / Strapi Option**: Swap `src/data/meals.ts` and `src/data/plans.ts` with API fetches from Sanity/Strapi.

---

## 3. Modal Design Principles
- **Backdrop Blur**: `bg-[#141810]/90 backdrop-blur-lg`
- **Container Styling**: `bg-[#141810] border border-[#2E3324] rounded-[28px] shadow-[0_32px_80px_rgba(0,0,0,0.8)]`
- **Accessibility**: Keyboard `ESC` key listener, focus trap, and touch-friendly close button (`X`).

---

## 4. Admin CMS Drawer (`src/components/admin/AdminDrawer.tsx`)
- Floating toggle in bottom-right corner: `⚙️ CMS Preview Panel`
- Allows instant real-time tweaking of:
  - Promo banner activation
  - Active subscription pricing tiers
  - WhatsApp phone number destination
