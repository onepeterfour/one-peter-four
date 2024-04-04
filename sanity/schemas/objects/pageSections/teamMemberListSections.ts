import { CustomListPreview } from '@/sanity/components/CustomListPreview'
import { BasePageSectionSchema } from '@/types'
import { BlockElementIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'
import { TeamMemberDocument } from '../../documents/data/teamMember'

export interface TeamMemberListSectionSchema extends BasePageSectionSchema {
  _type: 'teamMemberListSection'
  title: string
  teamMemberList: TeamMemberDocument[]
}

export default defineType({
  type: 'object',
  name: 'teamMemberListSection',
  title: 'Team Member List Section',
  icon: BlockElementIcon,
  preview: {
    select: {
      isEnabled: 'isEnabled'
    },
    prepare({ isEnabled }) {
      return {
        title: 'Team Member List Section',
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
      name: 'teamMemberList',
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
