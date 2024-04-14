import { client } from '@/sanity/lib/client'
import { FooterNavigationDocument } from '@/sanity/schemas/documents/settings/footerNavigation'
import { HeaderNavigationDocument } from '@/sanity/schemas/documents/settings/headerNavigation'
import { groq } from 'next-sanity'
import { cache } from 'react'
import 'server-only'

export const fetchNavigation = cache(
  async (type: 'headerNavigation' | 'footerNavigation') => {
    return await client.fetch<
      HeaderNavigationDocument | FooterNavigationDocument
    >(groq`*[_type == "${type}" ][0]`)
  }
)
