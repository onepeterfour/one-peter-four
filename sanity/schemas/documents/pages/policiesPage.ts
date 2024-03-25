import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'policiesPage',
  title: 'Policies Page',
  type: 'document',
  fields: [
    defineField({
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        defineField({
          type: 'block',
          name: 'blockContent'
        })
      ]
    }),
    defineField({
      name: 'policiesList',
      title: 'Policies',
      type: 'array',
      of: [
        defineField({
          name: 'policy',
          title: 'Policy',
          type: 'reference',
          to: [{ type: 'websitePolicyDocument' }]
        })
      ]
    }),
    defineField({
      name: 'metaData',
      title: 'Metadata',
      type: 'metaDataType'
    })
  ]
})
