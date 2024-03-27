import { defineField, defineType } from 'sanity'
import { ImageWithMetaDataObject } from '../../objects/imageWithMetaDataObject'

export type TeamMember = {
  _type: 'teamMemberDocument'
  _id: string
  _rev: string
  _createdAt: string
  _updatedAt: string
  name: string
  slug: { current: string; _type: 'slug' }
  role: string
  image: ImageWithMetaDataObject
  bio: string
  email?: string
  linkedIn?: string
}

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
