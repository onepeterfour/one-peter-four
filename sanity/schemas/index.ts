import { type SchemaTypeDefinition } from 'sanity'

// IMPORT OBJECTS
import imageWithMetaDataObject from './objects/imageWithMetaDataObject'
import metaDataObject from './objects/metaDataObject'

// IMPORT PAGE SECTION OBJECTS
import pageSections from './objects/pageSections'
import articleListSection from './objects/pageSections/articleListSection'
import callToActionsSection from './objects/pageSections/callToActionsSection'
import caseStudyCardListSection from './objects/pageSections/caseStudyCardListSection'
import caseStudiesListSection from './objects/pageSections/caseStudyListSection'
import contactSection from './objects/pageSections/contactSection'
import heroImageSection from './objects/pageSections/heroImageSection'
import heroTextSection from './objects/pageSections/heroTextSection'
import imageListSection from './objects/pageSections/imageListSection'
import logoListSection from './objects/pageSections/logoListSection'
import pageIntroSection from './objects/pageSections/pageIntroSection'
import statisticListSection from './objects/pageSections/statisticListSection'
import teamMemberListSection from './objects/pageSections/teamMemberListSections'
import testimonialSection from './objects/pageSections/testimonialSection'
import textListSection from './objects/pageSections/textListSection'

// IMPORT PAGE DOCUMENTS
import articlesPage from './documents/pages/articlesPage'
import caseStudiesPage from './documents/pages/caseStudiesPage'
import contactPage from './documents/pages/contactPage'
import homePage from './documents/pages/homePage'
import learningPage from './documents/pages/learningPage'
import partnersPage from './documents/pages/partnersPage'
import policiesPage from './documents/pages/policiesPage'
import servicesPage from './documents/pages/servicesPage'
import teamPage from './documents/pages/teamPage'

// IMPORT DATA DOCUMENTS
import article from './documents/data/article'
import articleCategory from './documents/data/articleCategory'
import clientOrganisation from './documents/data/clientOrganisation'
import teamMember from './documents/data/teamMember'
import websitePolicy from './documents/data/websitePolicy'

// WE CAN USE SETS HERE!

const PAGE_SECTION_OBJECTS = new Set([
  articleListSection,
  callToActionsSection,
  caseStudiesListSection,
  logoListSection,
  contactSection,
  textListSection,
  heroImageSection,
  heroTextSection,
  pageIntroSection,
  caseStudyCardListSection,
  statisticListSection,
  teamMemberListSection,
  testimonialSection,
  imageListSection,
  pageSections
])

const OBJECTS = new Set([imageWithMetaDataObject, metaDataObject])

const PAGE_DOCUMENTS = new Set([
  homePage,
  teamPage,
  contactPage,
  learningPage,
  partnersPage,
  articlesPage,
  servicesPage,
  policiesPage,
  caseStudiesPage
])

const DATA_DOCUMENTS = new Set([
  article,
  articleCategory,
  teamMember,
  websitePolicy,
  clientOrganisation
])

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    ...OBJECTS,
    ...PAGE_SECTION_OBJECTS,
    ...PAGE_DOCUMENTS,
    ...DATA_DOCUMENTS
  ]
}
