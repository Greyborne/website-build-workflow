# Component Inventory: chaztrickey.com

Version: 0.1 draft
Created: June 14, 2026

## Base Components

### Button
- **Variants:** Primary, Secondary, Ghost, Link, Platform
- **Sizes:** sm, md, lg
- **States:** default, hover, active, focus, disabled, loading
- **Content:** Label text with optional leading/trailing Lucide icon
- **Design notes:** Tight radius, Source Sans 3 semibold, crimson for primary, ghost for editorial links, amber focus ring
- **Accessibility:** Icon-only buttons require `aria-label`; all buttons need visible focus using `--color-border-strong`

### Input
- **Variants:** Text, Email, Textarea, Select, Checkbox
- **States:** default, focus, error, disabled
- **Content:** Label, field, helper text, error message
- **Design notes:** Dark raised surface, quiet navy border, amber focus

### Badge / CategoryTag
- **Variants:** Tech, Civic, Faith, Status, Outline
- **Content:** Short label, optional dot or icon
- **Design notes:** Mono or Source Sans label, restrained color usage; tags identify lanes without turning the page into a rainbow

### EditorialCard
- **Variants:** Article, CategoryPreview, Platform, Credential
- **Content slots:** Eyebrow/category, title, excerpt, meta, action
- **Design notes:** Surface background, border, no decorative image requirement unless content warrants it
- **When to use:** Articles, content category previews, platform status, credential proof

### Icon
- **Library:** Lucide React
- **Sizes used:** 16px, 20px, 24px, 32px
- **Color:** `currentColor`
- **Notes:** Use icons only where they clarify function or category

## Navigation Components

### PrimaryNavigation
- **Layout:** Horizontal topbar on desktop; compact menu on mobile
- **Content:** Wordmark, Home, Who I Am, Articles, Follow, optional primary CTA
- **Behavior:** Sticky with solid dark surface; no transparent hero nav for readability
- **Mobile behavior:** Full-height drawer with platform links
- **Design notes:** Utility-like and restrained; brand presence comes from wordmark and typography

### MobileMenu
- **Trigger:** Menu icon button
- **Layout:** Drawer from right
- **Content:** Main links, platform links, short positioning line
- **Animation:** 250ms ease-out slide/fade; respect reduced motion

### Footer
- **Layout:** Lean editorial footer, not a 4-column marketing footer
- **Content:** Short brand line, platform links, Privacy Policy, contact link, copyright
- **Design notes:** Top border, dark background, compact

## Section Components

### HomeHero
- **Layout:** Asymmetric editorial hero with large serif headline, short plain-spoken subhead, and a brand anchor visual area
- **Content:** Headline, subhead, primary CTA to About, secondary CTA to Articles or Follow, visual motif/photo/tattoo-inspired art
- **Visual treatment:** Deep navy stage with subtle amber/crimson linework; not a centered gradient hero
- **Payload CMS fields:** heading, subheading, primaryCtaLabel, primaryCtaUrl, secondaryCtaLabel, secondaryCtaUrl, heroImage, heroImageAlt
- **Responsive behavior:** Stacked on mobile, asymmetric 7/5 grid on desktop

### ContentLanes
- **Layout:** Three editorial lanes with unequal rhythm rather than identical feature cards
- **Content:** Tech Made Simple, The State of Things, By Design descriptions and links
- **Visual treatment:** Category tags, short excerpts, staggered placement
- **Payload CMS fields:** lanes array: title, slug, description, accent, ctaLabel
- **Responsive behavior:** Single-column on mobile, asymmetric three-column on desktop

### LatestArticles
- **Layout:** Featured article plus compact list
- **Content:** Featured post, recent posts, category filters
- **Visual treatment:** Publication-style listing, not a blog card grid
- **Payload CMS fields:** heading, featuredArticle relation, limit, selectedCategories
- **Responsive behavior:** Featured top on mobile; 8/4 split on desktop

