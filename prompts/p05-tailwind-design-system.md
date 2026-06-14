# P05 — Tailwind Design System
## Phase 4: Convert the design system into Tailwind config and CSS tokens

---

> **When to use:** Once at the start of the build phase, before writing any component code.
>
> **Input:** Completed design system from P02.
>
> **Output:** `tailwind.config.ts` + `src/styles/globals.css` content.
> These two files are the source of truth for all design decisions in code.

---

## Prompt (copy from here)

---

Convert the design system below into a complete Tailwind CSS v4 configuration and global CSS file.

Rules:
- Use Tailwind CSS v4 syntax (`@theme` directive in CSS, NOT a `tailwind.config.ts` for v4)
- All design tokens must be available as CSS custom properties AND as Tailwind utility classes
- Do not remove any of Tailwind's defaults — extend and override only
- Every color must use OKLCH values
- Include the Google Fonts import at the top of the CSS file
- Add comments grouping related tokens

**Design system (from P02):**
```
{Paste complete P02 output here}
```

---

### OUTPUT FORMAT

Produce two complete files:

---

**FILE 1: `src/styles/globals.css`**

```css
/* ============================================================
   GLOBALS.CSS — {PROJECT NAME} Design System
   Generated from design-system.md via P05 prompt
   ============================================================ */

/* Google Fonts */
@import url('{GOOGLE_FONTS_URL}');

/* Tailwind v4 */
@import "tailwindcss";

/* ============================================================
   DESIGN TOKENS (available as CSS vars and Tailwind utilities)
   ============================================================ */

@theme {

  /* --- COLORS --- */
  --color-background: oklch(...);
  --color-surface: oklch(...);
  /* ... all color tokens */

  /* --- TYPOGRAPHY --- */
  --font-display: '{Font}', sans-serif;
  --font-body: '{Font}', sans-serif;

  --text-xs: 0.75rem;
  /* ... full type scale */

  --font-normal: 400;
  /* ... weights */

  --leading-tight: 1.2;
  /* ... line heights */

  --tracking-tight: -0.025em;
  /* ... letter spacings */

  /* --- SPACING --- */
  --spacing-1: 0.25rem;
  /* ... full spacing scale */

  /* --- LAYOUT --- */
  --max-width-prose: 65ch;
  --max-width-content: 80rem;
  --max-width-wide: 90rem;

  /* --- BORDER RADIUS --- */
  --radius-sm: 0.25rem;
  /* ... */

  /* --- SHADOWS --- */
  --shadow-sm: 0 1px 2px oklch(0% 0 0 / 0.05);
  /* ... */

  /* --- MOTION --- */
  --duration-fast: 150ms;
  --duration-normal: 250ms;
  --duration-slow: 400ms;
  --ease-default: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
}

/* ============================================================
   BASE STYLES
   ============================================================ */

*, *::before, *::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  -webkit-text-size-adjust: 100%;
}

body {
  background-color: var(--color-background);
  color: var(--color-text-primary);
  font-family: var(--font-body);
  font-size: var(--text-base);
  line-height: var(--leading-normal);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* ============================================================
   TYPOGRAPHY BASE
   ============================================================ */

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-display);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-text-primary);
}

/* ============================================================
   FOCUS STYLES
   ============================================================ */

:focus-visible {
  outline: 2px solid var(--color-brand);
  outline-offset: 2px;
  border-radius: var(--radius-sm);
}

/* ============================================================
   SELECTION
   ============================================================ */

::selection {
  background-color: var(--color-brand-subtle);
  color: var(--color-text-primary);
}

/* ============================================================
   REDUCED MOTION
   ============================================================ */

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

**FILE 2: Usage reference comment block**

After the CSS file, output a comment-only reference showing the most commonly used Tailwind classes from this design system:

```
/* QUICK REFERENCE — Common utility classes from this design system

COLORS:
  bg-background       text-text-primary     text-text-secondary
  bg-surface          border-border         text-brand
  bg-brand            text-text-inverse     bg-brand-subtle

TYPOGRAPHY:
  font-display        font-body
  text-7xl            text-5xl              text-3xl
  text-xl             text-base             text-sm
  font-bold           font-semibold         font-medium
  leading-tight       leading-normal        tracking-tight

SPACING (use these, not arbitrary values):
  p-4   p-6   p-8   p-10   p-12   p-16   p-20
  gap-4  gap-6  gap-8  gap-12
  mt-8   mb-12   py-16   py-24

LAYOUT:
  max-w-content   max-w-prose   max-w-wide
  mx-auto

RADIUS:
  rounded-sm   rounded-md   rounded-lg   rounded-xl   rounded-full

SHADOWS:
  shadow-sm   shadow-md   shadow-lg   shadow-xl

MOTION:
  transition-all duration-fast ease-default
  transition-all duration-normal ease-out
*/
```

---

**FILE 3: `src/lib/cn.ts` (utility for conditional classes)**

```ts
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

Install: `npm install clsx tailwind-merge`

---
*End of P05 Prompt*
