import { type SanityPageSectionTypeNames } from '@/types/sanity/objects/pageSections'
import { type BasePageQueryResult } from '@/types/sanity/queries'
import { ComponentType } from 'react'
import { Clients } from './Clients'
import { Culture } from './Culture'
import { Hero } from './Hero'
import { HeroWithoutImage } from './HeroWithoutImage'
import { PageIntro } from './PageIntro'
import { StatsList } from './StatsList'

const Sections: Record<SanityPageSectionTypeNames, ComponentType<any>> = {
  sanityPageSectionHeroWithoutImage: HeroWithoutImage,
  sanityPageSectionPageIntro: PageIntro,
  sanityPageSectionStatsList: StatsList,
  sanityPageSectionCulture: Culture,
  sanityPageSectionClients: Clients,
  sanityPageSectionHeroWithImage: Hero
}

type PageSectionsProps = {
  pageSections?: BasePageQueryResult['pageSections']
}

export const PageSections = ({ pageSections }: PageSectionsProps) => {
  return (
    <>
      {pageSections?.map((section) => {
        if (!section?.isShown) {
          return null
        }
        const SectionComponent = Sections[section?._type] || null
        return <SectionComponent key={section._key} {...section} />
      })}
    </>
  )
}
