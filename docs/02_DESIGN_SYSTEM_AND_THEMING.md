# 🎨 Bowlora — Design System & Visual Identity

## 1. Design Philosophy: "Rich & Royal"
Bowlora's visual identity balances **natural health** with **royal editorial luxury**. Rather than looking like a generic dark-green fitness app, the site uses a curated color palette of **Deep Forest Olive**, **Warm Cream**, and **Brass Gold** accents.

---

## 2. Color System & Design Tokens

### Core Color Palette

| Token Name | HEX Code | CSS Variable | Purpose |
| :--- | :--- | :--- | :--- |
| **Dark Olive Base** | `#141810` | `--color-bg-dark` | Primary section background for high-contrast dark sections |
| **Dark Olive Card** | `#1F2418` | `--color-bg-card-dark` | Card background inside dark sections |
| **Olive Border** | `#2E3324` | `--color-border-dark` | Subtle dividers and card borders in dark sections |
| **Olive Accent Fill** | `#4A5D2A` | `--color-olive-primary` | Primary button fill and active icon badges |
| **Olive Light Text** | `#7A9450` | `--color-green-light` | Highlighted text terms, price totals, and green pills |
| **Warm Cream Base** | `#F5F1E8` | `--color-bg-cream` | Alternating section background for visual rhythm |
| **Cream Card Fill** | `#EFEADD` | `--color-bg-cream-alt` | Card backgrounds inside cream sections |
| **Brass Gold Accent** | `#B08D57` | `--color-gold-accent` | **Royal Accent**: Section eyebrows, thin dividers, active borders |
| **Muted Gold Text** | `#C9A876` | `--color-gold-muted` | Taglines, quote marks, and gold text highlights |
| **Dark Text** | `#1F2418` | `--color-text-dark` | Headings inside cream sections |
| **Dark Muted Text** | `#4A4A3E` | `--color-text-dark-muted` | Body text inside cream sections |

---

## 3. Section Rhythm & Alternation Rules

To prevent cognitive fatigue and long dark scroll monotony, **no two consecutive sections share the same background tone**.

```
Hero Section                  [DARK  #141810]
├── Why Bowlora (5 Pillars)   [DARK  #1B1F16]
├── Our Food Philosophy       [DARK  #1B1F16]
├── Brand Story               [CREAM #F5F1E8] ⚡ RHYTHM BREAK
├── Explore Menu              [DARK  #141810]
├── Goals & PCOS Nutrition    [CREAM #F5F1E8] ⚡ RHYTHM BREAK
├── How It Works              [DARK  #141810]
├── Bowlora x Fitness         [CREAM #F5F1E8] ⚡ RHYTHM BREAK
├── Special Offers Hub        [DARK  #141810]
├── Subscription Pricing      [DARK  #141810]
├── FAQ Section               [CREAM #F5F1E8] ⚡ RHYTHM BREAK
├── Customer Reviews          [DARK  #141810]
├── Newsletter                [CREAM #F5F1E8] ⚡ RHYTHM BREAK
├── Instagram Feed            [CREAM #F5F1E8]
└── Contact & Footer          [DARK  #141810]
```

---

## 4. Typography Hierarchy

Imported directly from Google Fonts in `src/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&family=Space+Grotesk:wght@300..700&display=swap');
```

- **Headings (`font-display`)**: `Fraunces` (Editorial Serif, 600-800 weight)
- **Eyebrows & Buttons (`font-accent`)**: `Space Grotesk` (Uppercase, 2-3px letter spacing, bold)
- **Body & Descriptions (`font-body`)**: `DM Sans` (Clean sans-serif with 1.6 leading)

---

## 5. Standardized Micro-Interactions
- **Card Hover State**: `transition-all duration-300 hover:-translate-y-1.5 hover:border-[#B08D57]/50 hover:shadow-lg`
- **Primary Button Hover State**: `transition-all duration-300 hover:scale-[1.03] hover:bg-[#4A5D2A]`
- **Gold Glow Effect**: `shadow-[0_0_24px_rgba(176,141,87,0.2)]`
