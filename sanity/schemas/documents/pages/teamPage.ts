import type { MetaDataObject } from '@/sanity/schemas/objects/metaDataObject'
import type { PageSection } from '@/sanity/schemas/objects/pageSections'
import { defineField, defineType } from 'sanity'
import { fetchPage } from './homePage'

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

//QUERY
export const fetchTeamPage = async () => fetchPage<TeamPageDocument>('teamPage')
