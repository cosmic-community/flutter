'use client'

import Link from 'next/link'
import { useLang } from '@/app/providers'
import { getTranslations } from '@/lib/i18n'

interface HomeContentProps {
  planCount: number
  customerCount: number
  integrationCount: number
  postCount: number
}

export default function HomeContent({
  planCount,
  customerCount,
  integrationCount,
  postCount,
}: HomeContentProps) {
  const { lang } = useLang()
  const t = getTranslations(lang)

  const stats = [
    { label: t.plans, value: planCount, icon: '💳', href: '/plans' },
    { label: t.customers, value: customerCount, icon: '👤', href: '/customers' },
    { label: t.integrations, value: integrationCount, icon: '🔌', href: '/integrations' },
    { label: t.posts, value: postCount, icon: '📅', href: '/posts' },
  ]

  return (
    <div>
      <section className="gradient-hero text-white">
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-28 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight max-w-3xl mx-auto">
            {t.heroTitle}
          </h1>
          <p className="mt-5 text-lg text-white/90 max-w-2xl mx-auto">
            {t.heroSubtitle}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/plans"
              className="px-6 py-3 rounded-lg bg-white text-brand-700 font-semibold hover:bg-brand-50 transition-colors"
            >
              {t.viewPlans}
            </Link>
            <Link
              href="/customers"
              className="px-6 py-3 rounded-lg bg-white/10 border border-white/40 text-white font-semibold hover:bg-white/20 transition-colors"
            >
              {t.browseCustomers}
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 -mt-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <Link
              key={stat.href}
              href={stat.href}
              className="bg-white rounded-xl border border-gray-200 p-5 text-center transition-shadow hover:shadow-lg"
            >
              <div className="text-3xl">{stat.icon}</div>
              <div className="mt-2 text-2xl font-extrabold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
          {t.exploreFeatures}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/plans" className="group rounded-2xl border border-gray-200 bg-white p-6 hover:border-brand-400 transition-colors">
            <div className="text-3xl mb-3">💳</div>
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-brand-700">{t.subscriptionPlans}</h3>
            <p className="mt-1 text-sm text-gray-500">{t.plansSubtitle}</p>
          </Link>
          <Link href="/integrations" className="group rounded-2xl border border-gray-200 bg-white p-6 hover:border-brand-400 transition-colors">
            <div className="text-3xl mb-3">🔌</div>
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-brand-700">{t.socialIntegrations}</h3>
            <p className="mt-1 text-sm text-gray-500">{t.integrationsSubtitle}</p>
          </Link>
          <Link href="/customers" className="group rounded-2xl border border-gray-200 bg-white p-6 hover:border-brand-400 transition-colors">
            <div className="text-3xl mb-3">👤</div>
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-brand-700">{t.customerDirectory}</h3>
            <p className="mt-1 text-sm text-gray-500">{t.customersSubtitle}</p>
          </Link>
          <Link href="/posts" className="group rounded-2xl border border-gray-200 bg-white p-6 hover:border-brand-400 transition-colors">
            <div className="text-3xl mb-3">📅</div>
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-brand-700">{t.socialPostsTitle}</h3>
            <p className="mt-1 text-sm text-gray-500">{t.postsSubtitle}</p>
          </Link>
        </div>
      </section>
    </div>
  )
}