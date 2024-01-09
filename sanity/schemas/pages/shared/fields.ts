import { defineField } from 'sanity'

export const titleField = defineField({
  name: 'title',
  title: 'Title',
  type: 'string'
})

export const headingField = defineField({
  name: 'heading',
  title: 'Heading',
  type: 'string'
})

export const descriptionField = defineField({
  name: 'description',
  title: 'Description',
  type: 'string'
})

export const slugField = defineField({
  name: 'slug',
  title: 'Slug',
  type: 'string'
})

export const sharedPageFields = [
  titleField,
  descriptionField,
  slugField,
  headingField
]
