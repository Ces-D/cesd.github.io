import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const generateURL = (path: string) => new URL(path, 'https://cesardiaz.xyz').toString()

  return [
    {
      url: generateURL('/'),
      lastModified: now,
    },
  ]
}
