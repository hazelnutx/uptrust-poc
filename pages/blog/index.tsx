import PostContainer from '../../src/components/Blog/PostContainer'
import { client } from '../../src/contentful'
import DefaultLayout from '../../src/layout/DefaultLayout'

export async function getStaticProps() {
  const res = await client.getEntries({
    content_type: 'uptrust',
  })
  return {
    props: {
      posts: res.items,
    },
  }
}

export default function Blog({ posts }) {
  return (
    <DefaultLayout>
      <h1 className='text-5xl'>Blog</h1>
      <div className='grid grid-cols-3 gap-3 '>
        {posts.map((post) => (
          <PostContainer
            key={post.sys.id}
            title={post.fields.title}
            thumbnail={post.fields.thumbnail.fields.file.url}
            slug={post.fields.slug}
            tags={post.fields.tags}
          />
        ))}
      </div>
    </DefaultLayout>
  )
}
