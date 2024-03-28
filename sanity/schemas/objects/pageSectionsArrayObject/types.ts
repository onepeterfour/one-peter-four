import { ArticleDocument } from '@/sanity/schemas/documents/data/article'
import { TeamMemberDocument } from '@/sanity/schemas/documents/data/teamMember'
import type { ImageWithMetaDataObject } from '@/sanity/schemas/objects/imageWithMetaDataObject'
import { TypedObject } from 'sanity'

interface BasePageSection {
  _key: string
  isEnabled: boolean
}

export interface SanityPageSectionArticlesList extends BasePageSection {
  _type: 'sanityPageSectionArticlesList'
  eyebrow: string
  articlesList: Array<
    Pick<
      ArticleDocument,
      '_id' | 'slug' | 'title' | 'description' | '_updatedAt' | '_createdAt'
    > & {
      author: Pick<TeamMemberDocument, '_id' | 'name' | 'role' | 'image'>
    }
  >
}

export interface SanityPageSectionCTA extends BasePageSection {
  _type: 'sanityPageSectionCallToAction'
  title: string
  link: string
}

export interface SanityPageSectionCaseStudies extends BasePageSection {
  _type: 'sanityPageSectionCaseStudies'
  eyebrow: string
}

export interface SanityPageSectionClients extends BasePageSection {
  _type: 'sanityPageSectionClients'
  title: string
  clientList?: Array<{
    logo: ImageWithMetaDataObject
    name: string
    _id: string
    _updatedAt: string
    _createdAt: string
    _rev: string
    _type: 'clientOrganisationDocument'
  }>
}

export interface SanityPageSectionContact extends BasePageSection {
  _type: 'sanityPageSectionContact'
  title: string
  buttonLabel: string
}

export interface SanityPageSectionCulture extends BasePageSection {
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
}

export interface SanityPageSectionHero extends BasePageSection {
  _type: 'sanityPageSectionHeroWithImage'
  heading: string
  tagline: string
  image: ImageWithMetaDataObject
}

export interface SanityPageSectionHeroWithoutImage extends BasePageSection {
  _type: 'sanityPageSectionHeroWithoutImage'
  heading?: string
  subheading?: string
}

export interface SanityPageSectionPageIntro extends BasePageSection {
  _type: 'sanityPageSectionPageIntro'
  eyebrow?: string
  subtitle?: string
  title?: string
  body?: TypedObject[]
}

export interface SanityPageSectionResearchCards extends BasePageSection {
  _type: 'sanityPageSectionResearchCards'
  title: string
  subtitle: string
  researchCards: Array<{
    _type: string
    _key: string
    logo: ImageWithMetaDataObject
    date: string
    title: string
    description: string
    href: string
  }>
}

export interface SanityPageSectionStatsList extends BasePageSection {
  _type: 'sanityPageSectionStatsList'
  statsList: Array<{
    _type: string
    _key: string
    title: string
    value: string
  }>
}

export interface SanityPageSectionTeams extends BasePageSection {
  _type: 'sanityPageSectionTeam'
  title: string
  teamMembersList: TeamMemberDocument[]
}

export interface SanityPageSectionTestimonial extends BasePageSection {
  _type: 'sanityPageSectionTestimonial'
  client: string
  quote: string
  logo: ImageWithMetaDataObject
}

export interface SanityPageSectionValues extends BasePageSection {
  _type: 'sanityPageSectionValues'
  eyebrow: string
  title: string
  subtitle: string
  image: ImageWithMetaDataObject
  valuesList: Array<{
    _type: 'value'
    _key: string
    title: string
    description: string
  }>
}

export type PageSection =
  | SanityPageSectionArticlesList
  | SanityPageSectionCTA
  | SanityPageSectionCaseStudies
  | SanityPageSectionClients
  | SanityPageSectionContact
  | SanityPageSectionCulture
  | SanityPageSectionHero
  | SanityPageSectionHeroWithoutImage
  | SanityPageSectionPageIntro
  | SanityPageSectionResearchCards
  | SanityPageSectionStatsList
  | SanityPageSectionTeams
  | SanityPageSectionTestimonial
  | SanityPageSectionValues
