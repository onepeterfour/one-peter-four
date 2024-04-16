import { client } from '@/sanity/lib/client'
import { MetaDataObject } from '@/sanity/schemas/objects/metaDataObject'
import { PageSection } from '@/sanity/schemas/objects/pageSections'
import { groq } from 'next-sanity'
import { cache } from 'react'
import 'server-only'

type PageName =
  | 'homePage'
  | 'servicesPage'
  | 'caseStudiesPage'
  | 'articlesPage'
  | 'contactPage'
  | 'learningPage'
  | 'partnersPage'
  | 'teamPage'

interface PageSectionPage {
  _type: PageName
  _id: string
  _rev: string
  _createdAt: string
  _updatedAt: string
  _originalId?: string | undefined
  metaData: MetaDataObject
  pageSections: PageSection[]
}

/**
 * Fetches a page of type PageSectionPage and uses reacts cache  to store the result.
 * [NextJS Docs](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating)
 */
export const fetchPageSectionPage = cache(async (pageName: PageName) => {
  return await client.fetch<PageSectionPage>(groq`*[_type == "${pageName}" && !(_id in path("drafts.**"))]{
  ...,
    pageSections[]{
      ...,
      _type == "testimonialSection" => {
        ...,
        client -> {
          ...,
          }
      },
      _type == "articleListSection" => {
        ...,
        articleList[] -> {
          _id,
          slug,
          title,
          description,
          _updatedAt,
          _createdAt,
          author -> {
            _id,
            name,
            role,
            image
          }
        }
      },
      _type == "logoListSection" => {
        ...,
        clientList[] -> {
          ...
        }
      },
      _type == "caseStudyCardListSection" => {
        ...,
        caseStudyList[] -> {
          ...,
          client -> {
            ...,
          },
        },
      },
      _type == "caseStudyListSection" => {
      ...,
      caseStudyList[] -> {
        ...,
        client -> {
          ...,
        },
      },
    },
      _type == "teamMemberListSection" => {
        ...,
        teamMemberList[] -> {
          _type,
          _id,
          name,
          slug,
          role,
          image,
          bio,
          email,
          linkedIn,
          twitter
        }
      },
      _type == "partnerListSection" => {
        ...,
        partnerList[] -> {
          ...,
        }
      },
      _type == "learningResourceListSection" => {
        ...,
        learningResourceList[] -> {
          ...,
        }
      }
    }
  }[0]`)
})
