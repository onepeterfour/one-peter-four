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
      validation: (Rule) => Rule.required(),
      of: [{ type: 'block' }]
    }),
    defineField({
      name: 'file',
      title: 'File',
      type: 'file'
    })
  ]
})

interface File {
  _type: 'file'
  asset: {
    _ref: string
    _type: 'reference'
  }
  url: string
  originalFilename: string
}

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
  file?: File
}

// QUERIES

/**
 * Fetches all published website policies
 */
export const fetchWebsitePolicies = async () => {
  const query = groq`*[_type == "websitePolicyDocument" && !(_id in path("drafts.**"))]{
    ...,
    file {
      ...,
    "url": asset -> url,
    "originalFilename": asset -> originalFilename
    }
  }`
  return await client.fetch<WebsitePolicyDocument[]>(query)
}

/**
 *  Fetches a single website policy by its slug
 */
export const fetchWebsitePolicyBySlug = async (slug: string) => {
  const query = groq`*[_type == "websitePolicyDocument" && slug.current == "${slug}" && !(_id in path("drafts.**"))]{
  ...,
  file {
    ...,
  "url": asset -> url,
  "originalFilename": asset -> originalFilename
  }
}[0]`
  return await client.fetch<WebsitePolicyDocument>(query)
}
