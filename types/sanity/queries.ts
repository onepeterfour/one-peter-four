import type { SanityDocument } from 'next-sanity'
import type { TypedObject } from 'sanity'

export type MetaDataQueryResult = {
  title: string
  description: string
}

type BaseDocument<T> = Pick<
  SanityDocument,
  '_createdAt' | '_id' | '_rev' | '_updatedAt'
> &
  T

export type ResearchArticle = BaseDocument<{
  _type: 'researchArticleDocument'
  title: string
  file: {
    _type: 'file'
    asset: {
      _ref: string
      _type: string
    }
    url: string
  }
}>

export type FetchPoliciesPage = BaseDocument<{
  _type: 'policiesPage'
  metaData: MetaDataQueryResult
  content: TypedObject[]
  policiesList: Array<{
    title: string
    slug: { current: string; _type: 'slug' }
    _id: string
  }>
}>

export type WebsitePolicy = BaseDocument<{
  _type: 'websitePolicyDocument'
  title: 'string'
  slug: { current: string; _type: 'slug' }
  policy: TypedObject[]
}>

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
