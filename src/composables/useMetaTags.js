export function useMetaTags() {
  const updateMetaTags = (title, description, image = '/og-image.jpg') => {
    // Update title
    document.title = `${title} | digiSarathi`

    // Update meta tags
    const metaTags = {
      title: title,
      description: description,
      'og:title': title,
      'og:description': description,
      'og:image': image,
      'twitter:title': title,
      'twitter:description': description,
      'twitter:image': image,
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
  }

  return {
    updateMetaTags,
  }
}
