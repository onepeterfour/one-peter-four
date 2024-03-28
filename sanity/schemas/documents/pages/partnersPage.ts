import type { MetaDataObject } from '@/sanity/schemas/objects/metaDataObject'
import type { PageSection } from '@/sanity/schemas/objects/pageSectionsArrayObject/types'
import { defineField, defineType } from 'sanity'
import { fetchPage } from './homePage'

// SANITY SCHEMA
export default defineType({
  name: 'partnersPage',
  title: 'Partners Page',
  type: 'document',
  fields: [
    defineField({
      name: 'pageSections',
      title: 'Page Sections',
      type: 'pageSectionsArray'
    }),
    defineField({
      name: 'metaData',
      title: 'Metadata',
      type: 'metaDataType'
    })
  ]
})

// INTERFACE
interface PartnersPageDocument {
  _type: 'partnersPage'
  _id: string
  _rev: string
  _createdAt: string
  _updatedAt: string
  _originalId?: string | undefined
  metaData: MetaDataObject
  pageSections: PageSection[]
}

//QUERY
export const fetchPartnersPage = async () =>
  fetchPage<PartnersPageDocument>('homePage')
