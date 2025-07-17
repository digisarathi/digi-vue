export function useMetaTags() {
  const updateMetaTags = (title, description, image = '/og-image.jpg', canonicalUrl = null) => {
    // Update title
    document.title = `${title} | digiSarathi`

    // Get the current URL for canonical and social meta tags
    const currentUrl = canonicalUrl || window.location.href
    
    // Update meta tags
    const metaTags = {
      title: title,
      description: description,
      'og:title': title,
      'og:description': description,
      'og:image': image,
      'og:url': currentUrl,
      'og:type': 'website',
      'twitter:card': 'summary_large_image',
      'twitter:title': title,
      'twitter:description': description,
      'twitter:image': image,
      'twitter:url': currentUrl
    }

    // Update or create meta tags
    Object.entries(metaTags).forEach(([name, content]) => {
      let meta =
        document.querySelector(`meta[name="${name}"]`) ||
        document.querySelector(`meta[property="${name}"]`)

      if (!meta) {
        meta = document.createElement('meta')
        if (name.startsWith('og:') || name.startsWith('twitter:')) {
          meta.setAttribute('property', name)
        } else {
          meta.setAttribute('name', name)
        }
        document.head.appendChild(meta)
      }

      meta.setAttribute('content', content)
    })

    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]')
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.setAttribute('href', canonicalUrl || window.location.href)
  }

  return {
    updateMetaTags,
  }
}
