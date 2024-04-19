'use client'

import { FETCH_ARTICLE_BY_SLUG_QUERY } from '@/sanity/lib/queries'
import { ArticleDocument } from '@/sanity/schemas/documents/data/article'
import { QueryResponseInitial, useQuery } from '@sanity/react-loader'
import { QueryParams } from 'next-sanity'
import ArticlePage from './ArticlePage'

export default function ArticlePagePreview({
  initial,
  params,
  articles
}: {
  initial: QueryResponseInitial<ArticleDocument>
  params: QueryParams
  articles: ArticleDocument[]
}) {
  const { data } = useQuery<ArticleDocument | null>(
    FETCH_ARTICLE_BY_SLUG_QUERY(params.slug),
    params,
    { initial }
  )

  return data ? (
    <ArticlePage article={initial.data} articles={articles} params={params} />
  ) : (
    <div className='bg-red-100'>Article not found</div>
  )
}
