'use client'
import { LearningResourceDocument } from '@/sanity/schemas/documents/data/learningResource'
import { LearningResourceListSectionSchema } from '@/sanity/schemas/objects/pageSections/learningResourceListSection'
import { Fragment, useState } from 'react'
import { Container } from '../Container'
import { FadeIn, FadeInStagger } from '../FadeIn'
import { Modal } from '../Modal'
import { BookIcon } from '../icons/BookIcon'

export const LearningResourceListSection = ({
  learningResourceList
}: Omit<LearningResourceListSectionSchema, 'isEnabled'>) => {
  return (
    <Container className='mt-24 sm:mt-32 lg:mt-40'>
      <FadeInStagger className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
        {learningResourceList.map((resource) => (
          <LearningResourceCard key={resource._id} resource={resource} />
        ))}
      </FadeInStagger>
    </Container>
  )
}

const LearningResourceCard = ({
  resource
}: {
  resource: LearningResourceDocument
}) => {
  const [open, setOpen] = useState(false)
  return (
    <Fragment>
      <Modal
        isOpen={open}
        setIsOpen={setOpen}
        title={resource.title}
        author={resource.author}
        body={resource.body}
        externalLink={resource.externalLink}
      />
      <FadeIn className='flex'>
        <article
          onClick={() => setOpen(true)}
          className='relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8'
        >
          <h3>
            <span className='absolute inset-0 rounded-3xl' />
            <BookIcon className='h-8 w-8' />
          </h3>
          <p className='mt-4 font-display text-2xl font-semibold text-neutral-950'>
            {resource.title}
          </p>
          <p className='mt-2 font-display text-sm font-semibold text-neutral-950'>
            {resource.author}
          </p>
          <p className='mt-4 text-base text-neutral-600'>
            {resource.description}
          </p>
        </article>
      </FadeIn>
    </Fragment>
  )
}
