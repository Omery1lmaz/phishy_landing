# Phishy Website

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Project Overview

- **Framework**: Next.js 16.0.1 with App Router
- **Internationalization**: next-intl (supports `en` and `tr` locales)
- **Default Locale**: `tr` (Turkish)
- **Locale Prefix**: `always` (all routes include locale prefix)
- **Styling**: Tailwind CSS with custom dark theme

## Routing Structure

All pages are under `app/[locale]/` directory structure. The root `/` redirects to `/{defaultLocale}`.

---

## Routes Quick Reference

### Home & Main Pages
- `/{locale}/` - Home page (✅ Implemented)
- `/{locale}/why-phishy` - Why Phishy page (✅ Implemented)

### Blog
- `/{locale}/blog` - Blog listing (✅ Implemented)
- `/{locale}/blog/[slug]` - Blog post detail (✅ Implemented)

### Company
- `/{locale}/company` - Company page (🚧 Coming Soon)
- `/{locale}/company/about` - About page (🚧 Coming Soon)

### Products
- `/{locale}/products` - Products overview (🚧 Coming Soon)
- `/{locale}/products/incident-response` - Incident Response product (✅ Implemented)
- `/{locale}/products/phishypot` - Phishypot product (✅ Implemented)
- `/{locale}/products/request-mode` - Request Mode product (🚧 Coming Soon)
- `/{locale}/products/simulation` - Simulation product (✅ Implemented)
- `/{locale}/products/training` - Training product (🚧 Coming Soon)

### Features
- `/{locale}/phishing-simulation` - Phishing Simulation (✅ Implemented)
- `/{locale}/phishy-training` - Phishy Training (✅ Implemented)
- `/{locale}/incident-response` - Incident Response (✅ Implemented)

### Other
- `/{locale}/how-it-works` - How It Works (🚧 Coming Soon)
- `/{locale}/contact-us` - Contact Us (✅ Implemented)
- `/{locale}/request-demo` - Request Demo (🚧 Coming Soon)

### Route Patterns

**Locale Format**: All routes require locale prefix:
- `/tr/...` - Turkish (default)
- `/en/...` - English

**Dynamic Routes**:
- `/blog/[slug]` - Dynamic blog post slugs

**Status Legend**:
- ✅ Implemented - Fully functional page
- 🚧 Coming Soon - Uses ComingSoonPage template

---

## Page Inventory

### 1. Home Page
- **Route**: `/{locale}/` (e.g., `/tr/`, `/en/`)
- **File**: `app/[locale]/page.tsx`
- **Type**: Client Component
- **Status**: ✅ Fully Implemented
- **Components Used**: Header, Hero, WhatWeDoSection, ThreatSection, ValueProposition, FeaturesSection, FunctionSection, ModulesSection, DashboardSection, TrustSection, ComplianceSection, BlogSection, FAQSection, ConnectCommunitySection, Footer
- **Features**: GSAP animations with ScrollTrigger, Hero section animations, Section scroll animations, Stagger animations for grid items

### 2. Blog Listing Page
- **Route**: `/{locale}/blog`
- **File**: `app/[locale]/blog/page.tsx`
- **Type**: Client Component
- **Status**: ✅ Fully Implemented
- **Data Source**: `app/data/blog-posts.ts`
- **Features**: Blog post grid layout, GSAP entrance animations, Category badges, Date formatting, Tags display, Empty state handling

### 3. Blog Post Detail Page
- **Route**: `/{locale}/blog/[slug]`
- **File**: `app/[locale]/blog/[slug]/page.tsx`
- **Type**: Client Component
- **Status**: ✅ Fully Implemented
- **Data Source**: `app/data/blog-posts.ts`
- **Features**: Markdown-like content rendering, Article header with metadata, Tags display, Related posts section, Back navigation, GSAP animations

### 4. Company Page
- **Route**: `/{locale}/company`
- **File**: `app/[locale]/company/page.tsx`
- **Type**: Client Component
- **Status**: 🚧 Coming Soon (Uses ComingSoonPage)
- **i18n Key**: `Pages.Company`

### 5. About Page
- **Route**: `/{locale}/company/about`
- **File**: `app/[locale]/company/about/page.tsx`
- **Type**: Client Component
- **Status**: 🚧 Coming Soon (Uses ComingSoonPage)
- **i18n Key**: `Pages.CompanyAbout`

### 6. Contact Us Page
- **Route**: `/{locale}/contact-us`
- **File**: `app/[locale]/contact-us/page.tsx`
- **Type**: Client Component
- **Status**: ✅ Fully Implemented
- **i18n Key**: `Pages.Contact`
- **Features**: Email input form, Custom background glow effects, CTA button (external/internal link support), Responsive design

