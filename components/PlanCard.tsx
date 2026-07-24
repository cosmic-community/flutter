import type { SubscriptionPlan, UILang } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'
import { getTranslations } from '@/lib/i18n'

interface PlanCardProps {
  plan: SubscriptionPlan
  lang: UILang
}

function getFeatures(features: string[] | string | undefined): string[] {
  if (!features) return []
  if (Array.isArray(features)) return features
  return features.split('\n').map((f) => f.trim()).filter(Boolean)
}

export default function PlanCard({ plan, lang }: PlanCardProps) {
  const t = getTranslations(lang)
  const name = lang === 'ar'
    ? getMetafieldValue(plan.metadata?.name_ar) || getMetafieldValue(plan.metadata?.name_en)
    : getMetafieldValue(plan.metadata?.name_en) || getMetafieldValue(plan.metadata?.name_ar)
  const description = lang === 'ar'
    ? getMetafieldValue(plan.metadata?.description_ar) || getMetafieldValue(plan.metadata?.description_en)
    : getMetafieldValue(plan.metadata?.description_en) || getMetafieldValue(plan.metadata?.description_ar)

  const price = plan.metadata?.price
  const currency = getMetafieldValue(plan.metadata?.currency) || '$'
  const cycle = getMetafieldValue(plan.metadata?.billing_cycle).toLowerCase()
  const cycleLabel = cycle.includes('year') ? t.perYear : t.perMonth
  const isPopular = plan.metadata?.popular === true
  const features = getFeatures(plan.metadata?.features)

  return (
    <div
      className={`relative flex flex-col rounded-2xl border p-6 bg-white transition-shadow hover:shadow-lg ${
        isPopular ? 'border-brand-500 ring-2 ring-brand-200' : 'border-gray-200'
      }`}
    >
      {isPopular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {t.popular}
        </span>
      )}

      <h3 className="text-xl font-bold text-gray-900">{name || plan.title}</h3>
      {description && <p className="mt-2 text-sm text-gray-500">{description}</p>}

      <div className="mt-4 flex items-baseline gap-1">
        <span className="text-3xl font-extrabold text-gray-900">
          {typeof price === 'number' ? `${currency}${price}` : '—'}
        </span>
        {typeof price === 'number' && (
          <span className="text-sm text-gray-400">{cycleLabel}</span>
        )}
      </div>

      {features.length > 0 && (
        <ul className="mt-6 space-y-2 flex-1">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
              <span className="text-green-500 mt-0.5">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      <button
        className={`mt-6 w-full py-2.5 rounded-lg font-medium transition-colors ${
          isPopular
            ? 'bg-brand-600 text-white hover:bg-brand-700'
            : 'bg-brand-50 text-brand-700 hover:bg-brand-100'
        }`}
      >
        {t.getStarted}
      </button>
    </div>
  )
}