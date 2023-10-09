/**
 * @type {import('@remix-run/dev').AppConfig}
 */
export default {
  postcss: true,
  tailwind: true,

  ignoredRouteFiles: ['**/.*'],
  serverDependenciesToBundle: ['remix-i18next'],
  watchPaths: ['./tailwind.config.ts'],
  cacheDirectory: './node_modules/.cache/remix',
}
