'use client'

import type { SocialPost } from '@/types'
import { useLang } from '@/app/providers'
import { getTranslations } from '@/lib/i18n'
import PageHeader from '@/components/PageHeader'
import PostCard from '@/components/PostCard'

export default function PostsContent({ posts }: { posts: SocialPost[] }) {
  const { lang } = useLang()
  const t = getTranslations(lang)

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <PageHeader title={t.socialPostsTitle} subtitle={t.postsSubtitle} />
      {posts.length === 0 ? (
        <p className="text-gray-500">{t.noItems}</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} lang={lang} />
          ))}
        </div>
      )}
    </div>
  )
}