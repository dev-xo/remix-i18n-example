import { useTranslation } from 'react-i18next'
import { useHydrated } from 'remix-utils/use-hydrated'

import { Navigation } from '~/components/navigation.tsx'
import { Footer } from '~/components/footer.tsx'

/**
 * Demo App!
 */
const languageToEmojis = {
  en: ['🗽', '🇺🇸', '🦅'],
  es: ['🥘', '🇪🇸', '🏖️'],
  de: ['🍻', '🇩🇪', '🚗'],
  ja: ['🗾', '🇯🇵', '🍣'],
  zh: ['🐉', '🇨🇳', '🏮'],
}

export default function Index() {
  const isHydrated = useHydrated()

  const { i18n, t } = useTranslation('common')
  const language = i18n.resolvedLanguage

  const emojis = languageToEmojis[language as keyof typeof languageToEmojis] || ['😀']

  return (
    <div className="mx-auto flex h-screen w-screen max-w-7xl flex-col px-6">
      {/* Navigation */}
      <Navigation />

      {/* Content */}
      <div className="relative mx-auto flex h-full w-full max-w-3xl flex-col items-center justify-center gap-8">
        <span className="group flex items-center gap-4 text-8xl duration-200 hover:-translate-y-1">
          <span className="opacity-60 transition group-hover:opacity-100">
            {emojis[0]}
          </span>
          {emojis[1]}
          <span className="opacity-60 transition group-hover:opacity-100">
            {emojis[2]}
          </span>
        </span>

        <div className="relative flex max-w-[725px] flex-col items-center justify-center text-center">
          <div className="z-10 flex flex-col items-center justify-center">
            <div className="sm:px-20">
              <span className="text-[17px] font-medium tracking-[-0.16px] text-gray-600 md:text-xl">
                {t('greeting')}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
