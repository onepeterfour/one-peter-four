import { defineArrayMember, defineType } from 'sanity'
import { ArticleListSectionSchema } from './articleListSection'
import type { CallToActionSectionSchema } from './callToActionsSection'
import { CaseStudyCardListSectionSchema } from './caseStudyCardListSection'
import type { CaseStudyListSectionSchema } from './caseStudyListSection'
import { ContactSectionSchema } from './contactSection'
import { HeroImageSectionSchema } from './heroImageSection'
import { HeroTextSectionSchema } from './heroTextSection'
import { SanityPageSectionValues } from './imageListSection'
import { LogoListSectionSchema } from './logoListSection'
import { PageIntroSectionSchema } from './pageIntroSection'
import { SanityPageSectionStatsList } from './statisticListSection'
import { SanityPageSectionTeams } from './teamMemberListSections'
import { SanityPageSectionTestimonial } from './testimonialSection'
import { TextListSectionSchema } from './textListSection'

export type PageSection =
  | ArticleListSectionSchema
  | CallToActionSectionSchema
  | CaseStudyListSectionSchema
  | LogoListSectionSchema
  | ContactSectionSchema
  | TextListSectionSchema
  | HeroImageSectionSchema
  | HeroTextSectionSchema
  | PageIntroSectionSchema
  | CaseStudyCardListSectionSchema
  | SanityPageSectionStatsList
  | SanityPageSectionTeams
  | SanityPageSectionTestimonial
  | SanityPageSectionValues

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
      type: 'logoListSection',
      name: 'logoListSection',
      title: 'Client List Section'
    }),
    defineArrayMember({
      type: 'pageIntroSection',
      name: 'pageIntroSection',
      title: 'Page Intro Section'
    }),
    defineArrayMember({
      type: 'textListSection',
      name: 'textListSection',
      title: 'Text List Section'
    }),
    defineArrayMember({
      type: 'sanityPageSectionStatsList',
      name: 'sanityPageSectionStatsList',
      title: 'Stats List'
    }),
    defineArrayMember({
      type: 'sanityPageSectionTeam',
      name: 'sanityPageSectionTeam',
      title: 'Team'
    }),
    defineArrayMember({
      type: 'sanityPageSectionTestimonial',
      name: 'sanityPageSectionTestimonial',
      title: 'Testimonial'
    }),
    defineArrayMember({
      type: 'sanityPageSectionValues',
      name: 'sanityPageSectionValues',
      title: 'Values'
    })
  ]
})
