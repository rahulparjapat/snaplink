# 🔗 SnapLink — Free URL Shortener

> A professional, SEO-optimized, and Google AdSense-integrated URL shortener that creates **real, working short links** using the TinyURL API. Built with React, Vite, TypeScript, and Tailwind CSS. Ready to deploy on Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-repo/snaplink)

![SnapLink Screenshot](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)
![React](https://img.shields.io/badge/React-19.x-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.x-06B6D4?logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-7.x-646CFF?logo=vite)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [How the URL Shortener Works](#how-the-url-shortener-works)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Google AdSense Integration](#google-adsense-integration)
- [Google Search Console Verification](#google-search-console-verification)
- [SEO Optimization](#seo-optimization)
- [Deployment on Vercel](#deployment-on-vercel)
- [Customization](#customization)
- [Performance](#performance)
- [Accessibility](#accessibility)
- [License](#license)

---

## Overview

**SnapLink** is a full-featured URL shortener web application that generates **real, working short links** using the TinyURL API (with is.gd as fallback). It features a beautiful, responsive UI, comprehensive SEO optimization, Google AdSense monetization, and Google Search Console integration — all packaged in a single-page React application ready for Vercel deployment.

---

## ✨ Features

### Core Functionality
- ✅ **Real URL Shortening** — Uses TinyURL API to generate actual, permanent short links
- ✅ **Fallback API** — Automatically switches to is.gd API if TinyURL is unavailable
- ✅ **URL Validation** — Smart validation with auto-prefix `https://` support
- ✅ **Duplicate Detection** — Prevents shortening the same URL twice
- ✅ **Copy to Clipboard** — One-click copy with visual feedback (supports fallback for older browsers)
- ✅ **Visit Link** — Open shortened link in a new tab directly
- ✅ **Delete Links** — Remove individual links or clear all at once
- ✅ **Loading States** — Animated spinner during API call
- ✅ **Error Handling** — Descriptive error messages for invalid input, network errors, API failures
- ✅ **Timestamps** — Shows creation date and time for each link

### User Interface
- ✅ **Responsive Design** — Fully responsive across mobile, tablet, and desktop
- ✅ **Fixed Header** — Glassmorphism navbar with scroll-aware background
- ✅ **Mobile Navigation** — Hamburger menu with smooth slide-up animation
- ✅ **Hero Section** — Gradient backgrounds with animated stats (10M+ links, 50M+ clicks, 99.9% uptime)
- ✅ **Features Grid** — 6 highlighted feature cards with icons and hover effects
- ✅ **How It Works** — 3-step visual guide with connecting lines
- ✅ **Testimonials** — 3 user review cards with star ratings and avatars
- ✅ **FAQ Accordion** — 8 expandable items with smooth transitions
- ✅ **CTA Section** — Bold call-to-action with gradient background and dot pattern
- ✅ **Footer** — Full footer with social links, navigation columns, and legal links
- ✅ **Back to Top** — Floating button with scroll-aware visibility (appears after 400px scroll)
- ✅ **Trust Badges** — SSL Encrypted, Instant Results, 100% Free badges

### Animations
- ✅ `slide-up` — Element entrance animation
- ✅ `fade-in` — Opacity transition
- ✅ `float` — Gentle floating effect
- ✅ `pulse-glow` — Pulsing glow effect
- ✅ `shimmer` — Loading shimmer effect
- ✅ Hover transitions on all interactive elements

---

## 🔧 How the URL Shortener Works

SnapLink uses **real URL shortening APIs** to generate working short links:

### API Flow
```
User enters URL → Validate URL → Call TinyURL API → Return short link
                                       ↓ (if fails)
                                  Call is.gd API → Return short link
                                       ↓ (if fails)
                                  Show error message
```

### APIs Used

| API | Endpoint | Key Required | Rate Limit |
|---|---|---|---|
| **TinyURL** (Primary) | `https://tinyurl.com/api-create.php` | No | ~600/day |
| **is.gd** (Fallback) | `https://is.gd/create.php` | No | ~1000/day |

### Key Features
- **Auto-prefix**: URLs without `http://` or `https://` automatically get `https://` prepended
- **Validation**: Uses the `URL` constructor to validate URLs before API calls
- **Duplicate check**: Prevents shortening the same URL twice in one session
- **Error handling**: Catches network errors, API failures, and invalid responses
- **Fallback chain**: If TinyURL fails, automatically tries is.gd

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| **React** | 19.x | UI framework |
| **TypeScript** | 5.x | Type safety |
| **Vite** | 7.x | Build tool & dev server |
| **Tailwind CSS** | 4.x | Utility-first CSS |
| **clsx** | 2.x | Conditional class names |
| **tailwind-merge** | 3.x | Merge Tailwind classes |
| **TinyURL API** | — | Primary URL shortening |
| **is.gd API** | — | Fallback URL shortening |

---

## 📁 Project Structure

```
snaplink/
├── public/
│   ├── google7e64d7513cc35712.html    # Google Search Console verification
│   ├── robots.txt                      # Search engine crawl rules
│   ├── sitemap.xml                     # XML sitemap for SEO
│   └── vercel.json                     # Vercel SPA routing & headers
├── src/
│   ├── components/
│   │   ├── AdBanner.tsx               # Google AdSense ad component
│   │   ├── CTA.tsx                    # Call-to-action section
│   │   ├── FAQ.tsx                    # FAQ accordion section
│   │   ├── Features.tsx               # Features grid section
│   │   ├── Footer.tsx                 # Site footer
│   │   ├── Header.tsx                 # Fixed navbar with mobile menu
│   │   ├── Hero.tsx                   # Hero/landing section
│   │   ├── HowItWorks.tsx            # 3-step guide section
│   │   ├── Testimonials.tsx           # User reviews section
│   │   └── URLShortener.tsx           # Main URL shortener (TinyURL API)
│   ├── utils/
│   │   └── cn.ts                      # Tailwind class merge utility
│   ├── App.tsx                        # Root application component
│   ├── index.css                      # Global styles & animations
│   └── main.tsx                       # React entry point
├── index.html                         # HTML template with SEO meta tags
├── README.md                          # This file
├── package.json                       # Dependencies & scripts
├── tsconfig.json                      # TypeScript configuration
└── vite.config.ts                     # Vite build configuration
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18+ installed
- **npm** or **yarn** package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/your-repo/snaplink.git
cd snaplink

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server at `http://localhost:5173` |
| `npm run build` | Build optimized production bundle to `dist/` |
| `npm run preview` | Preview the production build locally |

---

## 💰 Google AdSense Integration

### How It Works

AdSense is integrated at two levels:

#### 1. Global AdSense Script (in `index.html`)
```html
<script async
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7273204238508295"
  crossorigin="anonymous">
</script>
```

#### 2. Ad Banner Component (`src/components/AdBanner.tsx`)
A reusable React component that renders AdSense ad units:

```tsx
<AdBanner slot="1234567890" format="auto" className="my-6" />
```

**Props:**
| Prop | Type | Default | Description |
|---|---|---|---|
| `slot` | `string` | `'1234567890'` | AdSense ad slot ID |
| `format` | `string` | `'auto'` | Ad format (`auto`, `horizontal`, `vertical`, `rectangle`) |
| `responsive` | `boolean` | `true` | Enable responsive ad sizing |
| `className` | `string` | `''` | Additional CSS classes |

#### Ad Placement Locations (4 strategic positions)
1. **After Hero** — Top of page, high visibility
2. **After URL Shortener** — Post-interaction engagement
3. **Middle Content** — Between How It Works and Testimonials
4. **Before CTA** — Bottom of content, pre-conversion

### Customizing Your AdSense

To use your own AdSense account:

1. Replace `ca-pub-7273204238508295` with your publisher ID in `index.html`
2. Replace `ca-pub-7273204238508295` in `src/components/AdBanner.tsx`
3. Create ad units in your [AdSense dashboard](https://www.google.com/adsense/)
4. Update the `slot` props in `src/App.tsx` with your ad slot IDs

---

## 🔍 Google Search Console Verification

### Verification File
Located at `public/google7e64d7513cc35712.html`, this file is automatically copied to the build output directory during `npm run build`.

**Content:**
```
google-site-verification: google7e64d7513cc35712.html
```

### Meta Tag Verification
Also included as a meta tag in `index.html`:
```html
<meta name="google-site-verification" content="google7e64d7513cc35712" />
```

### How to Verify Your Site
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your deployed URL (e.g., `https://snaplink.vercel.app`)
3. Choose **HTML file** or **HTML tag** verification method
4. The verification file and meta tag are already in place
5. Click **Verify** — your site should be verified immediately

---

## 🎯 SEO Optimization

### Meta Tags (in `index.html`)

| Tag | Purpose |
|---|---|
| `<title>` | Page title optimized for search (60 chars) |
| `meta[description]` | Search result description (155 chars) |
| `meta[keywords]` | Target keywords for the page |
| `meta[robots]` | Indexing directives with rich result hints |
| `link[canonical]` | Canonical URL to prevent duplicate content |

### Open Graph (Facebook/Social)
- `og:type`, `og:url`, `og:title`, `og:description`
- `og:site_name`, `og:locale`

### Twitter Cards
- `twitter:card` (summary_large_image)
- `twitter:url`, `twitter:title`, `twitter:description`

### Structured Data (JSON-LD)

**1. WebApplication Schema** — Marks the site as a web app in Google
**2. FAQPage Schema** — Enables FAQ rich snippets in Google Search results (4 questions)

### Additional SEO Files
- **`robots.txt`** — Allows all crawlers, references sitemap
- **`sitemap.xml`** — XML sitemap with main page URL and metadata

### Semantic HTML
- Proper heading hierarchy: `h1` → `h2` → `h3`
- Semantic elements: `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`, `<article>`, `<blockquote>`
- ARIA labels and roles on all interactive elements

---

## 🚢 Deployment on Vercel

### One-Click Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-repo/snaplink)

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Post-Deployment Checklist
1. ✅ Update canonical URLs in `index.html` to your actual domain
2. ✅ Update `og:url` and `twitter:url` meta tags
3. ✅ Update `sitemap.xml` with your actual domain URL
4. ✅ Update `robots.txt` sitemap reference
5. ✅ Verify site in Google Search Console
6. ✅ Submit sitemap in Search Console
7. ✅ Verify AdSense is serving ads (may take 24-48 hours)
8. ✅ Test URL shortening is working (paste a URL and click Shorten)

---

## 🎨 Customization

### Changing the Brand Name
To rename "SnapLink" to your brand, update these files:

1. **`index.html`** — All `<title>`, `<meta>`, and JSON-LD references
2. **`src/components/Header.tsx`** — Logo text
3. **`src/components/Footer.tsx`** — Footer brand
4. **`src/components/FAQ.tsx`** — FAQ text references
5. **`src/components/CTA.tsx`** — CTA text
6. **`src/components/Testimonials.tsx`** — Testimonial quotes
7. **`public/robots.txt`** — Sitemap URL
8. **`public/sitemap.xml`** — Site URL

### Changing the URL Shortening API
Edit `src/components/URLShortener.tsx`:
- `shortenWithTinyURL()` — Primary API call
- `shortenWithIsGd()` — Fallback API call
- `shortenUrl()` — Orchestrates the API chain

### Changing Colors
Edit `src/index.css` to modify the theme:
```css
@theme {
  --color-primary-500: #3b82f6;  /* Main brand blue */
  --color-accent-500: #8b5cf6;   /* Accent purple */
}
```

---

## ⚡ Performance

### Optimizations Included
- **Vite** — Lightning-fast HMR and optimized production builds
- **Single-file output** — `vite-plugin-singlefile` bundles everything into one HTML file
- **Font preconnect** — `<link rel="preconnect">` for Google Fonts
- **CSS purging** — Tailwind CSS automatically removes unused styles
- **Tree shaking** — Vite removes dead code from the bundle
- **Passive event listeners** — Scroll handlers use `{ passive: true }`

### Lighthouse Score Targets
| Metric | Target |
|---|---|
| Performance | 90+ |
| Accessibility | 95+ |
| Best Practices | 95+ |
| SEO | 100 |

---

## ♿ Accessibility

- **Skip to content** link for keyboard users
- **ARIA labels** on all buttons, links, and interactive elements
- **ARIA expanded** on accordion and mobile menu toggles
- **ARIA roles** (`alert`, `contentinfo`, `navigation`, `region`, `list`, `listitem`)
- **Semantic HTML** throughout
- **Focus indicators** on all interactive elements
- **Color contrast** meets WCAG AA standards

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

<p align="center">
  Built with ❤️ by the SnapLink Team
</p>
