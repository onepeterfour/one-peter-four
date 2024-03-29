import { CustomListPreview } from '@/sanity/components/CustomListPreview'
import { BlockElementIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'pageSectionsArray',
  title: 'Page Sections',
  type: 'array',
  description: `These are the sections of the page, organised in the order that they will appear, top to bottom.`,
  validation: (Rule) => Rule.required(),
  of: [
    // sanityPageSectionArticlesList
    defineArrayMember({
      type: 'object',
      name: 'sanityPageSectionArticlesList',
      title: 'Articles List',
      icon: BlockElementIcon,
      preview: {
        select: {
          isEnabled: 'isEnabled'
        },
        prepare({ isEnabled }) {
          return {
            title: 'Articles List',
            media: BlockElementIcon,
            isEnabled
          }
        }
      },
      components: {
        preview: CustomListPreview
      },
      fields: [
        defineField({
          name: 'isEnabled',
          type: 'boolean',
          description: 'If checked, this section will be shown on the page',
          initialValue: false
        }),
        defineField({
          name: 'eyebrow',
          type: 'string'
        }),
        defineField({
          name: 'articlesList',
          title: 'Articles List',
          type: 'array',
          validation: (Rule) => Rule.required().max(4),
          of: [
            defineField({
              name: 'article',
              title: 'Article',
              type: 'reference',
              to: [{ type: 'articleDocument' }]
            })
          ]
        })
      ]
    }),
    // sanityPageSectionCallToAction
    defineArrayMember({
      type: 'object',
      name: 'sanityPageSectionCallToAction',
      title: 'Call to Action',
      icon: BlockElementIcon,
      preview: {
        select: {
          title: 'title',
          isEnabled: 'isEnabled'
        },
        prepare({ title, isEnabled }) {
          return {
            title: 'Call to Action',
            subtitle: title || 'untitled',
            media: BlockElementIcon,
            isEnabled
          }
        }
      },
      components: {
        preview: CustomListPreview
      },
      fields: [
        defineField({
          name: 'isEnabled',
          type: 'boolean',
          description: 'If checked, this section will be shown on the page',
          initialValue: false
        }),
        defineField({
          name: 'title',
          type: 'string'
        }),
        defineField({
          name: 'link',
          type: 'url'
        })
      ]
    }),
    // sanityPageSectionCaseStudies
    defineArrayMember({
      type: 'object',
      name: 'sanityPageSectionCaseStudies',
      title: 'Case Studies',
      icon: BlockElementIcon,
      preview: {
        select: {
          isEnabled: 'isEnabled'
        },
        prepare({ isEnabled }) {
          return {
            title: 'Case Studies',
            media: BlockElementIcon,
            isEnabled
          }
        }
      },
      components: {
        preview: CustomListPreview
      },
      fields: [
        defineField({
          name: 'isEnabled',
          type: 'boolean',
          description: 'If checked, this section will be shown on the page',
          initialValue: false
        }),
        defineField({
          name: 'eyebrow',
          title: 'Eyebrow',
          type: 'string',
          validation: (Rule) => Rule.required()
        })
      ]
    }),
    // sanityPageSectionClients
    defineArrayMember({
      type: 'object',
      name: 'sanityPageSectionClients',
      title: 'Clients',
      icon: BlockElementIcon,
      preview: {
        select: {
          subtitle: 'title',
          isEnabled: 'isEnabled'
        },
        prepare({ subtitle, isEnabled }) {
          return {
            title: 'Clients',
            subtitle,
            media: BlockElementIcon,
            isEnabled
          }
        }
      },
      components: {
        preview: CustomListPreview
      },
      fields: [
        defineField({
          name: 'isEnabled',
          type: 'boolean',
          description: 'If checked, this section will be shown on the page',
          initialValue: false
        }),
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) => Rule.required()
        }),
        defineField({
          name: 'clientList',
          title: 'Clients List',
          validation: (Rule) => Rule.required(),
          type: 'array',
          of: [
            defineField({
              type: 'reference',
              name: 'client',
              title: 'Client',
              to: [{ type: 'clientOrganisationDocument' }]
            })
          ]
        })
      ]
    }),
    // sanityPageSectionContact
    defineArrayMember({
      type: 'object',
      name: 'sanityPageSectionContact',
      title: 'Contact',
      icon: BlockElementIcon,
      preview: {
        select: {
          isEnabled: 'isEnabled'
        },
        prepare: ({ isEnabled }) => ({
          title: 'Contact',
          media: BlockElementIcon,
          isEnabled
        })
      },
      components: {
        preview: CustomListPreview
      },
      fields: [
        defineField({
          name: 'isEnabled',
          type: 'boolean',
          description: 'If checked, this section will be shown on the page',
          initialValue: false
        }),
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) => Rule.required()
        }),
        defineField({
          name: 'buttonLabel',
          title: 'Button Label',
          type: 'string',
          validation: (Rule) => Rule.required()
        })
      ]
    }),
    // sanityPageSectionCulture
    defineArrayMember({
      type: 'object',
      name: 'sanityPageSectionCulture',
      title: 'Culture',
      icon: BlockElementIcon,
      preview: {
        select: {
          subtitle: 'eyebrow',
          isEnabled: 'isEnabled'
        },
        prepare({ subtitle, isEnabled }) {
          return {
            title: 'Culture',
            subtitle,
            media: BlockElementIcon,
            isEnabled
          }
        }
      },
      components: {
        preview: CustomListPreview
      },
      fields: [
        defineField({
          name: 'isEnabled',
          type: 'boolean',
          description: 'If checked, this section will be shown on the page',
          initialValue: false
        }),
        defineField({
          name: 'eyebrow',
          type: 'string'
        }),
        defineField({
          name: 'title',
          type: 'string'
        }),
        defineField({
          name: 'subtitle',
          type: 'text',
          rows: 2
        }),
        defineField({
          name: 'cultureList',
          title: 'Culture List',
          type: 'array',
          validation: (rule) => rule.length(3),
          of: [
            {
              type: 'object',
              name: 'cultureListItem',
              title: 'Culture List Item',
              fields: [
                defineField({ name: 'title', type: 'string' }),
                defineField({ name: 'text', type: 'text', rows: 3 })
              ]
            }
          ]
        })
      ]
    }),
    // sanityPageSectionHeroWithImage
    defineArrayMember({
      type: 'object',
      name: 'sanityPageSectionHeroWithImage',
      title: 'Hero With Image',
      icon: BlockElementIcon,
      preview: {
        select: {
          subtitle: 'heading',
          isEnabled: 'isEnabled'
        },
        prepare({ subtitle, isEnabled }) {
          return {
            title: 'Hero With Image',
            subtitle,
            media: BlockElementIcon,
            isEnabled
          }
        }
      },
      components: {
        preview: CustomListPreview
      },
      fields: [
        defineField({
          name: 'isEnabled',
          type: 'boolean',
          description: 'If checked, this section will be shown on the page',
          initialValue: false
        }),
        defineField({
          name: 'heading',
          type: 'string',
          validation: (Rule) => Rule.required()
        }),
        defineField({
          name: 'tagline',
          type: 'string',
          validation: (Rule) => Rule.required()
        }),
        defineField({
          name: 'image',
          type: 'imageWithMetadata'
        })
      ]
    }),
    // sanityPageSectionHeroWithoutImage
    defineArrayMember({
      type: 'object',
      name: 'sanityPageSectionHeroWithoutImage',
      title: 'Hero Without Image',
      icon: BlockElementIcon,
      preview: {
        select: {
          subtitle: 'heading',
          isEnabled: 'isEnabled'
        },
        prepare({ subtitle, isEnabled }) {
          return {
            title: 'Hero Without Image',
            subtitle,
            media: BlockElementIcon,
            isEnabled
          }
        }
      },
      components: {
        preview: CustomListPreview
      },
      fields: [
        defineField({
          name: 'isEnabled',
          type: 'boolean',
          description: 'If checked, this section will be shown on the page',
          initialValue: false
        }),
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
          validation: (rule) => rule.required()
        }),
        defineField({
          name: 'subheading',
          title: 'Subheading',
          type: 'text',
          rows: 3,
          validation: (rule) => rule.required()
        })
      ]
    }),
    // sanityPageSectionPageIntro
    defineArrayMember({
      type: 'object',
      name: 'sanityPageSectionPageIntro',
      title: 'Page Intro',
      icon: BlockElementIcon,
      preview: {
        select: {
          subtitle: 'eyebrow',
          isEnabled: 'isEnabled'
        },
        prepare({ subtitle, isEnabled }) {
          return {
            title: 'Page Intro',
            subtitle,
            media: BlockElementIcon,
            isEnabled
          }
        }
      },
      components: {
        preview: CustomListPreview
      },
      fields: [
        defineField({
          name: 'isEnabled',
          type: 'boolean',
          description: 'If checked, this section will be shown on the page',
          initialValue: false
        }),
        defineField({
          name: 'eyebrow',
          type: 'string'
        }),
        defineField({
          name: 'title',
          type: 'string'
        }),
        defineField({
          name: 'subtitle',
          type: 'text',
          rows: 4
        }),
        defineField({
          name: 'body',
          type: 'array',
          of: [{ type: 'block' }]
        })
      ]
    }),
    // sanityPageSectionResearchCards
    defineArrayMember({
      type: 'object',
      name: 'sanityPageSectionResearchCards',
      title: 'Research Cards',
      icon: BlockElementIcon,
      preview: {
        select: {
          isEnabled: 'isEnabled'
        },
        prepare({ isEnabled }) {
          return {
            title: 'Research Cards',
            media: BlockElementIcon,
            isEnabled
          }
        }
      },
      components: {
        preview: CustomListPreview
      },
      fields: [
        defineField({
          name: 'isEnabled',
          type: 'boolean',
          description: 'If checked, this section will be shown on the page',
          initialValue: false
        }),
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) => Rule.required()
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtitle',
          type: 'text',
          rows: 3,
          validation: (Rule) => Rule.required()
        }),
        defineField({
          name: 'researchCards',
          title: 'Research Cards',
          validation: (Rule) => Rule.required().max(3),
          type: 'array',
          of: [
            {
              name: 'researchCardObject',
              type: 'object',
              title: 'Research Card',
              preview: {
                select: {
                  media: 'logo',
                  title: 'title'
                }
              },
              fields: [
                defineField({
                  name: 'logo',
                  title: 'Logo',
                  type: 'imageWithMetadata'
                }),
                defineField({
                  name: 'date',
                  title: 'Date',
                  type: 'string',
                  validation: (Rule) => Rule.required()
                }),
                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                  validation: (Rule) => Rule.required()
                }),
                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'string',
                  validation: (Rule) => Rule.required()
                }),
                defineField({
                  name: 'href',
                  title: 'Href',
                  type: 'string',
                  validation: (Rule) => Rule.required()
                })
              ]
            }
          ]
        })
      ]
    }),
    // sanityPageSectionStatsList
    defineArrayMember({
      type: 'object',
      name: 'sanityPageSectionStatsList',
      title: 'Stats List',
      icon: BlockElementIcon,
      preview: {
        select: {
          isEnabled: 'isEnabled'
        },
        prepare({ isEnabled }) {
          return {
            title: 'Stats List',
            media: BlockElementIcon,
            isEnabled
          }
        }
      },
      components: {
        preview: CustomListPreview
      },
      fields: [
        defineField({
          name: 'isEnabled',
          type: 'boolean',
          description: 'If checked, this section will be shown on the page',
          initialValue: false
        }),
        defineField({
          name: 'statsList',
          type: 'array',
          of: [
            defineField({
              type: 'object',
              name: 'stat',
              title: 'Stat',
              fields: [
                defineField({
                  name: 'title',
                  type: 'string'
                }),
                defineField({
                  name: 'value',
                  type: 'string'
                })
              ]
            })
          ]
        })
      ]
    }),
    // sanityPageSectionTeam
    defineArrayMember({
      type: 'object',
      name: 'sanityPageSectionTeam',
      title: 'Team',
      icon: BlockElementIcon,
      preview: {
        select: {
          isEnabled: 'isEnabled'
        },
        prepare({ isEnabled }) {
          return {
            title: 'Team',
            media: BlockElementIcon,
            isEnabled
          }
        }
      },
      components: {
        preview: CustomListPreview
      },
      fields: [
        defineField({
          name: 'isEnabled',
          type: 'boolean',
          description: 'If checked, this section will be shown on the page',
          initialValue: false
        }),
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) => Rule.required()
        }),
        defineField({
          name: 'teamMembersList',
          title: 'Team Members',
          type: 'array',
          of: [
            defineField({
              name: 'teamMember',
              title: 'Team Member',
              type: 'reference',
              to: [{ type: 'teamMemberDocument' }]
            })
          ]
        })
      ]
    }),
    // sanityPageSectionTestimonial
    defineArrayMember({
      type: 'object',
      name: 'sanityPageSectionTestimonial',
      title: 'Testimonial',
      icon: BlockElementIcon,
      preview: {
        select: {
          subtitle: 'client',
          isEnabled: 'isEnabled'
        },
        prepare({ subtitle, isEnabled }) {
          return {
            title: 'Testimonial',
            subtitle,
            media: BlockElementIcon,
            isEnabled
          }
        }
      },
      components: {
        preview: CustomListPreview
      },
      fields: [
        defineField({
          name: 'isEnabled',
          type: 'boolean',
          description: 'If checked, this section will be shown on the page',
          initialValue: false
        }),
        defineField({
          name: 'client',
          title: 'Client',
          type: 'string',
          validation: (Rule) => Rule.required()
        }),
        defineField({
          name: 'quote',
          title: 'Quote',
          type: 'text',
          validation: (Rule) => Rule.required()
        }),
        defineField({
          name: 'logo',
          title: 'Logo',
          type: 'imageWithMetadata',
          validation: (Rule) => Rule.required()
        })
      ]
    }),
    // sanityPageSectionValues
    defineArrayMember({
      type: 'object',
      name: 'sanityPageSectionValues',
      title: 'Values',
      icon: BlockElementIcon,
      preview: {
        select: {
          isEnabled: 'isEnabled'
        },
        prepare: ({ isEnabled }) => ({
          title: 'Values',
          media: BlockElementIcon,
          isEnabled
        })
      },
      components: {
        preview: CustomListPreview
      },
      fields: [
        defineField({
          name: 'isEnabled',
          type: 'boolean',
          description: 'If checked, this section will be shown on the page',
          initialValue: false
        }),
        defineField({
          name: 'eyebrow',
          title: 'Eyebrow',
          type: 'string',
          validation: (Rule) => Rule.required()
        }),
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) => Rule.required()
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtitle',
          type: 'text',
          rows: 3,
          validation: (Rule) => Rule.required()
        }),
        defineField({
          name: 'image',
          title: 'Image',
          type: 'imageWithMetadata'
        }),
        defineField({
          name: 'valuesList',
          title: 'Values List',
          type: 'array',
          validation: (Rule) => Rule.required().max(4),
          of: [
            {
              type: 'object',
              name: 'value',
              fields: [
                {
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                  validation: (Rule) => Rule.required()
                },
                {
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                  rows: 3,
                  validation: (Rule) => Rule.required()
                }
              ]
            }
          ]
        })
      ]
    })
  ]
})
