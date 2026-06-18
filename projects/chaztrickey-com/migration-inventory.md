# Migration Inventory: chaztrickey.com

Created: June 15, 2026

## Goal

Migrate current site posts and pages into the new production site as best as possible.

## Current Discovery Status

Blocked from this environment.

Attempted sources:

- `https://chaztrickey.com`
- `http://chaztrickey.com`
- `https://www.chaztrickey.com`
- `http://www.chaztrickey.com`

Result:

```text
The SSL connection could not be established.
Windows Schannel error: SEC_E_NO_CREDENTIALS
```

This means the current site content could not be automatically fetched during discovery.

## Needed From Client / Site Owner

Provide one of the following:

- WordPress XML export
- Static HTML export
- Database export
- Markdown/CSV export
- Admin export from the current CMS
- A corrected/reachable public URL
- Copied page/post content

## Migration Fields To Preserve

For pages:

- Title
- Slug / URL
- Body content
- Meta title
- Meta description
- Publish/update date, if available
- Featured image, if available

For posts:

- Title
- Slug / URL
- Publish date
- Author
- Category
- Tags
- Body content
- Excerpt
- Featured image
- Meta title
- Meta description

## Target Mapping

| Current Content Type | New Destination | Notes |
|---|---|---|
| Page | Pages collection | Review page layout after import. |
| Blog post/article | Articles collection | Assign category: Tech Made Simple, The State of Things, By Design, or Uncategorized. |
| Media/image | Media collection | No brand assets expected, but preserve post images if they exist. |
| Old URL | Redirect config | Required if slugs change. |

## Migration Decision Rules

- If category is unclear, import as draft or `Uncategorized`.
- If formatting is messy, preserve content first and clean formatting after import.
- If content conflicts with new brand tone, import as draft for review.
- If old content is outdated, preserve it in draft unless client approves deletion.

