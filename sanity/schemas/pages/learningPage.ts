import { defineType } from 'sanity'
import { sharedPageFields } from './shared/fields'

export default defineType({
  name: 'learningPage',
  title: 'Learning Page',
  type: 'document',
  fields: [...sharedPageFields]
})
