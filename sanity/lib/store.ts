import * as queryStore from '@sanity/react-loader'

import { client } from '@/sanity/lib/client'
import { token } from '@/sanity/lib/token'
import { PageName, PageSectionPage } from '@/types'
import { PAGE_SECTION_PAGE_QUERY } from './queries'

queryStore.setServerClient(client.withConfig({ token }))

export const { loadQuery } = queryStore

export const fetchPageSectionPage = async (pageName: PageName) => {
  return await loadQuery<PageSectionPage>(PAGE_SECTION_PAGE_QUERY(pageName))
}
