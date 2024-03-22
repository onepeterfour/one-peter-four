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

const objects = [isShown, metaDataType, ...pageSections]

export default objects
