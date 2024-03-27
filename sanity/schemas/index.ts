import { type SchemaTypeDefinition } from 'sanity'

// IMPORT OBJECTS
import imageWithMetaDataObject from './objects/imageWithMetaDataObject'
import metaDataObject from './objects/metaDataObject'
import pageSectionsArrayObject from './objects/pageSectionsArrayObject'

// IMPORT PAGE DOCUMENTS
import caseStudiesPage from './documents/pages/caseStudiesPage'
import contactPage from './documents/pages/contactPage'
import homePage from './documents/pages/homePage'
import learningPage from './documents/pages/learningPage'
import partnersPage from './documents/pages/partnersPage'
import policiesPage from './documents/pages/policiesPage'
import researchPage from './documents/pages/researchPage'
import servicesPage from './documents/pages/servicesPage'
import teamPage from './documents/pages/teamPage'

// IMPORT DATA DOCUMENTS
import clientOrganisation from './documents/data/clientOrganisation'
import researchArticle from './documents/data/researchArticle'
import teamMember from './documents/data/teamMember'
import websitePolicy from './documents/data/websitePolicy'

const OBJECTS = [
  imageWithMetaDataObject,
  metaDataObject,
  pageSectionsArrayObject
]

const PAGE_DOCUMENTS = [
  homePage,
  teamPage,
  contactPage,
  learningPage,
  partnersPage,
  researchPage,
  servicesPage,
  policiesPage,
  caseStudiesPage
]

const DATA_DOCUMENTS = [
  researchArticle,
  teamMember,
  websitePolicy,
  clientOrganisation
]

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [...OBJECTS, ...PAGE_DOCUMENTS, ...DATA_DOCUMENTS]
}
