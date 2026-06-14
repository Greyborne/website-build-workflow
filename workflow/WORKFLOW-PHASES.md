# Workflow Phase Guide
## The complete process from kickoff to launch

---

## Overview

Every project follows these 7 phases in order. Do not skip phases. Do not run Phase 4 prompts before Phase 2 is complete. The workflow is linear by design — each phase output feeds the next.

```
Phase 0  →  Project Brief (no AI)
Phase 1  →  Inspiration Analysis (P01 × 2-4 sites)
Phase 2  →  Design System (P02 × 1)
Phase 3  →  Architecture (P03 × 1, then P04 × N pages)
Phase 4  →  Build Setup (P05 × 1, scaffold Next.js + Payload)
Phase 5  →  Component Builds (P06 × N components, P07 after each)
Phase 6  →  Copy (P08 × N sections)
Phase 7  →  Final QA (P09 × 1)
```

**Time estimates per phase (small business site, 5–8 pages):**

| Phase | Estimated Time |
|---|---|
| Phase 0 — Brief | 1–2 hours (manual) |
| Phase 1 — Inspiration | 30–60 min |
| Phase 2 — Design System | 30–45 min |
| Phase 3 — Architecture | 45–90 min |
| Phase 4 — Build Setup | 1–2 hours |
| Phase 5 — Components | 4–12 hours (varies by complexity) |
| Phase 6 — Copy | 1–3 hours |
| Phase 7 — QA | 1–2 hours |
| **Total** | **10–25 hours** |

---

## Phase 0 — Project Brief

**Goal:** Define the project completely before touching any AI tool.  
**Tools:** Text editor only. No AI.  
**Output:** `projects/{CLIENT}/brief.md`

### Steps

1. Copy `templates/project-brief-template.md` to `projects/{CLIENT-SLUG}/brief.md`
2. Fill in EVERY field. If you don't know an answer, find it before continuing.
3. If a field doesn't apply, write "N/A" with a brief reason.
4. Review the "What NOT to Build" section — be ruthless about scope.
5. Collect inspiration URLs (Section 11 of the brief).

### Quality Gate

Before moving to Phase 1, verify:
- [ ] Every required field is filled in (no blanks or TBDs)
- [ ] Target audience pain points are written in the audience's words (not yours)
- [ ] Differentiator is specific (not "great service" or "high quality")
- [ ] At least 2 inspiration URLs are listed with specific notes on what to borrow
- [ ] "What NOT to Build" has at least one entry

---

## Phase 1 — Inspiration Analysis

**Goal:** Reverse-engineer 2–4 inspiration sites' layout and component patterns.  
**Prompt:** P01 (`prompts/p01-inspiration-reverse-engineer.md`)  
**Output:** `projects/{CLIENT}/inspiration/{site-name}-analysis.md` per site

### Steps

1. Open your AI tool and start a new session.
2. Paste `MASTER-SYSTEM-PROMPT.md` as your first message. Fill in `{PROJECT_CONTEXT}` with:
   - Project name from brief
   - Business type
   - Target audience
3. Paste `p01-inspiration-reverse-engineer.md` prompt.
4. Provide the inspiration site URL (or screenshot + description if no browsing).
5. Save the AI's output as `inspiration/{site-name}-analysis.md`.
6. Start a new AI session for each subsequent inspiration site.

### Quality Gate

- [ ] Every analysis has all sections filled (not "N/A" for key areas)
- [ ] "Patterns to Borrow" are specific enough to guide P03 decisions
- [ ] "Patterns to Avoid" are honest about weaknesses

---

## Phase 2 — Design System

**Goal:** Define a complete, original design system for this project.  
**Prompt:** P02 (`prompts/p02-design-token-extraction.md`)  
**Output:** `projects/{CLIENT}/design-system.md`

### Steps

1. New AI session. Paste MASTER-SYSTEM-PROMPT.md.
2. Paste P02 prompt.
3. Provide ALL P01 analyses together + the project brief.
4. Review the output critically — do the colors fit the personality? Is the typography choice justified?
5. Request revisions if anything feels off. This is the time to fix it, not during build.
6. Save to `projects/{CLIENT}/design-system.md`.

### Quality Gate

- [ ] Every color token has a role (no colors "just for visual interest")
- [ ] Font choice rationale references the brand personality, not just aesthetics
- [ ] Every token has a rationale sentence
- [ ] Design system personality keywords match what the client described in the brief

---

## Phase 3 — Architecture

**Goal:** Define all components and every page's section plan.  
**Prompts:** P03 (component inventory) → P04 (page blueprint per page)  
**Output:** `projects/{CLIENT}/component-inventory.md` + `projects/{CLIENT}/page-blueprints.md`

### Steps

#### Part A — Component Inventory (P03)

1. New AI session. Paste MASTER-SYSTEM-PROMPT.md.
2. Paste P03 prompt with project brief + design system summary + all P01 analyses.
3. Review output: challenge any component that resembles an anti-pattern.
4. Add anything that's missing. The inventory should cover every UI element you expect to build.
5. Save as `projects/{CLIENT}/component-inventory.md`.

#### Part B — Page Blueprints (P04)

1. New AI session per page OR continue in same session if context is fresh.
2. Paste MASTER-SYSTEM-PROMPT.md + P04 prompt.
3. Specify which page to blueprint.
4. Critically review the section order — does it match the user's journey described in the brief?
5. Challenge any section that looks like a default template pattern.
6. Repeat for every page listed in the brief.
7. Save all blueprints to `projects/{CLIENT}/page-blueprints.md`.

