# Static Prototype Plan

Prototype created for chaztrickey.com before CMS/backend work.

## Pages

- `/index.html` — Tests the first impression, visual direction, content lanes, article treatment, platform states, and credibility proof.
- `/who-i-am.html` — Tests the primary trust page: biography, credentials, values, and the transformation story.
- `/follow.html` — Tests the conversion path with platform statuses and a non-functional contact form.

## Components Built

- Primary navigation with mobile menu
- Editorial hero
- Category lane cards
- Prototype article listing
- Platform status cards
- Credential proof groups
- Long-form origin story layout
- Contact form prototype
- Lean footer
- Scroll reveal behavior respecting reduced motion

## Deliberately Excluded From Prototype

- Payload CMS collections — excluded until visual direction and content hierarchy are approved.
- Database/auth/admin routes — excluded by prototype rule.
- Real contact form delivery — requires destination email and provider.
- Full Articles page — homepage article treatment is enough to review tone and hierarchy for now.
- Privacy policy page — legal content can be added once analytics/contact implementation details are confirmed.
- Real social URLs except placeholder treatment — final platform URLs still need confirmation.

## Files Created

- `index.html` — Home prototype.
- `who-i-am.html` — Trust/about prototype.
- `follow.html` — Follow/contact prototype.
- `styles.css` — Shared design-system-based CSS.
- `script.js` — Mobile menu, reveal behavior, current year, and fake form notice.
- `assets/brand-anchor.png` — Temporary AI-generated visual anchor for prototype review.

## Client Prototype Review

Review these items before production build:

- Does the first impression feel right?
- Does the site sound like Chaz?
- Are the most important pages and sections in the right order?
- Are any sections missing, unnecessary, or misleading?
- Are the CTAs clear?
- Are placeholder assets acceptable for launch, or do we need real assets first?
- What content must change before CMS build?

Verdict:

- [ ] Approved for production build
- [ ] Approved with minor revisions
- [ ] Needs design/content revision before production build

## Production Handoff Notes

CMS-editable later:

- **Collections:** Articles, Categories, Media, SiteSettings, ContactSubmissions.
- **Page sections:** HomeHero, ContentLanes, LatestArticles, PlatformStatus, CredentialProof, OriginStory, TransformationNote, ContactIntro, ContactForm, LegalContent.
- **Reusable components:** Button, CategoryTag, EditorialCard, PlatformCard, ProofItem, ContactForm, Navigation, Footer.
- **Settings:** site title, tagline, nav links, footer links, platform statuses, social URLs, default SEO, analytics ID, cookie consent copy.
- **Forms/integrations:** contact form email delivery, spam protection, GA4, YouTube embeds, sitemap/robots, privacy policy and cookie consent.

## Image Prompt

Built-in image generation was used for `assets/brand-anchor.png`.

Prompt summary: refined dark editorial website hero visual for a personal media site about technology education, American civic commentary, faith, family, and purpose; deep ink navy, subtle paper texture, faint circuit traces, restrained crimson and warm amber light, abstract American flag/flame motif, no text, no people, no logo, no watermark.

