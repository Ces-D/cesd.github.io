export const ROUTE = {
  home: { default: '/', chatAction: '/chat' },
  posts: { default: '/posts', post: (slug: string) => `/posts/${encodeURIComponent(slug)}` },
} as const;
