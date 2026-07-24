'use client'

import Link from 'next/link'
import { useLang } from '@/app/providers'
import { getTranslations } from '@/lib/i18n'

export default function Header() {
  const { lang, setLang } = useLang()
  const t = getTranslations(lang)

  const nav = [
    { href: '/', label: t.home },
    { href: '/plans', label: t.plans },
    { href: '/customers', label: t.customers },
    { href: '/integrations', label: t.integrations },
    { href: '/posts', label: t.posts },
  ]

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-brand-700">
          <span className="text-2xl">🚀</span>
          <span>{t.appName}</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-brand-700 hover:bg-brand-50 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1 bg-gray-100 rounded-full p-1">
          <button
            onClick={() => setLang('en')}
            className={`px-3 py-1 text-sm font-medium rounded-full transition-colors ${
              lang === 'en' ? 'bg-white text-brand-700 shadow-sm' : 'text-gray-500'
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLang('ar')}
            className={`px-3 py-1 text-sm font-medium rounded-full transition-colors ${
              lang === 'ar' ? 'bg-white text-brand-700 shadow-sm' : 'text-gray-500'
            }`}
          >
            ع
          </button>
        </div>
      </div>

      <nav className="md:hidden flex items-center gap-1 overflow-x-auto px-4 pb-2 border-t border-gray-100 pt-2">
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="whitespace-nowrap px-3 py-1.5 rounded-md text-sm font-medium text-gray-600 hover:text-brand-700 hover:bg-brand-50"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}