import { defineType } from 'sanity'
import { sharedPageFields } from './shared/fields'

export default defineType({
  name: 'researchPage',
  title: 'Research Page',
  type: 'document',
  fields: [...sharedPageFields]
})
