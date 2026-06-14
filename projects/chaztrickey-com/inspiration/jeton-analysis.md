P01 ANALYSIS: jeton.com
For use in: chaztrickey.com project
Analyzed: June 2026

SECTION INVENTORY

Section 1 — Primary Hero

Layout: Single column, centered, full viewport height
Column structure: 1-column centered, constrained ~700px max-width for text
Content elements: Large display headline, subhead, two CTA buttons (app store), animated scroll indicator ("Scroll" label + animated chevron)
Background treatment: Near-black with very subtle warm undertone — not pure #000, more like a dark charcoal with slight depth
Height: Full viewport (100vh) — content below the fold is intentionally hidden to create scroll curiosity
Key detail: The hero is deliberately minimal. It holds one idea and then steps aside. The scroll indicator is a deliberate invitation, not an afterthought.


Section 2 — Scroll-Driven Feature Reveal ("Unify your finances")

Layout: Sticky left panel (phone mockup) + scrollable right feature list — the phone stays fixed while content scrolls past it
Column structure: 2-column, approximately 50/50, with the left column sticky
Content elements: App UI mockup (phone), feature tab labels (Add, Send, Exchange), short feature descriptions, animated transitions between states
Background treatment: Same near-black as hero — seamless continuation
Height: Tall — this section spans multiple viewport heights because of the sticky scroll mechanic
Key detail: The phone mockup screen CHANGES as you scroll through each feature. This is the core interaction pattern Chaz responded to — the page is doing work for you as you scroll, not just revealing static blocks.


Section 3 — Process Steps

Layout: Horizontal step indicator, auto-progressing animation
Column structure: Full-width centered
Content elements: Numbered steps (01–05: Account, Add, Method, Review, Done), animated progression
Background treatment: Near-black, continuous
Height: Medium
Key detail: The steps animate through automatically after you reach this section — the page continues to move even when you're not scrolling.


Section 4 — Social Proof / Stats

Layout: Centered, single column
Content elements: "1M+ happy users" headline, app store CTA
Background treatment: Near-black
Height: Compact


Section 5 — Card Feature (Jeton Card)

Layout: Full-bleed section with centered text + floating card image
Content elements: Feature headline, short description, "Learn more" link, card product image
Background treatment: Slight gradient break — still dark but differentiated
Height: Medium-tall


Section 6 — Currency Exchange (Interactive)

Layout: Centered, interactive element
Content elements: Live currency converter widget with flag icons, animated input
Background treatment: Dark, continuous
Height: Medium


Section 7 — Testimonials

Layout: Horizontal scroll row of cards
Content elements: Star rating, review text, reviewer name/initial avatar
Background treatment: Dark cards on dark background — differentiated by card border/surface
Height: Medium


Section 8 — Final CTA

Layout: Full-width, centered
Content elements: "1 million users, plus you" headline + app store buttons
Height: Compact


Section 9 — Footer

Layout: 5-column grid
Content elements: Link groups (Get Started, Discover, Company, Legal, Help) + app store buttons + trust badges
Background treatment: Dark, continuous from page


LAYOUT PATTERNS

Max content width: ~1280px, with generous margin on both sides
Grid: Not a rigid 12-column — sections use flexible, section-specific layouts rather than a repeating grid. Each section owns its own geometry.
White space: Used as separation, not padding. The dark background means white space is negative space — it creates breathing room without color contrast. Generous between sections, tight within components.
Layout breaks: The sticky scroll section is a deliberate break — it violates the "sections stack vertically" pattern to create a different kind of rhythm. This is what makes the page feel alive.
Alignment: Mostly centered. The sticky section is the only asymmetric moment.


COMPONENT PATTERNS
ComponentContentVisual TraitsStatesApp Store ButtonIcon + store labelPill shape, dark border, white textHover: slight brightenFeature TabShort labelUnderline indicator on activeDefault / ActivePhone MockupApp screen imageDrop shadow, slight 3D perspective tiltTransforms on scrollTestimonial CardStars, text, avatar initialRounded corners, subtle border, dark surfaceStaticProcess StepNumber + labelMinimal, auto-animatesInactive / Active / CompleteCTA Button (primary)Label textFilled, rounded-full pillHover: scale + glowScroll Indicator"Scroll" + chevronAnimated bounce/pulseAuto-animates

TYPOGRAPHY OBSERVATIONS

