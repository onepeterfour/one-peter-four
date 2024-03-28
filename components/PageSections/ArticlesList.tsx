import { Container } from '@/components/Container'
import type { SanityPageSectionArticlesList } from '@/sanity/schemas/objects/pageSectionsArrayObject/types'
import { ArticleCard } from '../ArticleCard'

export const Articles = ({
  articlesList
}: Omit<SanityPageSectionArticlesList, 'isEnabled'>) => {
  return (
    <Container className='mt-24 sm:mt-32 lg:mt-40'>
      <div className='space-y-24 lg:space-y-32'>
        {articlesList &&
          articlesList.map((article) => {
            return <ArticleCard key={article?._id} {...article} />
          })}
      </div>
    </Container>
  )
}
