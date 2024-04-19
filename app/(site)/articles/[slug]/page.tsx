import ArticlePage from '@/components/ArticlePage'
import ArticlePagePreview from '@/components/ArticlePagePreview'
import { client } from '@/sanity/lib/client'
import {
  FETCH_ARTICLES_QUERY,
  FETCH_ARTICLE_BY_SLUG_QUERY
} from '@/sanity/lib/queries'
import { loadQuery } from '@/sanity/lib/store'
import { ArticleDocument } from '@/sanity/schemas/documents/data/article'
import { Metadata } from 'next'
import { QueryParams } from 'next-sanity'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const articles = await client.fetch<ArticleDocument[]>(FETCH_ARTICLES_QUERY)
  return articles?.map((article) => ({
    slug: article?.slug?.current
  }))
}

export async function generateMetadata({
  params
}: {
  params: QueryParams
}): Promise<Metadata> {
  const initial = await loadQuery<ArticleDocument>(
    FETCH_ARTICLE_BY_SLUG_QUERY(params.slug),
    params,
    {
      perspective: draftMode().isEnabled ? 'previewDrafts' : 'published'
    }
  )
  return {
    title: `${initial?.data?.title} - 1P4`,
    description: initial?.data?.description
  }
}

export default async function Page({ params }: { params: QueryParams }) {
  const initial = await loadQuery<ArticleDocument>(
    FETCH_ARTICLE_BY_SLUG_QUERY(params.slug),
    params,
    {
      perspective: draftMode().isEnabled ? 'previewDrafts' : 'published'
    }
  )

  const articlesInitial =
    await loadQuery<ArticleDocument[]>(FETCH_ARTICLES_QUERY)

  if (!initial?.data) {
    notFound()
  }

  return draftMode().isEnabled ? (
    <ArticlePagePreview
      articles={articlesInitial.data}
      initial={initial}
      params={params}
    />
  ) : (
    <ArticlePage
      article={initial.data}
      articles={articlesInitial.data}
      params={params}
    />
  )
}
