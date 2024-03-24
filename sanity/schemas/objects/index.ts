import pageSections from './pageSections'

import { defineField, defineType } from 'sanity'

const enabled = defineType({
  name: 'enabled',
  type: 'boolean',
  description: 'If checked, this section will be shown on the page'
})

const imageWithMetadata = defineType({
  name: 'imageWithMetadata',
  title: 'Image',
  type: 'image',
  fields: [
    defineField({
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      description: 'Important for SEO and accessibility.',
      validation: (Rule) => Rule.required()
    })
  ],
  options: {
    hotspot: true
  },
  validation: (Rule) => Rule.required()
})

const metaDataType = defineType({
  name: 'metaDataType',
  type: 'object',
  title: 'Metadata',
  description: `This content is not visible on the page but is used by search engines and social media.`,
  options: { collapsible: true, collapsed: true },
  fields: [
    defineField({
      name: 'title',
      type: 'string'
    }),
    defineField({
      name: 'description',
      type: 'text',
      rows: 3
    })
  ]
})

const objects = [enabled, imageWithMetadata, metaDataType, ...pageSections]

export default objects
