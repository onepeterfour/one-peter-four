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

export const objects = [metaDataType, statlistObject]
