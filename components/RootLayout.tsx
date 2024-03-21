'use client'

import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Navigation } from '@/components/Navigation'
import { Offices } from '@/components/Offices'
import { SocialMedia } from '@/components/SocialMedia'
import { MenuIcon } from '@/components/icons/MenuIcon'
import { XIcon } from '@/components/icons/XIcon'
import { HeaderNavigationQueryResult } from '@/types/sanity/queries'
import { MotionConfig, motion, useReducedMotion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import React, {
  PropsWithChildren,
  useEffect,
  useId,
  useRef,
  useState
} from 'react'

type RootLayoutInnerProps = PropsWithChildren<{
  headerNavigation: HeaderNavigationQueryResult
}>
const RootLayoutInner = ({
  children,
  headerNavigation
}: RootLayoutInnerProps) => {
  let panelId = useId()
  let [expanded, setExpanded] = useState(false)
  let openRef = useRef<React.ElementRef<'button'>>(null)
  let closeRef = useRef<React.ElementRef<'button'>>(null)
  let navRef = useRef<React.ElementRef<'div'>>(null)
  let shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (
        event.target instanceof HTMLElement &&
        event.target.closest('a')?.href === window.location.href
      ) {
        setExpanded(false)
      }
    }

    window.addEventListener('click', onClick)

    return () => {
      window.removeEventListener('click', onClick)
    }
  }, [])

  return (
    <MotionConfig transition={shouldReduceMotion ? { duration: 0 } : undefined}>
      <header>
        <div
          className='absolute left-0 right-0 top-2 z-40 pt-14'
          aria-hidden={expanded ? 'true' : undefined}
          // @ts-ignore (https://github.com/facebook/react/issues/17157)
          inert={expanded ? '' : undefined}
        >
          <Header
            panelId={panelId}
            icon={MenuIcon}
            toggleRef={openRef}
            expanded={expanded}
            onToggle={() => {
              setExpanded((expanded) => !expanded)
              window.setTimeout(
                () => closeRef.current?.focus({ preventScroll: true })
              )
            }}
          />
        </div>

        <motion.div
          layout
          id={panelId}
          style={{ height: expanded ? 'auto' : '0.5rem' }}
          className='relative z-50 overflow-hidden bg-neutral-950 pt-2'
          aria-hidden={expanded ? undefined : 'true'}
          // @ts-ignore (https://github.com/facebook/react/issues/17157)
          inert={expanded ? undefined : ''}
        >
          <motion.div layout className='bg-neutral-800'>
            <div ref={navRef} className='bg-neutral-950 pb-16 pt-14'>
              <Header
                invert
                panelId={panelId}
                icon={XIcon}
                toggleRef={closeRef}
                expanded={expanded}
                onToggle={() => {
                  setExpanded((expanded) => !expanded)
                  window.setTimeout(
                    () => openRef.current?.focus({ preventScroll: true })
                  )
                }}
              />
            </div>
            <Navigation headerNavigation={headerNavigation} />
            <div className='relative bg-neutral-950 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-neutral-800'>
              <Container>
                <div className='grid grid-cols-1 gap-y-10 pb-16 pt-10 sm:grid-cols-2 sm:pt-16'>
                  <div>
                    <h2 className='font-display text-base font-semibold text-white'>
                      Our office
                    </h2>
                    <Offices
                      invert
                      className='mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2'
                    />
                  </div>
                  <div className='sm:border-l sm:border-transparent sm:pl-16'>
                    <h2 className='font-display text-base font-semibold text-white'>
                      Follow us
                    </h2>
                    <SocialMedia className='mt-6' invert />
                  </div>
                </div>
              </Container>
            </div>
          </motion.div>
        </motion.div>
      </header>

      <motion.div
        layout
        style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
        className='relative flex flex-auto overflow-hidden bg-white pt-14'
      >
        <motion.div
          layout
          className='relative isolate flex w-full flex-col pt-9'
        >
          <main className='w-full flex-auto'>{children}</main>
          <Footer />
        </motion.div>
      </motion.div>
    </MotionConfig>
  )
}

type RootLayoutProps = PropsWithChildren<{
  headerNavigation: HeaderNavigationQueryResult
}>
export function RootLayout({ children, headerNavigation }: RootLayoutProps) {
  let pathname = usePathname()

  return (
    <RootLayoutInner headerNavigation={headerNavigation} key={pathname}>
      {children}
    </RootLayoutInner>
  )
}
