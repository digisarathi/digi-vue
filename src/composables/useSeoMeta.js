// Simple SEO meta management without external dependencies
export function useSeoMeta(options = {}) {
  const {
    title,
    description,
    image = 'https://digisarathi.com/og-image.png',
    url,
    type = 'website',
    publishedTime,
    tags = []
  } = options

  const fullTitle = title ? `${title} - digiSarathi` : 'digiSarathi - Tech4Growth, Tech4Good'
  const fullUrl = url ? `https://digisarathi.com${url}` : 'https://digisarathi.com'
  
  const defaultDescription = 'digiSarathi is technology company providing cost-effective IT solutions and trainings to empower organizations and individuals.'

  // Return head object for ViteSSG
  return {
    title: fullTitle,
    meta: [
      { name: 'description', content: description || defaultDescription },
      
      // Open Graph
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: description || defaultDescription },
      { property: 'og:image', content: image },
      { property: 'og:url', content: fullUrl },
      { property: 'og:type', content: type },
      { property: 'og:site_name', content: 'digiSarathi' },
      
      // Article specific
      ...(type === 'article' && publishedTime ? [
        { property: 'article:published_time', content: publishedTime },
        { property: 'article:author', content: 'digiSarathi' },
        ...tags.map(tag => ({ property: 'article:tag', content: tag }))
      ] : []),
      
      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: description || defaultDescription },
      { name: 'twitter:image', content: image },
      { name: 'twitter:url', content: fullUrl },
    ],
    link: [
      { rel: 'canonical', href: fullUrl }
    ]
  }
}
