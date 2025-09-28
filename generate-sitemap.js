import fs from 'fs'
import path from 'path'
import { SitemapStream, streamToPromise } from 'sitemap'

// Directory where your Markdown posts are stored
const postsDirectory = path.join(process.cwd(), './src/posts')

const sitemapStream = new SitemapStream({ hostname: 'https://digisarathi.com' })

const extractFrontMatter = (content) => {
  const frontMatterRegex = /^---\n([\s\S]*?)\n---/
  const match = content.match(frontMatterRegex)
  if (match) {
    const frontMatter = match[1]
    const lines = frontMatter.split('\n')
    const data = {}
    let currentKey = ''
    let currentValue = []

    lines.forEach((line) => {
      // Skip empty lines
      if (!line.trim()) return

      // Check if line starts with a key (word characters, hyphens, or underscores)
      const keyMatch = line.match(/^([\w-]+):\s*(.*)/)
      
      if (keyMatch) {
        // If we were building a value, save it before starting a new key
        if (currentKey) {
          data[currentKey] = currentValue.join('\n').trim()
        }
        
        // Start new key-value pair
        currentKey = keyMatch[1]
        currentValue = [keyMatch[2].trim()]
      } else if (currentKey) {
        // If line doesn't start with a key but we have a current key, it's a continuation of the value
        currentValue.push(line.trim())
      }
    })

    // Don't forget to save the last key-value pair
    if (currentKey) {
      data[currentKey] = currentValue.join('\n').trim()
    }

    // Clean up values (remove surrounding quotes if present)
    Object.keys(data).forEach(key => {
      if (typeof data[key] === 'string') {
        data[key] = data[key].replace(/^['"](.*)['"]$/, '$1')
      }
    })

    return data
  }
  return {}
}

const generateSitemap = async () => {
  try {
    const files = fs.readdirSync(postsDirectory)
    const posts = files
      .filter((file) => file.endsWith('.md'))
      .map((file) => {
        const filePath = path.join(postsDirectory, file)
        const content = fs.readFileSync(filePath, 'utf-8')
        const frontMatter = extractFrontMatter(content)
        const slug = file.replace(/\.md$/, '')

        let lastmod = new Date()
        if (frontMatter.date && !isNaN(Date.parse(frontMatter.date))) {
          lastmod = new Date(frontMatter.date)
        }

        // Use permalink if available, otherwise use slug
        const url = frontMatter.permalink || `/blog/${slug}`

        return {
          url,
          changefreq: 'weekly',
          priority: 0.9,
          lastmod: lastmod.toISOString(),
        }
      })

    const staticPages = [
      { url: '/', changefreq: 'weekly', priority: 1.0 },
      { url: '/about', changefreq: 'weekly', priority: 0.8 },
      { url: '/contact', changefreq: 'weekly', priority: 0.8 },
      { url: '/blog', changefreq: 'daily', priority: 0.9 },
      { url: '/website-design', changefreq: 'weekly', priority: 0.8 },
      { url: '/apps-software-development', changefreq: 'weekly', priority: 0.8 },
      { url: '/digital-marketing', changefreq: 'weekly', priority: 0.8 },
      { url: '/training-workshops', changefreq: 'weekly', priority: 0.8 },
      { url: '/privacy-policy', changefreq: 'monthly', priority: 0.3 },
      { url: '/terms-of-service', changefreq: 'monthly', priority: 0.3 },
      { url: '/ai-workshops', changefreq: 'weekly', priority: 0.8 },
      { url: '/project-management', changefreq: 'weekly', priority: 0.8 },
      { url: '/my-cto', changefreq: 'weekly', priority: 0.8 },
      { url: '/social-media-marketing', changefreq: 'weekly', priority: 0.8 }
    ]

    staticPages.forEach((page) =>
      sitemapStream.write({
        ...page,
        lastmod: new Date().toISOString(),
      }),
    )
    posts.forEach((post) => sitemapStream.write(post))
    sitemapStream.end()

    const data = await streamToPromise(sitemapStream)
    fs.writeFileSync('./dist/sitemap.xml', data.toString())
    console.log('Sitemap generated!')
  } catch (error) {
    console.error('Error generating sitemap:', error)
  }
}

generateSitemap()
