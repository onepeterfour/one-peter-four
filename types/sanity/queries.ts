import type { SanityDocument } from 'next-sanity'

export type MetaDataQueryResult = {
  title: string
  description: string
}

type NavigationItem = {
  _key: string
  _type: 'navigationItem'
  label: string
  path: string
}
type NavigationRow = {
  _type: 'navigationRow'
  _key: string
  order: number
  items: NavigationItem[]
}

export type HeaderNavigationQueryResult = SanityDocument<{
  _createdAt: string
  _id: 'navigation'
  _type: 'navigation'
  rows: NavigationRow[]
}>
