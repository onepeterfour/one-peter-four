import { CustomListPreview } from '@/sanity/components/CustomListPreview'
import { BasePageSectionSchema } from '@/types'
import { BlockElementIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'
import { CaseStudyDocument } from '../../documents/data/caseStudy'

export interface CaseStudyListSectionSchema extends BasePageSectionSchema {
  _type: 'caseStudyListSection'
  eyebrow?: string
  title?: string
  subtitle?: string
  caseStudyList: CaseStudyDocument[]
}

export default defineType({
  type: 'object',
  name: 'caseStudyListSection',
  title: 'Case Study List Section',
  icon: BlockElementIcon,
  preview: {
    select: {
      isEnabled: 'isEnabled'
    },
    prepare({ isEnabled }) {
      return {
        title: 'Case Study List Section',
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
      name: 'eyebrow',
      title: 'Eyebrow',
      type: 'string'
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string'
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      rows: 3
    }),
    defineField({
      name: 'caseStudyList',
      title: 'Case Studies',
      type: 'array',
      validation: (Rule) => Rule.required(),
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
