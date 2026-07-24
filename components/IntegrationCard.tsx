import type { SocialIntegration, UILang } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'
import { getTranslations } from '@/lib/i18n'
import StatusBadge from '@/components/StatusBadge'

interface IntegrationCardProps {
  integration: SocialIntegration
  lang: UILang
}

function channelIcon(channel: string): string {
  const c = channel.toLowerCase()
  if (c.includes('whatsapp')) return '💬'
  if (c.includes('facebook')) return '📘'
  if (c.includes('instagram')) return '📸'
  if (c.includes('x') || c.includes('twitter')) return '𝕏'
  return '🔌'
}

export default function IntegrationCard({ integration, lang }: IntegrationCardProps) {
  const t = getTranslations(lang)
  const channel = getMetafieldValue(integration.metadata?.channel)
  const accountName = getMetafieldValue(integration.metadata?.account_name)
  const owner = integration.metadata?.owner

  return (
    <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-5 transition-shadow hover:shadow-md">
      <div className="w-12 h-12 rounded-lg bg-brand-50 flex items-center justify-center text-2xl shrink-0">
        {channelIcon(channel)}
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-gray-900">{channel || integration.title}</p>
        {accountName && (
          <p className="text-sm text-gray-500 truncate">
            <span className="text-gray-400">{t.account}: </span>
            {accountName}
          </p>
        )}
        {owner && owner.metadata && (
          <p className="text-xs text-gray-400 truncate">
            {t.owner}: {getMetafieldValue(owner.metadata?.full_name) || owner.title}
          </p>
        )}
      </div>
      <StatusBadge value={integration.metadata?.connection_status} />
    </div>
  )
}