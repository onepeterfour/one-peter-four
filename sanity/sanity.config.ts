/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { locate } from '@/sanity/presentation/locate'
import {
  BookIcon,
  CodeBlockIcon,
  CogIcon,
  DocumentPdfIcon,
  DocumentTextIcon,
  DocumentsIcon,
  EditIcon,
  EnvelopeIcon,
  HomeIcon,
  IceCreamIcon,
  OkHandIcon,
  RobotIcon,
  RocketIcon,
  UserIcon,
  UsersIcon
} from '@sanity/icons'
import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import { presentationTool } from 'sanity/presentation'
import { structureTool, type StructureToolOptions } from 'sanity/structure'
import { apiVersion, dataset, projectId } from './env'
import { schema } from './schemas'

const structureToolOptions: StructureToolOptions = {
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
                  .title('Articles')
                  .icon(EditIcon)
                  .child(
                    S.document()
                      .schemaType('articlesPage')
                      .documentId('articlesPage')
                      .title('Articles')
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
          .title('Client Organisations')
          .icon(RobotIcon)
          .child(
            S.documentTypeList('clientOrganisationDocument').title(
              'Client Organisations'
            )
          ),
        S.listItem()
          .title('Partner Organisations')
          .icon(UserIcon)
          .child(
            S.documentTypeList('partnerOrganisationDocument').title(
              'Partner Organisations'
            )
          ),
        S.listItem()
          .title('Case Studies')
          .icon(BookIcon)
          .child(S.documentTypeList('caseStudyDocument').title('Case Studies')),
        S.listItem()
          .title('Articles')
          .icon(EditIcon)
          .child(S.documentTypeList('articleDocument').title('Articles')),
        S.listItem()
          .title('Files')
          .icon(DocumentPdfIcon)
          .child(S.documentTypeList('fileDocument').title('Files')),
        S.listItem()
          .title('Learning Resources')
          .icon(BookIcon)
          .child(
            S.documentTypeList('learningResourceDocument').title(
              'Learning Resources'
            )
          ),
        S.listItem()
          .title('Website Policies')
          .icon(DocumentTextIcon)
          .child(
            S.documentTypeList('websitePolicyDocument').title(
              'Website Policies'
            )
          ),
        S.divider(),
        S.listItem()
          .title('Settings')
          .icon(CogIcon)
          .child(
            S.list()
              .title('Settings Documents')
              .items([
                S.listItem()
                  .title('Metadata')
                  .icon(CodeBlockIcon)
                  .child(
                    S.document().schemaType('metadata').documentId('metadata')
                  ),
                S.listItem()
                  .title('Header Navigation')
                  .icon(CodeBlockIcon)
                  .child(
                    S.document()
                      .schemaType('headerNavigation')
                      .documentId('headerNavigation')
                  ),
                S.listItem()
                  .title('Footer Navigation')
                  .icon(CodeBlockIcon)
                  .child(
                    S.document()
                      .schemaType('footerNavigation')
                      .documentId('footerNavigation')
                  )
              ])
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
    structureTool(structureToolOptions),
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
