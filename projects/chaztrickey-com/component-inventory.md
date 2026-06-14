# COMPONENT INVENTORY: chaztrickey.com
Version: 1.0 | Date: June 2026
Generated from: brief.md + design-system.md + inspiration/jeton-analysis.md

---

## BASE COMPONENTS

---

### Button
- **Variants:** Primary (crimson filled pill), Secondary (ghost with crimson border), Ghost (text-only, no border), Link (inline text with underline on hover)
- **Sizes:** sm, md, lg
- **States:** default, hover (scale 1.02 + glow-brand on primary), active, disabled (opacity 0.4), loading (spinner replaces label)
- **Content:** label text, optional leading icon
- **Design notes:** Primary uses `--radius-full`, `--color-brand` bg, `--color-text-primary` label, `--font-semibold`, padding `--space-3`/`--space-6` (md). Hover fires `--shadow-glow-brand`. Secondary uses transparent bg with 1px `--color-brand` border. Ghost uses no border, `--color-text-secondary` label.
- **Accessibility:** Focus ring using `--color-border-strong`; `aria-label` required on icon-only uses

---

### Badge / Tag
- **Variants:** Category (colored by category), Outline (for meta info), Subtle (dark tint background)
- **Content:** Short text label (1–3 words), optional leading dot
- **Category colors:**
  - Tech Made Simple → `--color-brand` (crimson)
  - The State of Things → `--color-accent` (gold)
  - By Design → `oklch(55% 0.15 250)` (muted blue-violet — faith/calm signal)
- **Design notes:** `--radius-sm`, `--text-xs`, `--font-semibold`, `--tracking-wide`, all-caps, `--space-1`/`--space-3` padding
- **When to use:** Article cards, category filters, section label overlines

---

### Card
- **Variants:** ArticleCard (default), ArticleCardFeatured (larger, accent treatment), CategoryCard (full-width section moment)
- **Content slots:** Category badge, headline, excerpt, author/date meta, optional thumbnail
- **Design notes:** `--radius-lg`, `--color-surface` bg, `--color-border` border (1px), `--space-6` internal padding. Interactive variant: hover fires `--shadow-glow-white` + `--color-border-strong` border transition at `--duration-fast`.
- **When to use:** Article listing page, category preview sections on Home

---

### Icon
- **Library:** Lucide React
- **Sizes used:** 16px (inline), 20px (UI actions), 24px (nav, section), 32px (feature callouts)
- **Color:** `currentColor` always — inherits from surrounding text
- **Custom needs:** None — Lucide covers all required icons (social platforms, chevron, menu, close, check)

---

## NAVIGATION COMPONENTS

---

### PrimaryNavigation
- **Layout:** Horizontal topbar, full-width, constrained inner content to `--max-width-content`
- **Content:** Logo/wordmark left, nav links center (Home, About, Articles, Follow), platform follow CTA button right
- **Links:** Home · About · Articles · Follow
- **Behavior:** Transparent on load over hero, transitions to `--color-surface` bg + `--color-border` bottom border on scroll (at ~80px). Sticky at top.
- **Mobile behavior:** Logo left, hamburger right — triggers MobileMenu overlay
- **Design notes:** Height 64px desktop / 56px mobile, `--font-medium`, `--text-sm` nav links, active link gets `--color-brand` color + underline dot indicator, CTA uses Button (Secondary, sm)

---

### MobileMenu
- **Trigger:** Hamburger icon (Lucide `Menu`) in PrimaryNavigation
- **Layout:** Full-screen overlay sliding in from right
- **Content:** Close button top-right, nav links stacked vertically (large, `--text-2xl`, Fraunces), platform follow links as icon+label rows at bottom
- **Animation:** Slide from right (`translateX(100%) → 0`), `--duration-normal`, `--ease-out`. Background fades in at `oklch(11% 0.04 240 / 0.95)`.

---

### Footer
- **Layout:** 2-row — top row: logo + nav links inline; bottom row: legal text left, social platform icons right
- **Content:** Logo/wordmark, links (Home, About, Articles, Follow, Privacy Policy), copyright line, social platform icons (Facebook, YouTube, Rumble, TikTok)
- **Design notes:** `--color-surface` bg, `--color-border` top border (1px), `--space-16` vertical padding, `--text-sm` links, `--color-text-secondary` for legal
- **No newsletter signup** — excluded per brief ("add later once audience grows")

---

## SECTION COMPONENTS

---

