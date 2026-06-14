# DESIGN SYSTEM: chaztrickey.com
Version: 1.0 | Date: June 2026
Generated from: project brief + jeton.com P01 analysis

---

## Color Palette

```css
/* --- BACKGROUND / SURFACE --- */
--color-background:        oklch(11% 0.04 240);
/* Deep navy night — warmer than jeton's charcoal, anchors the patriotic palette */

--color-surface:           oklch(16% 0.035 240);
/* Card and panel backgrounds — just enough lift to read against the page */

--color-surface-raised:    oklch(21% 0.03 240);
/* Elevated elements — modals, dropdowns, sticky nav on scroll */

/* --- TEXT --- */
--color-text-primary:      oklch(95% 0.005 80);
/* Warm near-white — the slight warmth prevents clinical coldness */

--color-text-secondary:    oklch(62% 0.01 240);
/* Supporting text, meta, captions — cool-leaning to recede */

--color-text-muted:        oklch(40% 0.01 240);
/* Placeholders, disabled, timestamps */

--color-text-inverse:      oklch(11% 0.04 240);
/* Text on light surfaces if any appear */

/* --- BRAND: CRIMSON --- */
--color-brand:             oklch(50% 0.21 24);
/* Deep American flag crimson — not orange-red, not hot pink. Earned red. */

--color-brand-hover:       oklch(56% 0.21 24);
/* Slightly brighter on interaction */

--color-brand-subtle:      oklch(18% 0.07 24);
/* Dark crimson tint — section backgrounds, category tags */

/* --- ACCENT: FLAME GOLD --- */
--color-accent:            oklch(73% 0.17 74);
/* Warm amber-gold — the flame from the tattoo. Used for featured content,
   pull quotes, and the one detail per page that earns emphasis. */

--color-accent-hover:      oklch(78% 0.17 74);

--color-accent-subtle:     oklch(18% 0.06 74);
/* Dark gold tint — paired with the accent for backgrounds */

/* --- BORDER --- */
--color-border:            oklch(26% 0.025 240);
/* Subtle dividers — visible but not competing */

--color-border-strong:     oklch(38% 0.02 240);
/* Focus rings, stronger dividers */

/* --- GLOW (dark-bg specific) --- */
--color-glow-brand:        oklch(50% 0.21 24 / 0.25);
/* Crimson halo — hover states on CTAs, featured article borders */

--color-glow-accent:       oklch(73% 0.17 74 / 0.2);
/* Gold halo — category accent moments, scroll-reveal highlights */

/* --- SEMANTIC --- */
--color-success:           oklch(58% 0.17 145);
--color-warning:           oklch(73% 0.17 74);   /* reuses accent gold */
--color-error:             oklch(50% 0.21 24);   /* reuses brand crimson */
```

**Color rationale:**

- **Background navy:** Jeton uses cool charcoal. Chaz's version pulls warm — `oklch(11% 0.04 240)` has enough blue to read as night sky / deep Americana without feeling like a tech startup. The patriotic colors pop against it.
- **Brand crimson:** Not fire-engine red, not burgundy. The oklch chroma (0.21) at 50% lightness hits the exact saturation of a printed American flag. It's authoritative, not alarming.
- **Accent gold:** The flame in the tattoo. Used once per section, maximum — the scarcity is what makes it feel premium rather than decorative.
- **Glow tokens:** Traditional box-shadows disappear on dark backgrounds. Colored glows replace them — they define interactive depth while reinforcing the brand palette.

---

## Typography

### Font Families

```css
--font-display:  'Fraunces', Georgia, serif;
--font-body:     'Plus Jakarta Sans', system-ui, sans-serif;
--font-mono:     'JetBrains Mono', 'Fira Code', monospace;
```

**Google Fonts import URL:**
```
https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap
```

### Type Scale

```css
--text-xs:    0.75rem;     /*  12px — timestamps, labels, meta */
--text-sm:    0.875rem;    /*  14px — captions, secondary copy */
--text-base:  1rem;        /*  16px — body copy */
--text-lg:    1.125rem;    /*  18px — lead paragraphs, intro copy */
--text-xl:    1.25rem;     /*  20px — card headlines, small headings */
--text-2xl:   1.5rem;      /*  24px — section subheadings */
--text-3xl:   1.875rem;    /*  30px — article titles */
--text-4xl:   2.25rem;     /*  36px — page headings */
--text-5xl:   3rem;        /*  48px — section display headings */
--text-6xl:   3.75rem;     /*  60px — hero subhead */
--text-7xl:   4.5rem;      /*  72px — hero headline (desktop) */
--text-8xl:   6rem;        /*  96px — maximum display (special moments) */
```

