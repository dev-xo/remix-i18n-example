import { Link, useLocation } from '@remix-run/react'
import { useTranslation } from 'react-i18next'

export function LanguageSwitcher() {
  const location = useLocation()
  const pathname = location.pathname.replace(/\/$/, '')

  const { i18n } = useTranslation()
  const language = i18n.resolvedLanguage

  // Hardcoded languages for demo purposes.
  const langs = [
    { text: '🇺🇸 English', value: 'en' },
    { text: '🇪🇸 Español', value: 'es' },
    { text: '🇩🇪 Deutsch', value: 'de' },
    { text: '🇯🇵 日本語', value: 'ja' },
    { text: '🇨🇳 中文', value: 'zh' },
  ]

  return (
    <div className="flex items-center gap-3 rounded-full bg-white/20 px-4 py-1 backdrop-blur-md transition hover:bg-white/80">
      {langs.map(({ text, value }) => (
        <Link
          key={value}
          to={`${pathname}?lng=${value}`}
          className={`scalable text-3xl opacity-40 hover:opacity-60 ${
            language === value && '!opacity-100'
          }`}>
          {text.split(' ')[0]}
        </Link>
      ))}
    </div>
  )
}
