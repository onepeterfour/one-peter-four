import { CaseStudy, FooterData, NavData, WithHrefMetadata } from './types'

export const navData: NavData = [
  { href: '/', label: 'Home' },
  { href: '/team', label: 'Team' },
  { href: '/research', label: 'Research' },
  { href: '/services', label: 'Services' },
  { href: '/learning', label: 'Learning' },
  { href: '/partners', label: 'Partners' },
  { href: '/contact', label: 'Contact' }
]

export const footerData: FooterData = [
  [
    { href: '/team', label: 'Team' },
    { href: '/research', label: 'Research' },
    { href: '/services', label: 'Services' }
  ],
  [
    { href: '/learning', label: 'Learning' },
    { href: '/partners', label: 'Partners' },
    { href: '/contact', label: 'Contact' }
  ]
]

export const caseStudies: Array<WithHrefMetadata<CaseStudy>> = [
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
