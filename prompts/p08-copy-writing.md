# P08 — Copy Writing
## Phase 6: Write human-sounding, specific copy for each section

---

> **When to use:** For each section that needs copy, during or after the component build phase. Can also be used to audit and rewrite any existing AI-generated copy.
>
> **Input:** Section spec from P04 + project brief + component context.
>
> **Rule:** Copy that could describe ANY company in ANY industry without changing a word is bad copy. Every line must be specific to this client.

---

## Prompt (copy from here)

---

Write the copy for the following website section.

**BEFORE YOU WRITE ANYTHING:** Read the copy anti-patterns list below and confirm you will not use any of them. If you catch yourself writing any of these phrases, rewrite the sentence from scratch.

### Copy Anti-Patterns (Never Use)
- "passionate team of experts"
- "dedicated to delivering exceptional results"
- "your success is our mission" / "we're committed to your success"
- "take your business to the next level"
- "innovative solutions for modern challenges"
- "trusted by businesses of all sizes"
- "cutting-edge technology"
- "comprehensive services"
- "we help businesses grow / thrive / succeed"
- "years of experience" as a standalone claim with no specifics
- "we pride ourselves on..."
- "at {Company}, we believe..."
- "your vision, our mission"
- "get started today" (as the only CTA text)
- "learn more" (as a link with no surrounding context)
- Any buzzword that appears on at least 50% of competitors' sites

---

**Section to write:**
```
Section name: {from P04 blueprint}
Component type: {from P03 inventory}
Position on page: {e.g., "Second section, after the hero"}
Purpose: {what decision or feeling this section advances}
```

**Project brief:**
```
Client name: {CLIENT NAME}
Business type: {e.g., MSP, IT consultancy, plumbing service}
Target audience: {Who specifically is reading this}
Their problem: {The real problem this audience has, in their words}
What the client offers: {Be specific — not "services" but what exactly}
Tone: {professional / approachable / authoritative / conversational / technical}
Key differentiator: {What makes this client different from their top 3 competitors}
Proof points available: {years in business, certifications, specific client outcomes, etc.}
Geographic market: {city, region, or national}
```

**Content constraints:**
```
Headline: Max {N} words
Subhead/body: Max {N} words / {N} sentences
CTA: Max {N} words
Any other content fields: {list them}
```

---

### WRITING RULES

1. **Be specific.** Name the client's actual audience. Name their actual problem. Name the actual outcome. "IT support for Topeka small businesses who can't afford a full-time IT department" is better than "IT services for businesses."

2. **Lead with the reader's problem, not the client's capabilities.** Start with what they're experiencing, not what the company offers.

3. **One idea per sentence.** Complex sentences with multiple clauses get skimmed and missed.

4. **Use the audience's vocabulary.** If your audience says "my IT breaks all the time," don't say "experience recurring system disruptions." Match their language.

5. **Earn every claim.** "We're fast" is worthless. "Most issues resolved in under 4 hours, or we come to you" is a claim. If you make a claim, attach a mechanism.

6. **CTAs must state the outcome.** "Get your free network assessment" is better than "Get started." Tell them what happens when they click.

7. **Active voice only.** "We fix your servers" not "Your servers are fixed by our team."

8. **Read it aloud before submitting.** If it sounds like a brochure, rewrite it.

---

### OUTPUT FORMAT

For each content field, provide:
1. **Primary version** — the recommended copy
2. **Alternate version** — a different approach (different angle, tone, or length)
3. **Notes** — brief explanation of why this works for this specific client/audience

---

**Example output format:**

```
HEADLINE
Primary:    "Your Topeka IT team — without the full-time salary"
Alternate:  "IT problems that cost you hours? We fix most in under 4."
Notes:      Primary anchors the geographic specificity and the ROI angle. Alternate leads 
            with the pain point and attaches a concrete claim.

SUBHEAD
Primary:    "CT Tech Solutions handles your servers, security, and support so you can 
            focus on running your business — not troubleshooting it."
Alternate:  "From network setup to after-hours emergencies, we're the IT department 
            small Topeka businesses rely on without putting someone on payroll."
Notes:      Both versions name the specific audience (small Topeka businesses) and 
            give a concrete picture of the service scope.

CTA
Primary:    "Get your free network assessment"
Alternate:  "Talk to a local IT expert"
Notes:      Primary is outcome-specific. Alternate works better if the audience 
            is skeptical of "free" offers.
```

---
*End of P08 Prompt*
