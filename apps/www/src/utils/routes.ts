export const appRoutes = {
  home: '/',
  articles: '/articles',
  article: (articleSlug: string) => `/articles/${articleSlug}`,
  contact: '#/contact',
} as const
