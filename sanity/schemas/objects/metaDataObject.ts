import { defineField, defineType } from 'sanity'

export interface MetaDataObject {
  _type: 'metaDataType'
  description: string
  title: string
}

export default defineType({
  name: 'metaDataType',
  type: 'object',
  title: 'Metadata',
  description: `This content is not visible on the page but is used by search engines and social media.`,
  options: { collapsible: true, collapsed: true },
  validation: (Rule) => Rule.required(),
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
