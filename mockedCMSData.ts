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
