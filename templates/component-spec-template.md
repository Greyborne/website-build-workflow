# Component Spec Template
## One per component — populated by P03 output and used to drive P06 builds

> Copy to `projects/{CLIENT-NAME}/components/{ComponentName}.md`

---

## COMPONENT SPEC: {ComponentName}

**Category:** `base` / `navigation` / `section` / `form` / `utility`  
**File location:** `src/components/{category}/{ComponentName}.tsx`  
**Status:** `planned` / `in-progress` / `built` / `audited` / `done`

---

### Purpose

{One sentence: what does this component do and why does it exist on this site?}

---

### Content

| Slot | Type | Required | CMS Field | Notes |
|---|---|---|---|---|
| {slotName} | text / image / richText / etc. | Yes / No | {payloadFieldName} | {notes} |

---

### Variants

| Variant | Description | When to Use |
|---|---|---|
| default | {description} | {when} |
| {variant} | | |

---

### States

| State | Trigger | Visual Change |
|---|---|---|
| default | — | Base styles |
| hover | Mouse over (desktop) | {describe} |
| focus | Keyboard focus | Focus ring using `--color-border-strong` |
| active | Mouse down / tap | {describe} |
| disabled | `disabled` prop | Reduced opacity, no pointer events |
| loading | `isLoading` prop | {skeleton or spinner description} |

---

### Design Tokens Used

| Property | Token | Value |
|---|---|---|
| Background | `--color-surface` | oklch(...) |
| Text | `--color-text-primary` | oklch(...) |
| Padding | `--space-6` | 24px |
| Border radius | `--radius-md` | 8px |
| Shadow | `--shadow-md` | ... |

---

### Responsive Behavior

| Breakpoint | Layout | Notes |
|---|---|---|
| Mobile (< 768px) | {describe} | |
| Tablet (768px – 1279px) | {describe} | |
| Desktop (≥ 1280px) | {describe} | |

---

### Accessibility Requirements

- [ ] Semantic element: `{element tag}`
- [ ] ARIA role: `{role or "none — semantic element"}`
- [ ] Required aria attributes: `{list}`
- [ ] Keyboard interaction: `{Tab / Enter / Space / Arrow keys}`
- [ ] Focus management: `{describe}`
- [ ] Screen reader announcement: `{what gets announced}`
- [ ] Color contrast: meets 4.5:1 (text) / 3:1 (large text / UI)

---

### Payload CMS Collection / Block

**Collection slug:** `{slug}` (or "none — static component")

**Fields:**
```ts
{
  name: '{fieldName}',
  type: '{text|textarea|richText|upload|array|blocks}',
  required: true/false,
  admin: {
    description: '{helper text for the editor}',
  },
}
```

---

### Dependencies

```
npm packages: {list or "none"}
Other components: {list or "none"}
```

---

### P06 Build Notes

{Any special instructions or context for the AI when building this component}

---

### P07 Audit Results

| Finding | Severity | Fixed |
|---|---|---|
| {finding} | 🔴 / 🟡 / 🟢 | Yes / No |

**Audit verdict:** PASS / CONDITIONAL PASS / FAIL  
**Audit date:** {DATE}

---

### Changelog

| Date | Change | By |
|---|---|---|
| {DATE} | Initial spec | |

---
