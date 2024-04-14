import clsx from 'clsx'
import Link from 'next/link'
import { LinkedInIcon } from './icons/LinkedInIcon'
import { TwitterIcon } from './icons/TwitterIcon'
import { YouTubeIcon } from './icons/YouTubeIcon'

export const socialMediaProfiles = [
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/peter-lawrence-1a374786',
    icon: LinkedInIcon
  },
  { title: 'X (Twitter)', href: 'https://www.twitter.com', icon: TwitterIcon },
  {
    title: 'YouTube',
    href: 'https://www.youtube.com/@1peter4YT',
    icon: YouTubeIcon
  }
]

export function SocialMedia({
  className,
  invert = false
}: {
  className?: string
  invert?: boolean
}) {
  return (
    <ul
      role='list'
      className={clsx(
        'flex items-center gap-x-10',
        invert ? 'text-white' : 'text-neutral-950',
        className
      )}
    >
      {socialMediaProfiles.map((socialMediaProfile) => (
        <li key={socialMediaProfile.title}>
          <Link passHref legacyBehavior href={socialMediaProfile.href}>
            <a
              aria-label={socialMediaProfile.title}
              className={clsx(
                'transition',
                invert ? 'hover:text-neutral-200' : 'hover:text-neutral-700'
              )}
              target='_blank'
              rel='noopener noreferrer'
            >
              <socialMediaProfile.icon className='h-6 w-6 fill-current' />
            </a>
          </Link>
        </li>
      ))}
    </ul>
  )
}
