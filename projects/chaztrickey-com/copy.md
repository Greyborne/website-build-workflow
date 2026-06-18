# COPY — chaztrickey.com
Version: 1.0 | Date: June 2026
Source: P08 audit of static copy in components and page files

This document covers the static copy embedded in components and page templates.
Article body copy is managed separately in Payload CMS once live.

---

## HERO SECTION (Home Page)

**Location:** `src/app/(frontend)/page.tsx` → `<HeroSection />` props

### Overline badge
- **Current:** "Tech · Politics · Faith & Family"
- **Status:** ✅ Keep — three-word taxonomy of what the site covers, scannable in under a second.

### Headline
- **Current:** "One voice. / Every truth."
- **Audit:** Slight whiff of generic "patriotic content creator" framing. "Every truth" is a claim no person can deliver. A real human voice anchors better than a slogan.
- **Primary (recommended):** "Twenty years in IT. / One honest voice."
- **Alternate A:** "The honest version. / Of everything I know."
- **Alternate B:** "Tech, country, and family. / Taught straight."
- **Notes:** Primary leads with the credential (specific, undeniable) and then the positioning (one honest voice — implies the rest aren't). It's the only version that couldn't appear on a generic conservative commentator's site without changing.

### Subhead
- **Current:** "Senior IT professional, civic voice, and faith-led American — teaching one truth at a time."
- **Audit:** Stacks three identities then ends with the same "one truth" phrase as the headline (redundant). "Civic voice" is jargon — nobody uses that phrase about themselves.
- **Primary:** "I teach technology in plain English, talk politics without performing, and live my faith on purpose. This is where I put it all in one place."
- **Alternate:** "Plain-English tech. Grounded civic takes. Faith and family without apology. One home for all of it."
- **Notes:** Primary uses first-person and gives the reader three concrete promises. Alternate is punchier but less personal.

### Primary CTA
- **Current:** "Meet Chaz" → `/about`
- **Status:** ✅ Keep — outcome-specific, two words, friendly.

### Ghost CTA
- **Current:** "Browse Articles" → `/articles`
- **Status:** ✅ Keep — clear and active.

---

## CATEGORY PREVIEW: Tech Made Simple

### Headline
- **Current:** "Technology explained for the rest of us."
- **Status:** ✅ Keep — specific audience (the rest of us = non-technical), clear value.

### Descriptor
- **Current:** "20+ years of IT experience distilled into plain English. If your eyes glaze over when someone says 'cloud infrastructure,' this is for you."
- **Status:** ✅ Keep — credential + pain point + audience permission. This is exactly the formula that works.

### CTA
- **Current:** "Explore Tech Made Simple"
- **Status:** ✅ Keep.

---

## CATEGORY PREVIEW: The State of Things

### Headline
- **Current:** "Honest perspective on America today."
- **Audit:** "Honest perspective" is a phrase every commentator uses. Doesn't differentiate.
- **Primary:** "America, without the outrage cycle."
- **Alternate:** "Politics from someone who isn't selling you something."
- **Notes:** Primary positions the content against what readers are tired of (outrage media). Alternate goes after the trust angle directly.

### Descriptor
- **Current:** "Not outrage. Not performance. Informed takes on where we are and where we're headed — from someone who pays attention."
- **Status:** ✅ Keep — the "not outrage / not performance" cadence is the strongest line on the page. Don't touch.

### CTA
- **Current:** "Explore The State of Things"
- **Status:** ✅ Keep.

---

## CATEGORY PREVIEW: By Design

### Headline
- **Current:** "Living with purpose on purpose."
- **Status:** ✅ Keep — the wordplay (on purpose / by design) lands. Personal without being preachy.

### Descriptor
- **Current:** "Faith-led, family-first perspective on what it means to build a life that's worth living. No sermons. Just honest reflection."
- **Status:** ✅ Keep — "no sermons" sets the tone instantly.

### CTA
- **Current:** "Explore By Design"
- **Status:** ✅ Keep.

---

## ABOUT PAGE HEADER

### Headline
- **Current:** "I'm Chaz. Here's the honest version."
- **Status:** ✅ Keep — first-person, sets up the page premise (you're getting the real thing, not a polished bio).

### Subhead
- **Current:** "IT professional. Civic voice. Husband and father. And yes — the guy who lost 250 pounds."
- **Audit:** "Civic voice" again. Same jargon problem as the hero subhead.
- **Primary:** "IT professional. Husband. Father. American. And yes — the guy who lost 250 pounds."
- **Notes:** Drops "civic voice" (jargon nobody says about themselves), adds "American" which is honest about a core identity layer the brief calls out, and keeps the 250-pound disclosure since it's an attention hook used as character evidence.

---

## ABOUT PAGE — STORY BLOCKS

These are managed in the page file. Current copy is strong:

1. **"The IT Professional"** — Keep. Specific credentials, "not from a YouTube course" earns the claim.
2. **"The Civic Voice"** — Audit: rename label to **"The Teacher"** — Chaz's own framing ("I'm not an entertainer. I'm a teacher.") is more honest than "civic voice."
3. **"Faith & Family"** — Keep. "Not as a slogan — as a daily decision" is the strongest line.
4. **"The Discipline"** — Keep. "Evidence" framing on the weight loss is exactly right.

---

## CREDENTIALS SECTION

### Headline
- **Current:** "The credentials, for those who want to verify."
- **Status:** ✅ Keep — implicit acknowledgment that the story matters more than the certs, but the certs are here if you need them.

---

## PLATFORM FOLLOW

### Home page
- **Current:** "Find me where you already are."
- **Status:** ✅ Keep — strongest single line on the site. Don't change.

### About page
- **Current:** "If this resonates — I'd love for you to follow along."
- **Status:** ✅ Keep — earns the ask because the page above it earned the trust.

### Follow page header
- **Current page H1:** "Follow along."
- **Current subhead:** "Pick the platform you actually use, or send a message directly."
- **Status:** ✅ Keep — direct, no padding.

### Follow page section H2
- **Current:** "Find me where you already are."
- **Status:** ✅ Keep — reuses the home page line; consistent voice.

---

## CONTACT SECTION

### Headline
- **Current:** "Or send a message directly."
- **Status:** ✅ Keep — the "or" frames it as the secondary option after platform follow.

### Subhead
- **Current:** "For questions, topic ideas, or just to say hello. I read everything."
- **Status:** ✅ Keep — "I read everything" is the trust-building specific.

### Success state
- **Current:** Heading: "Got it." / Body: "Your message landed in my inbox. I'll get back to you when I can — I read everything personally."
- **Status:** ✅ Keep — "Got it" is the casual real-person acknowledgment.

---

## ARTICLES PAGE

### Headline
- **Current:** "All Articles"
- **Status:** ✅ Keep — does its job. No need to be cute.

### Descriptor
- **Current:** "Tech explained for everyday people. Honest civic perspective. Faith-led reflection on living with purpose."
- **Audit:** Reads like a three-item list. Each clause is fine but the listy structure feels mechanical.
- **Primary:** "Three categories. One voice. Pick whichever fits where your head is today."
- **Alternate:** "Read whichever speaks to where you are — tech, politics, or faith. They're all here."
- **Notes:** Primary acknowledges the visitor's mood as the deciding factor (true to how people actually browse). Alternate is more functional but warmer than the current version.

---

## EMPTY STATE — Articles filtered to a category with no content

### Heading
- **Current:** "No articles here yet."
- **Status:** ✅ Keep — honest, calm.

### Description
- **Current:** "This category is fresh — new articles are on the way. Try a different category in the meantime."
- **Status:** ✅ Keep.

---

## METADATA / SEO

### Site title (root layout)
- **Current:** "Chaz Trickey"
- **Audit:** Bare name is fine for the home page but won't help SEO. The page-blueprints.md spec called for `Chaz Trickey | Tech, Politics & Faith for Real Americans`.
- **Primary:** `Chaz Trickey | Tech, Politics & Faith for Real Americans`

### Site description (root layout)
- **Current:** "Tech, politics, and faith — taught one truth at a time by Chaz Trickey."
- **Audit:** Uses "one truth" again. Repetition of the hero line in metadata is wasteful — SEO meta description should pitch the site to a search-results visitor who hasn't seen the page yet.
- **Primary:** "Senior IT professional Chaz Trickey covers technology, American politics, and faith-led living. Honest, grounded, earned."

---

## SUMMARY OF CHANGES TO APPLY

1. ✏️ Hero headline → "Twenty years in IT. / One honest voice."
2. ✏️ Hero subhead → "I teach technology in plain English, talk politics without performing, and live my faith on purpose. This is where I put it all in one place."
3. ✏️ State of Things headline → "America, without the outrage cycle."
4. ✏️ About page subhead → "IT professional. Husband. Father. American. And yes — the guy who lost 250 pounds."
5. ✏️ About story block 2 label → "The Teacher" (was "The Civic Voice")
6. ✏️ Articles page descriptor → "Three categories. One voice. Pick whichever fits where your head is today."
7. ✏️ Site title metadata → "Chaz Trickey | Tech, Politics & Faith for Real Americans"
8. ✏️ Site description metadata → "Senior IT professional Chaz Trickey covers technology, American politics, and faith-led living. Honest, grounded, earned."
