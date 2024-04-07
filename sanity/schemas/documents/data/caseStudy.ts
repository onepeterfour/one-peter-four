import { client } from '@/sanity/lib/client'
import { BookIcon } from '@sanity/icons'
import { TypedObject, defineField, defineType } from 'sanity'
import { ImageWithMetaDataObject } from '../../objects/imageWithMetaDataObject'
import { ClientOrganisationDocument } from './clientOrganisation'

export interface CaseStudyDocument {
  _type: 'caseStudyDocument'
  _id: string
  _rev: string
  _createdAt: string
  _updatedAt: string
  _originalId?: string | undefined
  title: string
  description: string
  slug: {
    _type: 'slug'
    current: string
  }
  client: ClientOrganisationDocument
  date: string
  service: string
  body: TypedObject[]
  image: ImageWithMetaDataObject
  testimonial?: {
    quote: string
    author: string
    role: string
  }
}

export default defineType({
  name: 'caseStudyDocument',
  title: 'Case Study',
  type: 'document',
  description:
    'For each case study, a client should be created first. This can be done from the client organisations panel which can be selected from the sidebar to the left of the screen',
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
      title: 'Short Description',
      type: 'text',
      rows: 3,
      description: 'Short description of the case study',
      validation: (Rule) => Rule.required()
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
      name: 'client',
      title: 'Client',
      type: 'reference',
      validation: (Rule) => Rule.required(),
      to: [{ type: 'clientOrganisationDocument' }]
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'service',
      title: 'Service Provided',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      description: 'The main content of the case study.',
      validation: (Rule) => Rule.required(),
      of: [{ type: 'block' }]
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'imageWithMetadata'
    }),
    defineField({
      name: 'testimonial',
      title: 'Testimonial',
      type: 'object',
      description: 'Optional testimonial provided by the client.',
      options: {
        collapsible: true
      },
      fields: [
        defineField({
          name: 'quote',
          title: 'Quote',
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
          name: 'role',
          title: 'Role',
          type: 'string',
          validation: (Rule) => Rule.required()
        })
      ]
    })
  ]
})

/**
 * Fetch all published case studies
 *
 */
export const fetchCaseStudies = async () => {
  const query = `*[_type == "caseStudyDocument" && !(_id in path("drafts.**"))]{
    ...,
    client -> {
      ...
    }
  }`

  return await client.fetch<CaseStudyDocument[]>(query)
}

/**
 * Fetch an individual published case study by slug
 *
 */
export const fetchCaseStudyBySlug = async (slug: string) => {
  const query = `*[_type == "caseStudyDocument" && slug.current == "${slug}" && !(_id in path("drafts.**"))]{
    ...,
    client -> {
      ...
    }
  }[0]`

  return await client.fetch<CaseStudyDocument>(query)
}
