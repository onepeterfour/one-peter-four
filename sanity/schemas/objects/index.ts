import navigation from './navigation'
import pageSections from './pageSections'

import { defineField, defineType } from 'sanity'

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

const objects = [
  navigation,
  metaDataType,
  statlistObject,
  imageObject,
  navigationRow,
  navigationItem,
  ...pageSections
]

export default objects
