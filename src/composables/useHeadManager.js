import { useHead } from '@vueuse/head'
import { ref, watch, computed } from 'vue'

export function useHeadManager(initialData = {}) {
  const headData = ref({
    title: initialData.title || '',
    description: initialData.description || '',
    image: initialData.image || '/og-image.jpg',
    url: initialData.url || (typeof window !== 'undefined' ? window.location.href : ''),
    type: initialData.type || 'website',
    siteName: initialData.siteName || 'digiSarathi',
    locale: initialData.locale || 'en_IN',
    twitterHandle: initialData.twitterHandle || '@digisarathi',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'digiSarathi',
      url: 'https://digisarathi.com',
      logo: 'https://digisarathi.com/greater.png',
      ...(initialData.structuredData || {})
    }
  })

  const setMetaTags = (data = {}) => {
    Object.assign(headData.value, data)
  }

  const setStructuredData = (data = {}) => {
    headData.value.structuredData = { ...headData.value.structuredData, ...data }
  }

  // Create a computed ref for the head data
  const headObject = computed(() => {
    const { title, description, image, url, type, siteName, locale, twitterHandle, structuredData } = headData.value
    
    return {
      title: title ? `${title} | ${siteName}` : siteName,
      meta: [
        { name: 'description', content: description },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:image', content: image },
        { property: 'og:url', content: url },
        { property: 'og:type', content: type },
        { property: 'og:site_name', content: siteName },
        { property: 'og:locale', content: locale },
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
      ],
      ...(Object.keys(structuredData).length ? {
        script: [{
          type: 'application/ld+json',
          children: JSON.stringify(structuredData)
        }]
      } : {})
    }
  })

  // Use the head object at the composition level
  useHead(headObject)

  // Watch for changes to update the head reactively
  watch(headData, () => {
    // The head will update automatically because headObject is computed
  }, { deep: true, immediate: true })

  return {
    setMetaTags,
    setStructuredData
  }
}
