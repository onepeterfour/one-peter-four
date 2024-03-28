import { Image, defineField, defineType } from 'sanity'

export interface ImageWithMetaDataObject extends Image {
  _type: 'imageWithMetadata'
  alt: string
}

export default defineType({
  name: 'imageWithMetadata',
  title: 'Image',
  type: 'image',
  fields: [
    defineField({
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      description: 'Important for SEO and accessibility.',
      validation: (Rule) => Rule.required()
    })
  ],
  options: {
    hotspot: true
  },
  validation: (Rule) => Rule.required()
})
