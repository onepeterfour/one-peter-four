import { BlockElementIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'sanityPageSectionTeam',
  title: 'Team',
  type: 'object',
  icon: BlockElementIcon,
  preview: {
    select: {
      isEnabled: 'isEnabled'
    },
    prepare({ isEnabled }) {
      return {
        title: 'Team',
        media: (
          <span style={{ fontSize: '1rem' }}>{isEnabled ? '🟢' : '🔴'}</span>
        )
      }
    }
  },
  fields: [
    defineField({
      name: 'isEnabled',
      type: 'enabled',
      initialValue: false
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
