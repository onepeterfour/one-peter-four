import { client } from '@/sanity/lib/client'
import { DocumentTextIcon } from '@sanity/icons'
import { groq } from 'next-sanity'
import { defineField, defineType, type TypedObject } from 'sanity'

// SANITY SCHEMA
export default defineType({
  name: 'websitePolicyDocument',
  title: 'Website Policy',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'This will be used to generate the URL for this policy',
      options: {
        source: 'title'
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'policy',
      title: 'Policy',
      type: 'array',
      of: [{ type: 'block' }]
    })
  ]
})

// INTERFACE
export interface WebsitePolicyDocument {
  _type: 'websitePolicyDocument'
  _id: string
  _rev: string
  _createdAt: string
  _updatedAt: string
  _originalId?: string | undefined
  title: string
  slug: {
    _type: 'slug'
    current: string
  }
  policy: TypedObject[]
}

// QUERIES

/**
 * Fetches all published website policies
 */
export const fetchWebsitePolicies = async () => {
  const query = groq`*[_type == "websitePolicyDocument" && !(_id in path("drafts.**"))]`
  return await client.fetch<WebsitePolicyDocument[]>(query)
}

/**
 *  Fetches a single website policy by its slug
 */
export const fetchWebsitePolicyBySlug = async (slug: string) => {
  const query = groq`*[_type == "websitePolicyDocument" && slug.current == "${slug}" && !(_id in path("drafts.**"))]{
  ...
}[0]`
  return await client.fetch<WebsitePolicyDocument>(query)
}
