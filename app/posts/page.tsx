import Link from 'next/link'
import { client } from '../../tina/__generated__/client'
import type { PageConnectionQuery } from '../../tina/__generated__/types'

export default async function PostsPage() {
  const { data } = await client.queries.pageConnection()

  return (
    <div>
      <h1>Posts</h1>
      <div>
        {data.pageConnection.edges?.map((post) => (
          <div key={post?.node?._sys.filename}>
            <Link href={`/posts/${post?.node?._sys.filename}`}>
              {post?.node?._sys.filename}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
} 