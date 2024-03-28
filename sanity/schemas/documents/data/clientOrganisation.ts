import { defineField, defineType } from 'sanity'
import type { ImageWithMetaDataObject } from '../../objects/imageWithMetaDataObject'

// SANITY SCHEMA
export default defineType({
  name: 'clientOrganisationDocument',
  title: 'Client Organisation',
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
    })
  ]
})

// INTERFACE
export interface ClientOrganisationDocument {
  _type: 'clientOrganisationDocument'
  _id: string
  _rev: string
  _createdAt: string
  _updatedAt: string
  _originalId?: string | undefined
  logo: ImageWithMetaDataObject
  name: string
}

// QUERIES TBC...
