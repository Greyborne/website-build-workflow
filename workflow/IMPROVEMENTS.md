# Workflow Improvements

Created: June 14, 2026

The current workflow is a strong design-prompt framework, but it is not yet a reliable client website production system. These improvements make it easier to run with Claude, Codex, Gemini, or another AI while reducing manual prompting and inconsistent outputs.

## Highest Priority Changes

### 1. Add a Client Intake Questionnaire

The workflow currently starts with a long internal brief. Clients should instead receive a friendlier questionnaire that maps directly into `brief.md`.

Required questionnaire sections:
- Business identity and contact details
- What the business does in plain language
- Services/products
- Best customers and their common problems
- Why customers choose them
- Competitors and inspiration sites
- Proof points: reviews, outcomes, credentials, photos
- Pages needed
- Integrations and legal needs
- Things not to build

Output should be machine-readable enough to transform into a project brief.

### 2. Add a Brief Normalizer Prompt

Create a new `p00-brief-normalizer.md` prompt that converts messy questionnaire answers into a complete project brief, with a "missing information" section.

This lets you collect imperfect client answers and still get a structured starting point.

### 3. Require Structured Outputs

The current prompts produce Markdown, which is human-readable but hard to automate. Add optional JSON or YAML front matter to every phase output.

Recommended examples:
- `project.config.json`: slug, pages, brand words, integrations
- `design-tokens.json`: colors, typography, spacing, radii
- `components.json`: component names, props, CMS fields
- `pages.json`: page sections, slugs, SEO metadata

Markdown can remain the review format, but code generation should consume structured files.

### 4. Create a Single Project Runbook

Add `projects/{client}/runbook.md` that tracks phase status:

```md
| Phase | Output | Status | Reviewer Notes |
|---|---|---|---|
| 0 Brief | brief.md | done | |
| 1 Inspiration | inspiration/*.md | in progress | |
| 2 Design System | design-system.md | draft | |
```

This avoids losing track of what has been approved.

### 5. Add A Static Prototype Gate

Before CMS/backend implementation, build 1-3 polished static pages and review them with the client. This catches visual direction, content hierarchy, asset problems, and missing sections before expensive production wiring.

Added files:
- `prompts/p05a-static-prototype.md`
- `templates/prototype-review-checklist.md`

### 6. Add a Scaffold Prompt Or Script

The workflow jumps from planning to `npx create-payload-app`, but client sites need repeatable defaults:
- Next/Payload project creation
- Tailwind v4 setup
- base routes
- Pages/Articles/Categories/Media collections
- SiteSettings collection
- contact form API
- robots/sitemap
- metadata helpers

This should become either:
- `p10-project-scaffold.md` for AI-assisted scaffolding, or
- a real script once the pattern stabilizes.

### 7. Add Quality Gates With Pass/Fail Criteria

The workflow has quality gates, but they are mostly checklists. Convert them into required signed-off artifacts:
- `brief-review.md`
- `design-review.md`
- `cms-schema-review.md`
- `responsive-qa.md`
- `launch-checklist.md`

For client work, a phase should not be considered complete until its artifact exists.

## Medium Priority Changes

### 8. Add Asset Fallback Rules

Most clients will have incomplete assets. Define default strategies:
- No logo: create text wordmark first
- No photography: use layout that does not depend on stock photos
- No testimonials: use credentials, process, or proof instead
- No articles yet: seed placeholder drafts in CMS, not fake public content

### 9. Add CMS Editing Rules

The workflow says clients can update content, but component prompts need clearer rules:
- Which fields are editable
- Which design choices are locked
- Which fields have validation
- Which fields have helper text for nontechnical editors
- Which collections are hidden from ordinary editors

### 10. Add Deployment Profiles

Create deployment profiles for:
- Local development
- Hostinger VPS single site
- Hostinger VPS multi-site
- Static brochure site without Payload, if CMS is not needed

Not every small client needs the full Payload stack on day one.

### 11. Add Example Projects

The `examples` folder is empty. Add at least one complete sanitized example after chaztrickey.com is built.

Examples will become the fastest way to improve output quality across AI tools.

## Current Repo Cleanup

- Remove the accidental empty folder named `{workflow,prompts,templates,examples,.github}` after confirming it is not needed.
- Update `README.md` because it references workflow files such as `00-PROJECT-BRIEF.md` that do not exist in the current repo.
- Add `p00-brief-normalizer.md` and `p10-project-scaffold.md` to match the real desired process.

## Recommended Future Workflow

```text
Client Questionnaire
  -> P00 Brief Normalizer
  -> Human review of missing info
  -> P01 Inspiration Analysis
  -> P02 Design System
  -> P03 Component Inventory
  -> P04 Page Blueprints
  -> P05A Static Prototype
  -> Client Prototype Review
  -> P10 Scaffold Project
  -> P05 Implement Design Tokens
  -> P06 Build Components
  -> P07 Component Audit
  -> P08 Copy
  -> P09 Final QA
  -> Deploy
```
