'use client'

import { useLang } from '@/app/providers'
import { getTranslations } from '@/lib/i18n'

export default function Footer() {
  const { lang } = useLang()
  const t = getTranslations(lang)
  const year = new Date().getFullYear()

  return (
    <footer className="mt-16 border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-8 text-center text-sm text-gray-500">
        <p className="font-semibold text-brand-700 mb-1">{t.appName}</p>
        <p>© {year} — {t.heroTitle}</p>
      </div>
    </footer>
  )
}