import { client } from '@/sanity/lib/client'
import { groq } from 'next-sanity'
import { defineField, defineType } from 'sanity'
import type { MetaDataObject } from '../../objects/metaDataObject'
import type { PageSection } from '../../objects/pageSectionsArrayObject'

// SANITY SCHEMA
export default defineType({
  name: 'homePage',
  title: 'Home Page',
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
interface HomePageDocument {
  _type: 'homePage'
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
 * Fetches data for the home page
 */
export const fetchHomePage = async () => {
  return await client.fetch<HomePageDocument>(groq`*[_type == "homePage" && !(_id in path("drafts.**"))]{
    ...,
      pageSections[]{
        ...,
        _type == "sanityPageSectionClients" => {
        ...,
          clientList[] -> {
            ...
          }
        }
      }
    }[0]`)
}
