import { defineArrayMember, defineType } from 'sanity'
import type { ArticleListSectionSchema } from './articleListSection'
import type { CallToActionSectionSchema } from './callToActionsSection'
import type { CaseStudyCardListSectionSchema } from './caseStudyCardListSection'
import type { CaseStudyListSectionSchema } from './caseStudyListSection'
import type { ContactFormSectionSchema } from './contactFormSection'
import type { ContactSectionSchema } from './contactSection'
import type { HeroImageSectionSchema } from './heroImageSection'
import type { HeroTextSectionSchema } from './heroTextSection'
import type { ImageTextDetailedListSectionSchema } from './imageTextDetailedListSection'
import type { ImageTextListSectionSchema } from './imageTextListSection'
import type { LearningResourceListSectionSchema } from './learningResourceListSection'
import type { LogoListSectionSchema } from './logoListSection'
import type { PageIntroSectionSchema } from './pageIntroSection'
import type { PartnerListSectionSchema } from './partnerListSection'
import type { StatisticListSectionSchema } from './statisticListSection'
import type { TeamMemberListSectionSchema } from './teamMemberListSections'
import type { TestimonialSectionSchema } from './testimonialSection'
import type { TextListSectionSchema } from './textListSection'

export type PageSection =
  | ArticleListSectionSchema
  | CallToActionSectionSchema
  | CaseStudyCardListSectionSchema
  | CaseStudyListSectionSchema
  | ContactSectionSchema
  | ContactFormSectionSchema
  | HeroImageSectionSchema
  | HeroTextSectionSchema
  | ImageTextListSectionSchema
  | ImageTextDetailedListSectionSchema
  | LearningResourceListSectionSchema
  | LogoListSectionSchema
  | PageIntroSectionSchema
  | StatisticListSectionSchema
  | TeamMemberListSectionSchema
  | TestimonialSectionSchema
  | TextListSectionSchema
  | PartnerListSectionSchema

export default defineType({
  name: 'pageSectionsArray',
  title: 'Page Sections',
  type: 'array',
  description: `These are the sections of the page, organised in the order that they will appear, top to bottom.`,
  validation: (Rule) => Rule.required(),
  of: [
    defineArrayMember({
      type: 'articleListSection',
      name: 'articleListSection',
      title: 'Article List Section'
    }),
    defineArrayMember({
      type: 'callToActionSection',
      name: 'callToActionSection',
      title: 'Call to Action'
    }),
    defineArrayMember({
      type: 'caseStudyCardListSection',
      name: 'caseStudyCardListSection',
      title: 'Case Study Cards Section'
    }),
    defineArrayMember({
      type: 'caseStudyListSection',
      name: 'caseStudyListSection',
      title: 'Case Studies List Section'
    }),
    defineArrayMember({
      type: 'contactSection',
      name: 'contactSection',
      title: 'Contact Section'
    }),
    defineArrayMember({
      type: 'contactFormSection',
      name: 'contactFormSection',
      title: 'Contact Form Section'
    }),
    defineArrayMember({
      type: 'heroImageSection',
      name: 'heroImageSection',
      title: 'Hero Image Section'
    }),
    defineArrayMember({
      type: 'heroTextSection',
      name: 'heroTextSection',
      title: 'Hero Text Section'
    }),
    defineArrayMember({
      type: 'imageTextListSection',
      name: 'imageTextListSection',
      title: 'Image Text List Section'
    }),
    defineArrayMember({
      type: 'imageTextDetailedListSection',
      name: 'imageTextDetailedListSection',
      title: 'Image Text Detailed List Section'
    }),
    defineArrayMember({
      type: 'learningResourceListSection',
      name: 'learningResourceListSection',
      title: 'Learning Resource List Section'
    }),
    defineArrayMember({
      type: 'logoListSection',
      name: 'logoListSection',
      title: 'Logo List Section'
    }),
    defineArrayMember({
      type: 'pageIntroSection',
      name: 'pageIntroSection',
      title: 'Page Intro Section'
    }),
    defineArrayMember({
      type: 'partnerListSection',
      name: 'partnerListSection',
      title: 'Partner List Section'
    }),
    defineArrayMember({
      type: 'statisticListSection',
      name: 'statisticListSection',
      title: 'Statistic List Section'
    }),
    defineArrayMember({
      type: 'teamMemberListSection',
      name: 'teamMemberListSection',
      title: 'Team Member List Section'
    }),
    defineArrayMember({
      type: 'testimonialSection',
      name: 'testimonialSection',
      title: 'Testimonial Section'
    }),
    defineArrayMember({
      type: 'textListSection',
      name: 'textListSection',
      title: 'Text List Section'
    })
  ]
})
