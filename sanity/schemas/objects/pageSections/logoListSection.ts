import { CustomListPreview } from '@/sanity/components/CustomListPreview'
import { BasePageSectionSchema } from '@/types'
import { BlockElementIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'
import { ImageWithMetaDataObject } from '../imageWithMetaDataObject'

export interface LogoListSectionSchema extends BasePageSectionSchema {
  _type: 'logoListSection'
  title: string
  clientList?: Array<{
    logo: ImageWithMetaDataObject
    name: string
    _id: string
    _updatedAt: string
    _createdAt: string
    _rev: string
    _type: 'clientOrganisationDocument'
  }>
}

export default defineType({
  type: 'object',
  name: 'logoListSection',
  title: 'Logo List Section',
  icon: BlockElementIcon,
  preview: {
    select: {
      subtitle: 'title',
      isEnabled: 'isEnabled'
    },
    prepare({ subtitle, isEnabled }) {
      return {
        title: 'Client List Section',
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
      name: 'clientList',
      title: 'Clients List',
      validation: (Rule) => Rule.required(),
      type: 'array',
      of: [
        defineField({
          type: 'reference',
          name: 'client',
          title: 'Client',
          to: [{ type: 'clientOrganisationDocument' }]
        })
      ]
    })
  ]
})
