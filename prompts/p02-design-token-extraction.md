# P02 — Design Token Extraction
## Phase 2: Define the project design system from inspiration analysis

---

> **When to use:** After completing P01 for all inspiration sites. Synthesize the best patterns from all analyses into a single, original design system for the new project.
>
> **Input:** One or more completed P01 analysis documents + the project brief.
>
> **Output:** A complete design system document. Save as `projects/{PROJECT}/design-system.md`
> The Tailwind config implementation comes in P05.

---

## Prompt (copy from here)

---

Using the inspiration analysis documents and project brief below, define a complete, original design system for the new project.

This is NOT about copying the inspiration sites. It is about synthesizing visual principles from those analyses into a cohesive, purpose-built design system that serves this specific project.

**Project brief:**
```
{Paste the completed project-brief-template.md content}
```

**Inspiration analyses (from P01):**
```
{Paste all completed P01 analysis documents here}
```

Produce the design system in the exact format below. Every decision must have a brief rationale (1 sentence) explaining why it fits this specific project. Rationales must reference the project brief or inspiration analysis — do not use generic reasons like "it looks professional."

---

### OUTPUT FORMAT

---

## DESIGN SYSTEM: {PROJECT NAME}

### Color Palette

Define using OKLCH values for perceptual uniformity. Each color must have a role.

```
--color-background:        oklch(...)   /* Page background */
--color-surface:           oklch(...)   /* Card / panel backgrounds */
--color-surface-raised:    oklch(...)   /* Elevated elements (modals, dropdowns) */

--color-text-primary:      oklch(...)   /* Main body text */
--color-text-secondary:    oklch(...)   /* Supporting text, captions */
--color-text-muted:        oklch(...)   /* Placeholders, disabled states */
--color-text-inverse:      oklch(...)   /* Text on dark backgrounds */

--color-brand:             oklch(...)   /* Primary brand color — CTAs, key highlights */
--color-brand-hover:       oklch(...)   /* Brand color on hover */
--color-brand-subtle:      oklch(...)   /* Light brand tint for backgrounds */

--color-accent:            oklch(...)   /* Secondary accent — used sparingly */
--color-accent-hover:      oklch(...)

--color-border:            oklch(...)   /* Dividers, input borders */
--color-border-strong:     oklch(...)   /* Stronger borders, focus rings */

--color-success:           oklch(...)
--color-warning:           oklch(...)
--color-error:             oklch(...)
```

**Color rationale:**
- Brand color: {why this color fits the audience and purpose}
- Accent color: {where it will be used and why this pairing works}
- Background strategy: {light, dark, or mixed — why this fits the tone}

---

### Typography

**Font Families**

```
--font-display:   '{Font Name}', {fallback stack};   /* Headlines, hero text */
--font-body:      '{Font Name}', {fallback stack};   /* Body copy, UI text */
--font-mono:      '{Font Name}', monospace;          /* Code, technical content (if applicable) */
```

Google Fonts import URL: `{URL}`

**Type Scale** (base 16px)

```
--text-xs:    0.75rem;    /* 12px — captions, labels */
--text-sm:    0.875rem;   /* 14px — secondary copy, meta */
--text-base:  1rem;       /* 16px — body copy */
--text-lg:    1.125rem;   /* 18px — large body, lead copy */
--text-xl:    1.25rem;    /* 20px — small headings */
--text-2xl:   1.5rem;     /* 24px */
--text-3xl:   1.875rem;   /* 30px */
--text-4xl:   2.25rem;    /* 36px */
--text-5xl:   3rem;       /* 48px — section headings */
--text-6xl:   3.75rem;    /* 60px — hero headings */
--text-7xl:   4.5rem;     /* 72px — display text */
```

**Font Weights**
```
--font-normal:    400;
--font-medium:    500;
--font-semibold:  600;
--font-bold:      700;
--font-black:     900;   /* Only if display font supports it */
```

**Line Heights**
```
--leading-tight:    1.2;   /* Display headings */
--leading-snug:     1.35;  /* Sub-headings */
--leading-normal:   1.5;   /* Body copy */
--leading-relaxed:  1.625; /* Long-form content */
```

