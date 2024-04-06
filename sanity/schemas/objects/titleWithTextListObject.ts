import { defineArrayMember, defineField, defineType } from 'sanity'

interface TitleWithTextListItem {
  _type: 'titleWithTextListItem'
  _key: string
  title: string
  text: string
}

export interface TitleWithTextListObject {
  _type: 'titleWithTextListObject'
  _key: string
  titleWithTextList: TitleWithTextListItem[]
}

export default defineType({
  name: 'titleWithTextListObject',
  title: 'Title with Text List Object',
  type: 'object',
  preview: {
    prepare: () => ({
      title: 'Title with Text List'
    })
  },
  fields: [
    defineField({
      name: 'titleWithTextList',
      title: 'Title and Text List',
      type: 'array',
      validation: (rule) => rule.required(),
      of: [
        defineArrayMember({
          name: 'titleWithTextListItem',
          title: 'Item',
          type: 'object',
          validation: (rule) => rule.required(),
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (rule) => rule.required()
            }),
            defineField({
              name: 'text',
              title: 'Text',
              type: 'text',
              rows: 3,
              validation: (rule) => rule.required()
            })
          ]
        })
      ]
    })
  ]
})
