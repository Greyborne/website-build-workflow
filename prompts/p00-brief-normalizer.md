# P00 — Brief Normalizer
## Convert client questionnaire answers into the internal project brief

---

> **When to use:** Before Phase 0 is considered complete. Use this when a client has answered `templates/client-questionnaire.md`, sent a messy email, or provided notes that need to become a structured `brief.md`.
>
> **Input:** Client questionnaire answers, notes, call transcript, or email.
>
> **Output:** A completed project brief plus a missing-information checklist.

---

## Prompt (copy from here)

---

Convert the client-provided answers below into the internal project brief format used by this website workflow.

Rules:
- Preserve the client's own wording where it reveals audience pain, differentiators, objections, or tone.
- Do not invent proof points, testimonials, statistics, services, locations, credentials, or legal requirements.
- If a detail is implied but not certain, label it as an assumption.
- If required information is missing, write `MISSING` and add it to the missing-information checklist.
- If an answer is vague, rewrite it into a clearer working version and note what should be confirmed.
- Keep the brief specific enough to guide design, copy, CMS fields, and page structure.

**Client answers / notes:**
```text
{Paste questionnaire answers, notes, transcript, or email here}
```

Produce the output below.

---

## OUTPUT FORMAT

### 1. Normalized Project Brief

Use this exact structure:

```md
# Project Brief
## PROJECT BRIEF: {PROJECT NAME}

### 1. Client / Project Identity
Client name:
Trade name:
Website URL (new):
Website URL (current):
Primary contact:
Date:

### 2. Business Description
{Plain-language description}

Specific services/products/content:
1.
2.
3.

Geographic market:
Years active:
Credentials relevant to credibility:

### 3. Target Audience
Primary audience:
  Who they are:
  Pain points in their words:
    -
    -
    -

Secondary audience:

What the primary audience knows on arrival:

### 4. Goals
Primary goal:
Secondary goals:
1.
2.

Success in 6 months:
Primary CTA at launch:

### 5. Differentiation
Competitors or alternatives:
1.
2.
3.

Differentiator:
Why existing customers/clients/readers choose them:
Main reason someone might not engage:

### 6. Proof Points
Client outcomes / case studies:
Testimonials:
Client logos:
Statistics:
Credentials:

### 7. Content & Assets
Photography:
Brand assets:
Existing content:

### 8. Brand Personality
Personality words:
Writing tone:
Brand voice in one sentence:

### 9. Visual Direction
Color/style preferences:
Aesthetic feel:
Animation style:
Inspiration sites:
1.
2.
3.
4.

### 10. Pages
Launch scope:

### 11. Technical Requirements
CMS users:
Integrations:
Legal:

### 12. What NOT to Build at Launch
-
-
-

### 13. Timeline
Target launch:
Revision rounds:
Post-launch support:
```

### 2. Missing Information Checklist

List each missing or weak item as:

```md
- **Question:** {specific question to ask the client}
  **Why it matters:** {how this affects design, copy, CMS, or launch}
  **Can proceed without it?** Yes/No
```

### 3. Assumptions To Confirm

List every assumption made while normalizing the brief.

### 4. Readiness Verdict

Choose one:
- `READY FOR PHASE 1` — enough information exists to analyze inspiration and define a design direction.
- `NEEDS CLIENT FOLLOW-UP` — missing details would likely cause generic output.
- `BLOCKED` — critical business, audience, page, or technical scope is unknown.

Add a short explanation.

---
*End of P00 Prompt*

