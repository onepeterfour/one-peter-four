import { client } from '@/sanity/lib/client'
import { EditIcon } from '@sanity/icons'
import { groq, type SanityDocument } from 'next-sanity'
import { defineField, defineType, type TypedObject } from 'sanity'
import { ArticleCategoryDocument } from './articleCategory'
import { TeamMemberDocument } from './teamMember'

// SANITY SCHEMA
export default defineType({
  name: 'articleDocument',
  title: 'Article',
  type: 'document',
  icon: EditIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [{ type: 'block' }]
    }),
    defineField({
      name: 'author',
      type: 'reference',
      title: 'Author',
      validation: (Rule) => Rule.required(),
      to: { type: 'teamMemberDocument' }
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [{ type: 'reference', to: { type: 'articleCategoryDocument' } }]
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title'
      }
    }),
    defineField({
      name: 'file',
      title: 'File',
      type: 'file'
    })
  ]
})

// INTERFACE
export interface Article {
  title: string
  description: string
  author: Pick<
    TeamMemberDocument,
    '_type' | '_id' | 'name' | 'image' | 'slug' | 'role'
  >
  categories: Pick<
    ArticleCategoryDocument,
    '_id' | 'title' | 'slug' | 'description'
  >[]
  body: TypedObject[]
  slug: { current: string; _type: 'slug' }
  file: {
    _type: 'file'
    asset: {
      _ref: string
      _type: 'reference'
    }
    url: string
  }
}

export type ArticleDocument = SanityDocument<Article>

// QUERIES

/**
 * Fetches all published articles.
 */
export const fetchArticles = async () => {
  const query = groq`*[_type == "articleDocument" && !(_id in path("drafts.**"))]{
    ...,
    categories[] -> {
      _id,
      title,
      slug,
      description
    },
    author -> {
      _type,
      _id,
      name,
      role,
      image,
      slug
    },
    file{
      ...,
      "url": asset -> url
    }
  }`
  return await client.fetch<ArticleDocument[]>(query)
}

/**
 * Fetches an individual published article by slug.
 */
export const fetchArticleBySlug = async (slug: string) => {
  const query = groq`*[_type == "articleDocument" && slug.current == "${slug}" && !(_id in path("drafts.**"))][0]{
    ...,
    categories[] -> {
      _id,
      title,
      slug,
      description
    },
    author -> {
      _type,
      _id,
      name,
      role,
      image,
      slug
    },
    file{
      ...,
      "url": asset -> url
    }
  }`
  return await client.fetch<ArticleDocument>(query)
}
