import { client } from '@/sanity/lib/client'
import { groq } from 'next-sanity'
import { defineField, defineType } from 'sanity'
import type { ImageWithMetaDataObject } from '../../objects/imageWithMetaDataObject'

// SANITY SCHEMA
export default defineType({
  name: 'teamMemberDocument',
  title: 'Team Member',
  type: 'document',
  preview: {
    select: {
      media: 'image',
      title: 'name'
    }
  },
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name'
      },
      description: 'This will be used to generate the URL for this team member',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'imageWithMetadata',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.email()
    }),
    defineField({
      name: 'linkedIn',
      title: 'LinkedIn',
      type: 'url'
    })
  ]
})

// INTERFACE
export interface TeamMemberDocument {
  _type: 'teamMemberDocument'
  _id: string
  _rev: string
  _createdAt: string
  _updatedAt: string
  _originalId?: string | undefined
  name: string
  slug: { current: string; _type: 'slug' }
  role: string
  image: ImageWithMetaDataObject
  bio: string
  email?: string
  linkedIn?: string
}

// QUERIES

/**
 * Fetches all published team members.
 */
export const fetchTeamMembers = async () => {
  const fetchTeamMembersQuery = groq`*[_type == "teamMemberDocument" && !(_id in path("drafts.**"))]`

  return await client.fetch<TeamMemberDocument[]>(fetchTeamMembersQuery)
}

/**
 * Fetches an individual published team member by slug.
 */
export const fetchTeamMemberBySlug = async (slug: string) => {
  const query = groq`*[_type == "teamMemberDocument" && slug.current == "${slug}" && !(_id in path("drafts.**"))][0]`

  return await client.fetch<TeamMemberDocument>(query)
}