### HeroSection
- **Layout:** Single column centered, full viewport height (100dvh), text constrained to ~700px max-width
- **Content:** Overline badge ("Multi-platform content"), display headline (Fraunces, `--text-7xl` desktop / `--text-5xl` mobile, `--tracking-tightest`), subhead (`--text-xl`, Plus Jakarta Sans, `--color-text-secondary`), two CTA buttons (Primary: "Meet Chaz" → About; Ghost: "Browse Articles" → Articles), animated scroll indicator ("Scroll" + bouncing chevron)
- **Visual treatment:** Ember particle layer (12–15 gold dots at `oklch(73% 0.17 74 / 0.15)`, CSS keyframe drift-upward animation, 4–8s varying durations). No background image. The headline is the visual centrepiece.
- **Payload CMS fields:** `overlineBadge` (text), `headline` (rich text, 1 line), `subhead` (text), `primaryCTALabel` (text), `primaryCTAUrl` (text), `ghostCTALabel` (text), `ghostCTAUrl` (text)
- **Responsive behavior:** Headline scales to `--text-5xl` on mobile. Particle count reduces to 8 on mobile. Scroll indicator hides on touch devices.

---

### CategoryPreviewSection
- **Layout:** Full-width, one per category — 3 total on Home. Alternates text-left/visual-right then text-right/visual-left. Each section is visually isolated.
- **Content:** Category badge (overline), section headline (Fraunces `--text-4xl`), 2–3 sentence descriptor, 2–3 latest ArticleCards from that category, "Explore [Category]" Button (Ghost)
- **Visual treatment:** Full-bleed background tint per category — Tech Made Simple: `--color-brand-subtle`; The State of Things: `--color-accent-subtle`; By Design: `oklch(14% 0.03 250)`. Scroll-reveal entry: fade + translateY(24px), `--duration-slow`, `--ease-editorial`, cards staggered at 100ms delay each.
- **Payload CMS fields:** Driven by Articles collection filtered by category — no separate CMS block needed. Section headline and descriptor are static per category.
- **Responsive behavior:** Cards stack to single column on mobile. Text/visual alternation collapses to text-on-top on mobile.

---

### AboutStickySectionScroll
- **Layout:** 2-column sticky scroll — left: portrait photo sticky within the section viewport; right: story blocks that scroll past. Inspired by jeton.com's sticky mockup pattern, adapted for personal narrative.
- **Content (right column, scrollable story blocks):**
  1. "The IT Professional" — 20+ years, certifications list, current role
  2. "The Civic Voice" — why political commentary, the teaching instinct
  3. "Faith & Family" — values, what "By Design" means
  4. "The Discipline" — 250 lbs weight loss, 10 years, what it proves about character
- **Visual treatment:** Photo stays fixed as you scroll. Each story block fades in as it enters the viewport center. Previous block fades to `--color-text-muted`, current block at full `--color-text-primary`. Active block label highlights in `--color-accent` (gold).
- **Payload CMS fields:** `portraitImage` (media), `storyBlocks[]` (array of `{ label, headline, body }`)
- **Responsive behavior:** On mobile, sticky scroll collapses — photo appears once at top, story blocks stack vertically below with scroll-reveal entries.

---

### CredentialsSection
- **Layout:** Centered, single column, constrained to `--max-width-prose`
- **Content:** Section headline, certifications as compact badge-style chips, years-of-experience stat, current role
- **Visual treatment:** Certification badges use `--color-surface-raised` bg with `--color-border` border. Subtle scroll-reveal entry. Kept intentionally quiet — supports the story above it.
- **Payload CMS fields:** `headline` (text), `certifications[]` (text array), `currentRole` (text), `yearsExperience` (number)
- **Responsive behavior:** Badge chips wrap naturally on mobile.

---

### ArticleListSection
- **Layout:** Left: category filter sidebar (desktop) / horizontal pill-filter row (mobile). Right: article grid (2-column desktop, 1-column mobile)
- **Content:** Page headline, category filter (All / Tech Made Simple / The State of Things / By Design), article cards (ArticleCard), pagination or load-more
- **Visual treatment:** Active filter pill uses `--color-brand` bg. No-results state uses EmptyState component.
- **Payload CMS fields:** Driven by Articles collection — no block needed. Filter state is client-side.
- **Responsive behavior:** Sidebar collapses to horizontal scrolling pill row on mobile.

---

### ArticleHero
- **Layout:** Full-width, left-aligned, constrained to `--max-width-content`
- **Content:** Category badge, headline (Fraunces `--text-5xl` desktop / `--text-3xl` mobile), subhead/excerpt, author name + date, optional hero image
- **Visual treatment:** `--tracking-tight` on headline. If no image: decorative `--color-brand` left-border accent (4px). If image: full-bleed with dark overlay.
- **Payload CMS fields:** Part of Article collection — `category`, `title`, `excerpt`, `publishedAt`, `heroImage` (optional)
- **Responsive behavior:** Headline scales down. Image becomes full-width on mobile.

---

### ArticleBody
- **Layout:** Single column, `--max-width-prose` centered
- **Content:** Rich text body, YouTube embed support, pull quotes (styled with `--color-accent` left border + `--text-2xl` Fraunces)
- **Visual treatment:** Body at `--text-base`, `--leading-relaxed`. Headings use Fraunces at appropriate scale. Links use `--color-brand`. Code blocks use `--font-mono`, `--color-surface-raised` bg.
- **Payload CMS fields:** `body` (Lexical rich text with YouTube embed block)
- **Responsive behavior:** Full-width on mobile with comfortable padding.

