/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool, DeskToolOptions } from 'sanity/desk'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from './sanity/env'
import { schema } from './sanity/schema'

const deskToolOptions: DeskToolOptions = {
  structure: (S) =>
    S.list()
      .title('Content')
      .items([
        S.listItem()
          .title('Pages')
          .child(
            S.list()
              .title('Pages')
              .items([
                S.listItem()
                  .title('Home')
                  .child(
                    S.document().schemaType('homePage').documentId('homePage')
                  ),
                S.listItem()
                  .title('Team')
                  .child(
                    S.document().schemaType('teamPage').documentId('teamPage')
                  ),
                S.listItem()
                  .title('Research')
                  .child(
                    S.document()
                      .schemaType('researchPage')
                      .documentId('researchPage')
                  ),
                S.listItem()
                  .title('Services')
                  .child(
                    S.document()
                      .schemaType('servicesPage')
                      .documentId('servicesPage')
                  ),
                S.listItem()
                  .title('Learning')
                  .child(
                    S.document()
                      .schemaType('learningPage')
                      .documentId('learningPage')
                  ),
                S.listItem()
                  .title('Partners')
                  .child(
                    S.document()
                      .schemaType('partnersPage')
                      .documentId('partnersPage')
                  ),
                S.listItem()
                  .title('Contact')
                  .child(
                    S.document()
                      .schemaType('contactPage')
                      .documentId('contactPage')
                  )
              ])
          ),
        S.listItem()
          .title('Site Settings')
          .child(
            S.document().schemaType('siteSettings').documentId('siteSettings')
          ),
        ...S.documentTypeListItems().filter(
          (listItem) =>
            ![
              'siteSettings',
              'homepage',
              'teamPage',
              'researchPage',
              'servicesPage',
              'learningPage',
              'partnersPage',
              'contactPage'
            ].includes(listItem?.getId() as string)
        )
      ])
}

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    deskTool(deskToolOptions),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion })
  ]
})
