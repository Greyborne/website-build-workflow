# PAGE BLUEPRINTS: chaztrickey.com
Version: 1.0 | Date: June 2026
Pages: Home · About · Articles · Follow

---

## PAGE BLUEPRINT: Home

**Page URL:** `/`
**Primary user goal:** Understand who Chaz is and what this site offers in 10 seconds, then decide whether to go deeper.
**Primary site goal:** Get the visitor to click through to About or start reading an article — establish the brand before anything else.
**Target user state on arrival:** Curious but unfamiliar. Most arrive from a social post or YouTube video. They know Chaz's face/voice but haven't visited the site before. They're evaluating whether this place is worth bookmarking.

---

### USER JOURNEY — HOME

1. **Arrives thinking:** "Is this just another political/tech blog or is this person actually different?"
2. **Needs to feel:** "This is a real person with real depth — I want to know more."
3. **Key objection to overcome:** Looks like a template / feels generic. If it looks like every other "conservative commentator" site they've seen, they'll bounce.
4. **Leaves knowing:** Chaz covers tech, politics, and faith from a grounded, credentialed perspective — and there's a specific article they want to read.

---

### SECTION PLAN — HOME

---

**Section 1**
- **Component:** PrimaryNavigation
- **Purpose:** Orient the visitor, give them escape routes, establish the brand name immediately.
- **Placement rationale:** Always first — transparent over the hero so the hero color reads full-bleed.
- **Content summary:**
  - Logo/wordmark: "Chaz Trickey" in Fraunces
  - Links: Home · About · Articles · Follow
  - CTA: "Follow" (Secondary button, sm) → `/follow`
- **CMS fields:** Static — no CMS fields needed
- **Responsive notes:** Hamburger on mobile, full horizontal on desktop
- **Anti-slop check:** No mega-menu, no dropdown sub-nav, no search bar.

---

**Section 2**
- **Component:** HeroSection
- **Purpose:** Answer "who is this and why should I stay?" before the user can form a bounce impulse.
- **Placement rationale:** First content section. The entire page scaffolding hinges on the hero — if this section fails, nothing below matters.
- **Content summary:**
  - Overline badge: "Tech · Politics · Faith & Family"
  - Headline: "One voice. Every truth." (draft — final copy in P08)
  - Subhead: "Senior IT professional, civic voice, and faith-led American — teaching one truth at a time."
  - Primary CTA: "Meet Chaz" → `/about`
  - Ghost CTA: "Browse Articles" → `/articles`
  - Visual: Ember particle layer (gold dots drifting upward, CSS keyframe animation). No stock imagery.
  - Scroll indicator: "Scroll" + bouncing chevron
- **CMS fields:** `overlineBadge`, `headline`, `subhead`, `primaryCTALabel`, `primaryCTAUrl`, `ghostCTALabel`, `ghostCTAUrl`
- **Responsive notes:** Headline drops from `--text-7xl` to `--text-5xl`. CTAs stack vertically. Particle count reduces to 8.
- **Anti-slop check:** No full-bleed stock photo. No "Welcome to my website." No vague mission statement. No carousel.

---

**Section 3**
- **Component:** CategoryPreviewSection (Tech Made Simple)
- **Purpose:** Show the visitor that "tech" content here is genuinely different — approachable, credentialed, human.
- **Placement rationale:** Tech is Chaz's most searchable credential and the widest audience hook. Goes first among the three categories.
- **Content summary:**
  - Category badge: "Tech Made Simple" (crimson)
  - Headline: "Technology explained for the rest of us."
  - Descriptor: "20+ years of IT experience distilled into plain English. If your eyes glaze over when someone says 'cloud infrastructure,' this is for you."
  - 3 latest articles from Tech Made Simple category
  - CTA: "Explore Tech Made Simple" → `/articles?category=tech`
  - Layout: Text left, article cards right
  - Background tint: `--color-brand-subtle`
