import { TeamMember } from '@/types/sanity/queries'
import { groq } from 'next-sanity'
import { client } from './client'

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug)]`
export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]`
export const HOMEPAGE_QUERY = groq`*[_type == "homePage"][0]`
export const TEAMPAGE_QUERY = groq`*[_type == "teamPage"]{
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
}[0]`
export const RESEARCHPAGE_QUERY = groq`*[_type == "researchPage"][0]`
export const SERVICESPAGE_QUERY = groq`*[_type == "servicesPage"][0]`
export const LEARNINGPAGE_QUERY = groq`*[_type == "learningPage"][0]`
export const PARTNERSPAGE_QUERY = groq`*[_type == "partnersPage"][0]`
export const CONTACTPAGE_QUERY = groq`*[_type == "contactPage"][0]`

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
