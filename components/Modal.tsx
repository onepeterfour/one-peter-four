import { Dialog, Transition } from '@headlessui/react'
import { Dispatch, Fragment, SetStateAction, useRef } from 'react'
import { TypedObject } from 'sanity'
import { Button } from './Button'
import { PortableText } from './PortableText'
import { BookIcon } from './icons/BookIcon'

export const Modal = ({
  isOpen,
  setIsOpen,
  title,
  author,
  body,
  externalLink
}: {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  title: string
  author: string
  body: TypedObject[]
  externalLink: string
}) => {
  const cancelButtonRef = useRef(null)

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as='div'
        className='relative z-10'
        initialFocus={cancelButtonRef}
        onClose={setIsOpen}
      >
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
          <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6'>
                <div>
                  <div className='mx-auto flex h-12 w-12 items-center justify-center rounded-full'>
                    <BookIcon className='h-8 w-8' />
                  </div>
                  <div className='mt-3 text-center sm:mt-5'>
                    <Dialog.Title
                      as='h3'
                      className='font-display text-2xl font-semibold text-neutral-950'
                    >
                      {title}
                    </Dialog.Title>
                    <p className='mt-2 font-display text-sm font-semibold text-neutral-950'>
                      {author}
                    </p>
                  </div>
                </div>
                <div className='mt-6 text-base text-neutral-600'>
                  <PortableText value={body} />
                </div>
                <div className='mt-5 sm:mt-8 sm:flex sm:gap-3'>
                  <Button
                    type='button'
                    className='inline-flex w-full items-center justify-center border-2 border-neutral-950'
                    invert
                    onClick={() => setIsOpen(false)}
                  >
                    Cancel
                  </Button>
                  <a
                    target='_blank'
                    rel='noreferrer noopener'
                    type='button'
                    href={externalLink}
                    className='inline-flex w-full items-center justify-center rounded-full bg-neutral-950 px-4 py-1.5 text-sm font-semibold text-white transition hover:bg-neutral-800'
                    ref={cancelButtonRef}
                  >
                    Learn more
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
