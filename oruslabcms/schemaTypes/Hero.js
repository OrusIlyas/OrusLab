export default {
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    {
      name: 'aboutTitle',
      title: 'About Title',
      type: 'string'
    },
    {
      name: 'aboutContent',
      title: 'About Content',
      type: 'array',
      of: [{ type: 'text' }]
    },
    {
      name: 'researchAreasTitle',
      title: 'Research Areas Title',
      type: 'string'
    },
    {
      name: 'researchAreas',
      title: 'Research Areas',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'imagePath',
              title: 'Image Path',
              type: 'image',
              options: {
                hotspot: true
              }
            },
            {
              name: 'title',
              title: 'Tile Title',
              type: 'string'
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text'
            },
            {
              name: 'link',
              title: 'Link',
              type: 'url'
            }
          ],
          preview: {
            select: {
              title: 'title',
              media: 'imagePath'
            }
          }
        }
      ]
    }
  ],
};