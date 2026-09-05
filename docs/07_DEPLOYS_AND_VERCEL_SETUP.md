# 🚀 Bowlora — Deployment, Vercel & Maintenance Guide

## 1. Production Environments

- **Live Production URL**: [https://bowlora.vercel.app](https://bowlora.vercel.app)
- **GitHub Repository**: [https://github.com/Sathveek123/Bowlora.git](https://github.com/Sathveek123/Bowlora.git)
- **Deployment Platform**: Vercel Cloud (Edge Network)
- **Branch Tracking**: `main`

---

## 2. Deployment Commands

### Build Command
```bash
npm run build
```
Executes `tsc -b && vite build` to compile TypeScript and bundle assets into `dist/`.

### Vercel Deployment Command
```bash
npx vercel --prod --yes
```
Triggers an immediate production deployment on Vercel and updates the `bowlora.vercel.app` alias.

---

## 3. Git Workflow & Commit Guidelines

```bash
git add .
git commit -m "feat/refactor: descriptive message"
git push origin main
```

---

## 4. Post-Launch Pre-Flight Checklist

- [x] Alternating light cream (`#F5F1E8`) and dark (`#141810`) section rhythm.
- [x] Sitewide brass gold (`#B08D57`) accents on section eyebrows, dividers, and featured cards.
- [x] 10 core brief sections present; unapproved draft sections removed.
- [x] 80px Hero headline with 500px circular food centerpiece and glowing ambient lighting.
- [x] Clean, 6-item pricing cards with automated WhatsApp links.
- [x] Lightened FAQ section on cream background with 3px gold left border indicators.
- [x] SEO meta tags and LocalBusiness JSON-LD schema injected into `<head>`.
- [x] Mobile responsive test at 375px, 768px, and 1440px.
