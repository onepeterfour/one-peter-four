import {
  FetchPoliciesPage,
  PageQuery,
  ResearchArticle,
  TeamMember,
  WebsitePolicy
} from '@/types/sanity/queries'
import { groq } from 'next-sanity'
import { client } from './client'

/**
 * Fetches data for the home page
 */
export const fetchHomePage = async () => {
  return await client.fetch<PageQuery>(groq`*[_type == "homePage" && !(_id in path("drafts.**"))]{
    ...,
      pageSections[]{
        ...,
        _type == "sanityPageSectionClients" => {
        ...,
          clientList[] -> {
            ...
          }
        }
      }
    }[0]`)
}

/**
 * Fetches data for the /case-studies page
 */
export const fetchCaseStudiesPage = async () => {
  return await client.fetch<PageQuery>(groq`*[_type == "caseStudiesPage"][0]`)
}

/**
 * Fetches data for the /contact page
 */
export const fetchContactPage = async () => {
  return await client.fetch<PageQuery>(groq`*[_type == "contactPage"][0]`)
}

/**
 * Fetches data for the /learning page
 */
export const fetchLearningPage = async () => {
  return await client.fetch<PageQuery>(groq`*[_type == "learningPage"][0]`)
}

/**
 * Fetches data for the /partners page
 */
export const fetchPartnersPage = async () => {
  return await client.fetch<PageQuery>(groq`*[_type == "partnersPage"][0]`)
}

/**
 * Fetches data for the /research page
 */
export const fetchResearchPage = async () => {
  return await client.fetch<PageQuery>(groq`*[_type == "researchPage"][0]`)
}

/**
 * Fetches data for the /services page
 */
export const fetchServicesPage = async () => {
  return await client.fetch<PageQuery>(groq`*[_type == "servicesPage"][0]`)
}

export const fetchPoliciesPage = async () => {
  return await client.fetch<FetchPoliciesPage>(
    groq`*[_type == "policiesPage"]{
      ...,
      policiesList[] -> {
        title,
        slug,
        _id
      }
    }[0]`
  )
}

/**
 * Fetches data for the /team page
 */
export const fetchTeamPage = async () => {
  return await client.fetch<PageQuery>(groq`*[_type == "teamPage"]{
    metaData,
    pageSections[]{
      ...,
      _type == "sanityPageSectionTeam" => {
      ...,
      teamMembersList[] -> {
          _type,
          _id,
          name,
          slug,
          role,
          image,
          bio,
          email,
          linkedIn
        }
      }
    }
  }[0]`)
}

/**
 * Fetches all published team members.
 */
export const fetchTeamMembers = async () => {
  const fetchTeamMembersQuery = groq`*[_type == "teamMemberDocument" && !(_id in path("drafts.**"))]`

  return await client.fetch<TeamMember[]>(fetchTeamMembersQuery)
}

/**
 * Fetches an individual published team member by slug.
 */
export const fetchTeamMemberBySlug = async (slug: string) => {
  const query = groq`*[_type == "teamMemberDocument" && slug.current == "${slug}" && !(_id in path("drafts.**"))][0]`

  return await client.fetch<TeamMember>(query)
}

/**
 * Fetches all published research articles.
 */
export const fetchResearchArticles = async () => {
  const query = groq`*[_type == "researchArticleDocument" && !(_id in path("drafts.**"))]{
    ...,
      "file": {
      ...file,
      "url": file.asset -> url
      }
  }`
  return await client.fetch<ResearchArticle[]>(query)
}

/**
 * Fetches an individual published research article by slug.
 */
export const fetchResearchArticleBySlug = async (slug: string) => {
  const query = groq`*[_type == "researchArticleDocument" && slug.current == "${slug}" && !(_id in path("drafts.**"))][0]{
    ...,
      "file": {
      ...file,
      "url": file.asset -> url
      }
  }`
  return await client.fetch<ResearchArticle>(query)
}

/**
 * Fetches all published website policies
 */
export const fetchWebsitePolicies = async () => {
  const query = groq`*[_type == "websitePolicyDocument" && !(_id in path("drafts.**"))]`
  return await client.fetch<WebsitePolicy[]>(query)
}

export const fetchWebsitePolicyBySlug = async (slug: string) => {
  const query = groq`*[_type == "websitePolicyDocument" && slug.current == "${slug}" && !(_id in path("drafts.**"))]{
  ...
}[0]`
  return await client.fetch<WebsitePolicy>(query)
}
