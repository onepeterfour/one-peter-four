import { defineArrayMember, defineType } from 'sanity'
import { ArticleListSectionSchema } from './articleListSection'
import type { CallToActionSectionSchema } from './callToActionsSection'
import { CaseStudyCardListSectionSchema } from './caseStudyCardListSection'
import type { CaseStudyListSectionSchema } from './caseStudyListSection'
import { ContactSectionSchema } from './contactSection'
import { HeroImageSectionSchema } from './heroImageSection'
import { HeroTextSectionSchema } from './heroTextSection'
import { ImageTextDetailedListSectionSchema } from './imageTextDetailedListSection'
import { ImageTextListSectionSchema } from './imageTextListSection'
import { LogoListSectionSchema } from './logoListSection'
import { PageIntroSectionSchema } from './pageIntroSection'
import { StatisticListSectionSchema } from './statisticListSection'
import { TeamMemberListSectionSchema } from './teamMemberListSections'
import { TestimonialSectionSchema } from './testimonialSection'
import { TextListSectionSchema } from './textListSection'

export type PageSection =
  | ArticleListSectionSchema
  | CallToActionSectionSchema
  | CaseStudyCardListSectionSchema
  | CaseStudyListSectionSchema
  | ContactSectionSchema
  | HeroImageSectionSchema
  | HeroTextSectionSchema
  | ImageTextListSectionSchema
  | ImageTextDetailedListSectionSchema
  | LogoListSectionSchema
  | PageIntroSectionSchema
  | StatisticListSectionSchema
  | TeamMemberListSectionSchema
  | TestimonialSectionSchema
  | TextListSectionSchema

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
