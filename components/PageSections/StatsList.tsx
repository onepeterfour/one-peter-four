import { Border } from '@/components/Border'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { StatsListType } from '@/types'
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

type StatsListProps = StatsListType &
  Omit<React.ComponentPropsWithoutRef<typeof FadeInStagger>, 'children'>

export const StatsList = ({
  stat_1,
  stat_2,
  stat_3,
  ...props
}: StatsListProps) => {
  return (
    <Container className='mt-24 sm:mt-32 lg:mt-40'>
      <FadeInStagger {...props}>
        <dl className='grid grid-cols-1 gap-10 sm:grid-cols-2 lg:auto-cols-fr lg:grid-flow-col lg:grid-cols-none'>
          {stat_1 && (
            <StatsListItem value={stat_1?.value} label={stat_1?.title} />
          )}
          {stat_2 && (
            <StatsListItem value={stat_2?.value} label={stat_2?.title} />
          )}
          {stat_3 && (
            <StatsListItem value={stat_3?.value} label={stat_3?.title} />
          )}
        </dl>
      </FadeInStagger>
    </Container>
  )
}