---

### PlatformFollowSection
- **Layout:** Full-width centered, `--color-surface` bg
- **Content:** Section headline ("Where to Find Me"), platform cards — each with platform icon + name + status (Active / Coming Soon) + follow button
- **Platforms:** Facebook (Active), YouTube (Coming Soon), Rumble (Coming Soon), TikTok (Coming Soon)
- **Visual treatment:** Active platforms at full opacity; Coming Soon at `--color-text-muted` + "Coming Soon" badge. Scroll-reveal stagger on cards.
- **Payload CMS fields:** `headline` (text), `platforms[]` (array of `{ name, url, status, icon }`)
- **Responsive behavior:** 2-column grid on desktop, 1-column on mobile.

---

### ContactFormSection
- **Layout:** Centered, `--max-width-prose` constrained
- **Content:** Section headline, ContactForm component
- **Visual treatment:** `--color-surface` bg, `--radius-xl` container with `--color-border` border

---

## FORM COMPONENTS

---

### ContactForm
- **Fields:** Name (required), Email (required), Subject (optional), Message (required)
- **Validation:** Name min 2 chars, Email format, Message min 20 chars
- **Submission:** POST to Next.js API route `/api/contact` → email via Nodemailer to `chaz@cttechsolutions.com`. Success: inline confirmation replaces form. Error: inline error banner.
- **Design notes:** Stacked label-above layout, full-width inputs, `--radius-md`, `--color-border` border, Button (Primary, lg) at bottom right

---

## UTILITY COMPONENTS

---

### SEOHead
- **Purpose:** Consistent meta tags, OG tags, and JSON-LD structured data per page/article
- **Fields:** `title`, `description`, `ogImage`, `canonicalUrl`, `noIndex`, `articleSchema` (for article pages)

---

### LoadingState
- **Variants:** Skeleton for ArticleCard (article listing page while filtering), Skeleton for ArticleBody
- **Design notes:** `--color-surface-raised` base, animated shimmer using `--color-border` highlight, `--duration-slow` loop

---

### EmptyState
- **When used:** No articles in filtered category, contact form error fallback
- **Content:** Lucide icon (FileQuestion or Inbox) at 48px + heading + optional CTA button
- **Design notes:** `--color-text-muted` for icon and heading, centered within its container

---

### ScrollRevealWrapper
- **Purpose:** Wraps any child element with scroll-triggered fade + translateY entry. Used site-wide.
- **Props:** `delay` (ms, default 0), `distance` (px, default 24), `duration` (ms, default 500)
- **Implementation:** Intersection Observer + CSS transition class toggle. No GSAP — pure CSS + JS.

---

## COMPONENT DEPENDENCY MAP

```
PrimaryNavigation → Button (Ghost/Secondary), Icon
MobileMenu        → Icon (Menu, X)
HeroSection       → Button (Primary, Ghost), Badge, ScrollRevealWrapper
CategoryPreview   → Badge, ArticleCard, Button (Ghost), ScrollRevealWrapper
AboutStickyScroll → Badge, ScrollRevealWrapper (mobile fallback)
CredentialSection → Badge, ScrollRevealWrapper
ArticleListSection→ Badge (filters), ArticleCard, Button (load more), EmptyState
ArticleHero       → Badge
ArticleBody       → (rich text renderer)
PlatformFollow    → Badge, Button (Primary), ScrollRevealWrapper
ContactFormSection→ ContactForm
ContactForm       → Button (Primary)
Footer            → Icon (social)
```

---

## PAYLOAD CMS COLLECTIONS

| Collection | Used By | Key Fields |
|---|---|---|
| Pages | HeroSection, CategoryPreview, PlatformFollow, ContactFormSection | `title`, `slug`, `sections` (blocks array) |
| Articles | ArticleCard, ArticleHero, ArticleBody, ArticleListSection | `title`, `slug`, `category` (enum), `excerpt`, `body` (Lexical), `heroImage`, `publishedAt`, `author` |
| Media | ArticleHero, AboutStickyScroll | `filename`, `alt`, `width`, `height` |
| Authors | Articles | `name`, `bio`, `avatar` |

---

## WHAT THIS PROJECT WILL NOT BUILD

- **No carousel/slider:** No testimonials at launch; carousels hide content and reduce trust on editorial sites
- **No accordion FAQ:** No FAQ content planned; use simple expandable list if needed later
- **No newsletter/email signup:** Explicitly excluded in brief — add once audience exists
- **No comment system:** Excluded in brief to avoid moderation overhead at launch
- **No search:** Content volume at launch doesn't warrant it; category filter covers navigation need
- **No user accounts:** Content site — no login needed for visitors
- **No e-commerce:** Excluded in brief
- **No chatbot or live chat:** Excluded in brief
