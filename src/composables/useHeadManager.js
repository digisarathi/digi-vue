import { useHead } from '@vueuse/head'

export function useHeadManager() {
  const setMetaTags = ({
    title,
    description,
    image = '/og-image.jpg',
    url = typeof window !== 'undefined' ? window.location.href : '',
    type = 'website',
    siteName = 'digiSarathi',
    locale = 'en_IN',
    twitterHandle = '@digisarathi'
  } = {}) => {
    useHead({
      title: title ? `${title} | ${siteName}` : siteName,
      meta: [
        // Standard meta tags
        { name: 'description', content: description },
        { name: 'robots', content: 'index, follow' },
        
        // Open Graph / Facebook
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:image', content: image },
        { property: 'og:url', content: url },
        { property: 'og:type', content: type },
        { property: 'og:site_name', content: siteName },
        { property: 'og:locale', content: locale },
        
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: image },
        { name: 'twitter:url', content: url },
        { name: 'twitter:site', content: twitterHandle },
        { name: 'twitter:creator', content: twitterHandle }
      ],
      link: [
        { rel: 'canonical', href: url }
      ]
    })
  }

  const setStructuredData = (data = {}) => {
    useHead({
      script: [
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'digiSarathi',
            url: 'https://digisarathi.com',
            logo: 'https://digisarathi.com/logo.png',
            ...data
          })
        }
      ]
    })
  }

  return {
    setMetaTags,
    setStructuredData
  }
}
