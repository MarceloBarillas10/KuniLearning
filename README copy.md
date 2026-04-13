# 🐇 Kuni Learning Center

**Elite STEM Education — Puerto Rico & Online**

A production-ready, bilingual (EN/ES), dark/light mode Next.js 14 website for Kuni Learning Center.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18.17 or later
- npm or yarn

### 1. Install dependencies
```bash
npm install
```

### 2. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 3. Build for production
```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
kuni-learning-center/
├── app/
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Home page (all sections)
│   ├── globals.css             # Global styles + Tailwind
│   ├── sitemap.ts              # SEO sitemap
│   ├── robots.ts               # SEO robots.txt
│   ├── not-found.tsx           # 404 page
│   ├── blog/
│   │   ├── page.tsx            # Blog listing
│   │   ├── BlogClient.tsx      # Blog client component
│   │   └── [slug]/page.tsx     # Individual post
│   └── programs/
│       ├── sat-prep/           # SAT Prep page
│       ├── science-fair/       # Science Fair page
│       └── college-counseling/ # College Counseling page
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Responsive navbar w/ dropdown
│   │   └── Footer.tsx          # Full footer
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ProgramsSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── ResourcesSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/
│       ├── WhatsAppButton.tsx  # Floating WhatsApp button
│       └── SectionBadge.tsx    # Reusable badge component
├── lib/
│   ├── i18n.ts                 # All EN/ES translations
│   └── context.tsx             # Language + Theme context
├── tailwind.config.ts
├── next.config.js
├── vercel.json
└── tsconfig.json
```

---

## 🌍 Bilingual System

Language is managed via React Context in `lib/context.tsx`. All content lives in `lib/i18n.ts`.

**To add/edit content:** Update the `translations` object in `lib/i18n.ts` — both `en` and `es` keys.

**Language toggle** is built into the Navbar and persists to `localStorage`.

---

## 🎨 Dark/Light Mode

Theme is controlled via `isDark` in `AppContext`. The `dark` class is applied to `<html>` via Tailwind's `darkMode: 'class'` strategy.

Theme persists to `localStorage`. Default is dark mode.

---

## 📞 WhatsApp Configuration

Edit the phone number in `components/ui/WhatsAppButton.tsx`:

```ts
const WHATSAPP_NUMBER = '17870000000'; // ← Replace with real number
const WHATSAPP_MESSAGE = 'Hello! I\'m interested in Kuni Learning Center programs.';
```

---

## 🚀 Deploy to Vercel

### Option A: Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option B: GitHub Integration
1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import repository
4. Deploy (zero config needed — `vercel.json` handles it)

---

## 🔧 Customization Checklist

- [ ] Update WhatsApp number in `WhatsAppButton.tsx`
- [ ] Update contact info in `lib/i18n.ts` (phone, email, address)
- [ ] Replace `https://kunilearning.com` in `sitemap.ts`, `robots.ts`, `layout.tsx` with real domain
- [ ] Add real OG image at `public/og-image.png` (1200×630px)
- [ ] Connect contact form to backend (Resend, Formspree, or custom API)
- [ ] Add Google Analytics or Plausible in `layout.tsx`
- [ ] Add real social media links in `Footer.tsx`

---

## 🎨 Brand Colors

| Token | Value | Usage |
|-------|-------|-------|
| `kuni-blue` | `#0047AB` | Primary CTA, buttons |
| `kuni-blue-light` | `#1E6FE0` | Hover states |
| `kuni-blue-glow` | `#3B9EFF` | Icon accents |
| `kuni-navy` | `#00153D` | Dark backgrounds |
| `kuni-navy-deep` | `#000C26` | Deepest dark bg |
| `kuni-accent` | `#00D4FF` | Glow effects, highlights |
| `kuni-accent-warm` | `#FFB800` | Gold accents |

---

## 📦 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS v3
- **Animations:** Framer Motion + CSS animations
- **Icons:** Lucide React
- **Fonts:** Playfair Display (display) + DM Sans (body) + JetBrains Mono (mono)
- **Hosting:** Vercel

---

Built for Kuni Learning Center, Puerto Rico 🇵🇷


<!-- 
✅ Before Going Live — Checklist

WhatsApp number → components/ui/WhatsAppButton.tsx line 4
Contact info (phone, email, hours) → lib/i18n.ts under contact.info
Domain → Replace kunilearning.com in sitemap.ts, robots.ts, layout.tsx
OG image → Add public/og-image.png (1200×630px) for social sharing
Contact form backend → Hook the handleSubmit in ContactSection.tsx to Resend, Formspree, or your own API -->
