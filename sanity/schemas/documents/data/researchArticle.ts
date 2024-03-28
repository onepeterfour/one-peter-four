import { client } from '@/sanity/lib/client'
import { ActivityIcon } from '@sanity/icons'
import { groq } from 'next-sanity'
import { defineField, defineType } from 'sanity'

// SANITY SCHEMA
export default defineType({
  name: 'researchArticleDocument',
  title: 'Research Paper',
  type: 'document',
  icon: ActivityIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string'
    }),
    defineField({
      name: 'file',
      title: 'File',
      type: 'file',
      fields: [
        {
          name: 'description',
          type: 'string',
          title: 'Description'
        },
        {
          name: 'author',
          type: 'reference',
          title: 'Author',
          to: { type: 'teamMemberDocument' }
        }
      ]
    })
  ]
})

// INTERFACE
export interface ResearchArticleDocument {
  _type: 'researchArticleDocument'
  _id: string
  _rev: string
  _createdAt: string
  _updatedAt: string
  _originalId?: string | undefined
  title: string
  file: {
    _type: 'file'
    asset: {
      _ref: string
      _type: string
    }
    url: string
  }
}

// QUERIES

/**
 * Fetches all published research articles.
 */
export const fetchResearchArticles = async () => {
  const query = groq`*[_type == "researchArticleDocument" && !(_id in path("drafts.**"))]{
    ...,
      "file": {
      ...file,
      "url": file.asset -> url
      }
  }`
  return await client.fetch<ResearchArticleDocument[]>(query)
}

/**
 * Fetches an individual published research article by slug.
 */
export const fetchResearchArticleBySlug = async (slug: string) => {
  const query = groq`*[_type == "researchArticleDocument" && slug.current == "${slug}" && !(_id in path("drafts.**"))][0]{
    ...,
      "file": {
      ...file,
      "url": file.asset -> url
      }
  }`
  return await client.fetch<ResearchArticleDocument>(query)
}
