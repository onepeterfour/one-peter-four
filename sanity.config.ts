/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { locate } from '@/sanity/presentation/locate'
import {
  ActivityIcon,
  BookIcon,
  DocumentTextIcon,
  DocumentsIcon,
  EnvelopeIcon,
  HomeIcon,
  IceCreamIcon,
  OkHandIcon,
  RocketIcon,
  UsersIcon
} from '@sanity/icons'
import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import { DeskToolOptions, deskTool } from 'sanity/desk'
import { presentationTool } from 'sanity/presentation'
import { apiVersion, dataset, projectId } from './sanity/env'
import { schema } from './sanity/schemas'

const deskToolOptions: DeskToolOptions = {
  structure: (S) =>
    S.list()
      .title('Content')
      .items([
        S.listItem()
          .title('Pages')
          .icon(DocumentsIcon)
          .child(
            S.list()
              .title('Pages')
              .items([
                S.listItem()
                  .title('Home')
                  .icon(HomeIcon)
                  .child(
                    S.document()
                      .schemaType('homePage')
                      .documentId('homePage')
                      .title('Home')
                  ),
                S.listItem()
                  .title('Team')
                  .icon(UsersIcon)
                  .child(
                    S.document()
                      .schemaType('teamPage')
                      .documentId('teamPage')
                      .title('Team')
                  ),
                S.listItem()
                  .title('Services')
                  .icon(RocketIcon)
                  .child(
                    S.document()
                      .schemaType('servicesPage')
                      .documentId('servicesPage')
                      .title('Services')
                  ),
                S.listItem()
                  .title('Case Studies')
                  .icon(IceCreamIcon)
                  .child(
                    S.document()
                      .schemaType('caseStudiesPage')
                      .documentId('caseStudiesPage')
                      .title('Case Studies')
                  ),
                S.listItem()
                  .title('Research')
                  .icon(ActivityIcon)
                  .child(
                    S.document()
                      .schemaType('researchPage')
                      .documentId('researchPage')
                      .title('Research')
                  ),
                S.listItem()
                  .title('Learning')
                  .icon(BookIcon)
                  .child(
                    S.document()
                      .schemaType('learningPage')
                      .documentId('learningPage')
                      .title('Learning')
                  ),
                S.listItem()
                  .title('Partners')
                  .icon(OkHandIcon)
                  .child(
                    S.document()
                      .schemaType('partnersPage')
                      .documentId('partnersPage')
                      .title('Partners')
                  ),
                S.listItem()
                  .title('Contact')
                  .icon(EnvelopeIcon)
                  .child(
                    S.document()
                      .schemaType('contactPage')
                      .documentId('contactPage')
                      .title('Contact')
                  ),
                S.listItem()
                  .title('Policies')
                  .icon(DocumentTextIcon)
                  .child(
                    S.document()
                      .schemaType('policiesPage')
                      .documentId('policiesPage')
                      .title('Policies')
                  )
              ])
          ),
        S.divider(),
        S.listItem()
          .title('Team Members')
          .icon(UsersIcon)
          .child(
            S.documentTypeList('teamMemberDocument').title('Team Members')
          ),
        S.listItem()
          .title('Research Articles')
          .icon(ActivityIcon)
          .child(
            S.documentTypeList('researchArticleDocument').title(
              'Research Articles'
            )
          ),
        S.listItem()
          .title('Website Policies')
          .icon(DocumentTextIcon)
          .child(
            S.documentTypeList('websitePolicyDocument').title(
              'Website Policies'
            )
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
    visionTool({ defaultApiVersion: apiVersion }),
    presentationTool({
      locate,
      previewUrl: {
        draftMode: {
          enable: '/api/draft'
        }
      }
    }),
    unsplashImageAsset()
  ]
})
