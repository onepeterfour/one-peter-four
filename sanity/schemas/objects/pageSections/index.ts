import { defineArrayMember, defineType } from 'sanity'
import { ArticleListSectionSchema } from './articleListSection'
import type { CallToActionSectionSchema } from './callToActionsSection'
import { CaseStudyCardListSectionSchema } from './caseStudyCardListSection'
import type { CaseStudyListSectionSchema } from './caseStudyListSection'
import { SanityPageSectionContact } from './contactSection'
import { SanityPageSectionHero } from './heroImageSection'
import { SanityPageSectionHeroWithoutImage } from './heroTextSection'
import { SanityPageSectionValues } from './imageListSection'
import { LogoListSectionSchema } from './logoListSection'
import { SanityPageSectionPageIntro } from './pageIntroSection'
import { SanityPageSectionStatsList } from './statisticListSection'
import { SanityPageSectionTeams } from './teamMemberListSections'
import { SanityPageSectionTestimonial } from './testimonialSection'
import { SanityPageSectionCulture } from './textListSection'

export type PageSection =
  | ArticleListSectionSchema
  | CallToActionSectionSchema
  | CaseStudyListSectionSchema
  | LogoListSectionSchema
  | SanityPageSectionContact
  | SanityPageSectionCulture
  | SanityPageSectionHero
  | SanityPageSectionHeroWithoutImage
  | SanityPageSectionPageIntro
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
      type: 'logoListSection',
      name: 'logoListSection',
      title: 'Client List Section'
    }),
    defineArrayMember({
      type: 'sanityPageSectionContact',
      name: 'sanityPageSectionContact',
      title: 'Contact'
    }),
    defineArrayMember({
      type: 'sanityPageSectionCulture',
      name: 'sanityPageSectionCulture',
      title: 'Culture'
    }),
    defineArrayMember({
      type: 'sanityPageSectionHeroWithImage',
      name: 'sanityPageSectionHeroWithImage',
      title: 'Hero With Image'
    }),
    defineArrayMember({
      type: 'sanityPageSectionHeroWithoutImage',
      name: 'sanityPageSectionHeroWithoutImage',
      title: 'Hero Without Image'
    }),
    defineArrayMember({
      type: 'sanityPageSectionPageIntro',
      name: 'sanityPageSectionPageIntro',
      title: 'Page Intro'
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
