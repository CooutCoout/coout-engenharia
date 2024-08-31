import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://coout.com.br/',
      lastModified: new Date(),
      changeFrequency: 'never',
      priority: 1,
    },
  ]
}