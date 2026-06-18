# Production Build Brief: chaztrickey.com

Created: June 15, 2026

## Prototype Approval

Status: Approved for production build.

Approved visual direction:
- Deep navy editorial background
- Refined crimson primary actions
- Warm amber accents
- Serif display type with clear sans-serif body copy
- Brand-anchor visual direction
- Home, Who I Am, and Follow page flow
- Honest platform placeholder treatment

## Client Production Requirements

### Content Migration

The current site's posts and pages should be migrated into the new site as best as possible.

Current blocker:
- Direct access to `https://chaztrickey.com` from this environment fails during TLS negotiation with a Windows Schannel credential error.

Acceptable migration sources:
- A WordPress XML export, if the current site is WordPress
- Static HTML export
- Database export
- Markdown/CSV export
- Login/admin access handled outside chat
- Manually copied page/post content
- A fixed/reachable public URL

### Brand Assets

No existing Chaz Trickey brand assets, photos, or logos need to be migrated.

Production should generate or derive assets from the approved profile:
- Personal brand wordmark
- Brand-anchor imagery
- Social/OG image treatment
- Placeholder portrait/identity treatment if no photo exists

### Platform URLs

No platform URLs are currently available.

Production should include editable placeholders for:
- Facebook
- YouTube
- Rumble
- TikTok

Placeholders must be editable in the management console and clearly marked as inactive/coming soon until URLs are added.

### Contact

Contact form destination email:

```text
chaz@chazwall.com
```

Production still needs an email delivery provider decision, such as SMTP, Resend, Postmark, SendGrid, or Hostinger email SMTP.

### Admin Access

Only one CMS/admin user is needed at launch.

Production still needs:
- Admin email/username
- Initial password setup method

### Analytics

Google Analytics will be set up later.

Production should wire in GA4 support now using an environment variable or site setting for the measurement ID. If no ID is present, analytics should not load.

Recommended environment variable:

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=
```

## Production CMS Requirements

Collections/settings needed:

- Pages
- Articles
- Categories
- Media
- SiteSettings
- ContactSubmissions
- Admin user

Site settings should include:
- Site title
- Tagline
- Navigation links
- Footer links
- Platform URLs and statuses
- Contact destination email
- GA4 measurement ID
- Default SEO title/description
- Default OG image

## Migration Notes

When current content is available:

1. Inventory all existing pages.
2. Inventory all existing posts.
3. Preserve titles, slugs, dates, categories/tags, body content, and featured images where available.
4. Map old URLs to new URLs.
5. Create redirects for changed slugs.
6. Review migrated content for formatting issues.
7. Mark uncertain migrated content as draft.

