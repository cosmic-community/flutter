'use client'

import type { SubscriptionPlan } from '@/types'
import { useLang } from '@/app/providers'
import { getTranslations } from '@/lib/i18n'
import PageHeader from '@/components/PageHeader'
import PlanCard from '@/components/PlanCard'

export default function PlansContent({ plans }: { plans: SubscriptionPlan[] }) {
  const { lang } = useLang()
  const t = getTranslations(lang)

  const activePlans = plans.filter((p) => p.metadata?.active !== false)

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <PageHeader title={t.subscriptionPlans} subtitle={t.plansSubtitle} />
      {activePlans.length === 0 ? (
        <p className="text-gray-500">{t.noItems}</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activePlans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} lang={lang} />
          ))}
        </div>
      )}
    </div>
  )
}