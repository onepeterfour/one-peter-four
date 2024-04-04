import type { PageSection } from '@/sanity/schemas/objects/pageSections'
import { ComponentType } from 'react'
import { ArticleListSection } from './ArticleListSection'
import { CallToActionSection } from './CallToActionSection'
import { CaseStudyCardListSection } from './CaseStudyCardListSection'
import { CaseStudyListSection } from './CaseStudyListSection'
import { ContactSection } from './ContactSection'
import { HeroImageSection } from './Hero'
import { HeroTextSection } from './HeroTextSection'
import { LogoListSection } from './LogoListSection'
import { PageIntro } from './PageIntro'
import { StatsList } from './StatsList'
import { Team } from './Team'
import { Testimonial } from './Testimonial'
import { TextListSection } from './TextListSection'
import { Values } from './Values'

const pageSectionsMap = new Map<PageSection['_type'], ComponentType<any>>([
  ['articleListSection', ArticleListSection],
  ['callToActionSection', CallToActionSection],
  ['caseStudyCardListSection', CaseStudyCardListSection],
  ['caseStudyListSection', CaseStudyListSection],
  ['heroImageSection', HeroImageSection],
  ['heroTextSection', HeroTextSection],
  ['logoListSection', LogoListSection],
  ['sanityPageSectionPageIntro', PageIntro],
  ['sanityPageSectionStatsList', StatsList],
  ['textListSection', TextListSection],
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
