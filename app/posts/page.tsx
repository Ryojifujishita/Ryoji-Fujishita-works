import Link from 'next/link'
import { client } from '../../tina/__generated__/client'

export default async function PostsPage() {
  try {
    const { data } = await client.queries.pageConnection()

    if (!data?.pageConnection?.edges?.length) {
      return (
        <div>
          <h1>Posts</h1>
          <p>No posts available at the moment.</p>
        </div>
      )
    }

    return (
      <div>
        <h1>Posts</h1>
        <div>
          {data.pageConnection.edges.map((post) => (
            post?.node && (
              <div key={post.node._sys.filename}>
                <Link href={`/posts/${post.node._sys.filename}`}>
                  {post.node._sys.filename}
                </Link>
              </div>
            )
          ))}
        </div>
      </div>
    )
  } catch (error) {
    console.error('Error fetching posts:', error)
    return (
      <div>
        <h1>Posts</h1>
        <p>Failed to load posts. Please try again later.</p>
      </div>
    )
  }
} 