import imageAngelaFisher from '@/public/images/team/angela-fisher.jpg'
import imageBenjaminRussel from '@/public/images/team/benjamin-russel.jpg'
import imageBlakeReid from '@/public/images/team/blake-reid.jpg'
import imageChelseaHagon from '@/public/images/team/chelsea-hagon.jpg'
import imageDriesVincent from '@/public/images/team/dries-vincent.jpg'
import imageEmmaDorsey from '@/public/images/team/emma-dorsey.jpg'
import imageJeffreyWebb from '@/public/images/team/jeffrey-webb.jpg'
import imageKathrynMurphy from '@/public/images/team/kathryn-murphy.jpg'
import imageLeonardKrasner from '@/public/images/team/leonard-krasner.jpg'
import imageLeslieAlexander from '@/public/images/team/leslie-alexander.jpg'
import imageMichaelFoster from '@/public/images/team/michael-foster.jpg'
import imageWhitneyFrancis from '@/public/images/team/whitney-francis.jpg'
import { Partner, WithHrefMetadata } from './types'
import { HeaderNavigationQueryResult } from './types/sanity/queries'

export const headerNavigation: HeaderNavigationQueryResult = {
  _createdAt: '2024-03-05T19:53:39Z',
  _rev: 'wud1i9YDLmNsV9RQhqkCNh',
  _type: 'navigation',
  _id: 'navigation',
  rows: [
    {
      _type: 'navigationRow',
      _key: 'a0862f5c3e81',
      items: [
        {
          path: '/team',
          _type: 'navigationItem',
          label: 'Team',
          _key: 'a0134e9db4be'
        },
        {
          _type: 'navigationItem',
          label: 'Services',
          _key: '216e22c203a2',
          path: '/services'
        }
      ],
      order: 1
    },
    {
      _type: 'navigationRow',
      _key: '166ab848cb24',
      items: [
        {
          path: '/articles',
          _type: 'navigationItem',
          label: 'Articles',
          _key: '2882ae3d1148'
        },
        {
          path: '/case-studies',
          _type: 'navigationItem',
          label: 'Case Studies',
          _key: 'edef7324e11basd'
        }
      ],
      order: 2
    },
    {
      order: 3,
      _type: 'navigationRow',
      _key: 'e1240dc28c7c',
      items: [
        {
          path: '/learning',
          _type: 'navigationItem',
          label: 'Library',
          _key: 'd5dc08f76cd4'
        },
        {
          path: '/partners',
          _type: 'navigationItem',
          label: 'Partners',
          _key: 'edef7324e11b'
        }
      ]
    }
  ],
  _updatedAt: '2024-03-21T07:19:45Z'
}