- **CMS fields:** Static headline/descriptor (edit in code). Article cards driven by Articles collection filtered by category.
- **Responsive notes:** Text stacks above cards. Cards go to 1-column.
- **Anti-slop check:** Not a generic "our services" grid. Each card is a real article.

---

**Section 4**
- **Component:** CategoryPreviewSection (The State of Things)
- **Purpose:** Show that Chaz has a political voice — but a grounded, non-inflammatory one.
- **Placement rationale:** Second category — civic content draws a passionate audience but needs the tech section to establish credibility first.
- **Content summary:**
  - Category badge: "The State of Things" (gold)
  - Headline: "Honest perspective on America today."
  - Descriptor: "Not outrage. Not performance. Informed takes on where we are and where we're headed — from someone who pays attention."
  - 3 latest articles from The State of Things category
  - CTA: "Explore The State of Things" → `/articles?category=state`
  - Layout: Text right, article cards left (alternates from Section 3)
  - Background tint: `--color-accent-subtle`
- **CMS fields:** Static headline/descriptor. Articles driven by collection.
- **Responsive notes:** Alternation collapses — text on top, cards below.
- **Anti-slop check:** No "hot takes" language. Copy signals grounded, not reactive.

---

**Section 5**
- **Component:** CategoryPreviewSection (By Design)
- **Purpose:** Establish the values layer — faith and family. Deepens the picture of who Chaz is.
- **Placement rationale:** Last of the three categories — most personal content lands more authentically after the professional and civic sides are established.
- **Content summary:**
  - Category badge: "By Design" (blue-violet)
  - Headline: "Living with purpose on purpose."
  - Descriptor: "Faith-led, family-first perspective on what it means to build a life that's worth living. No sermons. Just honest reflection."
  - 3 latest articles from By Design category
  - CTA: "Explore By Design" → `/articles?category=design`
  - Layout: Text left, article cards right (back to original alternation)
  - Background tint: `oklch(14% 0.03 250)`
- **CMS fields:** Static headline/descriptor. Articles driven by collection.
- **Responsive notes:** Same as other CategoryPreviewSections.
- **Anti-slop check:** "No sermons" in the descriptor signals tone. Not preachy.

---

**Section 6**
- **Component:** PlatformFollowSection
- **Purpose:** Convert page engagement into a follow on a specific platform.
- **Placement rationale:** End of page — visitor now knows what they'd be following.
- **Content summary:**
  - Headline: "Find me where you already are."
  - Facebook (Active): "Follow on Facebook" button → Facebook URL
  - YouTube, Rumble, TikTok: Coming Soon treatment
- **CMS fields:** `headline`, `platforms[]`
- **Responsive notes:** 2-col to 1-col on mobile.
- **Anti-slop check:** No fake "join our community" language. Honest about what's active vs. coming.

---

**Section 7**
- **Component:** Footer
- **Purpose:** Navigation safety net, legal compliance, secondary platform links.
- **Placement rationale:** Always last.
- **Content summary:** Wordmark, nav links, Privacy Policy, copyright, social icons
- **CMS fields:** Static
- **Responsive notes:** Stacks to single column on mobile
- **Anti-slop check:** No newsletter signup. No "subscribe to get exclusive content" footer CTA.

---

### NAVIGATION BEHAVIOR — HOME
- Transparent on load, transitions to `--color-surface` + bottom border at 80px scroll. Sticky throughout.

### PAGE-LEVEL SEO — HOME
- **Title:** `Chaz Trickey | Tech, Politics & Faith for Real Americans`
- **Meta description:** "Senior IT professional and civic voice Chaz Trickey covers technology, American politics, and faith-led living. Honest, grounded, earned."
- **Primary keyword:** `Chaz Trickey`
- **Structured data:** `Person` schema (name, description, sameAs platform URLs)

### WHAT THIS PAGE DOES NOT HAVE
- No testimonials section: none exist yet; will add in a future phase
- No stats/social proof bar: numbers aren't meaningful at launch — leads with content instead
- No newsletter signup: excluded per brief
- No full-bleed hero photography: no approved photo yet; ember particle layer is the visual anchor until a photo shoot happens

