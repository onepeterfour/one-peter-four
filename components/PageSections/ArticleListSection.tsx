import { Container } from '@/components/Container'

import type { ArticleListSectionSchema } from '@/sanity/schemas/objects/pageSections/articleListSection'
import { ArticleCard } from '../ArticleCard'

export const ArticleListSection = ({
  articleList,
  eyebrow
}: Omit<ArticleListSectionSchema, 'isEnabled'>) => {
  return (
    <Container className='mt-24 sm:mt-32 lg:mt-40'>
      {eyebrow && (
        <span className='mb-6 block font-display text-base font-semibold text-neutral-950'>
          {eyebrow}
        </span>
      )}
      <div className='space-y-24 lg:space-y-32'>
        {articleList &&
          articleList.map((article) => {
            return <ArticleCard key={article?._id} {...article} />
          })}
      </div>
    </Container>
  )
}