Font families: 2 — a geometric sans-serif for all UI text (appears to be a custom or licensed font, not a Google Font). No display/serif contrast — weight and size do all the work.
Type scale: Extreme contrast between hero display (approximately 72–96px) and body (16px). The headline is dramatically large. Everything in between is sparse — there's no mid-scale clutter.
Hierarchy method: Size + weight only. No color variation in type (it's all white, with gray for secondary). The scale jump IS the hierarchy.
Notable detail: Letter-spacing on the hero headline is tight (negative tracking) — adds to the premium, editorial feel. Body text has normal tracking.


COLOR OBSERVATIONS

Primary background: Very dark charcoal — approximately oklch(10% 0.01 260) — not pure black, has a cool blue undertone
Primary text: Near-white — oklch(96% 0 0)
Secondary text: Medium gray — oklch(55% 0 0)
Accent color: Purple/violet — used on the primary CTA button and active states. Approximately oklch(55% 0.2 290)
Card surfaces: Slightly lighter than background — oklch(15% 0.01 260) — creates depth without introducing a new color
What's absent: No red, no warm tones, no photography — this is a purely digital-native palette

Key insight for chaztrickey.com: The accent color is where Chaz diverges significantly from jeton. Jeton uses purple because it's a neutral-premium fintech color. Chaz's accent colors — crimson red, warm gold — carry meaning. That meaning is the advantage.

SPACING RHYTHM

Feel: Generous and intentional. Sections breathe. No padding is accidental.
Section gaps: Very large — approximately 120–160px between major sections
Within components: Tight — cards and UI elements are compact. The contrast between section spacing (open) and component spacing (tight) creates visual rhythm.
Density: Low. Each section holds one idea. Nothing competes.


INTERACTION NOTES

Primary interaction: Scroll-driven sticky panel — phone mockup stays fixed while right column scrolls through features. This is built with CSS position: sticky + scroll-linked JavaScript (likely GSAP ScrollTrigger or equivalent)
Auto-animations: Process step section auto-progresses — advances through steps without user scroll input after the section enters view
Hover states: Buttons have subtle scale + brightness hover. Very fast (150ms). Nothing dramatic.
Navigation: Transparent on load, becomes slightly darker/frosted on scroll. Stays at top.
Scroll indicator: Animated bounce on the "Scroll" chevron in the hero — draws eye downward intentionally
No parallax on background images — no images at all. Motion is content-driven, not decorative.


CONTENT STRATEGY NOTES

Primary message: One product, one account, everything handled
Primary CTA: Download the app
Trust signals: 1M+ users stat, testimonials, regulatory badges in footer
User journey: Arrive → understand the one-line value prop → see it in action (scroll feature demo) → understand the process → read social proof → download


PATTERNS TO BORROW FOR CHAZTRICKEY.COM
1. The dark editorial foundation
The near-black background creates an immediate "this is serious" signal before any content is read. For Chaz, this translates perfectly — it projects authority and weight without being aggressive. The patriotic colors (crimson, gold) will pop dramatically against it.
2. Scroll-reveal storytelling
The sticky panel + scrolling content idea translates to an "About Chaz" section where a photo or visual stays fixed while his story scrolls through — tech professional → civic voice → faith & family → 250 lbs of discipline. Same mechanic, different content.
3. The minimal hero
One headline. One subhead. One CTA. Space. The hero's job is to answer "what is this?" and invite the scroll — not to explain everything. For Chaz: who he is in one line, then let the scroll do the introducing.
4. Section isolation
Each section holds exactly one idea. Apply this to the category sections — each of Tech Made Simple, The State of Things, and By Design gets its own full-width visual moment, not a card in a grid.
5. The scroll indicator
The animated "Scroll" invitation with a bouncing chevron is a small detail with a big impact — it signals that the page is meant to be explored, not skimmed. Include this in the hero.

PATTERNS TO AVOID / IMPROVE
1. Zero visual warmth
Jeton's all-cool-gray palette works for fintech. For a personal brand with faith and patriotic themes, the complete absence of warm tones would feel wrong. Chaz's palette needs the warmth the tattoo has — flame gold, deep crimson.
2. Centered everything
Jeton is very center-aligned throughout. For a content/editorial site, flush-left alignment reads more like journalism and less like a product brochure. Mix centered hero moments with left-aligned editorial sections.
3. No photography strategy
Jeton uses zero real photography — fine for an app company. Chaz's personal brand lives and dies on authenticity. A real photo of Chaz, used well, will create more trust than any design decision. Plan for it.

TRANSLATION SUMMARY FOR CHAZTRICKEY.COM
Jeton PatternChaz AdaptationDark charcoal bgDeep navy (oklch ~15% 0.04 240) — warmer, more personalPurple accentCrimson red primary + flame gold secondaryApp mockup sticky scrollPhoto/portrait sticky scroll on About pageGeometric sans-serif onlySerif display headline + clean sans body — editorial feelProduct feature tabsContent category reveal (Tech Made Simple / State of Things / By Design)"One app, all needs""One place. Every truth." (or similar — copy comes in P08)App store CTAsPlatform follow links (YouTube, Facebook, Rumble)