**Letter Spacing**
```
--tracking-tight:   -0.025em;   /* Large display text */
--tracking-normal:   0em;
--tracking-wide:     0.025em;   /* Small caps, labels */
--tracking-wider:    0.05em;    /* All-caps labels only */
```

**Typography rationale:**
- Display font: {why this font fits the brand personality}
- Body font: {why this pairing works with the display font}
- Hierarchy strategy: {how size + weight + spacing will combine to create hierarchy}

---

### Spacing Scale

Base unit: 4px

```
--space-1:   0.25rem;    /* 4px */
--space-2:   0.5rem;     /* 8px */
--space-3:   0.75rem;    /* 12px */
--space-4:   1rem;       /* 16px */
--space-5:   1.25rem;    /* 20px */
--space-6:   1.5rem;     /* 24px */
--space-8:   2rem;       /* 32px */
--space-10:  2.5rem;     /* 40px */
--space-12:  3rem;       /* 48px */
--space-16:  4rem;       /* 64px */
--space-20:  5rem;       /* 80px */
--space-24:  6rem;       /* 96px */
--space-32:  8rem;       /* 128px */
--space-40:  10rem;      /* 160px */
--space-48:  12rem;      /* 192px */
```

**Section vertical padding:** `{--space-X}` top and bottom (choose based on section breathing room from inspiration analysis)

**Component internal padding:** `{--space-X}` (card, button, input)

---

### Layout

```
--max-width-prose:    65ch;      /* Long-form text */
--max-width-content:  80rem;     /* Main content max width (1280px) */
--max-width-wide:     90rem;     /* Full-bleed sections with inner max (1440px) */

--grid-columns:       12;
--grid-gutter:        var(--space-6);    /* Gap between columns */
--grid-margin:        var(--space-6);    /* Page edge margin (mobile) */
--grid-margin-lg:     var(--space-12);   /* Page edge margin (desktop) */
```

---

### Border Radius

```
--radius-sm:   0.25rem;    /* 4px — subtle rounding (inputs, tags) */
--radius-md:   0.5rem;     /* 8px — cards, buttons */
--radius-lg:   1rem;       /* 16px — large panels */
--radius-xl:   1.5rem;     /* 24px — modal-scale elements */
--radius-full: 9999px;     /* Pills, avatar circles */
```

**Radius philosophy:** {tight/sharp for professional, generous/rounded for friendly — choose one and state why}

---

### Shadows

```
--shadow-sm:   0 1px 2px oklch(0% 0 0 / 0.05);
--shadow-md:   0 4px 8px oklch(0% 0 0 / 0.08), 0 1px 2px oklch(0% 0 0 / 0.04);
--shadow-lg:   0 12px 24px oklch(0% 0 0 / 0.1), 0 4px 8px oklch(0% 0 0 / 0.06);
--shadow-xl:   0 24px 48px oklch(0% 0 0 / 0.12), 0 8px 16px oklch(0% 0 0 / 0.08);
```

**Shadow usage:** {describe when shadows are used — e.g., "only on interactive elements on hover, never decoratively on static cards"}

---

### Motion

```
--duration-fast:    150ms;
--duration-normal:  250ms;
--duration-slow:    400ms;

--ease-default:  cubic-bezier(0.4, 0, 0.2, 1);   /* General purpose */
--ease-spring:   cubic-bezier(0.34, 1.56, 0.64, 1); /* Springy interactions */
--ease-out:      cubic-bezier(0, 0, 0.2, 1);       /* Elements entering */
--ease-in:       cubic-bezier(0.4, 0, 1, 1);        /* Elements exiting */
```

**Motion philosophy:** {minimal/purposeful vs expressive — specify what gets animated and what doesn't}

---

### Design System Summary

**Personality keywords:** {3–5 adjectives that should describe how the site feels}  
**Visual weight:** {light / balanced / heavy}  
**Density:** {spacious / moderate / compact}  
**Primary trust signal:** {what design choices build credibility for this audience}

---
*End of P02 Prompt*
