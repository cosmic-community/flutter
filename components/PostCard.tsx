import type { SocialPost, UILang } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'
import { getTranslations } from '@/lib/i18n'
import StatusBadge from '@/components/StatusBadge'

interface PostCardProps {
  post: SocialPost
  lang: UILang
}

function getChannels(channels: string[] | string | undefined): string[] {
  if (!channels) return []
  if (Array.isArray(channels)) return channels
  return channels.split(',').map((c) => c.trim()).filter(Boolean)
}

export default function PostCard({ post, lang }: PostCardProps) {
  const t = getTranslations(lang)
  const title = getMetafieldValue(post.metadata?.title) || post.title
  const content = lang === 'ar'
    ? getMetafieldValue(post.metadata?.content_ar) || getMetafieldValue(post.metadata?.content_en)
    : getMetafieldValue(post.metadata?.content_en) || getMetafieldValue(post.metadata?.content_ar)
  const media = post.metadata?.media
  const channels = getChannels(post.metadata?.target_channels)
  const author = post.metadata?.author

  return (
    <article className="flex flex-col rounded-xl border border-gray-200 bg-white overflow-hidden transition-shadow hover:shadow-md">
      {media?.imgix_url && (
        <img
          src={`${media.imgix_url}?w=800&h=400&fit=crop&auto=format,compress`}
          alt={title}
          width={400}
          height={200}
          className="w-full h-44 object-cover"
        />
      )}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-gray-900">{title}</h3>
          <StatusBadge value={post.metadata?.status} />
        </div>

        {content && (
          <p className="mt-2 text-sm text-gray-600 line-clamp-3">{content}</p>
        )}

        {channels.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {channels.map((ch, i) => (
              <span
                key={i}
                className="inline-flex items-center px-2 py-0.5 rounded-md bg-brand-50 text-brand-700 text-xs font-medium"
              >
                {ch}
              </span>
            ))}
          </div>
        )}

        {author && author.metadata && (
          <p className="mt-4 pt-3 border-t border-gray-100 text-xs text-gray-400">
            {t.author}: {getMetafieldValue(author.metadata?.full_name) || author.title}
          </p>
        )}
      </div>
    </article>
  )
}