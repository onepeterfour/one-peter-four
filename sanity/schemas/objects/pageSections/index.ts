import { defineArrayMember, defineType } from 'sanity'

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
      type: 'sanityPageSectionCallToAction',
      name: 'sanityPageSectionCallToAction',
      title: 'Call to Action'
    }),
    defineArrayMember({
      type: 'sanityPageSectionCaseStudies',
      name: 'sanityPageSectionCaseStudies',
      title: 'Case Studies'
    }),
    defineArrayMember({
      type: 'sanityPageSectionClients',
      name: 'sanityPageSectionClients',
      title: 'Clients'
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
      type: 'sanityPageSectionResearchCards',
      name: 'sanityPageSectionResearchCards',
      title: 'Research Cards'
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