### Font Weights

```css
--font-light:     300;   /* Fraunces at light weight is elegant at large sizes */
--font-normal:    400;
--font-medium:    500;
--font-semibold:  600;
--font-bold:      700;
--font-extrabold: 800;
```

### Line Heights

```css
--leading-none:     1;      /* Massive display text — no extra line spacing */
--leading-tight:    1.15;   /* Hero headlines */
--leading-snug:     1.3;    /* Section headings */
--leading-normal:   1.55;   /* Body copy */
--leading-relaxed:  1.7;    /* Long-form article text */
```

### Letter Spacing

```css
--tracking-tightest: -0.04em;   /* 72px+ display text — essential at large scale */
--tracking-tight:    -0.02em;   /* 36–60px headings */
--tracking-normal:    0em;      /* Body copy */
--tracking-wide:      0.04em;   /* Small caps category labels */
--tracking-widest:    0.12em;   /* All-caps utility labels only */
```

**Typography rationale:**

- **Fraunces (display):** An optical-size serif — it was designed to look different at large vs. small sizes, getting more expressive and ink-trap detailed at display scale. At 72px it has the authority of a broadsheet newspaper headline. At 30px it reads like a trustworthy byline. It communicates earned credibility — exactly right for someone with 20+ years of real experience.
- **Plus Jakarta Sans (body):** Clean, geometric, modern — but with enough personality in its letterforms to avoid the "default template" feeling of Inter. It pairs with Fraunces by doing the opposite job: clear, functional, fast to read. The warmth in its rounded strokes complements the editorial weight above it.
- **Hierarchy strategy:** Fraunces display + size contrast + tracking does the heading work. Plus Jakarta Sans weight (400 body → 600–700 emphasis) handles UI hierarchy. Color is only used for emphasis within copy — gold for a pull quote, crimson for a category label. Never both at once.

---

## Spacing Scale

Base unit: 4px

```css
--space-0:   0;
--space-1:   0.25rem;    /*   4px */
--space-2:   0.5rem;     /*   8px */
--space-3:   0.75rem;    /*  12px */
--space-4:   1rem;       /*  16px */
--space-5:   1.25rem;    /*  20px */
--space-6:   1.5rem;     /*  24px */
--space-8:   2rem;       /*  32px */
--space-10:  2.5rem;     /*  40px */
--space-12:  3rem;       /*  48px */
--space-16:  4rem;       /*  64px */
--space-20:  5rem;       /*  80px */
--space-24:  6rem;       /*  96px */
--space-28:  7rem;       /* 112px */
--space-32:  8rem;       /* 128px */
--space-40:  10rem;      /* 160px */
```

- **Section vertical padding:** `--space-24` (96px) top and bottom on desktop, `--space-16` (64px) on mobile — matches jeton's generous breathing room
- **Component internal padding:**
  - Cards: `--space-6` (24px)
  - Buttons: `--space-3` vertical / `--space-6` horizontal (md), `--space-4` / `--space-8` (lg)
  - Nav: `--space-4` vertical / `--space-8` horizontal

---

## Layout

```css
--max-width-prose:    68ch;      /* Article body text — optimal reading width */
--max-width-content:  80rem;     /* Main content max (1280px) */
--max-width-wide:     90rem;     /* Full-bleed sections with inner max (1440px) */

--grid-columns:       12;
--grid-gutter:        var(--space-6);     /* 24px column gap */
--grid-margin:        var(--space-5);     /* 20px page edge (mobile) */
--grid-margin-md:     var(--space-8);     /* 32px (tablet) */
--grid-margin-lg:     var(--space-16);    /* 64px (desktop) */
```

### Border Radius

```css
--radius-none:   0;
--radius-sm:     0.25rem;    /*  4px — tags, badges, small elements */
--radius-md:     0.5rem;     /*  8px — cards, inputs */
--radius-lg:     0.875rem;   /* 14px — large panels, article cards */
--radius-xl:     1.25rem;    /* 20px — hero cards, featured sections */
--radius-full:   9999px;     /* Pills — primary CTA buttons, category filters */
```

