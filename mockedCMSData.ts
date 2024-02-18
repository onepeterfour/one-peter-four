import { FooterData, NavData } from './types'

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
