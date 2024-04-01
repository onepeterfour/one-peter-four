import { CustomListPreview } from '@/sanity/components/CustomListPreview'
import { BasePageSectionSchema } from '@/types'
import { BlockElementIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'
import { CaseStudyDocument } from '../../documents/data/caseStudy'

export interface CaseStudyCardListSectionSchema extends BasePageSectionSchema {
  _type: 'sanityPageSectionResearchCards'
  title: string
  subtitle: string
  caseStudyList: CaseStudyDocument[]
}

export default defineType({
  type: 'object',
  name: 'sanityPageSectionResearchCards',
  title: 'Research Cards',
  icon: BlockElementIcon,
  preview: {
    select: {
      isEnabled: 'isEnabled'
    },
    prepare({ isEnabled }) {
      return {
        title: 'Research Cards',
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
    // defineField({
    //   name: 'researchCards',
    //   title: 'Research Cards',
    //   validation: (Rule) => Rule.required().max(3),
    //   type: 'array',
    //   of: [
    //     {
    //       name: 'researchCardObject',
    //       type: 'object',
    //       title: 'Research Card',
    //       preview: {
    //         select: {
    //           media: 'logo',
    //           title: 'title'
    //         }
    //       },
    //       fields: [
    //         defineField({
    //           name: 'logo',
    //           title: 'Logo',
    //           type: 'imageWithMetadata'
    //         }),
    //         defineField({
    //           name: 'date',
    //           title: 'Date',
    //           type: 'string',
    //           validation: (Rule) => Rule.required()
    //         }),
    //         defineField({
    //           name: 'title',
    //           title: 'Title',
    //           type: 'string',
    //           validation: (Rule) => Rule.required()
    //         }),
    //         defineField({
    //           name: 'description',
    //           title: 'Description',
    //           type: 'string',
    //           validation: (Rule) => Rule.required()
    //         }),
    //         defineField({
    //           name: 'href',
    //           title: 'Href',
    //           type: 'string',
    //           validation: (Rule) => Rule.required()
    //         })
    //       ]
    //     }
    //   ]
    // })
  ]
})
