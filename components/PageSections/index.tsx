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
import { PageIntroSection } from './PageIntroSection'
import { StatisticListSection } from './StatisticListSection'
import { TeamMemberListSection } from './TeamMemberListSection'
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
  ['pageIntroSection', PageIntroSection],
  ['statisticListSection', StatisticListSection],
  ['textListSection', TextListSection],
  ['sanityPageSectionTestimonial', Testimonial],
  ['sanityPageSectionValues', Values],
  ['contactSection', ContactSection],
  ['teamMemberListSection', TeamMemberListSection]
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
