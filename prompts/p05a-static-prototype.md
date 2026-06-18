# P05A — Static Prototype Build
## Build a reviewable front-end prototype before CMS/backend work

---

> **When to use:** After the design system, component inventory, and page blueprints are approved enough to test visually, but before scaffolding Payload CMS or building production collections.
>
> **Input:** Project brief, design system, component inventory, page blueprints, and any available assets.
>
> **Output:** A static front-end prototype with 1-3 representative pages, hardcoded demo content, and no CMS/backend dependencies.

---

## Prompt (copy from here)

---

Build a static front-end prototype for this website so the client can review visual direction, page flow, tone, and content hierarchy before we invest time in CMS/backend implementation.

This is a prototype, not the final production build.

**Project brief:**
```md
{Paste brief.md}
```

**Design system:**
```md
{Paste design-system.md}
```

**Component inventory:**
```md
{Paste component-inventory.md}
```

**Page blueprints:**
```md
{Paste page-blueprints.md}
```

**Pages to prototype:**
```text
{Usually Home + one key inner page, e.g. About or Services}
```

**Available assets:**
```text
{List photos, logos, screenshots, or say "none"}
```

---

## Prototype Rules

1. **No CMS/backend work.** Do not create Payload collections, database schemas, API routes, auth, admin routes, or deployment config.
2. **Use realistic demo content.** Hardcoded content is allowed, but it must be based on the brief and clearly marked as prototype content.
3. **Design system only.** Use the approved colors, type, spacing, radius, and motion direction.
4. **Prototype the most important decisions.** Focus on the first viewport, navigation, section rhythm, content category treatment, and one conversion path.
5. **Build enough to review, not everything.** Prefer 1-3 polished pages over a shallow prototype of every page.
6. **Responsive from the start.** Prototype must work at mobile, tablet, and desktop widths.
7. **Use placeholder states honestly.** If a platform, photo, article, or testimonial does not exist yet, show a deliberate placeholder/coming-soon state.
8. **No generic sections.** The prototype still follows the anti-slop rules from the Master System Prompt.

---

## Recommended Prototype Scope

For most small client sites:

1. **Home page** — first impression, visual direction, primary sections.
2. **Primary trust page** — About, Service detail, Portfolio, or equivalent.
3. **Contact/follow/lead page** — only if the conversion path has meaningful design decisions.

---

## Output Format

Produce:

### 1. Prototype Implementation Plan

```md
## Static Prototype Plan

Pages:
- `/` — {why included}
- `/{slug}` — {why included}

Components to build:
- {component}
- {component}

Deliberately excluded from prototype:
- {production feature} — {why excluded}
```

### 2. Files To Create Or Edit

List exact files and what each file does.

### 3. Complete Code

Provide complete code for every file needed to run the prototype.

### 4. Client Review Checklist

```md
## Client Prototype Review

Review these items before production build:
- Does the first impression feel right?
- Does the site sound like the business/person?
- Are the most important pages and sections in the right order?
- Are any sections missing, unnecessary, or misleading?
- Are the CTAs clear?
- Are placeholder assets acceptable for launch, or do we need real assets first?
- What content must change before CMS build?

Verdict:
- [ ] Approved for production build
- [ ] Approved with minor revisions
- [ ] Needs design/content revision before production build
```

### 5. Production Handoff Notes

List what should become CMS-editable later:
- Collections
- Page sections
- Reusable components
- Settings
- Forms/integrations

---
*End of P05A Prompt*

