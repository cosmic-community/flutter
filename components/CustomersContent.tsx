'use client'

import type { Customer } from '@/types'
import { useLang } from '@/app/providers'
import { getTranslations } from '@/lib/i18n'
import PageHeader from '@/components/PageHeader'
import CustomerCard from '@/components/CustomerCard'

export default function CustomersContent({ customers }: { customers: Customer[] }) {
  const { lang } = useLang()
  const t = getTranslations(lang)

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <PageHeader title={t.customerDirectory} subtitle={t.customersSubtitle} />
      {customers.length === 0 ? (
        <p className="text-gray-500">{t.noItems}</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {customers.map((customer) => (
            <CustomerCard key={customer.id} customer={customer} lang={lang} />
          ))}
        </div>
      )}
    </div>
  )
}