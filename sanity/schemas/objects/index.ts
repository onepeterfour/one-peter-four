import navigation from './navigation'
import pageSections from './pageSections'

import { defineField, defineType } from 'sanity'

const isShown = defineType({
  name: 'isShown',
  title: 'isShown',
  type: 'boolean',
  description: 'If checked, this section will be shown on the page'
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

const statlistObject = defineType({
  name: 'statlistObject',
  type: 'object',
  title: 'Stat',
  fields: [
    defineField({
      name: 'title',
      type: 'string'
    }),
    defineField({
      name: 'value',
      type: 'string'
    })
  ]
})

const imageObject = defineField({
  name: 'imageObject',
  type: 'object',
  title: 'Image',
  fields: [
    defineField({
      name: 'media',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'alt',
      type: 'string',
      title: 'Alternative text'
    })
  ]
})
const navigationItem = defineType({
  name: 'navigationItem',
  title: 'Navigation Item',
  type: 'object',
  preview: {
    select: {
      title: 'path'
    },
    prepare({ title }) {
      return {
        title
      }
    }
  },
  fields: [
    defineField({
      name: 'path',
      title: 'Path',
      type: 'string'
    }),
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string'
    })
  ]
})

const navigationRow = defineType({
  name: 'navigationRow',
  title: 'Navigation Row',
  type: 'object',
  preview: {
    select: {
      items: 'items'
    },
    prepare({ items }) {
      const itemTitles = items
        .map((item: { path: string; label: string }) => item.label)
        .join(', ')
      return {
        title: `Navigation Row`,
        subtitle: itemTitles
      }
    }
  },
  fields: [
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      validation: (Rule) => Rule.required().integer().min(1)
    }),
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{ type: 'navigationItem' }],
      validation: (Rule) => Rule.max(2)
    })
  ]
})

const titleWithText = defineType({
  type: 'object',
  name: 'titleWithText',
  title: 'Title With Text',
  fields: [
    defineField({ name: 'title', type: 'string' }),
    defineField({ name: 'text', type: 'text', rows: 3 })
  ]
})

const client = defineType({
  type: 'object',
  name: 'client',
  title: 'Client',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'altText',
      title: 'Alt Text',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      validation: (Rule) => Rule.required()
    })
  ]
})

const objects = [
  isShown,
  navigation,
  metaDataType,
  statlistObject,
  imageObject,
  navigationRow,
  navigationItem,
  titleWithText,
  client,
  ...pageSections
]

export default objects