### BUILD ORDER — HOME
1. PrimaryNavigation (sets header visual language for all pages)
2. Footer (bookends established before middle content)
3. HeroSection (most critical visual moment)
4. ScrollRevealWrapper utility (needed by all sections below)
5. CategoryPreviewSection (build once, configure three times)
6. PlatformFollowSection

### PAYLOAD CMS BLOCK STRUCTURE
```ts
{
  blocks: [
    { slug: 'hero' },
    { slug: 'category-preview' },  // Tech Made Simple
    { slug: 'category-preview' },  // The State of Things
    { slug: 'category-preview' },  // By Design
    { slug: 'platform-follow' },
  ]
}
```

---

## PAGE BLUEPRINT: About

**Page URL:** `/about`
**Primary user goal:** Understand who Chaz actually is — his background, values, and why he's doing this — and decide whether to trust him.
**Primary site goal:** Convert a curious visitor into a committed follower by making Chaz feel real, credible, and worth their time.
**Target user state on arrival:** Evaluating. They've seen one piece of content and want to know if the person behind it is worth following.

---

### USER JOURNEY — ABOUT

1. **Arrives thinking:** "Who is this guy really? Is he credible or just another content creator?"
2. **Needs to feel:** "This person is genuine, has real experience, and has earned the right to have opinions."
3. **Key objection to overcome:** "He sounds like every other conservative tech guy — I've seen this before."
4. **Leaves knowing:** Chaz has 20+ years of real IT credentials, a genuine faith and family life, and the discipline to back it all up (250 lbs). He's not performing — this is who he is.

---

### SECTION PLAN — ABOUT

---

**Section 1**
- **Component:** PrimaryNavigation
- **Purpose:** Orient and allow navigation escape. "About" link active.
- **Placement rationale:** Always first.
- **Content summary:** Same as Home. "About" link gets active state.
- **CMS fields:** Static
- **Responsive notes:** Same as Home
- **Anti-slop check:** No hero banner behind the nav on this page.

---

**Section 2**
- **Component:** ArticleHero (repurposed as page header — no article schema)
- **Purpose:** Establish the page and give the visitor the one-line answer to "who is Chaz?"
- **Placement rationale:** A simple, non-generic page header. Not a full hero with CTAs — this page is about reading, not clicking.
- **Content summary:**
  - No category badge
  - Headline: "I'm Chaz. Here's the honest version." (Fraunces, `--text-5xl`)
  - Subhead: "IT professional. Civic voice. Husband and father. And yes — the guy who lost 250 pounds." (`--text-xl`, `--color-text-secondary`)
  - No CTA buttons — the page IS the content
  - No hero image in this section — photo appears in the sticky scroll below
- **CMS fields:** `headline` (text), `subhead` (text)
- **Responsive notes:** Headline scales to `--text-3xl` on mobile
- **Anti-slop check:** Not "Welcome to my about page." Opens with a real sentence.

---

**Section 3**
- **Component:** AboutStickySectionScroll
- **Purpose:** Tell Chaz's full story in a way that holds attention — the sticky scroll mechanic makes the user want to keep scrolling.
- **Placement rationale:** Core of the About page. Placed immediately after the header so the story starts before the visitor can second-guess their decision to stay.
- **Content summary:**
  - Left column (sticky): Portrait photo of Chaz
  - Right column (scrollable story blocks):
    1. **"The IT Professional"** — "I've been solving technology problems since before most people had heard of the internet. 20+ years. MCSE, MCSA, Azure, CompTIA A+, Network+, Security+. Currently working as a Senior IT/SQL Architect. I know this stuff — not from a YouTube course, but from doing it."
    2. **"The Civic Voice"** — "I got tired of watching the people around me get their news from sources that didn't share their values — and didn't actually understand technology enough to cover it honestly. So I started talking. I'm not an entertainer. I'm a teacher. There's a difference."
    3. **"Faith & Family"** — "Everything I do is built on this foundation. Faith led, family first. Not as a slogan — as a daily decision. 'By Design' is the name I gave to this part of the work because that's what it is: a life designed with intention."
    4. **"The Discipline"** — "In 2014 I weighed 435 pounds. I don't say that for sympathy — I say it because it's relevant. Over 10 years I lost 250 pounds and have maintained 185–190 for over a year. I'm telling you this not because the site is about weight loss. I'm telling you because it's evidence. When I commit to something, I finish it."
