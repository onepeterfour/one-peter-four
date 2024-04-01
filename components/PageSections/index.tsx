import type { PageSection } from '@/sanity/schemas/objects/pageSections'
import { ComponentType } from 'react'
import { ArticleListSection } from './ArticleListSection'
import { CallToActionSection } from './CallToActionSection'
import { CaseStudyCardListSection } from './CaseStudyCardListSection'
import { CaseStudyListSection } from './CaseStudyListSection'
import { ContactSection } from './ContactSection'
import { Culture } from './Culture'
import { Hero } from './Hero'
import { HeroWithoutImage } from './HeroWithoutImage'
import { LogoListSection } from './LogoListSection'
import { PageIntro } from './PageIntro'
import { StatsList } from './StatsList'
import { Team } from './Team'
import { Testimonial } from './Testimonial'
import { Values } from './Values'

const pageSectionsMap = new Map<PageSection['_type'], ComponentType<any>>([
  ['articleListSection', ArticleListSection],
  ['callToActionSection', CallToActionSection],
  ['caseStudyCardListSection', CaseStudyCardListSection],
  ['caseStudyListSection', CaseStudyListSection],
  ['logoListSection', LogoListSection],
  ['sanityPageSectionHeroWithoutImage', HeroWithoutImage],
  ['sanityPageSectionPageIntro', PageIntro],
  ['sanityPageSectionStatsList', StatsList],
  ['sanityPageSectionCulture', Culture],
  ['sanityPageSectionHeroWithImage', Hero],
  ['sanityPageSectionTestimonial', Testimonial],
  ['sanityPageSectionValues', Values],
  ['contactSection', ContactSection],
  ['sanityPageSectionTeam', Team]
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
