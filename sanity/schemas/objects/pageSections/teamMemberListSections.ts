import { CustomListPreview } from '@/sanity/components/CustomListPreview'
import { BasePageSectionSchema } from '@/types'
import { BlockElementIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'
import { TeamMemberDocument } from '../../documents/data/teamMember'

export interface SanityPageSectionTeams extends BasePageSectionSchema {
  _type: 'sanityPageSectionTeam'
  title: string
  teamMembersList: TeamMemberDocument[]
}

export default defineType({
  type: 'object',
  name: 'sanityPageSectionTeam',
  title: 'Team',
  icon: BlockElementIcon,
  preview: {
    select: {
      isEnabled: 'isEnabled'
    },
    prepare({ isEnabled }) {
      return {
        title: 'Team',
        media: BlockElementIcon,
        isEnabled
      }
    }
  },
  components: {
    preview: CustomListPreview
  },
  fields: [
    defineField({
      name: 'isEnabled',
      type: 'boolean',
      description: 'If checked, this section will be shown on the page',
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
