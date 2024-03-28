import { client } from '@/sanity/lib/client'
import { groq } from 'next-sanity'
import { defineField, defineType, type TypedObject } from 'sanity'
import type { MetaDataObject } from '../../objects/metaDataObject'

// SANITY SCHEMA
export default defineType({
  name: 'policiesPage',
  title: 'Policies Page',
  type: 'document',
  fields: [
    defineField({
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        defineField({
          type: 'block',
          name: 'blockContent'
        })
      ]
    }),
    defineField({
      name: 'policiesList',
      title: 'Policies',
      type: 'array',
      of: [
        defineField({
          name: 'policy',
          title: 'Policy',
          type: 'reference',
          to: [{ type: 'websitePolicyDocument' }]
        })
      ]
    }),
    defineField({
      name: 'metaData',
      title: 'Metadata',
      type: 'metaDataType'
    })
  ]
})

// INTERFACE
interface PoliciesPageDocument {
  _type: 'policiesPage'
  _id: string
  _rev: string
  _createdAt: string
  _updatedAt: string
  _originalId?: string | undefined
  metaData: MetaDataObject
  content: TypedObject[]
  policiesList: Array<{
    title: string
    slug: { current: string; _type: 'slug' }
    _id: string
  }>
}

/**
 * QUERY
 *
 * Fetches data for the /policies page
 */
export const fetchPoliciesPage = async () => {
  return await client.fetch<PoliciesPageDocument>(
    groq`*[_type == "policiesPage"]{
      ...,
      policiesList[] -> {
        title,
        slug,
        _id
      }
    }[0]`
  )
}