### 7. How It Works Page
- **Route**: `/{locale}/how-it-works`
- **File**: `app/[locale]/how-it-works/page.tsx`
- **Type**: Client Component
- **Status**: 🚧 Coming Soon (Uses ComingSoonPage)
- **i18n Key**: `Pages.HowItWorks`

### 8. Incident Response Page
- **Route**: `/{locale}/incident-response`
- **File**: `app/[locale]/incident-response/page.tsx`
- **Type**: Client Component
- **Status**: ✅ Fully Implemented
- **Components Used**: Header, Footer, HeroSection (incident-response), ResponseWorkflowSection, AutomationHighlightsSection, AnalystWorkspaceSection, CallToActionSection
- **Features**: Multi-section layout, Custom incident response components

### 9. Phishing Simulation Page
- **Route**: `/{locale}/phishing-simulation`
- **File**: `app/[locale]/phishing-simulation/page.tsx`
- **Type**: Client Component
- **Status**: ✅ Fully Implemented
- **Components Used**: Header, Footer, HeroSection (phishing-simulation), PrepareSimulationsSection, RunSimulationsSection, SeeResultsSection
- **Features**: Multi-section workflow, Custom simulation components

### 10. Phishy Training Page
- **Route**: `/{locale}/phishy-training`
- **File**: `app/[locale]/phishy-training/page.tsx`
- **Type**: Client Component
- **Status**: ✅ Fully Implemented (Complex Implementation)
- **Components Used**: Header, Footer, HeroSection (phishy-training)
- **Features**: Embedded RunSimulationsSection component, Embedded SeeResultsSection component, Embedded PrepareSimulationsSection component, Dashboard-style analytics cards, Donut charts, Line charts, Complex animations, i18n support via `Pages.PhishyTrainingPage`

### 11. Products Page
- **Route**: `/{locale}/products`
- **File**: `app/[locale]/products/page.tsx`
- **Type**: Client Component
- **Status**: 🚧 Coming Soon (Uses ComingSoonPage)
- **i18n Key**: `Pages.Products`

### 12. Incident Response Product Page
- **Route**: `/{locale}/products/incident-response`
- **File**: `app/[locale]/products/incident-response/page.tsx`
- **Type**: Client Component
- **Status**: ✅ Fully Implemented
- **i18n Key**: `Pages.ProductsIncidentResponse`
- **Features**: Hero section with gradient backgrounds, Feature tabs (Unified Inbox, Automated Playbooks, Post-Incident Insights), Interactive tab switching, Lucide icons, Custom card layouts, CTA buttons

### 13. Phishypot Product Page
- **Route**: `/{locale}/products/phishypot`
- **File**: `app/[locale]/products/phishypot/page.tsx`
- **Type**: Client Component
- **Status**: ✅ Fully Implemented
- **i18n Key**: `Pages.ProductsPhishypot`
- **Features**: Hero section, Feature tabs (Smart Decoys, Threat Watch, Early Alerts), Segment tabs (AI Agents, B2B, B2C), Scroll-based segment navigation, Honeypot function section, Complex animations, Lucide icons

### 14. Request Mode Product Page
- **Route**: `/{locale}/products/request-mode`
- **File**: `app/[locale]/products/request-mode/page.tsx`
- **Type**: Client Component
- **Status**: 🚧 Coming Soon (Uses ComingSoonPage)
- **i18n Key**: `Pages.ProductsRequestMode`

### 15. Simulation Product Page
- **Route**: `/{locale}/products/simulation`
- **File**: `app/[locale]/products/simulation/page.tsx`
- **Type**: Client Component
- **Status**: ✅ Fully Implemented
- **i18n Key**: `Pages.ProductsSimulation`
- **Features**: Hero section with checklist, Create step card, Configure step card, Form-like UI elements, Route display, Request sections, Policies display, CTA buttons

### 16. Training Product Page
- **Route**: `/{locale}/products/training`
- **File**: `app/[locale]/products/training/page.tsx`
- **Type**: Client Component
- **Status**: 🚧 Coming Soon (Uses ComingSoonPage)
- **i18n Key**: `Pages.ProductsTraining`

### 17. Request Demo Page
- **Route**: `/{locale}/request-demo`
- **File**: `app/[locale]/request-demo/page.tsx`
- **Type**: Client Component
- **Status**: 🚧 Coming Soon (Uses ComingSoonPage)
- **i18n Key**: `Pages.RequestDemo`

### 18. Why Phishy Page
- **Route**: `/{locale}/why-phishy`
- **File**: `app/[locale]/why-phishy/page.tsx`
- **Type**: Client Component
- **Status**: ✅ Fully Implemented (Complex)
- **i18n Key**: `Pages.WhyPhishy`
- **Features**: Hero section with card, Feature tabs section (dynamic from i18n), Segment tabs section (dynamic from i18n), Workflow features section (dynamic from i18n), Icon library integration (Lucide icons), Scroll-based animations, Complex i18n message structure, Fallback handling for missing translations

---