export const partners: Array<WithHrefMetadata<Partner>> = [
  {
    client: 'FamilyFund',
    title: 'Skip the bank, borrow from those you trust',
    description:
      'FamilyFund is a crowdfunding platform for friends and family. Allowing users to take personal loans from their network without a traditional financial institution.',
    summary: [
      'FamilyFund is a crowdfunding platform for friends and family. Allowing users to take personal loans from their network without a traditional financial institution.',
      'We developed a custom CMS to power their blog with and optimised their site to rank higher for the keywords “Gary Vee” and “Tony Robbins”.'
    ],
    logo: {
      src: '/_next/static/media/logomark-dark.4d2947be.svg',
      height: 36,
      width: 36,
      blurWidth: 0,
      blurHeight: 0
    },
    image: {
      src: {
        src: '/_next/static/media/hero.3cc9a6af.jpg',
        height: 3117,
        width: 3648,
        blurDataURL:
          '/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.3cc9a6af.jpg&w=8&q=70',
        blurWidth: 8,
        blurHeight: 7
      }
    },
    date: '2023-01',
    service: 'Web development, CMS',
    testimonial: {
      author: {
        name: 'Debra Fiscal',
        role: 'CEO of FamilyFund'
      },
      content:
        'Working with Studio, we felt more like a partner than a customer. They really resonated with our mission to change the way people convince their parents to cash out their pensions.'
    },
    metadata: {
      client: 'FamilyFund',
      title: 'Skip the bank, borrow from those you trust',
      description:
        'FamilyFund is a crowdfunding platform for friends and family. Allowing users to take personal loans from their network without a traditional financial institution.',
      summary: [
        'FamilyFund is a crowdfunding platform for friends and family. Allowing users to take personal loans from their network without a traditional financial institution.',
        'We developed a custom CMS to power their blog with and optimised their site to rank higher for the keywords “Gary Vee” and “Tony Robbins”.'
      ],
      logo: {
        src: '/_next/static/media/logomark-dark.4d2947be.svg',
        height: 36,
        width: 36,
        blurWidth: 0,
        blurHeight: 0
      },
      image: {
        src: {
          src: '/_next/static/media/hero.3cc9a6af.jpg',
          height: 3117,
          width: 3648,
          blurDataURL:
            '/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.3cc9a6af.jpg&w=8&q=70',
          blurWidth: 8,
          blurHeight: 7
        }
      },
      date: '2023-01',
      service: 'Web development, CMS',
      testimonial: {
        author: {
          name: 'Debra Fiscal',
          role: 'CEO of FamilyFund'
        },
        content:
          'Working with Studio, we felt more like a partner than a customer. They really resonated with our mission to change the way people convince their parents to cash out their pensions.'
      }
    },
    href: '/partners/family-fund'
  },
  {
    client: 'Unseal',
    title: 'Get a hodl of your health',
    description:
      'Unseal is the first NFT platform where users can mint and trade NFTs of their own personal health records, allowing them to take control of their data.',
    summary: [
      'Unseal is the first NFT platform where users can mint and trade NFTs of their own personal health records, allowing them to take control of their data.',
      'We built out the blockchain infrastructure that supports Unseal. Unfortunately, we took a massive loss on this project when Unseal’s cryptocurrency, PlaceboCoin, went to zero.'
    ],
    logo: {
      src: '/_next/static/media/logomark-dark.73187f97.svg',
      height: 36,
      width: 36,
      blurWidth: 0,
      blurHeight: 0
    },
    image: {
      src: {
        src: '/_next/static/media/hero.5a19c176.jpg',
        height: 3117,
        width: 3648,
        blurDataURL:
          '/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.5a19c176.jpg&w=8&q=70',
        blurWidth: 8,
        blurHeight: 7
      }
    },
    date: '2022-10',
    service: 'Blockchain development',
    testimonial: {
      author: {
        name: 'Emily Selman',
        role: 'Head of Engineering at Unseal'
      },
      content:
        'Studio did an amazing job building out our core blockchain infrastructure and I’m sure once PlaceboCoin rallies they’ll be able to finish the project.'
    },
    metadata: {
      client: 'Unseal',
      title: 'Get a hodl of your health',
      description:
        'Unseal is the first NFT platform where users can mint and trade NFTs of their own personal health records, allowing them to take control of their data.',
      summary: [
        'Unseal is the first NFT platform where users can mint and trade NFTs of their own personal health records, allowing them to take control of their data.',
        'We built out the blockchain infrastructure that supports Unseal. Unfortunately, we took a massive loss on this project when Unseal’s cryptocurrency, PlaceboCoin, went to zero.'
      ],
      logo: {
        src: '/_next/static/media/logomark-dark.73187f97.svg',
        height: 36,
        width: 36,
        blurWidth: 0,
        blurHeight: 0
      },
      image: {
        src: {
          src: '/_next/static/media/hero.5a19c176.jpg',
          height: 3117,
          width: 3648,
          blurDataURL:
            '/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.5a19c176.jpg&w=8&q=70',
          blurWidth: 8,
          blurHeight: 7
        }
      },
      date: '2022-10',
      service: 'Blockchain development',
      testimonial: {
        author: {
          name: 'Emily Selman',
          role: 'Head of Engineering at Unseal'
        },
        content:
          'Studio did an amazing job building out our core blockchain infrastructure and I’m sure once PlaceboCoin rallies they’ll be able to finish the project.'
      }
    },
    href: '/partners/unseal'
  },
  {
    client: 'Phobia',
    title: 'Overcome your fears, find your match',
    description:
      'Find love in the face of fear — Phobia is a dating app that matches users based on their mutual phobias so they can be scared together.',
    summary: [
      'Find love in the face of fear — Phobia is a dating app that matches users based on their mutual phobias so they can be scared together.',
      'We worked with Phobia to develop a new onboarding flow. A user is shown pictures of common phobias and we use the microphone to detect which ones make them scream, feeding the results into the matching algorithm.'
    ],
    logo: {
      src: '/_next/static/media/logomark-dark.00d7d7b3.svg',
      height: 36,
      width: 36,
      blurWidth: 0,
      blurHeight: 0
    },
    image: {
      src: {
        src: '/_next/static/media/hero.814cd572.jpg',
        height: 3117,
        width: 3648,
        blurDataURL:
          '/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.814cd572.jpg&w=8&q=70',
        blurWidth: 8,
        blurHeight: 7
      }
    },
    date: '2022-06',
    service: 'App development',
    testimonial: {
      author: {
        name: 'Jenny Wilson',
        role: 'CPO of Phobia'
      },
      content:
        'The team at Studio went above and beyond with our onboarding, even finding a way to access the user’s microphone without triggering one of those annoying permission dialogs.'
    },
    metadata: {
      client: 'Phobia',
      title: 'Overcome your fears, find your match',
      description:
        'Find love in the face of fear — Phobia is a dating app that matches users based on their mutual phobias so they can be scared together.',
      summary: [
        'Find love in the face of fear — Phobia is a dating app that matches users based on their mutual phobias so they can be scared together.',
        'We worked with Phobia to develop a new onboarding flow. A user is shown pictures of common phobias and we use the microphone to detect which ones make them scream, feeding the results into the matching algorithm.'
      ],
      logo: {
        src: '/_next/static/media/logomark-dark.00d7d7b3.svg',
        height: 36,
        width: 36,
        blurWidth: 0,
        blurHeight: 0
      },
      image: {
        src: {
          src: '/_next/static/media/hero.814cd572.jpg',
          height: 3117,
          width: 3648,
          blurDataURL:
            '/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.814cd572.jpg&w=8&q=70',
          blurWidth: 8,
          blurHeight: 7
        }
      },
      date: '2022-06',
      service: 'App development',
      testimonial: {
        author: {
          name: 'Jenny Wilson',
          role: 'CPO of Phobia'
        },
        content:
          'The team at Studio went above and beyond with our onboarding, even finding a way to access the user’s microphone without triggering one of those annoying permission dialogs.'
      }
    },
    href: '/partners/phobia'
  }
]

