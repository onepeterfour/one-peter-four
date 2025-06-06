import type { PageSection } from '@/sanity/schemas/objects/pageSections'
import { ComponentType } from 'react'
import { ArticleListSection } from './ArticleListSection'
import { CallToActionSection } from './CallToActionSection'
import { CaseStudyCardListSection } from './CaseStudyCardListSection'
import { CaseStudyListSection } from './CaseStudyListSection'
import { ContactFormSection } from './ContactFormSection'
import { ContactSection } from './ContactSection'
import { CopyPageSection } from './CopyPageSection'
import { HeroImageSection } from './Hero'
import { HeroTextSection } from './HeroTextSection'
import { ImageTextDetailedListSection } from './ImageTextDetailedListSection'
import { ImageTextListSection } from './ImageTextListSection'
import { LearningResourceListSection } from './LearningResourceListSection'
import { LogoListSection } from './LogoListSection'
import { PageIntroSection } from './PageIntroSection'
import { PartnerListSection } from './PartnerListSection'
import { StatisticListSection } from './StatisticListSection'
import { TeamMemberListSection } from './TeamMemberListSection'
import { TestimonialSection } from './TestimonialSection'
import { TextListSection } from './TextListSection'

const pageSectionDict: Record<PageSection['_type'], ComponentType<any>> = {
  articleListSection: ArticleListSection,
  callToActionSection: CallToActionSection,
  caseStudyCardListSection: CaseStudyCardListSection,
  caseStudyListSection: CaseStudyListSection,
  contactSection: ContactSection,
  contactFormSection: ContactFormSection,
  copyPageSection: CopyPageSection,
  heroImageSection: HeroImageSection,
  heroTextSection: HeroTextSection,
  imageTextDetailedListSection: ImageTextDetailedListSection,
  imageTextListSection: ImageTextListSection,
  learningResourceListSection: LearningResourceListSection,
  logoListSection: LogoListSection,
  pageIntroSection: PageIntroSection,
  partnerListSection: PartnerListSection,
  statisticListSection: StatisticListSection,
  teamMemberListSection: TeamMemberListSection,
  testimonialSection: TestimonialSection,
  textListSection: TextListSection
}

type PageSectionsProps = {
  pageSections?: PageSection[]
}

export const PageSections = ({ pageSections }: PageSectionsProps) => {
  return (
    <>
      <div className='mt-24 sm:mt-32 lg:mt-40' />
      {pageSections?.map(({ isEnabled, ...section }) => {
        if (!isEnabled) {
          return null
        }
        const PageSection = pageSectionDict[section._type]
        return PageSection ? (
          <PageSection key={section._key} {...section} />
        ) : (
          <div key={section._key}>This Page Section does not exist</div>
        )
      })}
    </>
  )
}