- **CMS fields:** `portraitImage` (media), `storyBlocks[]` (array of `{ label, headline, body }`)
- **Responsive notes:** Sticky scroll collapses on mobile — photo at top, blocks stack vertically with scroll-reveal.
- **Anti-slop check:** Each block is specific and personal. No generic "I'm passionate about helping people" filler. The weight loss detail is used as a character proof, not a weight loss story.

---

**Section 4**
- **Component:** CredentialsSection
- **Purpose:** Provide scannable proof for visitors who want to verify credentials before committing.
- **Placement rationale:** After the story — not before. The story creates emotional connection; credentials confirm it. Credentials first makes the page feel like a LinkedIn profile.
- **Content summary:**
  - Headline: "The credentials, for those who want to verify."
  - Certification chips: MCSE · MCSA · Azure Administrator · CompTIA A+ · CompTIA Network+ · CompTIA Security+
  - Stat: "20+" years (large display number, Fraunces)
  - Current role: "Senior IT / SQL Architect"
- **CMS fields:** `headline`, `certifications[]`, `currentRole`, `yearsExperience`
- **Responsive notes:** Chips wrap on mobile. Stat stays prominent.
- **Anti-slop check:** No fake icon badges. Text chips are honest and scannable. No "certified expert" marketing speak.

---

**Section 5**
- **Component:** PlatformFollowSection
- **Purpose:** Convert the trust built by the About page into a follow action.
- **Placement rationale:** End of About page — after the full picture, give them the natural next step. Highest-intent placement for the follow CTA across the entire site.
- **Content summary:**
  - Headline: "If this resonates — I'd love for you to follow along."
  - Same platform layout as Home
- **CMS fields:** `headline`, `platforms[]`
- **Responsive notes:** Same as Home
- **Anti-slop check:** "If this resonates" is human and honest. Not "Join thousands of followers."

---

**Section 6**
- **Component:** Footer
- **Placement rationale:** Always last.
- **Content summary:** Same as all pages.
- **Anti-slop check:** No newsletter CTA.

---

### NAVIGATION BEHAVIOR — ABOUT
- Transparent on load, transitions to solid at scroll. "About" link active.

### PAGE-LEVEL SEO — ABOUT
- **Title:** `About Chaz Trickey | IT Professional, Civic Voice & Faith-Led American`
- **Meta description:** "Meet Chaz Trickey — 20+ years in IT, multiple certifications, and a personal story of discipline and faith. Learn what drives the work."
- **Primary keyword:** `about Chaz Trickey`
- **Structured data:** `Person` schema with sameAs platform URLs, knowsAbout fields for IT/civic/faith

### WHAT THIS PAGE DOES NOT HAVE
- No contact form: that lives on `/follow` — About is a reading experience, not a transaction
- No video embed: placeholder until a "who I am" video is produced
- No "fun facts" bullet list: replaced by the sticky scroll narrative — more engaging and specific

### BUILD ORDER — ABOUT
1. AboutStickySectionScroll (most complex section — build and test sticky mechanic first)
2. CredentialsSection (straightforward, uses Badge component already built)
3. Page header (ArticleHero repurposed — minimal config)
4. PlatformFollowSection (reused from Home — already built)

### PAYLOAD CMS BLOCK STRUCTURE
```ts
{
  blocks: [
    { slug: 'page-header' },
    { slug: 'about-sticky-scroll' },
    { slug: 'credentials' },
    { slug: 'platform-follow' },
  ]
}
```

---

## PAGE BLUEPRINT: Articles

