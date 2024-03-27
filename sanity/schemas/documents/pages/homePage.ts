import { defineField, defineType } from 'sanity'
import type { MetaDataObject } from '../../objects/metaDataObject'

const homePage = defineType({
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

export default homePage

export type SanityHomePage = {
  _id: string
  _updatedAt: string
  _createdAt: string
  _rev: string
  _type: 'homePage'
  metaData: MetaDataObject
}
