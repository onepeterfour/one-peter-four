import { client } from '@/sanity/lib/client'
import type { MetaDataObject } from '@/sanity/schemas/objects/metaDataObject'
import type { PageSection } from '@/sanity/schemas/objects/pageSectionsArrayObject/types'
import { groq } from 'next-sanity'
import { defineField, defineType } from 'sanity'

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
 * Reusable Query for fetching pages which use the page section pattern
 */

type PageName =
  | 'homePage'
  | 'servicesPage'
  | 'caseStudiesPage'
  | 'articlesPage'
  | 'contactPage'
  | 'learningPage'
  | 'partnersPage'
  | 'teamPage'

export const fetchPage = async <T>(pageName: PageName) => {
  return await client.fetch<T>(groq`*[_type == "${pageName}" && !(_id in path("drafts.**"))]{
    ...,
      pageSections[]{
        ...,
        _type == "articleListSection" => {
          ...,
          articleList[] -> {
            _id,
            slug,
            title,
            description,
            _updatedAt,
            _createdAt,
            author -> {
              _id,
              name,
              role,
              image
            }
          }
        },
        _type == "sanityPageSectionClients" => {
          ...,
          clientList[] -> {
            ...
          }
        },
        _type == "sanityPageSectionTeam" => {
          ...,
          teamMembersList[] -> {
            _type,
            _id,
            name,
            slug,
            role,
            image,
            bio,
            email,
            linkedIn
          }
        }
      }
    }[0]`)
}

export const fetchHomePage = async () => fetchPage<HomePageDocument>('homePage')
