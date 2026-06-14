# P07 — Anti-Slop Audit
## Run after every component build to catch generic patterns before they ship

---

> **When to use:** After every P06 build session. Paste the component code and get a scored audit with specific fixes.
>
> **Cadence:** Run this for EVERY component. Do not batch-audit at the end. Fix issues while the build context is fresh.
>
> **Output:** A scored audit report with line-specific fixes. Fix all HIGH findings before moving on.

---

## Prompt (copy from here)

---

Audit the following component for "AI slop" — generic, interchangeable design and code patterns that make this look like it was generated from a template rather than designed for a specific purpose.

**Component code to audit:**
```tsx
{Paste component code here}
```

**Project context:**
```
Client: {PROJECT NAME}
Business type: {BUSINESS TYPE}
Target audience: {TARGET AUDIENCE}
Design system personality: {paste "Personality keywords" from P02}
```

Score every finding as:
- 🔴 HIGH — Generic pattern that makes this look AI-generated. Must fix before shipping.
- 🟡 MEDIUM — Weakens the design intent. Fix before final QA.
- 🟢 LOW — Minor polish opportunity. Address if time permits.

---

### AUDIT CHECKLIST

Check for every item below. Report only issues found (not passed checks).

---

#### LAYOUT AUDIT

- [ ] Is the layout a known generic pattern (centered hero, 3-column card grid, checklist section, stats bar)?
- [ ] Is white space used systematically (from spacing scale) or arbitrarily?
- [ ] Does the layout have any visual tension or asymmetry, or is everything perfectly symmetrical?
- [ ] Is there a consistent grid being followed, or are elements placed arbitrarily?
- [ ] Could this layout appear on any website in any industry? If yes, flag it.

#### TYPOGRAPHY AUDIT

- [ ] Is hierarchy achieved through at least 3 of: size, weight, color, spacing, font-family?
- [ ] Are there any hardcoded font sizes (not from the type scale)?
- [ ] Is text centered where it shouldn't be (centered body text at paragraph length)?
- [ ] Is there gradient text applied to headings without specific justification?
- [ ] Are all-caps applied to headings indiscriminately?

#### COLOR AUDIT

- [ ] Are there any hardcoded color values (hex, rgb, hsl) instead of design tokens?
- [ ] Is a generic blue or purple gradient being used without project-specific justification?
- [ ] Is color being used decoratively (for visual interest) rather than functionally (to communicate meaning)?
- [ ] Are more than 2 accent colors competing on the same element or section?

#### COPY AUDIT (if copy is included in the component)

Check for these exact phrases and flag any found:
- "passionate team" / "team of experts"
- "dedicated to" / "committed to"
- "exceptional results" / "exceptional service"
- "take your business to the next level"
- "we help businesses" + generic outcome
- "your success is our mission"
- "cutting-edge" / "innovative solutions"
- "trusted by businesses of all sizes"
- "get started today" as CTA text
- "learn more" as a standalone CTA with no context
- Any sentence that could describe a competitor's business without changing a word

#### CODE AUDIT

- [ ] Any hardcoded colors/spacing/fonts (not using design tokens)?
- [ ] Magic number values (e.g., `padding: 37px`, `margin-top: 73px`)?
- [ ] Generic class names (`.card`, `.section`, `.hero`, `.btn`, `.wrapper`)?
- [ ] Non-semantic HTML (divs used where nav, header, main, section, article, aside would be correct)?
- [ ] Missing or incomplete TypeScript types (`any` used, optional props that should be required)?
- [ ] Missing accessibility attributes (aria-label on icon buttons, alt on images, role attributes)?
- [ ] Duplicate style definitions that should reference the same token?
- [ ] Inline styles for anything other than dynamic values?
- [ ] Missing `// DESIGN:` comments on non-obvious visual decisions?

#### ANIMATION AUDIT

- [ ] Is fade-up-on-scroll applied to everything indiscriminately?
- [ ] Are hover animations (scale + shadow) applied to every card?
- [ ] Do animations serve a purpose (guide attention, communicate state) or are they purely decorative?
- [ ] Is `prefers-reduced-motion` respected?

---

### OUTPUT FORMAT

For each issue found, output:

```
{SEVERITY EMOJI} {CATEGORY} — {Specific issue}
Location: {file name, line number or code snippet}
Fix: {Specific, actionable fix with corrected code where applicable}
```

Then at the end:

```
AUDIT SUMMARY
-------------
🔴 HIGH issues: {count}
🟡 MEDIUM issues: {count}
🟢 LOW issues: {count}

VERDICT: {PASS / CONDITIONAL PASS / FAIL}
- PASS: No HIGH issues, fewer than 3 MEDIUM
- CONDITIONAL PASS: No HIGH issues, 3+ MEDIUM (fix before final QA)
- FAIL: Any HIGH issues (fix before building next component)

MOST IMPACTFUL FIX: {The single change that would most improve the quality of this component}
```

---
*End of P07 Prompt*
