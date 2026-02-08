# 🔗 SnapLink — Free URL Shortener

> A professional, SEO-optimized, and Google AdSense-integrated URL shortener built with React, Vite, TypeScript, and Tailwind CSS. Ready to deploy on Vercel.

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

**SnapLink** is a full-featured, client-side URL shortener web application designed for production deployment. It features a beautiful, responsive UI, comprehensive SEO optimization, Google AdSense monetization, and Google Search Console integration — all packaged in a single-page React application ready for Vercel deployment.

---

## ✨ Features

### Core Functionality
- ✅ **URL Shortening** — Instantly shorten any valid HTTP/HTTPS URL
- ✅ **Custom Aliases** — Create branded short links with custom slugs (min 3 chars)
- ✅ **URL Validation** — Smart validation with auto-prefix `https://` support
- ✅ **Copy to Clipboard** — One-click copy with visual feedback (supports fallback for older browsers)
- ✅ **Delete Links** — Remove individual links or clear all at once
- ✅ **Loading States** — Animated spinner during link generation
- ✅ **Error Handling** — Descriptive error messages for invalid input, duplicate aliases, etc.

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

### Animations
- ✅ `slide-up` — Element entrance animation
- ✅ `fade-in` — Opacity transition
- ✅ `float` — Gentle floating effect
- ✅ `pulse-glow` — Pulsing glow effect
- ✅ `shimmer` — Loading shimmer effect
- ✅ Hover transitions on all interactive elements

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

---

## 📁 Project Structure

```
snaplink/
├── public/
│   ├── google7e64d7513cc35712.html    # Google Search Console verification
│   ├── robots.txt                      # Search engine crawl rules
│   └── sitemap.xml                     # XML sitemap for SEO
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
│   │   └── URLShortener.tsx           # Main URL shortener tool
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

### To Use Your Own Verification
Replace the verification file name and content in:
- `public/google7e64d7513cc35712.html` (rename the file)
- `index.html` (update the `google-site-verification` meta tag)

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

**1. WebApplication Schema**
```json
{
  "@type": "WebApplication",
  "name": "SnapLink",
  "applicationCategory": "UtilityApplication",
  "aggregateRating": { "ratingValue": "4.8", "ratingCount": "12540" }
}
```

**2. FAQPage Schema**
- 3 FAQ entries with questions and answers
- Enables FAQ rich snippets in Google Search results

### Additional SEO Files
- **`robots.txt`** — Allows all crawlers, references sitemap
- **`sitemap.xml`** — XML sitemap with main page URL and metadata

### Semantic HTML
- Proper heading hierarchy: `h1` → `h2` → `h3`
- Semantic elements: `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`, `<article>`, `<blockquote>`
- ARIA labels and roles on all interactive elements
- Alt text and accessible names throughout

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

### Vercel Configuration (auto-detected)
Vercel automatically detects Vite projects. No additional configuration needed.

| Setting | Value |
|---|---|
| **Framework** | Vite |
| **Build Command** | `npm run build` |
| **Output Directory** | `dist` |
| **Install Command** | `npm install` |

### Post-Deployment Checklist
1. ✅ Update canonical URLs in `index.html` to your actual domain
2. ✅ Update `og:url` and `twitter:url` meta tags
3. ✅ Update `sitemap.xml` with your actual domain URL
4. ✅ Update `robots.txt` sitemap reference
5. ✅ Verify site in Google Search Console
6. ✅ Submit sitemap in Search Console
7. ✅ Verify AdSense is serving ads (may take 24-48 hours)

---

## 🎨 Customization

### Changing the Brand Name
To rename "SnapLink" to your brand:

1. **`index.html`** — Update all `<title>`, `<meta>`, and JSON-LD references
2. **`src/components/Header.tsx`** — Update logo text
3. **`src/components/Footer.tsx`** — Update footer brand
4. **`src/components/FAQ.tsx`** — Update FAQ text
5. **`src/components/CTA.tsx`** — Update CTA text
6. **`src/components/Testimonials.tsx`** — Update testimonial quotes
7. **`src/components/URLShortener.tsx`** — Update domain reference
8. **`public/robots.txt`** — Update sitemap URL
9. **`public/sitemap.xml`** — Update site URL

### Changing Colors
Edit `src/index.css` to modify the theme:

```css
@theme {
  --color-primary-500: #3b82f6;  /* Main brand blue */
  --color-accent-500: #8b5cf6;   /* Accent purple */
}
```

### Adding Pages
Add new components in `src/components/` and import them in `src/App.tsx`.

---

## ⚡ Performance

### Optimizations Included
- **Vite** — Lightning-fast HMR and optimized production builds
- **Single-file output** — `vite-plugin-singlefile` bundles everything into one HTML file
- **Font preconnect** — `<link rel="preconnect">` for Google Fonts
- **CSS purging** — Tailwind CSS automatically removes unused styles
- **Tree shaking** — Vite removes dead code from the bundle
- **Passive event listeners** — Scroll handlers use `{ passive: true }`
- **Lazy animations** — CSS animations only trigger when elements appear

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
- **Semantic HTML** throughout (no `div` soup)
- **Focus indicators** on all interactive elements
- **Color contrast** meets WCAG AA standards
- **Screen reader** friendly text alternatives

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

## 📧 Support

If you have any questions or need help, please [open an issue](https://github.com/your-repo/snaplink/issues) on GitHub.

---

<p align="center">
  Built with ❤️ by the SnapLink Team
</p>