**Page URL:** `/articles`
**Primary user goal:** Find an article worth reading — by browsing or filtering to a specific category.
**Primary site goal:** Get the visitor to start reading. One article read makes them 10x more likely to return.
**Target user state on arrival:** Ready to explore. They came here intentionally — they want to see what's available.

---

### USER JOURNEY — ARTICLES

1. **Arrives thinking:** "Let me see what this guy actually writes about."
2. **Needs to feel:** "There's real substance here — I know where to start."
3. **Key objection to overcome:** "I can't tell what's worth reading / everything looks the same."
4. **Leaves knowing:** Which category they connect with, and with at least one article open in a tab.

---

### SECTION PLAN — ARTICLES

---

**Section 1**
- **Component:** PrimaryNavigation
- **Purpose:** Navigation with "Articles" link in active state.
- **Placement rationale:** Always first.
- **Content summary:** Same as all pages. "Articles" link active.
- **CMS fields:** Static
- **Responsive notes:** Standard
- **Anti-slop check:** No breadcrumb bar — one navigation layer is sufficient.

---

**Section 2**
- **Component:** ArticleListSection
- **Purpose:** Show all available articles and allow category filtering.
- **Placement rationale:** This section IS the page — it gets the full viewport after the nav. No hero needed on a listing page. The content is the hero.
- **Content summary:**
  - Page headline: "All Articles" (Fraunces, `--text-4xl`, left-aligned)
  - Category filter row: pill buttons — "All" (default active) · "Tech Made Simple" · "The State of Things" · "By Design"
  - Article grid: 2-column desktop, 1-column mobile. Each card = ArticleCard (badge + headline + excerpt + date)
  - Load-more button (Ghost, lg) at bottom — not infinite scroll
  - Empty state: EmptyState component if filtered category has no articles
- **CMS fields:** Driven entirely by Articles collection. No additional CMS fields.
- **Responsive notes:** Filter pills scroll horizontally on mobile. Grid goes 1-column. Load-more stays full-width.
- **Anti-slop check:** No sidebar. No tag cloud. No "popular posts" widget. Clean grid with category filter only.

---

**Section 3**
- **Component:** Footer
- **Purpose:** Navigation and legal.
- **Placement rationale:** Always last.
- **Content summary:** Same as all pages.
- **Anti-slop check:** Standard.

---

### NAVIGATION BEHAVIOR — ARTICLES
- Solid nav from top (no transparent treatment — no hero on this page). "Articles" link active.

### PAGE-LEVEL SEO — ARTICLES
- **Title:** `Articles | Chaz Trickey`
- **Meta description:** "Tech explained simply, honest civic commentary, and faith-led perspective. Browse all articles from Chaz Trickey."
- **Primary keyword:** `Chaz Trickey articles`
- **Structured data:** `BreadcrumbList` (Home → Articles)

### WHAT THIS PAGE DOES NOT HAVE
- No hero section or banner: article grid is the content — a decorative hero above a grid is wasted space
- No sidebar: no "about me" sidebar box, no ad space, no popular posts widget
- No infinite scroll: load-more button gives user agency and keeps performance clean
- No search bar: category filter covers the navigation need at launch content volume

### BUILD ORDER — ARTICLES
1. ArticleCard (base unit — everything depends on it)
2. Badge (needed by ArticleCard — likely already built)
3. ArticleListSection (filter logic + grid layout)
4. EmptyState (needed for filtered empty states)

### PAYLOAD CMS BLOCK STRUCTURE
```ts
// No block structure — built as a static Next.js route querying Articles collection directly.
// Route: app/articles/page.tsx → fetches Articles, renders ArticleListSection
// Route: app/articles/[slug]/page.tsx → fetches single Article, renders ArticleHero + ArticleBody
```

---

## PAGE BLUEPRINT: Follow

**Page URL:** `/follow`
**Primary user goal:** Find Chaz on their preferred platform and/or send him a direct message.
**Primary site goal:** Convert visitors into followers on at least one platform and give people a way to reach Chaz directly.
**Target user state on arrival:** Ready to act. They've already decided they want to connect — this page needs to make it frictionless.