**Radius philosophy:** Cards and panels use `--radius-lg` (14px) — rounded enough to feel considered, sharp enough to feel serious. Primary buttons use `--radius-full` (pill) — the soft contrast against the sharp editorial content creates a visual hierarchy that says "this is the action." Nothing uses a radius under 4px.

---

## Shadows & Glows

Traditional dark shadows are invisible on dark backgrounds. Use glow and border instead.

```css
/* Depth shadows (for elements lifting above dark bg) */
--shadow-sm:   0 2px 8px oklch(0% 0 0 / 0.5);
--shadow-md:   0 4px 20px oklch(0% 0 0 / 0.6), 0 1px 4px oklch(0% 0 0 / 0.4);
--shadow-lg:   0 12px 40px oklch(0% 0 0 / 0.7), 0 4px 12px oklch(0% 0 0 / 0.5);

/* Brand glows (replaces shadows on interactive/featured elements) */
--shadow-glow-brand:   0 0 24px var(--color-glow-brand);
/* Use on: primary CTA hover, featured article highlight border */

--shadow-glow-accent:  0 0 20px var(--color-glow-accent);
/* Use on: category accent moments, active nav indicator, pull quotes */

--shadow-glow-white:   0 0 16px oklch(95% 0.005 80 / 0.08);
/* Use on: card hover — very subtle, just enough to feel interactive */
```

**Shadow usage:** Glows fire on hover or to mark "this is featured." Never apply glows statically to multiple elements at once — scarcity is what makes them signal importance.

---

## Motion

```css
--duration-instant:  100ms;   /* Micro-interactions — toggle, check */
--duration-fast:     175ms;   /* Hover state transitions */
--duration-normal:   300ms;   /* Component transitions */
--duration-slow:     500ms;   /* Scroll-reveal entries */
--duration-crawl:    800ms;   /* Hero text reveals, dramatic moments */

--ease-default:   cubic-bezier(0.4, 0, 0.2, 1);
--ease-out:       cubic-bezier(0, 0, 0.2, 1);      /* Elements entering */
--ease-in:        cubic-bezier(0.4, 0, 1, 1);       /* Elements leaving */
--ease-spring:    cubic-bezier(0.34, 1.56, 0.64, 1); /* Playful pop */
--ease-editorial: cubic-bezier(0.16, 1, 0.3, 1);    /* Smooth, deliberate scroll reveals */
```

**Motion philosophy:** Three categories of motion only:

1. **Hover feedback** (fast, 175ms, ease-default) — buttons, cards, links. Instant enough to feel responsive, not so fast it feels jumpy.
2. **Scroll-reveal entries** (slow, 500–800ms, ease-editorial) — sections fade+translate-up into view as you scroll. Staggered between elements within a section (100ms delay per item). This is the jeton-inspired "liveliness."
3. **Sticky scroll transitions** (scroll-linked, no duration) — used on the About page photo/story panel. No easing — it moves exactly with the scroll position.

**What does NOT animate:** Background colors, typography (no text scramble effects), layout shifts, anything that moves while the user isn't interacting or scrolling.

**Firework / ember detail:** A very subtle CSS particle layer on the hero — 12–15 small dots at `oklch(73% 0.17 74 / 0.15)` (gold, nearly transparent) that drift upward slowly using CSS keyframe animation with varying durations (4–8s) and delays. Not a fireworks explosion — more like embers rising. Invisible on first glance, noticed on second. Gives the hero the "alive" quality without competing with the headline.

---

## Design System Summary

| Attribute | Value |
|---|---|
| Personality | Grounded · Authoritative · Warm · Alive · Earned |
| Visual weight | Bold |
| Density | Spacious — generous section breathing room, tight within components |

**Primary trust signal:** The dark editorial palette with Fraunces headlines communicates "this person has something worth saying." Most personal sites look like a template. This one looks like it was built for a specific person with a specific voice. That's the first trust signal before a word is read.

**The patriotic signal:** It's in the palette, not the decoration. The crimson and gold ARE the American flag — the user's brain reads them subconsciously. No eagle, no star field, no waving flag SVG needed. The colors do it quietly.
