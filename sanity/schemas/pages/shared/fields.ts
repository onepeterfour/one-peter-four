import { defineField } from 'sanity'

export const titleField = defineField({
  name: 'title',
  description: 'The title which appears in the browser tab and search results',
  title: 'Title',
  type: 'string',
  group: 'meta'
})

export const descriptionField = defineField({
  name: 'description',
  title: 'Description',
  type: 'string',
  group: 'meta'
})

export const headingField = defineField({
  name: 'heading',
  title: 'Heading',
  type: 'string',
  group: 'page'
})

export const slugField = defineField({
  name: 'slug',
  title: 'Slug',
  type: 'string',
  group: 'meta'
})

export const sharedPageFields = [
  titleField,
  descriptionField,
  slugField,
  headingField
]
