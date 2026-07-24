import { getSocialPosts } from '@/lib/cosmic'
import PostsContent from '@/components/PostsContent'

export const revalidate = 60

export default async function PostsPage() {
  const posts = await getSocialPosts()
  return <PostsContent posts={posts} />
}