import { type SchemaTypeDefinition } from 'sanity'

// IMPORT OBJECTS
import imageWithMetaDataObject from './objects/imageWithMetaDataObject'
import metaDataObject from './objects/metaDataObject'
import pageSectionsArrayObject from './objects/pageSectionsArrayObject/schema'

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
  articlesPage,
  servicesPage,
  policiesPage,
  caseStudiesPage
]

const DATA_DOCUMENTS = [
  article,
  articleCategory,
  teamMember,
  websitePolicy,
  clientOrganisation
]

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [...OBJECTS, ...PAGE_DOCUMENTS, ...DATA_DOCUMENTS]
}