export const team = [
  {
    title: 'Leadership',
    people: [
      {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        image: { src: imageLeslieAlexander }
      },
      {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        image: { src: imageMichaelFoster }
      },
      {
        name: 'Dries Vincent',
        role: 'Partner & Business Relations',
        image: { src: imageDriesVincent }
      }
    ]
  },
  {
    title: 'Team',
    people: [
      {
        name: 'Chelsea Hagon',
        role: 'Senior Developer',
        image: { src: imageChelseaHagon }
      },
      {
        name: 'Emma Dorsey',
        role: 'Senior Designer',
        image: { src: imageEmmaDorsey }
      },
      {
        name: 'Leonard Krasner',
        role: 'VP, User Experience',
        image: { src: imageLeonardKrasner }
      },
      {
        name: 'Blake Reid',
        role: 'Junior Copywriter',
        image: { src: imageBlakeReid }
      },
      {
        name: 'Kathryn Murphy',
        role: 'VP, Human Resources',
        image: { src: imageKathrynMurphy }
      },
      {
        name: 'Whitney Francis',
        role: 'Content Specialist',
        image: { src: imageWhitneyFrancis }
      },
      {
        name: 'Jeffrey Webb',
        role: 'Account Coordinator',
        image: { src: imageJeffreyWebb }
      },
      {
        name: 'Benjamin Russel',
        role: 'Senior Developer',
        image: { src: imageBenjaminRussel }
      },
      {
        name: 'Angela Fisher',
        role: 'Front-end Developer',
        image: { src: imageAngelaFisher }
      }
    ]
  }
]
