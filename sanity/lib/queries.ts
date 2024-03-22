import { groq } from 'next-sanity'

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
