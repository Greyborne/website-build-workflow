# Design System: chaztrickey.com

Version: 0.1 draft
Created: June 14, 2026
Generated from: Project brief + Jeton inspiration analysis

## Color Palette

```css
/* Background / Surface */
--color-background:        oklch(15% 0.035 255);  /* Deep ink navy page background */
--color-surface:           oklch(20% 0.04 255);   /* Editorial panels and article cards */
--color-surface-raised:    oklch(25% 0.045 255);  /* Menus, dialogs, elevated controls */

/* Text */
--color-text-primary:      oklch(96% 0.01 90);    /* Main white text with slight warmth */
--color-text-secondary:    oklch(78% 0.025 85);   /* Supporting copy */
--color-text-muted:        oklch(61% 0.025 85);   /* Meta text, placeholders */
--color-text-inverse:      oklch(16% 0.035 255);  /* Text on light/gold surfaces */

/* Brand */
--color-brand:             oklch(52% 0.18 25);    /* Refined crimson for primary actions */
--color-brand-hover:       oklch(58% 0.19 25);    /* Crimson hover */
--color-brand-subtle:      oklch(28% 0.07 25);    /* Low-glow crimson surfaces */

/* Accent */
--color-accent:            oklch(78% 0.14 78);    /* Warm amber from flame/tattoo reference */
--color-accent-hover:      oklch(84% 0.15 78);    /* Amber hover/highlight */

/* Border */
--color-border:            oklch(32% 0.035 255);  /* Quiet navy divider */
--color-border-strong:     oklch(65% 0.11 78);    /* Accessible amber focus ring */

/* Semantic */
--color-success:           oklch(66% 0.14 145);
--color-warning:           oklch(78% 0.14 78);
--color-error:             oklch(58% 0.18 25);
```

### Color Rationale

- **Brand color:** Crimson gives patriotic weight without defaulting to bright flag red; it fits a bold but controlled personal brand.
- **Accent color:** Amber references the flame in the tattoo and should be used for focus, section markers, and occasional motion details.
- **Background strategy:** A deep ink navy supports the "serious publication/live broadcast" brief and avoids a campaign-poster look.

## Typography

```css
--font-display: 'Libre Baskerville', Georgia, serif;
--font-body: 'Source Sans 3', system-ui, sans-serif;
--font-mono: 'JetBrains Mono', 'SFMono-Regular', Consolas, monospace;
```

Google Fonts URL:
`https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Libre+Baskerville:wght@400;700&family=Source+Sans+3:wght@400;500;600;700&display=swap`

### Type Scale

```css
--text-xs:    0.75rem;
--text-sm:    0.875rem;
--text-base:  1rem;
--text-lg:    1.125rem;
--text-xl:    1.25rem;
--text-2xl:   1.5rem;
--text-3xl:   1.875rem;
--text-4xl:   2.25rem;
--text-5xl:   3rem;
--text-6xl:   3.75rem;
--text-7xl:   4.5rem;
```

### Font Weights

```css
--font-normal:    400;
--font-medium:    500;
--font-semibold:  600;
--font-bold:      700;
```

### Line Heights

```css
--leading-tight:    1.15;
--leading-snug:     1.3;
--leading-normal:   1.5;
--leading-relaxed:  1.625;
```

### Letter Spacing

```css
--tracking-normal: 0em;
--tracking-wide:   0.025em;
```

### Typography Rationale

- **Display font:** Libre Baskerville brings the credibility of ink-on-paper and keeps the site from feeling like a generic tech creator brand.
- **Body font:** Source Sans 3 is clear and plain-spoken, matching a teaching voice without flattening the editorial identity.
- **Mono font:** JetBrains Mono gives technical content a real code/IT texture for snippets, category labels, and article metadata.
- **Hierarchy strategy:** Use font family, size, spacing, and color together; avoid relying on bold weight alone.

## Spacing Scale

Base unit: 4px

```css
--space-1:   0.25rem;
--space-2:   0.5rem;
--space-3:   0.75rem;
--space-4:   1rem;
--space-5:   1.25rem;
--space-6:   1.5rem;
--space-8:   2rem;
--space-10:  2.5rem;
--space-12:  3rem;
--space-16:  4rem;
--space-20:  5rem;
--space-24:  6rem;
--space-32:  8rem;
--space-40:  10rem;
```

Section vertical padding should range from `--space-16` on compact pages to `--space-32` for major home-page story sections.

## Layout

```css
--max-width-prose:    65ch;
--max-width-content:  80rem;
--max-width-wide:     92rem;
--grid-columns:       12;
--grid-gutter:        var(--space-6);
--grid-margin:        var(--space-5);
--grid-margin-lg:     var(--space-12);
```

Layout should feel editorial: asymmetrical hero composition, strong left/right reading paths, and full-width dark bands with constrained inner content.

## Border Radius

```css
--radius-sm:   0.25rem;
--radius-md:   0.5rem;
--radius-lg:   0.75rem;
--radius-full: 9999px;
```

Radius philosophy: tight and intentional. Use `--radius-md` for most controls and cards; avoid soft SaaS bubbles.

## Shadows

```css
--shadow-sm: 0 1px 2px oklch(0% 0 0 / 0.12);
--shadow-md: 0 8px 18px oklch(0% 0 0 / 0.18);
--shadow-lg: 0 20px 48px oklch(0% 0 0 / 0.28);
```

Use shadows sparingly on menus, dialogs, and interactive article cards. Static sections should rely on contrast and spacing.

## Motion

```css
--duration-fast:    150ms;
--duration-normal:  250ms;
--duration-slow:    450ms;
--ease-default:     cubic-bezier(0.4, 0, 0.2, 1);
--ease-out:         cubic-bezier(0, 0, 0.2, 1);
--ease-in:          cubic-bezier(0.4, 0, 1, 1);
```

Motion philosophy: purposeful editorial reveal. Animate section transitions, active category states, and platform availability. Do not fade every card by default.

## Design System Summary

- **Personality keywords:** grounded, honest, welcoming, bold, earned
- **Visual weight:** heavy but readable
- **Density:** moderate; home page can be cinematic, article pages should be easier to scan
- **Primary trust signal:** disciplined restraint: strong convictions, real IT credibility, and no sensational visual noise

