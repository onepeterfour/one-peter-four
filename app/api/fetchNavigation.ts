import { client } from '@/sanity/lib/client'
import { HeaderNavigationDocument } from '@/sanity/schemas/documents/settings/headerNavigation'
import { groq } from 'next-sanity'
import { cache } from 'react'
import 'server-only'

export const fetchNavigation = cache(async (type: 'headerNavigation') => {
  return await client.fetch<HeaderNavigationDocument>(
    groq`*[_type == "${type}" ][0]`
  )
})
