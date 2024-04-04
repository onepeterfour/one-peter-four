import { Border } from '@/components/Border'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import {
  StatisticListSectionSchema,
  StatisticSchema
} from '@/sanity/schemas/objects/pageSections/statisticListSection'

import React from 'react'

export const StatisticListItem = ({ title, value }: StatisticSchema) => {
  return (
    <Border as={FadeIn} position='left' className='flex flex-col-reverse pl-8'>
      <dt className='mt-2 text-base text-neutral-600'>{title}</dt>
      <dd className='font-display text-3xl font-semibold text-neutral-950 sm:text-4xl'>
        {value}
      </dd>
    </Border>
  )
}

type StatsListProps = StatisticListSectionSchema &
  Omit<React.ComponentPropsWithoutRef<typeof FadeInStagger>, 'children'>

export const StatisticListSection = ({ statisticList }: StatsListProps) => {
  return (
    <Container className='mt-24 sm:mt-32 lg:mt-40'>
      <FadeInStagger>
        {statisticList && (
          <dl className='grid grid-cols-1 gap-10 sm:grid-cols-2 lg:auto-cols-fr lg:grid-flow-col lg:grid-cols-none'>
            {statisticList.map((statistic) => {
              return <StatisticListItem key={statistic._key} {...statistic} />
            })}
          </dl>
        )}
      </FadeInStagger>
    </Container>
  )
}
