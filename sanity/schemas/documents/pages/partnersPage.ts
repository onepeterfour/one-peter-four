import { client } from '@/sanity/lib/client'
import { groq } from 'next-sanity'
import { defineField, defineType } from 'sanity'
import type { MetaDataObject } from '../../objects/metaDataObject'
import type { PageSection } from '../../objects/pageSectionsArrayObject'

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

/**
 * QUERY
 *
 * Fetches data for the /partners page
 */
export const fetchPartnersPage = async () => {
  return await client.fetch<PartnersPageDocument>(
    groq`*[_type == "partnersPage"][0]`
  )
}
