export const route = {
  Home: "/",
  Article: {
    static: "/article/:slug",
    dynamic: (slug: string) => `/article/${encodeURIComponent(slug)}`,
  },
  404: "*404",
} as const;
