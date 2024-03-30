import { Border } from '@/components/Border'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import type { SanityPageSectionStatsList } from '@/sanity/schemas/objects/pageSections/types'
import React from 'react'

type StatsListItemProps = SanityPageSectionStatsList['statsList'][0]

export const StatsListItem = ({ title, value }: StatsListItemProps) => {
  return (
    <Border as={FadeIn} position='left' className='flex flex-col-reverse pl-8'>
      <dt className='mt-2 text-base text-neutral-600'>{title}</dt>
      <dd className='font-display text-3xl font-semibold text-neutral-950 sm:text-4xl'>
        {value}
      </dd>
    </Border>
  )
}

type StatsListProps = SanityPageSectionStatsList &
  Omit<React.ComponentPropsWithoutRef<typeof FadeInStagger>, 'children'>

export const StatsList = ({ statsList, ...props }: StatsListProps) => {
  return (
    <Container className='mt-24 sm:mt-32 lg:mt-40'>
      <FadeInStagger>
        {statsList && (
          <dl className='grid grid-cols-1 gap-10 sm:grid-cols-2 lg:auto-cols-fr lg:grid-flow-col lg:grid-cols-none'>
            {statsList.map((stat) => {
              return (
                <StatsListItem
                  key={stat._key}
                  value={stat.value}
                  title={stat.title}
                  {...props}
                />
              )
            })}
          </dl>
        )}
      </FadeInStagger>
    </Container>
  )
}
