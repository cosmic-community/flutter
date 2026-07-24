'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import type { UILang } from '@/types'

interface LangContextValue {
  lang: UILang
  setLang: (lang: UILang) => void
}

const LangContext = createContext<LangContextValue>({
  lang: 'en',
  setLang: () => {},
})

export function useLang(): LangContextValue {
  return useContext(LangContext)
}

export default function Providers({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<UILang>('en')

  useEffect(() => {
    const stored = typeof window !== 'undefined'
      ? (localStorage.getItem('portal-lang') as UILang | null)
      : null
    if (stored === 'ar' || stored === 'en') {
      setLangState(stored)
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
  }, [lang])

  const setLang = (next: UILang) => {
    setLangState(next)
    if (typeof window !== 'undefined') {
      localStorage.setItem('portal-lang', next)
    }
  }

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  )
}