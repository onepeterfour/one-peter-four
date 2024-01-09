import { type SchemaTypeDefinition } from 'sanity'

import author from './schemas/author'
import blockContent from './schemas/blockContent'
import category from './schemas/category'

// import page documents
import contactPage from './schemas/pages/contactPage'
import homePage from './schemas/pages/homePage'
import learningPage from './schemas/pages/learningPage'
import partnersPage from './schemas/pages/partnersPage'
import researchPage from './schemas/pages/researchPage'
import servicesPage from './schemas/pages/servicesPage'
import teamPage from './schemas/pages/teamPage'

import pet from './schemas/pet'
import post from './schemas/post'
import siteSettings from './schemas/siteSettings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    post,
    author,
    category,
    blockContent,
    pet,
    siteSettings,
    homePage,
    teamPage,
    researchPage,
    servicesPage,
    learningPage,
    partnersPage,
    contactPage
  ]
}