## Component Structure

### Shared Components (`app/components/`)
- `Header.tsx` - Main navigation header
- `Footer.tsx` - Site footer
- `ComingSoonPage.tsx` - Reusable coming soon template
- `Hero.tsx` - Home page hero section
- `WhatWeDoSection.tsx`, `ThreatSection.tsx`, `ValueProposition.tsx`, `FeaturesSection.tsx`, `FunctionSection.tsx`, `ModulesSection.tsx`, `DashboardSection.tsx`, `TrustSection.tsx`, `ComplianceSection.tsx`, `BlogSection.tsx`, `FAQSection.tsx`, `ConnectCommunitySection.tsx`, `LiquidCard.tsx`, `ThreeVisual.tsx`

### Page-Specific Component Directories
- `app/components/incident-response/` - Incident response page components
- `app/components/phishing-simulation/` - Phishing simulation page components
- `app/components/phishy-training/` - Training page components

---

## Internationalization (i18n)

### Locales
- `en` - English
- `tr` - Turkish (default)

### Message Files
- `messages/en.json` - English translations
- `messages/tr.json` - Turkish translations

### i18n Configuration
- **Routing**: `i18n/routing.ts`
- **Request Config**: `i18n/request.ts`
- **Middleware**: `middleware.ts`

### Translation Keys Structure
Pages use translation keys under `Pages.*` namespace:
- `Pages.Company`, `Pages.CompanyAbout`, `Pages.Contact`, `Pages.HowItWorks`, `Pages.Products`, `Pages.ProductsIncidentResponse`, `Pages.ProductsPhishypot`, `Pages.ProductsRequestMode`, `Pages.ProductsSimulation`, `Pages.ProductsTraining`, `Pages.RequestDemo`, `Pages.WhyPhishy`, `Pages.PhishyTrainingPage`

---

## Data Sources

### Blog Posts
- **File**: `app/data/blog-posts.ts`
- **Type**: TypeScript array
- **Current Posts**: 3 blog posts (all in Turkish)
- **Functions**:
  - `getBlogPost(slug: string)` - Get single post
  - `getAllBlogPosts()` - Get all posts

---

## Page Status Summary

### ✅ Fully Implemented (11 pages)
1. Home (`/`)
2. Blog Listing (`/blog`)
3. Blog Post Detail (`/blog/[slug]`)
4. Contact Us (`/contact-us`)
5. Incident Response (`/incident-response`)
6. Phishing Simulation (`/phishing-simulation`)
7. Phishy Training (`/phishy-training`)
8. Incident Response Product (`/products/incident-response`)
9. Phishypot Product (`/products/phishypot`)
10. Simulation Product (`/products/simulation`)
11. Why Phishy (`/why-phishy`)

### 🚧 Coming Soon (7 pages)
1. Company (`/company`)
2. About (`/company/about`)
3. How It Works (`/how-it-works`)
4. Products (`/products`)
5. Request Mode Product (`/products/request-mode`)
6. Training Product (`/products/training`)
7. Request Demo (`/request-demo`)

---

## Technical Stack

### Core
- **Next.js**: 16.0.1
- **React**: 19.2.0
- **TypeScript**: ^5

### Internationalization
- **next-intl**: ^4.4.0

### Styling
- **Tailwind CSS**: ^3.4.18
- **tailwindcss-animate**: ^1.0.7

### Animations
- **GSAP**: ^3.13.0
- **@react-three/fiber**: ^9.4.0
- **@react-three/drei**: ^10.7.6
- **three**: ^0.181.0

### Icons
- **lucide-react**: ^0.552.0

---

## Routing Configuration

### Pathnames (in `i18n/routing.ts`)
Currently only a few paths are explicitly defined:
- `/` - Home
- `/blog` - Blog listing
- `/blog/[slug]` - Blog post detail
- `/phishing-simulation` - Phishing simulation

All other routes work with default locale prefix handling.

---

## Notes

1. **Default Locale**: Turkish (`tr`) is the default locale
2. **Locale Prefix**: Always required (no locale-less routes)
3. **Client Components**: Most pages are client components for animations
4. **Coming Soon Pattern**: 7 pages use the reusable `ComingSoonPage` component
5. **Complex Pages**: Phishy Training and Why Phishy have the most complex implementations
6. **Blog**: Currently has 3 Turkish blog posts hardcoded in TypeScript
7. **Animations**: GSAP is used extensively for scroll animations and page transitions

---

## Next Steps for Updates

When updating pages, consider:
1. **i18n**: Ensure all text is properly internationalized
2. **Animations**: Maintain GSAP animation patterns
3. **Components**: Reuse existing components where possible
4. **Styling**: Follow the dark theme with gradient accents
5. **Responsive**: Ensure mobile-first responsive design
6. **Accessibility**: Maintain semantic HTML and ARIA attributes

---

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# phishy_landing
