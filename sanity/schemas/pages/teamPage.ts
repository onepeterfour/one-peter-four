import { defineType } from 'sanity'
import { sharedPageFields } from './shared/fields'

export default defineType({
  name: 'teamPage',
  title: 'Team Page',
  type: 'document',
  fields: [...sharedPageFields]
})
