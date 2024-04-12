import { CustomListPreview } from '@/sanity/components/CustomListPreview'
import { BasePageSectionSchema } from '@/types'
import { BlockElementIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'
import { PartnerOrganisationDocument } from '../../documents/data/partnerOrganisation'

export interface PartnerListSectionSchema extends BasePageSectionSchema {
  _type: 'partnerListSection'
  eyebrow?: string
  partnerList: PartnerOrganisationDocument[]
}

export default defineType({
  type: 'object',
  name: 'partnerListSection',
  title: 'Partner List Section',
  icon: BlockElementIcon,
  preview: {
    select: {
      isEnabled: 'isEnabled'
    },
    prepare({ isEnabled }) {
      return {
        title: 'Partner List Section',
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
      name: 'partnerList',
      title: 'Partners',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [
        defineArrayMember({
          name: 'partner',
          title: 'Partner',
          type: 'reference',
          to: [{ type: 'partnerOrganisationDocument' }]
        })
      ]
    })
  ]
})
