import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL path. Use "/" for home, "about", "follow", etc.',
      },
    },
    {
      name: 'hero',
      type: 'group',
      label: 'Hero Section',
      admin: {
        description: 'Used on the Home page only.',
        condition: (data) => data?.slug === '/',
      },
      fields: [
        { name: 'overlineBadge', type: 'text' },
        { name: 'headline', type: 'text', required: true },
        { name: 'subhead', type: 'text' },
        { name: 'primaryCTALabel', type: 'text' },
        { name: 'primaryCTAUrl', type: 'text' },
        { name: 'ghostCTALabel', type: 'text' },
        { name: 'ghostCTAUrl', type: 'text' },
      ],
    },
    {
      name: 'about',
      type: 'group',
      label: 'About Page Content',
      admin: {
        condition: (data) => data?.slug === 'about',
      },
      fields: [
        { name: 'headline', type: 'text' },
        { name: 'subhead', type: 'text' },
        {
          name: 'portraitImage',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'storyBlocks',
          type: 'array',
          label: 'Story Blocks',
          fields: [
            { name: 'label', type: 'text', required: true },
            { name: 'headline', type: 'text', required: true },
            { name: 'body', type: 'richText', required: true },
          ],
        },
        {
          name: 'credentials',
          type: 'group',
          fields: [
            { name: 'headline', type: 'text' },
            {
              name: 'certifications',
              type: 'array',
              fields: [{ name: 'name', type: 'text', required: true }],
            },
            { name: 'currentRole', type: 'text' },
            { name: 'yearsExperience', type: 'number' },
          ],
        },
      ],
    },
    {
      name: 'platformFollow',
      type: 'group',
      label: 'Platform Follow Section',
      fields: [
        { name: 'headline', type: 'text' },
        {
          name: 'platforms',
          type: 'array',
          fields: [
            { name: 'name', type: 'text', required: true },
            {
              name: 'status',
              type: 'select',
              options: [
                { label: 'Active', value: 'active' },
                { label: 'Coming Soon', value: 'coming-soon' },
              ],
              defaultValue: 'coming-soon',
            },
            { name: 'url', type: 'text' },
            { name: 'icon', type: 'text', admin: { description: 'Lucide icon name, e.g. "Facebook", "Youtube"' } },
          ],
        },
      ],
    },
    {
      name: 'seo',
      type: 'group',
      label: 'SEO',
      fields: [
        { name: 'metaTitle', type: 'text' },
        { name: 'metaDescription', type: 'textarea' },
        { name: 'ogImage', type: 'upload', relationTo: 'media' },
      ],
    },
  ],
}
