import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { PortableText } from '@/components/PortableText'
import { formatDateString } from '@/lib/formatDate'
import {
  fetchArticleBySlug,
  fetchArticles
} from '@/sanity/schemas/documents/data/article'
import { ArchiveIcon } from '@sanity/icons'
import { QueryParams } from 'next-sanity'
import Link from 'next/link'
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
        {article?.file?.url && (
          <Link
            href={`${article.file.url}?dl=`}
            className='flex items-center justify-center gap-2 text-sm'
          >
            <span>Download</span>
            <span>
              <ArchiveIcon className='text-sm' />
            </span>
          </Link>
        )}
        <PortableText value={article?.body} />
      </article>
      <div className='mt-8 text-center'>
        <Button href='/articles'>Back</Button>
      </div>
    </Container>
  )
}
