# 🌸 Bowlora — PCOS/PCOD & Specialized Nutrition Architecture

## 1. Overview & Business Rationale
PCOS/PCOD (Polycystic Ovary Syndrome/Disease) nutrition is a core strategic differentiator for Bowlora in Jaipur. The brief specifies that women's hormonal wellness nutrition must be given **featured priority visibility** across the site rather than buried inside a generic menu grid.

---

## 2. PCOS Priority Implementation Touchpoints

### A. Splash Screen Priority Callout
- Displays a dedicated callout during entry: `🌸 PCOS/PCOD Nutrition Available in Jaipur`.

### B. Hero Section Direct Link
- Prominent link below tagline: `Looking for PCOS/PCOD-friendly meals? Explore custom nutrition →`.

### C. Menu Showcase Discoverability Banner
- Full-width banner above category grid: `Eating for PCOS/PCOD? We've got a meal collection built for you. [View collection →]`.

### D. Featured Goal Card in `FitnessGoals.tsx`
- Highlighted on the warm cream (`#F5F1E8`) background:
  - **Border**: `border-2 border-[#B08D57]` (gold accent)
  - **Background**: `#EFEADD`
  - **Badge**: `🌸 WOMEN'S WELLNESS` in gold pill tag (`bg-[#B08D57]/15 text-[#B08D57]`)
  - **Description**: Lower GI ingredients, anti-inflammatory foods, complex carbohydrates, zero seed oils.

### E. Dedicated Filter in `CategoryMenuModal.tsx`
- Quick filter button: `🌸 PCOS/PCOD Friendly` filtering meals where `meal.isPCOS === true`.

---

## 3. Nutritional Science Principles

| Principle | Bowlora Implementation | Benefit for PCOS/PCOD |
| :--- | :--- | :--- |
| **Low Glycemic Index (GI)** | Complex grains (quinoa, brown rice, millets) | Prevents insulin spikes & manages resistance |
| **Anti-Inflammatory** | Cold-pressed oils, turmeric, seeds, leafy greens | Reduces systemic hormonal inflammation |
| **High Protein (25g+)** | Lean cottage cheese, grilled tofu, sprouts, chicken | Supports satiety, muscle mass & metabolic rate |
| **Zero Seed Oil / Artificial Additives** | Small-batch cooking in cold-pressed mustard/olive oil | Avoids endocrine disruptors |

---

## 4. Contextual Goal-to-Pricing Flow

```mermaid
graph TD
    A[User clicks 'PCOS/PCOD Nutrition' Goal Card] --> B[App State: setSelectedGoalSlug('pcod-pcos-nutrition')]
    B --> C[Smooth Scroll to #plans Section]
    C --> D[Pricing Section renders Contextual Banner]
    D --> E[Highlight 15-Day Transformation & 28-Day Lifestyle Plans]
    E --> F[WhatsApp Message includes 'for my goal: PCOD/PCOS Nutrition']
```
