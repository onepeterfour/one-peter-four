import type { SanityDocument } from 'next-sanity'
import type { Image, TypedObject } from 'sanity'

export type MetaDataQueryResult = {
  title: string
  description: string
}

type BasePageSection<T> = {
  _key: string
  isShown: boolean
} & T

export type SanityHeroWithImageQueryResult = BasePageSection<{
  _type: 'sanityPageSectionHeroWithImage'
  heading: string
  tagline: string
  imageObject: {
    _type: 'imageObject'
    alt: string
    media: Image
  }
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
    logo: Image
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
    logo: Image
    date: string
    title: string
    description: string
    href: string
  }>
}>

export type SanityTestimonialQueryResult = {
  _type: 'sanityPageSectionTestimonial'
  _key: string
  isShown: boolean
  client: string
  quote: string
  logo: Image
}

export type SanityValuesQueryResult = BasePageSection<{
  _type: 'sanityPageSectionValues'
  eyebrow: string
  title: string
  subtitle: string
  image: Image
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
  image: Image
  bio: string
  email?: string
  linkedIn?: string
}

export type SanityTeamQueryResult = {
  _type: 'sanityPageSectionTeam'
  _key: string
  isShown: boolean
  title: string
  teamMembersList: TeamMember[]
}

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

export type BasePageQueryResult = {
  metaData: MetaDataQueryResult
  pageSections?: PageSectionQueryResult[]
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

export type HomePageQueryResult = SanityDocument<{}> & BasePageQueryResult
export type TeamPageQueryResult = SanityDocument<{}> & BasePageQueryResult
export type ContactPageQueryResult = SanityDocument<{}> & BasePageQueryResult
export type LearningPageQueryResult = SanityDocument<{}> & BasePageQueryResult
export type PartnersPageQueryResult = SanityDocument<{}> & BasePageQueryResult
export type ResearchPageQueryResult = SanityDocument<{}> & BasePageQueryResult
export type ServicesPageQueryResult = SanityDocument<{}> & BasePageQueryResult
export type HeaderNavigationQueryResult = SanityDocument<{
  _createdAt: string
  _id: 'navigation'
  _type: 'navigation'
  rows: NavigationRow[]
}>
