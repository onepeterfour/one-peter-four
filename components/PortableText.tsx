import { PortableText as Portable } from '@portabletext/react'
import { ComponentPropsWithRef } from 'react'

export const PortableText = ({
  value
}: ComponentPropsWithRef<typeof Portable>) => {
  return <Portable value={value} />
}
