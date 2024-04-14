import { TypedObject, defineField, defineType } from 'sanity'
import type { ImageWithMetaDataObject } from '../../objects/imageWithMetaDataObject'

// SANITY SCHEMA
export default defineType({
  name: 'partnerOrganisationDocument',
  title: 'Partner Organisation',
  type: 'document',
  preview: {
    select: {
      media: 'logo',
      title: 'name'
    }
  },
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'imageWithMetadata',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [{ type: 'block' }]
    }),
    defineField({
      name: 'url',
      title: 'Url',
      type: 'url',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required()
    })
  ]
})

// INTERFACE
export interface PartnerOrganisationDocument {
  _type: 'partnerOrganisationDocument'
  _id: string
  _rev: string
  _createdAt: string
  _updatedAt: string
  _originalId?: string | undefined
  logo: ImageWithMetaDataObject
  name: string
  description?: string
  body: TypedObject[]
  url: string
  slug: {
    _type: 'slug'
    current: string
  }
}
