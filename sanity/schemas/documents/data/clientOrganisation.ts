import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'clientOrganisationDocument',
  title: 'Client Organisation',
  type: 'document',
  preview: {
    select: {
      media: 'logo',
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
      name: 'logo',
      title: 'Logo',
      type: 'imageWithMetadata',
      validation: (Rule) => Rule.required()
    })
  ]
})
