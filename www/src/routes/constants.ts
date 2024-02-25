export const route = {
  Home: "/",
  Articles: "/articles",
  Article: {
    static: "/article/:slug",
    dynamic: (slug: string) => `/article/${encodeURIComponent(slug)}`,
  },
  404: "*404",
} as const;
