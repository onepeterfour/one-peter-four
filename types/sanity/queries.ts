import type {
  SanityPageSectionCallToAction,
  SanityPageSectionClients,
  SanityPageSectionCulture,
  SanityPageSectionHeroWithImage,
  SanityPageSectionHeroWithoutImage,
  SanityPageSectionPageIntro,
  SanityPageSectionStatsList
} from '@/types/sanity/objects/pageSections'

import type { MetaData } from '@/types/sanity/objects'
import type { SanityDocument } from 'next-sanity'

type PageSectionQueryResult =
  | SanityPageSectionHeroWithImage
  | SanityPageSectionHeroWithoutImage
  | SanityPageSectionPageIntro
  | SanityPageSectionStatsList
  | SanityPageSectionCulture
  | SanityPageSectionClients
  | SanityPageSectionCallToAction

export type BasePageQueryResult = {
  metaData: MetaData
  pageSections?: PageSectionQueryResult[]
}

export type HomePageQueryResult = SanityDocument<{}> & BasePageQueryResult
export type TeamPageQueryResult = SanityDocument<{}> & BasePageQueryResult
export type ContactPageQueryResult = SanityDocument<{}> & BasePageQueryResult
export type LearningPageQueryResult = SanityDocument<{}> & BasePageQueryResult
export type PartnersPageQueryResult = SanityDocument<{}> & BasePageQueryResult
export type ResearchPageQueryResult = SanityDocument<{}> & BasePageQueryResult
export type ServicesPageQueryResult = SanityDocument<{}> & BasePageQueryResult
