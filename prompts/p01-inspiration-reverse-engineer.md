# P01 — Inspiration Reverse-Engineer
## Phase 1: Analyze a website's layout and component patterns

---

> **When to use:** After filling out the project brief. Run this prompt once per inspiration site (2–4 sites recommended). Paste or describe each site separately for the clearest output.
>
> **Model browsing required?** If your AI tool has web browsing, provide the URL directly. If not, take a full-page screenshot or describe what you see in detail.
>
> **Output:** A structured inspiration analysis document. Save as `projects/{PROJECT}/inspiration/{SITE-NAME}-analysis.md`

---

## Prompt (copy from here)

---

Analyze the following website as design inspiration. Do NOT recreate it. Do NOT copy its copy. I want you to reverse-engineer its layout and component patterns so I can use them as the structural foundation for a new, original site.

**Inspiration source:**
```
{URL or "See description/screenshot below"}
```

**Site description (if no URL):**
```
{Paste what you see, or describe the site's visual layout in detail}
```

Produce a structured analysis using the exact format below. Be specific — "large heading" is not specific, "96px display typeface flush-left, no max-width constraint" is specific.

---

### OUTPUT FORMAT

#### SECTION INVENTORY
List every distinct content section visible on the page, in top-to-bottom order. For each:
- **Section name** (give it a functional name, e.g. "Primary Hero" not "hero")
- **Layout pattern** (grid, flex, single-column, full-bleed, split-screen, asymmetric, etc.)
- **Column structure** (e.g., "2-column 60/40 split", "3-column equal", "1-column centered max-800px")
- **Content elements** (headline, subhead, body copy, CTA, image, video, icon, list, form, etc.)
- **Background treatment** (white, light gray, dark, image, texture, gradient — be specific)
- **Approximate vertical height** (short/compact, medium, tall/hero-scale)

#### LAYOUT PATTERNS
Note the recurring structural patterns across the page:
- What is the maximum content width?
- Is there a consistent horizontal grid (12-col, 8-col, asymmetric)?
- How is white space used — as breathing room, as visual separation, as emphasis?
- Are there intentional layout breaks (sections that break the established grid)?
- Is the layout left-aligned, centered, or variable?

#### COMPONENT PATTERNS
List all reusable UI components observed (things that could appear multiple times or on multiple pages):
- Component name
- What content it holds
- Notable visual traits (border, shadow, radius, background, etc.)
- States observed (hover, active, selected)

#### TYPOGRAPHY OBSERVATIONS
- How many distinct font families are used?
- Estimate the type scale: what sizes exist for display/H1/H2/H3/body/caption?
- How is hierarchy achieved beyond size (weight, color, spacing, case)?
- Are there any typographic details worth noting (tracking on headings, optical sizing, mix of serif/sans)?

#### COLOR OBSERVATIONS
- Primary background color(s)
- Primary text color
- Accent/highlight color(s) and where they appear
- What colors are NOT in the palette but you might expect to see?
- Is color used sparingly or liberally?

#### SPACING RHYTHM
- Does spacing feel tight, airy, or balanced?
- Are there consistent gaps between sections?
- How is content density handled — is every pixel used or is there generous empty space?

#### INTERACTION NOTES
- Any hover states, transitions, or micro-interactions observed?
- Scroll-triggered animations?
- Navigation behavior (sticky, transparent-to-solid, etc.)?

#### CONTENT STRATEGY NOTES
- What is the primary message this page communicates?
- What does the page want you to do (primary CTA)?
- What trust-building elements appear (logos, stats, testimonials, certifications)?
- In what order does information appear — what does this tell you about the target user's decision journey?

#### PATTERNS TO BORROW
List 3–5 specific patterns from this site worth adopting (not copying) for the new project. Be specific about why each is effective.

#### PATTERNS TO AVOID
List 1–3 patterns from this site that feel generic or should be improved upon.

---
*End of P01 Prompt*
