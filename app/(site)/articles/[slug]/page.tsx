import { Container } from '@/components/Container'
import { PortableText } from '@/components/PortableText'
import { formatDateString } from '@/lib/formatDate'
import {
  fetchArticleBySlug,
  fetchArticles
} from '@/sanity/schemas/documents/data/article'
import { QueryParams } from 'next-sanity'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const articles = await fetchArticles()
  return articles?.map((article) => ({
    slug: article?.slug?.current
  }))
}

export default async function Page({ params }: { params: QueryParams }) {
  const article = await fetchArticleBySlug(params?.slug)

  if (!article) {
    notFound()
  }

  return (
    <Container className='mt-24 sm:mt-32 lg:mt-40'>
      <article className='prose mx-auto'>
        <p className='text-center text-sm'>
          {formatDateString(article?._createdAt)}
        </p>
        <h1 className='text-center font-sans text-4xl font-extrabold'>
          {article?.title}
        </h1>
        <p className='text-center text-sm font-bold'>{`By ${article?.author?.name}, ${article?.author?.role}`}</p>
        <PortableText value={article?.body} />
      </article>
    </Container>
  )
}
