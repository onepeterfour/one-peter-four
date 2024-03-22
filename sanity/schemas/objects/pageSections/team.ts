import { BlockElementIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'sanityPageSectionTeam',
  title: 'Team',
  type: 'object',
  icon: BlockElementIcon,
  preview: {
    prepare() {
      return {
        title: 'Team',
        media: BlockElementIcon
      }
    }
  },
  fields: [
    defineField({
      name: 'isShown',
      title: 'isShown',
      type: 'isShown'
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'teamMembersList',
      title: 'Team Members',
      type: 'array',
      of: [
        defineField({
          name: 'teamMember',
          title: 'Team Member',
          type: 'reference',
          to: [{ type: 'teamMemberDocument' }]
        })
      ]
    })
  ]
})
