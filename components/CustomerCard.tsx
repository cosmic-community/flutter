import type { Customer, UILang } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'
import { getTranslations } from '@/lib/i18n'
import StatusBadge from '@/components/StatusBadge'

interface CustomerCardProps {
  customer: Customer
  lang: UILang
}

export default function CustomerCard({ customer, lang }: CustomerCardProps) {
  const t = getTranslations(lang)
  const name = getMetafieldValue(customer.metadata?.full_name) || customer.title
  const email = getMetafieldValue(customer.metadata?.email)
  const company = getMetafieldValue(customer.metadata?.company)
  const role = getMetafieldValue(customer.metadata?.role)
  const avatar = customer.metadata?.avatar
  const plan = customer.metadata?.subscribed_plan

  const initials = name
    .split(' ')
    .map((w) => w.charAt(0))
    .slice(0, 2)
    .join('')
    .toUpperCase()

  return (
    <div className="flex flex-col rounded-xl border border-gray-200 bg-white p-5 transition-shadow hover:shadow-md">
      <div className="flex items-center gap-3">
        {avatar?.imgix_url ? (
          <img
            src={`${avatar.imgix_url}?w=112&h=112&fit=crop&auto=format,compress`}
            alt={name}
            width={56}
            height={56}
            className="w-14 h-14 rounded-full object-cover"
          />
        ) : (
          <div className="w-14 h-14 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center font-bold">
            {initials || '?'}
          </div>
        )}
        <div className="min-w-0">
          <p className="font-semibold text-gray-900 truncate">{name}</p>
          {role && <p className="text-xs text-gray-500">{role}</p>}
        </div>
      </div>

      <div className="mt-4 space-y-1.5 text-sm">
        {email && (
          <p className="text-gray-600 truncate">
            <span className="text-gray-400">{t.email}: </span>
            {email}
          </p>
        )}
        {company && (
          <p className="text-gray-600 truncate">
            <span className="text-gray-400">{t.company}: </span>
            {company}
          </p>
        )}
        {plan && plan.metadata && (
          <p className="text-gray-600 truncate">
            <span className="text-gray-400">{t.plan}: </span>
            {lang === 'ar'
              ? getMetafieldValue(plan.metadata?.name_ar) || getMetafieldValue(plan.metadata?.name_en)
              : getMetafieldValue(plan.metadata?.name_en) || getMetafieldValue(plan.metadata?.name_ar)}
          </p>
        )}
      </div>

      {customer.metadata?.account_status && (
        <div className="mt-4">
          <StatusBadge value={customer.metadata.account_status} />
        </div>
      )}
    </div>
  )
}