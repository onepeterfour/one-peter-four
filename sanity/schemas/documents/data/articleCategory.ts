import { PackageIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

// SANITY SCHEMA
export default defineType({
  name: 'articleCategoryDocument',
  title: 'Category',
  type: 'document',
  icon: PackageIcon,
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
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title'
      },
      validation: (Rule) => Rule.required()
    })
  ]
})

// INTERFACE
export interface ArticleCategoryDocument {
  _type: 'articleCategoryDocument'
  _id: string
  _rev: string
  _createdAt: string
  _updatedAt: string
  _originalId?: string | undefined
  title: string
  description: string
  slug: { current: string; _type: 'slug' }
}
