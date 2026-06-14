# P04 — Page Blueprint
## Phase 3b: Plan every page's section structure before building

---

> **When to use:** After P03 (component inventory). Run once per page. Do the home page first, then inner pages.
>
> **Input:** Component inventory (P03) + project brief + design system (P02).
>
> **Output:** Page-by-page layout blueprint. Save as `projects/{PROJECT}/page-blueprints.md`
> This is your build contract — no section gets built that isn't in the blueprint.

---

## Prompt (copy from here)

---

Using the component inventory and project brief below, create a complete page blueprint for the following page.

A page blueprint defines: what sections appear on the page, in what order, which component handles each section, what content goes in it, and what CMS fields editors will fill in.

The section order must reflect the target user's decision-making journey — not a generic marketing template. Justify the order.

**Page to blueprint:**
```
{e.g., "Home Page", "Services Page", "About Page", "Contact Page"}
```

**Component inventory (from P03):**
```
{Paste P03 output}
```

**Project brief:**
```
{Paste project brief}
```

**Design system summary:**
```
{Paste the "Design System Summary" section from P02}
```

Produce the blueprint using the exact format below.

---

### OUTPUT FORMAT

---

## PAGE BLUEPRINT: {PAGE NAME}

**Page URL:** `/{slug}`  
**Primary user goal:** {What does the user need to accomplish or decide on this page?}  
**Primary site goal:** {What do you want the user to do after seeing this page?}  
**Target user state on arrival:** {Are they curious? Evaluating? Ready to buy? Lost?}

---

### USER JOURNEY FOR THIS PAGE

Before listing sections, describe the emotional and cognitive arc of the target user:

1. **Arrives thinking:** {what they come in believing or asking}
2. **Needs to feel:** {what emotion/confidence they need to take action}
3. **Key objection to overcome:** {the #1 reason they would leave without converting}
4. **Leaves knowing:** {the one thing they should know after seeing this page}

The section order below should map to steps 1–4 of this journey.

---

### SECTION PLAN

For each section, fill in all fields. No placeholders.

---

**Section 1**
- **Component:** {ComponentName from P03}
- **Purpose:** {One sentence — what decision or feeling does this advance?}
- **Placement rationale:** {Why is this first/second/etc.?}
- **Content summary:**
  - Headline: {draft or description of what it should say}
  - Subhead/body: {draft or description}
  - CTA label + destination: {e.g., "See Our Services → /services"}
  - Visual element: {image description, icon, illustration — be specific}
- **CMS fields for editors:**
  - `heading` (text)
  - `subheading` (textarea)
  - `ctaLabel` (text)
  - `ctaUrl` (text)
  - `backgroundImage` (upload, media)
- **Responsive notes:** {how this section changes from mobile to desktop}
- **Anti-slop check:** {confirm this is NOT one of the anti-patterns from MASTER-SYSTEM-PROMPT.md}

---

**Section 2**
- **Component:**
- **Purpose:**
- **Placement rationale:**
- **Content summary:**
- **CMS fields for editors:**
- **Responsive notes:**
- **Anti-slop check:**

*(Repeat for each section)*

---

### NAVIGATION BEHAVIOR ON THIS PAGE

- Is the navigation sticky on this page? {Yes / No / Transparent-to-solid}
- Does this page use a unique header treatment? {Describe or "No"}

---

### PAGE-LEVEL SEO

- **Page title pattern:** `{Title} | {Site Name}`
- **Meta description:** {Draft — 150–160 characters, specific to this page's value prop}
- **Primary keyword target:** {one phrase}
- **Structured data type:** {LocalBusiness / Service / Article / BreadcrumbList / None}

---

### WHAT THIS PAGE DOES NOT HAVE

List sections that were considered and excluded:
- No {section type}: {reason — e.g., "FAQ accordion removed; objections handled in the hero subhead instead"}

---

### BUILD ORDER FOR THIS PAGE

Suggested order for building components in P06 sessions:

1. {Section/Component name — build this first because it sets the visual language}
2. {Next}
3. {Next}
...

---

### PAYLOAD CMS BLOCK STRUCTURE (for flexible page layouts)

If using Payload's Blocks field for flexible page layouts:

```ts
// Block slug names for this page's sections:
{
  blocks: [
    { slug: '{component-slug}' },  // Section 1
    { slug: '{component-slug}' },  // Section 2
    // ...
  ]
}
```

---
*End of P04 Prompt*
