import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from './language-switcher.tsx'

export function Footer() {
  const { i18n } = useTranslation()
  const language = i18n.resolvedLanguage

  // Map languages to their flag CSS variables
  const flagMap = {
    en: '--us-flag',
    es: '--es-flag',
    de: '--de-flag',
    ja: '--jp-flag',
    zh: '--cn-flag',
  }
  const flagClass = flagMap[language as keyof typeof flagMap] || '--us-flag'

  return (
    <footer className="relative flex min-h-[80px] items-center justify-center">
      <div className="absolute bottom-16">
        {/* Language Switcher */}
        <LanguageSwitcher />
      </div>

      <div className="flex items-center">
        <p className="flex items-center whitespace-nowrap text-center text-sm font-medium text-gray-600">
          Source code is available on&nbsp;
          <a
            href="https://github.com/dev-xo/remix-i18n-example"
            target="_blank"
            rel="noopener noreferrer"
            className="actionable flex items-center font-semibold text-gray-800 transition duration-200 hover:-translate-y-1">
            Github
          </a>
        </p>
      </div>

      {/* Background. */}
      <div className={`blobs ${flagClass}`} />
    </footer>
  )
}
