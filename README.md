# Website Build Workflow

A repeatable, professional website development system using AI-assisted design and development.
Reduces "AI slop" by enforcing intentional design decisions at every phase.

**Model-agnostic** — works with Claude, Gemini, Codex, GPT-4o, or any capable AI.  
**Stack:** Next.js 15 + Payload CMS v3 + Tailwind CSS v4 + TypeScript  
**Hosting:** Hostinger VPS (Node.js)

---

## The Problem This Solves

Every AI-generated website looks the same:
- Centered hero with a gradient background and two buttons
- 3-column feature cards with icons
- "Why Choose Us" checklist section
- Testimonials carousel
- Generic CTA banner
- Roboto or Inter, weight-only hierarchy
- "Passionate team dedicated to delivering exceptional results"

This workflow forces specificity at every step — from design system to copy — so every site looks and reads like it was made by a professional for a real client.

---

## Workflow Overview

```
Phase 0 → Client Questionnaire + Project Brief
    ↓
Phase 1 → Inspiration Analysis (p01)
    ↓
Phase 2 → Design System Definition (p02)
    ↓
Phase 3 → Architecture (p03 → p04)
    ↓
Phase 4 → Static Prototype + Client Review (p05 + p05a)
    ↓
Phase 5 → Production Build Setup (stack scaffold + CMS)
    ↓
Phase 6 → Component Build (p06 × N components)
         ↕ run p07 anti-slop audit per component
    ↓
Phase 7 → Content / Copy (p08 × N sections)
    ↓
Phase 8 → Final QA (p09)
    ↓
Deploy to Hostinger VPS
```

---

## How to Start a New Project

### Step 1 — Collect client answers
Send:
```
templates/client-questionnaire.md
```

Then run:
```
prompts/p00-brief-normalizer.md
```

Save the normalized output as `projects/YOUR-PROJECT-NAME/brief.md`.

### Step 2 — Copy the project brief manually, if needed
```
cp templates/project-brief-template.md projects/YOUR-PROJECT-NAME/brief.md
```
Use this path when you already know the client well enough to fill out the brief yourself.

### Step 3 — Collect inspiration
Find 2–4 websites that have the layout, feel, or component patterns you want to reverse-engineer.
Note the URLs or take screenshots.

### Step 4 — Run Phase 1 with your AI tool
Open your AI of choice. Start every session with the **Master System Prompt**:
```
prompts/MASTER-SYSTEM-PROMPT.md
```
Then paste the **p01 prompt** and provide your inspiration URLs or screenshots.

### Step 5 — Build a static prototype before production
After design system and page blueprints are drafted, run:
```
prompts/p05a-static-prototype.md
```

Show the prototype to the client and complete:
```
templates/prototype-review-checklist.md
```

Only start the CMS/backend build after the prototype is approved.

### Step 6 — Follow the phases in order
Each phase prompt is self-contained. At the start of each new AI session, re-paste the Master System Prompt and the relevant phase prompt.

---

## Repo Structure

```
website-build-workflow/
├── README.md                           ← You are here
├── STACK.md                            ← Tech stack decisions + Hostinger setup
│
├── workflow/                           ← Phase-by-phase process guides
│   ├── WORKFLOW-PHASES.md
│   └── IMPROVEMENTS.md
│
├── prompts/                            ← Paste-ready AI prompts
│   ├── MASTER-SYSTEM-PROMPT.md         ← Include at start of EVERY session
│   ├── p00-brief-normalizer.md
│   ├── p01-inspiration-reverse-engineer.md
│   ├── p02-design-token-extraction.md
│   ├── p03-component-inventory.md
│   ├── p04-page-blueprint.md
│   ├── p05-tailwind-design-system.md
│   ├── p05a-static-prototype.md
│   ├── p06-component-build.md
│   ├── p07-anti-slop-audit.md
│   ├── p08-copy-writing.md
│   └── p09-final-qa.md
│
├── templates/                          ← Reusable project scaffolding docs
│   ├── client-questionnaire.md
│   ├── prototype-review-checklist.md
│   ├── project-brief-template.md
│   ├── design-system-template.md
│   └── component-spec-template.md
│
├── examples/                           ← Completed example walkthroughs
│   └── README.md
│
└── projects/                           ← Your actual project files go here (gitignored or per-branch)
    └── .gitkeep
```

---

## Using With Different AI Tools

| Tool | How to Use |
|---|---|
| Claude (claude.ai) | Paste MASTER-SYSTEM-PROMPT.md in first message, then the phase prompt |
| ChatGPT / Codex | Use MASTER-SYSTEM-PROMPT.md as the Custom Instructions or system message |
| Gemini | Paste at top of conversation; use "You are a web design expert..." framing |
| Cursor / Windsurf | Add MASTER-SYSTEM-PROMPT.md to `.cursorrules` or `.windsurfrules` in your project |
| GitHub Copilot Chat | Paste as context before your question |

> **Tip:** For tools that support persistent system prompts (Cursor, Claude Projects, ChatGPT Custom Instructions), set the Master System Prompt once and only paste the phase-specific prompt each session.

---

## Design Anti-Slop Philosophy

This workflow is built on one rule: **every design decision must have a reason grounded in the project brief and inspiration analysis.**

If you can't explain why a section exists, delete it.  
If you can't explain why a color is used there, change it.  
If the copy could describe any company in any industry, rewrite it.

See `prompts/MASTER-SYSTEM-PROMPT.md` and `prompts/p07-anti-slop-audit.md` for the full anti-pattern list.

---

## Recommended Tooling

- **IDE:** Cursor, VS Code, or Windsurf
- **Design reference:** Figma (free tier) or a screenshot collection in a folder
- **Color tools:** coolors.co, realtime colors, oklch.com
- **Type tools:** fonts.google.com, fontpair.co, typescale.com
- **Inspiration:** mobbin.com, land-book.com, awwwards.com, godly.website

---

*Built for use with Next.js 15 + Payload CMS v3 + Tailwind CSS on Hostinger VPS.*
