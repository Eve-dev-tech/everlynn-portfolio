# Everlynn Muthoni — Portfolio Website

**Behavioral Data Strategist · Customer Behavior Analytics**

Built with Next.js 14, Tailwind CSS, and Framer Motion.

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.example .env.local
# Edit .env.local and add your values

# 3. Run development server
npm run dev
# Open http://localhost:3000
```

---

## Environment Variables

Add these to `.env.local` (never commit this file):

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | Get from resend.com (free) |
| `NOTIFICATION_EMAIL` | Your email for client notifications |
| `NEXT_PUBLIC_SITE_URL` | Your Vercel URL |
| `NEXT_PUBLIC_CALENDLY_URL` | Your Calendly booking link |

---

## Image Files Needed

Drop your photos into these exact locations:

| File | Location | Usage |
|---|---|---|
| `profile-hero.jpg` | `public/images/profile/` | About section (portrait, min 400px wide) |
| `profile-small.jpg` | `public/images/profile/` | Contact section circular thumbnail (square crop) |
| `profile-cta.jpg` | `public/images/profile/` | Footer CTA card |
| `project-sales-insights.png` | `public/images/projects/` | Sales project screenshot |
| `project-credit-segmentation.png` | `public/images/projects/` | Credit project screenshot |
| `project-car-prediction.png` | `public/images/projects/` | Car project screenshot |
| `dashboard-1.png` etc | `public/images/dashboards/` | Power BI screenshots |
| `everlynn-cv.pdf` | `public/cv/` | Downloadable CV |

**Tip:** Compress images with [squoosh.app](https://squoosh.app) before adding. Target < 200KB each.

---

## Deployment to Vercel

1. Push repo to GitHub
2. Connect at [vercel.com/new](https://vercel.com/new)
3. Add environment variables in Vercel dashboard
4. Every push to `main` auto-deploys

---

## Content Updates

All content lives in `/lib/data/` — never touch component code to update content:

| File | What it controls |
|---|---|
| `projects.ts` | Project cards, GitHub links, descriptions |
| `services.ts` | Services, pricing, deliverables |
| `experience.ts` | Work history timeline |
| `skills.ts` | Skill bars and percentages |
| `achievements.ts` | Awards and milestone cards |

---

## Build Session Protocol

Start every Claude session with:
> "Here is my Portfolio Build Plan document. We are currently on [PHASE X]. The last thing we completed was [X]. Today I want to work on [Y]."

---

*GOD BLESS AND GUIDE ME.*
