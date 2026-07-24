'use client'

import type { SocialIntegration } from '@/types'
import { useLang } from '@/app/providers'
import { getTranslations } from '@/lib/i18n'
import PageHeader from '@/components/PageHeader'
import IntegrationCard from '@/components/IntegrationCard'

export default function IntegrationsContent({
  integrations,
}: {
  integrations: SocialIntegration[]
}) {
  const { lang } = useLang()
  const t = getTranslations(lang)

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <PageHeader title={t.socialIntegrations} subtitle={t.integrationsSubtitle} />
      {integrations.length === 0 ? (
        <p className="text-gray-500">{t.noItems}</p>
      ) : (
        <div className="grid sm:grid-cols-2 gap-4">
          {integrations.map((integration) => (
            <IntegrationCard key={integration.id} integration={integration} lang={lang} />
          ))}
        </div>
      )}
    </div>
  )
}