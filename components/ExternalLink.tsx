import Link, { LinkProps } from 'next/link'
import { PropsWithChildren } from 'react'

export const ExternalLink = (
  props: PropsWithChildren<LinkProps> & { className: string }
) => {
  return (
    <Link href={props.href} passHref legacyBehavior>
      <a className={props.className} target='_blank' rel='noopener noreferrer'>
        {props.children}
      </a>
    </Link>
  )
}
