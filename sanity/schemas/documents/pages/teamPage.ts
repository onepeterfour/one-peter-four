import { client } from '@/sanity/lib/client'
import { groq } from 'next-sanity'
import { defineField, defineType } from 'sanity'
import type { MetaDataObject } from '../../objects/metaDataObject'
import type { PageSection } from '../../objects/pageSectionsArrayObject'

// SANITY SCHEMA
export default defineType({
  name: 'teamPage',
  title: 'Team Page',
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
interface TeamPageDocument {
  _type: 'teamPage'
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
 * Fetches data for the /team page
 */
export const fetchTeamPage = async () => {
  return await client.fetch<TeamPageDocument>(groq`*[_type == "teamPage"]{
    metaData,
    pageSections[]{
      ...,
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
