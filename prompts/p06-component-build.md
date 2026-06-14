# P06 — Component Build
## Phase 5: Build one component at a time with design system enforcement

---

> **When to use:** Once per component, after the design system is implemented (P05) and the page blueprint is complete (P04). Use the page blueprint's build order.
>
> **Input:** Component spec from P03 + Page blueprint section spec from P04 + Design system (P02).
>
> **Output:** A complete, production-ready Next.js 15 component with TypeScript types and Payload CMS integration.
>
> **After building each component:** Run P07 (anti-slop audit) before moving to the next one.

---

## Prompt (copy from here)

---

Build the following component for our Next.js 15 + Payload CMS v3 + Tailwind CSS v4 + TypeScript project.

**Component to build:**
```
{Component name from P03 inventory}
```

**Component spec (from P03):**
```
{Paste the specific component's spec block from P03 output}
```

**Page blueprint section spec (from P04, if this is a section component):**
```
{Paste the relevant section block from P04 output}
```

**Design system summary (from P02):**
```
{Paste the "Design System Summary" section from P02}
```

---

### RULES FOR THIS BUILD

1. **Design system only** — every color, spacing, radius, shadow, font, and animation value must reference a CSS custom property or Tailwind utility from the design system. No hardcoded values. Ever.

2. **Semantic HTML** — use the correct HTML element for the content type. Headers get `<header>`, navigation gets `<nav>`, main content areas get `<main>` or `<section>`, standalone content gets `<article>`. No div-soup.

3. **Mobile-first** — write base styles for mobile, then add `md:` and `lg:` prefixes for larger screens.

4. **Named by purpose** — component file names, TypeScript types, and Tailwind class groups describe what the element IS, not what it LOOKS like. Not `blue-card`, but `ServiceCard`. Not `big-text`, but `SectionHeading`.

5. **Zero generic patterns** — if the component starts to look like one of the anti-patterns in the Master System Prompt, stop and redesign it before continuing.

6. **Payload CMS fields** — every editable content element must have a corresponding Payload field. Hard-coded copy is not acceptable for anything an editor should be able to change.

7. **DESIGN comments** — annotate non-obvious visual decisions with `// DESIGN: reason` comments.

---

### OUTPUT FORMAT

Produce the following files:

---

**FILE 1: `src/components/{category}/{ComponentName}.tsx`**

```tsx
// DESIGN: {one-sentence explanation of the visual rationale for this component}

import { cn } from '@/lib/cn'
// Import only what is needed

// ============================================================
// TYPES
// ============================================================

export interface {ComponentName}Props {
  // All props typed. No `any`.
  // Include className for style overrides
  className?: string
}

// ============================================================
// COMPONENT
// ============================================================

export function {ComponentName}({ ..., className }: {ComponentName}Props) {
  return (
    <{semanticElement}
      className={cn(
        // DESIGN: base layout
        'your tailwind classes here',
        className
      )}
    >
      {/* Content */}
    </{semanticElement}>
  )
}
```

---

**FILE 2: `src/collections/{CollectionName}.ts` (if this component uses Payload CMS data)**

```ts
import { CollectionConfig } from 'payload'

export const {CollectionName}: CollectionConfig = {
  slug: '{slug}',
  admin: {
    useAsTitle: '{primary field}',
    description: '{what this collection is for, shown to editors}',
  },
  fields: [
    // Every editable field in the component
    // Include admin.description on every field to guide editors
  ],
}
```

---

**FILE 3: `src/components/{category}/{ComponentName}.stories.tsx` (Storybook story, optional but recommended)**

```tsx
// Basic story showing all variants
```

---

**Additional notes to include in your response:**
- How to import and use this component in a page
- Any dependencies to install (`npm install ...`)
- Any gotchas or edge cases to handle
- Responsive behavior at mobile / tablet / desktop breakpoints

---
*End of P06 Prompt*
