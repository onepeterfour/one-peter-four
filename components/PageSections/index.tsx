import type { PageSection } from '@/sanity/schemas/objects/pageSectionsArrayObject/types'
import { ComponentType } from 'react'
import { Articles } from './ArticlesList'
import { CallToAction } from './CallToAction'
import { CaseStudies } from './CaseStudies'
import { Clients } from './Clients'
import { Contact } from './Contact'
import { Culture } from './Culture'
import { Hero } from './Hero'
import { HeroWithoutImage } from './HeroWithoutImage'
import { PageIntro } from './PageIntro'
import { ResearchCards } from './Research'
import { StatsList } from './StatsList'
import { Team } from './Team'
import { Testimonial } from './Testimonial'
import { Values } from './Values'

const Sections: Record<PageSection['_type'], ComponentType<any>> = {
  sanityPageSectionHeroWithoutImage: HeroWithoutImage,
  sanityPageSectionPageIntro: PageIntro,
  sanityPageSectionStatsList: StatsList,
  sanityPageSectionCulture: Culture,
  sanityPageSectionClients: Clients,
  sanityPageSectionHeroWithImage: Hero,
  sanityPageSectionCallToAction: CallToAction,
  sanityPageSectionResearchCards: ResearchCards,
  sanityPageSectionTestimonial: Testimonial,
  sanityPageSectionValues: Values,
  sanityPageSectionContact: Contact,
  sanityPageSectionTeam: Team,
  sanityPageSectionCaseStudies: CaseStudies,
  sanityPageSectionArticlesList: Articles
}

type PageSectionsProps = {
  pageSections?: PageSection[]
}

export const PageSections = ({ pageSections }: PageSectionsProps) => {
  return (
    <>
      {pageSections?.map(({ isEnabled, ...section }) => {
        if (!isEnabled) {
          return null
        }
        const SectionComponent = Sections[section?._type] || null
        return <SectionComponent key={section._key} {...section} />
      })}
    </>
  )
}
