import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { FadeIn } from '@/components/FadeIn'
import { formatDateString } from '@/lib/formatDate'
import { urlForImage } from '@/sanity/lib/image'
import type { ArticleListSectionSchema } from '@/sanity/schemas/objects/pageSections/articleListSection'

import Image from 'next/image'
import Link from 'next/link'

type ArticleCardProps = Omit<
  ArticleListSectionSchema['articleList'][0],
  'isEnabled'
>

export const ArticleCard = ({
  author,
  _id,
  _createdAt,
  description,
  slug,
  title
}: ArticleCardProps) => {
  const articleLink = `/articles/${slug?.current}`
  return (
    <FadeIn key={_id}>
      <div>
        <Border className='pt-16'>
          <div className='relative lg:-mx-4 lg:flex lg:justify-end'>
            <div className='pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0'>
              <h2 className='font-display text-2xl font-semibold text-neutral-950'>
                <Link href={articleLink}>{title}</Link>
              </h2>
              <dl className='lg:absolute lg:left-0 lg:top-0 lg:w-1/3 lg:px-4'>
                <dt className='sr-only'>Published</dt>
                <dd className='absolute left-0 top-0 text-sm text-neutral-950 lg:static'>
                  <time dateTime={_createdAt}>
                    {formatDateString(_createdAt)}
                  </time>
                </dd>
                <dt className='sr-only'>Author</dt>
                <dd className='mt-6 flex gap-x-4'>
                  <div className='flex-none overflow-hidden rounded-xl bg-neutral-100'>
                    <Image
                      alt={author?.image?.alt}
                      src={urlForImage(author?.image)}
                      height={50}
                      width={50}
                      className='h-12 w-12 object-cover grayscale'
                    />
                  </div>
                  <div className='text-sm text-neutral-950'>
                    <div className='font-semibold'>{author?.name}</div>
                    <div>{author?.role}</div>
                  </div>
                </dd>
              </dl>
              <p className='mt-6 max-w-2xl text-base text-neutral-600'>
                {description}
              </p>
              <Button
                href={articleLink}
                aria-label={`Read more: ${title}`}
                className='mt-8'
              >
                Read more
              </Button>
            </div>
          </div>
        </Border>
      </div>
    </FadeIn>
  )
}
