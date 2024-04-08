import { client } from '@/sanity/lib/client'
import { BookIcon } from '@sanity/icons'
import { TypedObject, defineField, defineType } from 'sanity'

export interface LearningResourceDocument {
  _type: 'learningResourceDocument'
  _id: string
  _rev: string
  _createdAt: string
  _updatedAt: string
  _originalId?: string | undefined
  title: string
  description: string
  author: string
  body: TypedObject[]
  externalLink: string
}

export default defineType({
  name: 'learningResourceDocument',
  title: 'Learning Resource',
  type: 'document',
  icon: BookIcon,
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
      name: 'author',
      title: 'Author',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{ type: 'block' }]
    }),
    defineField({
      name: 'externalLink',
      title: 'External Link',
      type: 'url'
    })
  ]
})

export const fetchLearningResources = async () => {
  const query = `*[_type == "learningResourceDocument" && !(_id in path("drafts.**"))]`
  return await client.fetch<LearningResourceDocument[]>(query)
}
