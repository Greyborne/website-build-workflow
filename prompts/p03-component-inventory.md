# P03 — Component Inventory
## Phase 3a: Define all UI components needed for the project

---

> **When to use:** After completing P01 (inspiration analysis) and P02 (design system). Run once per project before any code is written.
>
> **Input:** All P01 analyses + project brief + design system from P02.
>
> **Output:** A complete component inventory. Save as `projects/{PROJECT}/component-inventory.md`
> This feeds directly into P04 (page blueprint) and P06 (component build).

---

## Prompt (copy from here)

---

Using the inspiration analyses, project brief, and design system below, create a complete component inventory for this project.

A component is any distinct, reusable UI element. Components can be base-level (Button, Input, Badge) or compositional (ServiceCard, NavigationBar, TestimonialBlock). Every component should be named by its purpose, not its appearance.

**Project brief:**
```
{Paste project brief content}
```

**Design system (from P02):**
```
{Paste P02 output}
```

**Inspiration analyses (from P01):**
```
{Paste all P01 analyses}
```

Produce the component inventory using the exact format below. For every component, answer all fields. "TBD" is not acceptable for required fields.

---

### OUTPUT FORMAT

---

## COMPONENT INVENTORY: {PROJECT NAME}

### BASE COMPONENTS
*Atomic, reusable UI elements used within larger components.*

---

#### Button
- **Variants:** Primary, Secondary, Ghost, Destructive, Link
- **Sizes:** sm, md, lg
- **States:** default, hover, active, disabled, loading
- **Content:** label text, optional leading/trailing icon
- **Design notes:** {radius, padding, font weight, specific token values}
- **Accessibility:** Requires `aria-label` when icon-only; focus ring using `--color-border-strong`

---

#### Input
- **Variants:** Text, Textarea, Select, Checkbox, Radio, Toggle
- **States:** default, focus, error, disabled
- **Content:** label, input field, optional helper text, optional error message
- **Design notes:** {border style, radius, padding, label positioning}

---

#### Badge / Tag
- **Variants:** Default, Outline, Colored (list color semantics)
- **Content:** Short text label, optional dot indicator, optional icon
- **Design notes:** {size, radius, when to use each variant}

---

#### Card
- **Variants:** Default, Bordered, Elevated, Interactive (hover state)
- **Content slots:** header area, body area, footer area (each optional)
- **Design notes:** {padding, radius, shadow token, background color}
- **When to use:** {specific use cases for this project}

---

#### Icon
- **Library:** {Lucide React / Heroicons / Phosphor — choose one}
- **Sizes used:** 16px, 20px, 24px, 32px, 48px
- **Color:** always inherits from text color via `currentColor`
- **Notes:** {any custom icons needed}

---

### NAVIGATION COMPONENTS

---

#### PrimaryNavigation
- **Layout:** {horizontal topbar / sidebar / hamburger-only / hybrid}
- **Content:** Logo, nav links ({list them}), CTA button, optional search
- **Behavior:** {sticky / transparent-to-solid on scroll / always solid}
- **Mobile behavior:** {hamburger menu / bottom nav / full-screen overlay}
- **Design notes:** {height, background, link styles, active state}

---

#### MobileMenu
- **Trigger:** Hamburger icon in PrimaryNavigation
- **Layout:** {slide-in from right / full-screen overlay / drawer}
- **Content:** Same links as PrimaryNavigation, CTA button, optional social links
- **Animation:** {slide, fade, or scale — specify duration and easing tokens}

---

#### Footer
- **Layout:** {describe column structure or single-row}
- **Content:** Logo, {navigation groups}, legal text, social links, {other}
- **Design notes:** {background color, top border, padding}
- **NOTE:** Do not default to the 4-column newsletter footer. Define based on actual content needs.

---

### SECTION COMPONENTS
*Page-level sections built from base components.*

---

#### HeroSection
- **Layout:** {describe the specific layout — NOT just "hero with background"}
- **Content:** {list every content element: headline, subhead, CTA, image, badge, etc.}
- **Visual treatment:** {what makes this hero non-generic}
- **Payload CMS fields:** {list all editable fields for content editors}
- **Responsive behavior:** {how layout changes from mobile to tablet to desktop}

---

#### {SectionName}
*(Repeat this block for every section needed across all pages)*
- **Layout:**
- **Content:**
- **Visual treatment:**
- **Payload CMS fields:**
- **Responsive behavior:**

---

### FORM COMPONENTS

---

#### ContactForm
- **Fields:** {list specific fields for this project}
- **Validation:** {required fields, format validation}
- **Submission:** {form action, API route, success/error states}
- **Design notes:** {layout, spacing, button placement}

---

### UTILITY COMPONENTS

---

#### SEOHead
- **Purpose:** Consistent meta tags, OG tags, and JSON-LD structured data
- **Fields:** title, description, ogImage, canonicalUrl, noIndex flag

---

#### LoadingState
- **Variants:** Skeleton screens (not spinner) for: {list component types that load async content}
- **Design notes:** {animation, color using design tokens}

---

#### EmptyState
- **When used:** {list scenarios — empty search results, no posts, etc.}
- **Content:** Illustration or icon + heading + optional CTA
- **Design notes:**

---

### COMPONENT DEPENDENCY MAP

List which section components use which base components:

```
PrimaryNavigation → Button (CTA), Icon
HeroSection → Button (Primary + Secondary), Badge
{SectionName} → Card, Badge, Button
ContactForm → Input (all variants), Button (Primary)
Footer → Icon (social links)
```

---

### PAYLOAD CMS COLLECTIONS NEEDED

Based on the components above, list the Payload CMS collections required:

| Collection | Used By | Key Fields |
|---|---|---|
| Pages | All page sections | title, slug, sections (blocks) |
| {Collection} | {Component} | {fields} |

---

### WHAT THIS PROJECT WILL NOT BUILD

List component types that were deliberately excluded and why. This prevents scope creep and AI from suggesting them later.

- No carousel/slider: {reason}
- No accordion FAQ: {reason or alternative}
- {Other exclusions}

---
*End of P03 Prompt*
