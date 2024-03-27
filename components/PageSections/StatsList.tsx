import { Border } from '@/components/Border'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { SanityPageSectionStatsList } from '@/sanity/schemas/objects/pageSectionsArrayObject'
import React from 'react'

type StatsListItemProps = { label: string; value: string }

export const StatsListItem = ({ label, value }: StatsListItemProps) => {
  return (
    <Border as={FadeIn} position='left' className='flex flex-col-reverse pl-8'>
      <dt className='mt-2 text-base text-neutral-600'>{label}</dt>
      <dd className='font-display text-3xl font-semibold text-neutral-950 sm:text-4xl'>
        {value}
      </dd>
    </Border>
  )
}

type StatsListProps = SanityPageSectionStatsList &
  Omit<React.ComponentPropsWithoutRef<typeof FadeInStagger>, 'children'>

export const StatsList = ({ stats, ...props }: StatsListProps) => {
  return (
    <Container className='mt-24 sm:mt-32 lg:mt-40'>
      <FadeInStagger {...props}>
        {stats && (
          <dl className='grid grid-cols-1 gap-10 sm:grid-cols-2 lg:auto-cols-fr lg:grid-flow-col lg:grid-cols-none'>
            {stats.map((stat) => {
              return (
                <StatsListItem
                  key={stat._key}
                  value={stat.value}
                  label={stat.title}
                />
              )
            })}
          </dl>
        )}
      </FadeInStagger>
    </Container>
  )
}
