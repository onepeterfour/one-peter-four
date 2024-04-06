import { defineArrayMember, defineField, defineType } from 'sanity'

interface Tag {
  _type: 'tag'
  _key: string
  title: string
}

export interface TagListObject {
  _key: string
  _type: 'tagListObject'
  tagList: Tag[]
}

export default defineType({
  name: 'tagListObject',
  title: 'Tag List Object',
  type: 'object',
  preview: {
    prepare: () => ({
      title: 'Tag List'
    })
  },
  fields: [
    defineField({
      name: 'tagList',
      title: 'Tag List',
      type: 'array',
      validation: (rule) => rule.required(),
      of: [
        defineArrayMember({
          name: 'tag',
          title: 'Tag',
          type: 'object',
          validation: (rule) => rule.required(),

          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (rule) => rule.required()
            })
          ]
        })
      ]
    })
  ]
})
