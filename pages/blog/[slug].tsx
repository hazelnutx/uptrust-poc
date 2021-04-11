import { client } from '../../src/contentful'
import styled from '@emotion/styled'
import Image from 'next/image'
import DefaultLayout from '../../src/layout/DefaultLayout'

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: 'uptrust',
  })
  const paths = res.items.map((item: any) => {
    return {
      params: {
        slug: item.fields.slug,
      },
    }
  })
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: 'uptrust',
    'fields.slug': params.slug,
  })
  return {
    props: {
      post: items[0],
    },
  }
}

export default function BlogSlug({ post }) {
  return (
    <DefaultLayout thumbnail={true}>
      <div className='h-72 w-full relative'>
        <Image
          src={`https:${post.fields.thumbnail.fields.file.url}`}
          className='rounded-md'
          layout='fill'
          objectFit='cover'
          sizes='(max-width: 600px) 100vw, (max-width: 1023px) 48vw, 23vw'
        />
        <Title className='text-5xl font-semibold'>{post.fields.title}</Title>
      </div>
      <main>
        <p>{post.fields.description}</p>
      </main>
    </DefaultLayout>
  )
}
const Title = styled.h1`
  position: relative;
  top: 100px;
  color: white;
`
