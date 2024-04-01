import { CustomListPreview } from '@/sanity/components/CustomListPreview'
import { BasePageSectionSchema } from '@/types'
import { BlockElementIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'
import { CaseStudyDocument } from '../../documents/data/caseStudy'

export interface CaseStudyCardListSectionSchema extends BasePageSectionSchema {
  _type: 'caseStudyCardListSection'
  title: string
  subtitle: string
  caseStudyList: CaseStudyDocument[]
}

export default defineType({
  type: 'object',
  name: 'caseStudyCardListSection',
  title: 'Case Study Card List Section',
  icon: BlockElementIcon,
  preview: {
    select: {
      isEnabled: 'isEnabled',
      subtitle: 'subtitle'
    },
    prepare({ isEnabled, subtitle }) {
      return {
        title: 'Case Study Card List Section',
        subtitle,
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
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'caseStudyList',
      title: 'Case Studies',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'caseStudy',
          title: 'Case Study',
          type: 'reference',
          to: [{ type: 'caseStudyDocument' }]
        })
      ]
    })
  ]
})
