import { ActivityIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'researchArticleDocument',
  title: 'Research Paper',
  type: 'document',
  icon: ActivityIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string'
    }),
    defineField({
      name: 'file',
      title: 'File',
      type: 'file',
      fields: [
        {
          name: 'description',
          type: 'string',
          title: 'Description'
        },
        {
          name: 'author',
          type: 'reference',
          title: 'Author',
          to: { type: 'teamMemberDocument' }
        }
      ]
    })
  ]
})
