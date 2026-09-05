# 🎨 Bowlora — Design System & Visual Identity

## 1. Design Philosophy: "Rich & Royal"
Bowlora's visual identity balances **natural health** with **royal editorial luxury**. Rather than looking like a generic dark-green fitness app, the site uses a curated color palette of **Deep Forest Olive**, **Warm Cream**, and **Brass Gold** accents.

---

## 2. Color System & Design Tokens

### Core Color Palette (Real Warm Olive System)

| Token Name | HEX Code | CSS Variable | Purpose |
| :--- | :--- | :--- | :--- |
| **Real Dark Olive Base** | `#242A1C` | `--color-bg-dark` | Base dark section background with visible yellow-green warmth |
| **Dark Olive Alt** | `#2A3020` | `--color-bg-dark-alt` | Lifted dark surface for gradient depth & alternating dark sections |
| **Dark Olive Card** | `#2D3423` | `--color-bg-card-dark` | Card background sitting on dark olive sections |
| **Olive Border** | `#3D4530` | `--color-border-dark` | Card borders and section dividers in dark sections |
| **Olive Primary Fill** | `#4A5D2A` | `--color-olive-primary` | Primary button fill and active icon badges |
| **Olive Light Text** | `#7A9450` | `--color-green-light` | Highlighted text terms, price totals, and green pills |
| **Warm Cream Base** | `#F5F1E8` | `--color-bg-cream` | Alternating section background for visual rhythm |
| **Cream Card Fill** | `#EFEADD` | `--color-bg-cream-alt` | Card backgrounds inside cream sections |
| **Brass Gold Accent** | `#B08D57` | `--color-gold-accent` | **Royal Accent**: Section eyebrows, thin dividers, active borders |
| **Muted Gold Text** | `#C9A876` | `--color-gold-muted` | Taglines, quote marks, and gold text highlights |
| **Dark Text** | `#1F2418` | `--color-text-dark` | Headings inside cream sections |
| **Dark Muted Text** | `#4A4A3E` | `--color-text-dark-muted` | Body text inside cream sections |

---

## 3. Surface Texture & Anti-Template Enhancements

To eliminate flat single-color "generic AI template" fills, the site applies:
1. **Fractal Noise Grain Texture Overlay**: Applied via `.dark-section::before` at 3.5% opacity with `mix-blend-mode: overlay` to give dark surfaces an authentic tactile feel.
2. **Organic Food Blob Mask**: Hero image uses asymmetric clip mask (`bowlora-organic-blob`) paired with an overlapping secondary photo (`-6deg` tilt) to break rigid template symmetry.
3. **Bespoke Leaf Watermark**: Custom SVG leaf motif (`.bowlora-leaf-watermark`) woven into background of Hero, Splash Screen, and Footer.

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
