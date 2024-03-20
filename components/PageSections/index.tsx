import {
  PageSectionQueryResult,
  type BasePageQueryResult
} from '@/types/sanity/queries'
import { ComponentType } from 'react'
import { CallToAction } from './CallToAction'
import { Clients } from './Clients'
import { Culture } from './Culture'
import { Hero } from './Hero'
import { HeroWithoutImage } from './HeroWithoutImage'
import { PageIntro } from './PageIntro'
import { ResearchCards } from './Research'
import { StatsList } from './StatsList'

const Sections: Record<PageSectionQueryResult['_type'], ComponentType<any>> = {
  sanityPageSectionHeroWithoutImage: HeroWithoutImage,
  sanityPageSectionPageIntro: PageIntro,
  sanityPageSectionStatsList: StatsList,
  sanityPageSectionCulture: Culture,
  sanityPageSectionClients: Clients,
  sanityPageSectionHeroWithImage: Hero,
  sanityPageSectionCallToAction: CallToAction,
  sanityPageSectionResearchCards: ResearchCards
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
