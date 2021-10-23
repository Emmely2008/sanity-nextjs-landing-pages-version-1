export default {
  type: 'object',
  name: 'hero',
  title: 'Hero',
  fields: [
    {
      name: 'heroType',
      title: 'Hero type',
      type: 'string',
      options: {
        list: [
          { value: 'one', title: 'Variant One' },
          { value: 'two', title: 'Variant Two' },
          { value: 'three', title: 'Variant Three' }
        ]
      }
    },
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'tagline',
      type: 'simplePortableText',
      title: 'Tagline'
    },
    {
      name: 'backgroundImage',
      type: 'image',
      title: 'Background image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'ctas',
      type: 'array',
      title: 'Call to actions',
      of: [
        {
          title: 'Call to action',
          type: 'cta'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'backgroundImage'
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: 'Hero section',
        media
      }
    }
  }
}
