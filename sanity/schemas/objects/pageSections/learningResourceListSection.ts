import { CustomListPreview } from '@/sanity/components/CustomListPreview'
import { BasePageSectionSchema } from '@/types'
import { BlockElementIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'
import { LearningResourceDocument } from '../../documents/data/learningResource'

export interface LearningResourceListSectionSchema
  extends BasePageSectionSchema {
  _type: 'learningResourceListSection'
  eyebrow?: string
  learningResourceList: LearningResourceDocument[]
}

export default defineType({
  type: 'object',
  name: 'learningResourceListSection',
  title: 'Learning Resource List Section',
  icon: BlockElementIcon,
  preview: {
    select: {
      isEnabled: 'isEnabled'
    },
    prepare({ isEnabled }) {
      return {
        title: 'Learning Resource List Section',
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
      type: 'string'
    }),
    defineField({
      name: 'learningResourceList',
      title: 'Learning Resource List',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [
        defineField({
          name: 'learningResource',
          title: 'Learning Resource',
          type: 'reference',
          to: [{ type: 'learningResourceDocument' }]
        })
      ]
    })
  ]
})
