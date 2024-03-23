import { PageQuery, TeamMember } from '@/types/sanity/queries'
import { groq } from 'next-sanity'
import { client } from './client'

/**
 * Fetches data for the home page
 */
export const fetchHomePage = async () => {
  return await client.fetch<PageQuery>(groq`*[_type == "homePage"][0]`)
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
 * Fetches all team members for the /team/[slug] page. This query
 * occurs within the generateStaticParams method for this dynamic route.
 * It enables server-side caching for all the individual team member
 * fetches on the /team/:teamMember pages themselves.
 */
export const fetchTeamMembers = async () => {
  const fetchTeamMembersQuery = groq`*[_type == "teamMemberDocument"]`

  return await client.fetch<TeamMember[]>(fetchTeamMembersQuery)
}

/**
 * Fetches an individual team member on the /team/[slug] page.
 */
export const fetchTeamMember = async (slug: string) => {
  const query = groq`*[_type == "teamMemberDocument" && slug.current == "${slug}"][0]`

  return await client.fetch<TeamMember>(query)
}
