import { defineType } from 'sanity'
import { sharedPageFields } from './shared/fields'

export default defineType({
  name: 'partnersPage',
  title: 'Partners Page',
  type: 'document',
  fields: [...sharedPageFields]
})
