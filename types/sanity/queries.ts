import type { SanityDocument } from 'next-sanity'
import type { Image, TypedObject } from 'sanity'

export type MetaDataQueryResult = {
  title: string
  description: string
}

type ImageWithMetadata = Image & { alt: string }

type BasePageSection<T> = {
  _key: string
  isEnabled: boolean
} & T

export type SanityHeroWithImageQueryResult = BasePageSection<{
  _type: 'sanityPageSectionHeroWithImage'
  heading: string
  tagline: string
  image: ImageWithMetadata
}>

export type SanityHeroWithoutImageQueryResult = BasePageSection<{
  _type: 'sanityPageSectionHeroWithoutImage'
  heading?: string
  subheading?: string
}>

export type SanityPageIntroQueryResult = BasePageSection<{
  _type: 'sanityPageSectionPageIntro'
  eyebrow?: string
  subtitle?: string
  title?: string
  body?: TypedObject[]
}>

export type SanityStatsListQueryResult = BasePageSection<{
  _type: 'sanityPageSectionStatsList'
  stats?: Array<{
    _type: string
    _key: string
    title: string
    value: string
  }>
}>

export type SanityCultureQueryResult = BasePageSection<{
  _type: 'sanityPageSectionCulture'
  eyebrow?: string
  title?: string
  subtitle?: string
  cultureList?: Array<{
    title?: string
    text?: string
    _key: string
    _type: string
  }>
}>

export type SanityClientsQueryResult = BasePageSection<{
  _type: 'sanityPageSectionClients'
  title: string
  clientsList?: Array<{
    name: string
    _type: string
    _key: string
    altText: string
    logo: ImageWithMetadata
  }>
}>

export type SanityCallToActionQueryResult = BasePageSection<{
  _type: 'sanityPageSectionCallToAction'
  title: string
}>

export type SanityResearchCardsQueryResult = BasePageSection<{
  _type: 'sanityPageSectionResearchCards'
  title: string
  subtitle: string
  researchCards: Array<{
    _type: string
    _key: string
    logo: ImageWithMetadata
    date: string
    title: string
    description: string
    href: string
  }>
}>

export type SanityTestimonialQueryResult = BasePageSection<{
  _type: 'sanityPageSectionTestimonial'
  client: string
  quote: string
  logo: ImageWithMetadata
}>

export type SanityValuesQueryResult = BasePageSection<{
  _type: 'sanityPageSectionValues'
  eyebrow: string
  title: string
  subtitle: string
  image: ImageWithMetadata
  valuesList: Array<{
    _type: 'value'
    _key: string
    title: string
    description: string
  }>
}>

export type SanityContactQueryResult = BasePageSection<{
  _type: 'sanityPageSectionContact'
  title: string
  buttonLabel: string
}>

export type TeamMember = {
  _type: 'teamMemberDocument'
  _id: string
  _rev: string
  _createdAt: string
  _updatedAt: string
  name: string
  slug: { current: string; _type: 'slug' }
  role: string
  image: ImageWithMetadata
  bio: string
  email?: string
  linkedIn?: string
}

export type SanityTeamQueryResult = BasePageSection<{
  _type: 'sanityPageSectionTeam'
  title: string
  teamMembersList: TeamMember[]
}>

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

export type PageSectionQueryResult =
  | SanityHeroWithImageQueryResult
  | SanityHeroWithoutImageQueryResult
  | SanityPageIntroQueryResult
  | SanityStatsListQueryResult
  | SanityCultureQueryResult
  | SanityClientsQueryResult
  | SanityCallToActionQueryResult
  | SanityResearchCardsQueryResult
  | SanityTestimonialQueryResult
  | SanityValuesQueryResult
  | SanityContactQueryResult
  | SanityTeamQueryResult

type MandatoryPageComponents = {
  metaData: MetaDataQueryResult
  pageSections: PageSectionQueryResult[]
}

/**
 * This is the type which describes the result of sanity api queries for each main page.
 * It takes an optional generic for pages that contain additional data to what's described
 * in MandatoryPageComponents.
 */
export type PageQuery<T extends Record<string, any> = {}> = Omit<
  SanityDocument<MandatoryPageComponents & T>,
  '_originalId'
>

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
