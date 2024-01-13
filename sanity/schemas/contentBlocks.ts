import { defineField, defineType } from 'sanity'

const heroType = defineType({
  name: 'heroType',
  type: 'object',
  title: 'Hero',
  fields: [
    defineField({
      name: 'heading',
      type: 'string'
    }),
    defineField({
      name: 'tagline',
      type: 'string'
    }),
    // defineField({
    //   name: 'imageField',
    //   type: 'imageBlock'
    // })
    defineField({
      name: 'image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text'
        })
      ]
    })
  ]
})

export const contentBlocks = [heroType]
