import type { PageSection } from '@/sanity/schemas/objects/pageSections'
import { ComponentType } from 'react'
import { ArticleListSection } from './ArticleListSection'
import { CallToActionSection } from './CallToActionSection'
import { CaseStudyListSection } from './CaseStudyListSection'
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

const pageSectionsMap = new Map<PageSection['_type'], ComponentType<any>>([
  ['articleListSection', ArticleListSection],
  ['callToActionSection', CallToActionSection],
  ['sanityPageSectionHeroWithoutImage', HeroWithoutImage],
  ['sanityPageSectionPageIntro', PageIntro],
  ['sanityPageSectionStatsList', StatsList],
  ['sanityPageSectionCulture', Culture],
  ['sanityPageSectionClients', Clients],
  ['sanityPageSectionHeroWithImage', Hero],
  ['sanityPageSectionResearchCards', ResearchCards],
  ['sanityPageSectionTestimonial', Testimonial],
  ['sanityPageSectionValues', Values],
  ['sanityPageSectionContact', Contact],
  ['sanityPageSectionTeam', Team],
  ['caseStudyListSection', CaseStudyListSection]
])

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
        const PageSection = pageSectionsMap.get(section._type)
        return PageSection ? (
          <PageSection key={section._key} {...section} />
        ) : (
          <div>This Page Section does not exist</div>
        )
      })}
    </>
  )
}
