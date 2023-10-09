import type { InitOptions } from 'i18next'

export const i18nConfig = {
  // Supported languages.
  supportedLngs: ['en', 'es', 'de', 'ja', 'zh'],
  // Fallback language.
  fallbackLng: 'en',
  // Default namespace.
  defaultNS: 'common',
  // Disable suspense mode. (Recommended).
  react: { useSuspense: false },
} satisfies InitOptions