---

### USER JOURNEY — FOLLOW

1. **Arrives thinking:** "I want to follow this guy — where can I find him?"
2. **Needs to feel:** "This is easy and obvious — I can find him in 5 seconds."
3. **Key objection to overcome:** "I can't find him on the platform I use / I don't know where to start."
4. **Leaves having:** Followed on at least one platform OR sent a direct message.

---

### SECTION PLAN — FOLLOW

---

**Section 1**
- **Component:** PrimaryNavigation
- **Purpose:** Navigation with "Follow" link in active state.
- **Placement rationale:** Always first.
- **Content summary:** Same as all pages. "Follow" link active.
- **CMS fields:** Static
- **Anti-slop check:** Standard.

---

**Section 2**
- **Component:** PlatformFollowSection
- **Purpose:** Primary action — show all platforms with clear status and direct follow links.
- **Placement rationale:** First content section. The user came here to follow — give them the action immediately.
- **Content summary:**
  - Headline: "Find me where you already are."
  - Facebook card: Platform icon, "Facebook", "Follow on Facebook" button (Primary) → Facebook URL. Status: Active.
  - YouTube card: Platform icon, "YouTube", "Subscribe" button (muted), "Coming Soon" badge.
  - Rumble card: Same Coming Soon treatment.
  - TikTok card: Same Coming Soon treatment.
  - 2-column grid on desktop, 1-column on mobile.
- **CMS fields:** `headline`, `platforms[]` (array of `{ name, url, status, icon }`)
- **Responsive notes:** Grid collapses to 1-col on mobile. Cards full-width.
- **Anti-slop check:** No fake follower counts. No "social media is the lifeblood of our community" copy. Honest about what's live.

---

**Section 3**
- **Component:** ContactFormSection
- **Purpose:** Give visitors a way to reach Chaz directly.
- **Placement rationale:** Below platform follow. Following is primary; direct contact is secondary.
- **Content summary:**
  - Section headline: "Or send a message directly."
  - Subhead: "For questions, topic ideas, or just to say hello. I read everything." (`--color-text-secondary`)
  - ContactForm: Name, Email, Subject (optional), Message, Send button
- **CMS fields:** `headline` (text), `subhead` (text) on section wrapper. Form fields are hardcoded.
- **Responsive notes:** Form full-width on mobile. Label-above layout works at all sizes.
- **Anti-slop check:** "I read everything" is a specific, human promise. No fake live chat widget. No "we'll get back to you within 48 business hours."

---

**Section 4**
- **Component:** Footer
- **Placement rationale:** Always last.
- **Content summary:** Same as all pages.
- **Anti-slop check:** Standard.

---

### NAVIGATION BEHAVIOR — FOLLOW
- Solid nav from top (no transparent treatment — no hero). "Follow" link active.

### PAGE-LEVEL SEO — FOLLOW
- **Title:** `Follow Chaz Trickey | Find Me on Facebook, YouTube & More`
- **Meta description:** "Follow Chaz Trickey on Facebook and YouTube for tech education, civic commentary, and faith-led perspective. More platforms coming soon."
- **Primary keyword:** `follow Chaz Trickey`
- **Structured data:** None required

### WHAT THIS PAGE DOES NOT HAVE
- No embedded social media feeds: slow, ugly, and break frequently — direct follow links are cleaner
- No media kit download: not needed at launch
- No physical address or phone number: this is a content brand, not a local business
- No FAQ section: questions are covered by the contact form

### BUILD ORDER — FOLLOW
1. PlatformFollowSection (reused from Home/About — already built)
2. ContactFormSection + ContactForm (form, API route `/api/contact`, Nodemailer, success/error states)

### PAYLOAD CMS BLOCK STRUCTURE
```ts
{
  blocks: [
    { slug: 'platform-follow' },
    { slug: 'contact-form' },
  ]
}
```