### PlatformStatus
- **Layout:** Platform link rail with active and coming-soon states
- **Content:** Facebook active link, YouTube/Rumble/TikTok coming soon
- **Visual treatment:** Status labels make unavailable platforms honest instead of fake links
- **Payload CMS fields:** platforms array: name, url, status, description
- **Responsive behavior:** Horizontal scroll-safe row on mobile; grid/list hybrid on desktop

### OriginStory
- **Layout:** Long-form about section with milestone callouts
- **Content:** Who Chaz is, teaching instinct, IT background, faith/family values, transformation story
- **Visual treatment:** Editorial article body with credential/sidebar modules
- **Payload CMS fields:** heading, body, milestones array, portrait, portraitAlt
- **Responsive behavior:** Single-column reading flow on mobile; prose plus sidebar on desktop

### CredentialProof
- **Layout:** Compact proof list grouped by credibility type
- **Content:** IT experience, certifications, senior role, personal discipline proof
- **Visual treatment:** Text-first proof; no inflated stats bar
- **Payload CMS fields:** credentials array: label, detail, category
- **Responsive behavior:** Stacked groups on mobile, two-column on desktop

### ContactIntro
- **Layout:** Split follow/contact section
- **Content:** Follow message, active platform links, contact form
- **Visual treatment:** Form is functional and direct; no generic "we'd love to hear from you" opener
- **Payload CMS fields:** heading, intro, contactEmail, platforms
- **Responsive behavior:** Stacked on mobile, split on desktop

### LegalContent
- **Layout:** Prose page
- **Content:** Privacy policy and cookie details
- **Visual treatment:** Readable, plain legal content
- **Payload CMS fields:** title, body, updatedAt
- **Responsive behavior:** Single-column prose

## Form Components

### ContactForm
- **Fields:** Name, email, subject, message
- **Validation:** Required name/email/message; email format validation
- **Submission:** API route to email provider; success and error states
- **Design notes:** One-column, labels always visible, clear submit CTA

## Utility Components

### SEOHead / Metadata Helpers
- **Purpose:** Next metadata objects, OG image defaults, canonical URLs, JSON-LD where appropriate
- **Fields:** title, description, ogImage, canonicalUrl, noIndex

### ReadingTime
- **Purpose:** Article metadata for long-form posts
- **Fields:** word count or computed body length

### EmptyState
- **When used:** No articles in a category, no search/filter results
- **Content:** Clear heading, short explanation, link back to all articles or follow page

## Component Dependency Map

```text
PrimaryNavigation -> Button, Icon
HomeHero -> Button, Badge
ContentLanes -> CategoryTag, EditorialCard, Button
LatestArticles -> EditorialCard, CategoryTag, ReadingTime
PlatformStatus -> Button, Icon, Badge
OriginStory -> CredentialProof, EditorialCard
ContactIntro -> PlatformStatus, ContactForm
ContactForm -> Input, Button
Footer -> Button, Icon
```

## Payload CMS Collections Needed

| Collection | Used By | Key Fields |
|---|---|---|
| Pages | Flexible page layouts | title, slug, meta, sections blocks |
| Articles | Articles page, latest articles, article detail | title, slug, category, excerpt, body, status, publishedAt, coverImage, seo |
| Categories | Article filters and content lanes | title, slug, description, accent |
| Media | Images and OG assets | alt, caption, upload |
| SiteSettings | Navigation/footer/platform links | siteTitle, tagline, platforms, socialLinks, footerLinks |
| ContactSubmissions | Contact form record | name, email, subject, message, createdAt |

## What This Project Will Not Build

- No carousel/slider: there are no testimonials or rotating promos at launch.
- No comments: avoids moderation burden while the audience is new.
- No newsletter: intentionally deferred until audience demand exists.
- No membership/paywall: out of launch scope.
- No fake platform links: planned channels use a coming-soon state until active.