### Quality Gate

- [ ] Every component has a CMS field list
- [ ] No page blueprint matches the hero→features→testimonials→CTA default sequence unless genuinely justified
- [ ] "What This Page Does NOT Have" is filled in for every page
- [ ] Build order is specified for each page

---

## Phase 4 — Build Setup

**Goal:** Scaffold the codebase and implement the design system in code.  
**Prompt:** P05 (`prompts/p05-tailwind-design-system.md`)  
**Output:** Working Next.js + Payload CMS project with design system implemented

### Steps

1. Scaffold the project (see `STACK.md` Quickstart section):
   ```bash
   npx create-payload-app@latest {client-slug}
   ```

2. New AI session. Paste MASTER-SYSTEM-PROMPT.md + P05 prompt + full P02 design system.

3. Apply the output:
   - Replace `src/styles/globals.css` with P05 output
   - Install `clsx` and `tailwind-merge`, add `src/lib/cn.ts`

4. Create Payload collections from the component inventory:
   - Start with `Pages`, `Media`, and the first content collection

5. Test: `npm run dev` — site should run at localhost:3000, admin at localhost:3000/admin

### Quality Gate

- [ ] `npm run dev` runs without errors
- [ ] Admin panel is accessible at `/admin`
- [ ] CSS custom properties are visible in browser DevTools
- [ ] Tailwind utility classes from the design system work in a test component

---

## Phase 5 — Component Builds

**Goal:** Build every component, auditing for slop after each one.  
**Prompts:** P06 (build) → P07 (audit) — alternating, one component at a time  
**Output:** Complete component library in `src/components/`

### Steps

For each component in the build order:

1. New AI session. Paste MASTER-SYSTEM-PROMPT.md.
2. Paste P06 prompt with:
   - Component spec from P03
   - Relevant page blueprint section from P04 (if a section component)
   - Design system summary from P02
3. Apply the generated code to the project. Test it visually.
4. **Before moving on:** New AI session → paste MASTER-SYSTEM-PROMPT.md + P07 audit prompt + the component code.
5. Fix all 🔴 HIGH issues. Fix 🟡 MEDIUM issues. Log 🟢 LOW for later.
6. Record audit results in the component's spec file.
7. Move to the next component.

### Component Build Order (recommended)

1. Design system setup (already done in Phase 4)
2. Layout shell (PrimaryNavigation, Footer)
3. Base components (Button, Input, Badge, Card, Icon)
4. Home page sections (HeroSection first, then in blueprint order)
5. Remaining page sections
6. Forms (ContactForm)
7. Utility components (SEOHead, LoadingState, EmptyState)

### Quality Gate per Component

- [ ] P07 audit returns PASS or CONDITIONAL PASS
- [ ] No hardcoded color/spacing/font values
- [ ] Renders correctly at mobile, tablet, and desktop
- [ ] Payload CMS fields work in admin panel
- [ ] No console errors

---

## Phase 6 — Copy

**Goal:** Write specific, human-sounding copy for every section.  
**Prompt:** P08 (`prompts/p08-copy-writing.md`)  
**Output:** Copy document + copy populated in CMS

### Steps

1. For each section that needs copy:
   - New AI session. Paste MASTER-SYSTEM-PROMPT.md + P08 prompt.
   - Fill in ALL fields in the P08 prompt (no blanks — the more specific, the better).
   - Review the Primary and Alternate versions.
   - Apply the chosen version to your CMS or component.

2. After all copy is written, do a pass-through:
   - Read the entire site aloud
   - Any sentence that makes you cringe or sounds "AI-ish" → rewrite
   - Any line that could describe a competitor → rewrite

### Quality Gate

- [ ] Zero copy anti-patterns from P08 on any page
- [ ] No placeholder copy remains anywhere in the site
- [ ] Every CTA is specific and outcome-oriented
- [ ] Reading aloud feels natural, not robotic

---

## Phase 7 — Final QA

**Goal:** Catch everything before launch.  
**Prompt:** P09 (`prompts/p09-final-qa.md`)  
**Output:** QA report + all fixes applied

### Steps

1. New AI session. Paste MASTER-SYSTEM-PROMPT.md + P09 prompt + site URL (or screenshots).
2. Provide the project brief summary.
3. Fix all 🔴 BLOCKING issues before launch.
4. Fix 🟡 IMPORTANT issues within the first week.
5. Log 🟢 POLISH issues in the project backlog.
6. Complete the manual QA checklist at the bottom of P09 in a real browser.

### Quality Gate (Launch Checklist)

- [ ] P09 returns READY verdict (0 blocking issues)
- [ ] Manual QA checklist complete
- [ ] SSL certificate active
- [ ] PM2 configured for auto-restart
- [ ] Client has admin panel credentials
- [ ] DNS pointed to Hostinger VPS
- [ ] `robots.txt` and `sitemap.xml` present and correct
- [ ] Analytics/tracking confirmed working

---

## Post-Launch

**Week 1:** Monitor error logs via PM2 (`pm2 logs`) and browser console  
**Week 1:** Fix all 🟡 IMPORTANT QA issues  
**Month 1:** Check Core Web Vitals in Google Search Console  
**Ongoing:** Document any component additions in the component inventory  
**Ongoing:** Update component specs when design decisions change  

---
