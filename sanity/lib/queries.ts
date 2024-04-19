import { PageName } from '@/types'
import { groq } from 'next-sanity'

export const PAGE_SECTION_PAGE_QUERY = (
  pageName: PageName
) => groq`*[_type == "${pageName}"]{
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
  }[0]`

export const NAVIGATION_QUERY = (
  type: 'headerNavigation' | 'footerNavigation'
) => groq`*[_type == "${type}" ][0]`
