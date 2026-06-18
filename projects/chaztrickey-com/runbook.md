# Project Runbook: chaztrickey.com

Created: June 14, 2026

## Phase Status

| Phase | Output | Status | Notes |
|---|---|---|---|
| P00 Client Questionnaire | `client-questionnaire-response.md` | done | Simulates square-one client answers. |
| P00 Brief Normalizer | `p00-normalized-brief.md`, `brief.md` | done | `brief.md` is the approved normalized brief. |
| P01 Inspiration Analysis | `inspiration/jeton-analysis.md` | draft | Only one inspiration source exists; workflow recommends 2-4. |
| P02 Design System | `design-system.md` | draft | Based on brief + Jeton; should be reviewed before code. |
| P03 Component Inventory | `component-inventory.md` | draft | Includes CMS collection recommendations. |
| P04 Page Blueprints | `page-blueprints.md` | draft | Covers Home, Who I Am, Articles, Follow, Privacy. |
| P05/P05A Static Prototype | `prototype/` | done | Static Home, Who I Am, and Follow pages built before CMS/backend. |
| Prototype Review | `prototype-review.md` | approved | Client approved prototype and production requirements. |
| Migration Discovery | `migration-inventory.md` | blocked | Current live site cannot be fetched from this environment due TLS/Schannel issue. |
| Production Build Setup | `production-build-log.md` | blocked | Requires approved npm scaffold path or manual scaffold decision. |
| P06 Component Builds | `src/components/*` | not started | Requires production scaffold and approved prototype. |
| P07 Component Audits | audit notes | not started | Run after each built component. |
| P08 Copy | copy doc / CMS content | not started | Some draft copy appears in page blueprints. |
| P09 Final QA | QA report | not started | Requires running site. |

## Current Readiness

Ready for production build planning. Not ready for final migration until these items are resolved:

- Confirm whether one inspiration site is enough for this first test, or add 1-3 more.
- Confirm final page slug for About: `/who-i-am` vs `/about`.
- Obtain current site content via accessible URL, WordPress/export file, database dump, or copied page/post content.
- Confirm email delivery provider for `chaz@chazwall.com` contact submissions.
- Confirm initial admin username/email.
- Add GA4 measurement ID later when available.
- Approve a safe production scaffold path: explicit `create-payload-app@latest`, pinned CLI version, existing starter repo, or manual scaffold.

## Recommended Next Step

Start production build setup with migration placeholders, or provide a content export/source so posts and pages can be imported during build.
