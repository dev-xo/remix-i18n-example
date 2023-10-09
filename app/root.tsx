import type { LinksFunction, DataFunctionArgs } from '@remix-run/node'

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react'
import { json } from '@remix-run/node'
import { cssBundleHref } from '@remix-run/css-bundle'

import { useTranslation } from 'react-i18next'
import { useChangeLanguage } from 'remix-i18next'
import { i18nCookie, remixI18Next } from '~/modules/i18next.server.ts'

import { GenericErrorBoundary } from './components/misc/error-boundary.tsx'
import TailwindStylesheet from '~/root.css'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: TailwindStylesheet },
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
]

export const handle = {
  // In the handle export, we can specify i18n namespaces needed for the route.
  // Usually, we'll set it to our default namespace or "translation" if haven't set one.
  // It can be a string or an array.
  i18n: 'common',
}

export async function loader({ request }: DataFunctionArgs) {
  const locale = await remixI18Next.getLocale(request)

  return json({ locale } as const, {
    headers: {
      'set-cookie': await i18nCookie.serialize(locale),
    },
  })
}

function Document({
  children,
  lang = 'en',
  dir = 'ltr',
}: {
  children: React.ReactNode
  lang?: string
  dir?: any
}) {
  return (
    <html lang={lang} dir={dir}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}

export default function App() {
  const { locale } = useLoaderData<typeof loader>()
  const { i18n } = useTranslation()

  // Updates the i18n instance to match the current locale detected by the loader.
  useChangeLanguage(locale)

  return (
    <Document lang={locale} dir={i18n.dir()}>
      <Outlet />
    </Document>
  )
}

export function ErrorBoundary() {
  return (
    <Document>
      <GenericErrorBoundary />
    </Document>
  )
}
