import { marked } from 'marked'
import frontMatter from 'front-matter'

// Function to import all markdown files from a directory
export function importMarkdownFiles() {
  const markdownFiles = import.meta.glob('../posts/*.md', { query: '?raw', import: 'default', eager: true })
  const posts = []

  for (const path in markdownFiles) {
    const content = markdownFiles[path] 
    const { attributes, body } = frontMatter(content)
    const slug = path.split('/').at(-1).replace('.md', '')

    posts.push({
      slug,
      title: attributes.title || slug,
      date: attributes.date,
      content: marked(body),
      ...attributes,
    })
  }

  // Sort posts by date if available
  return posts.sort((a, b) => {
    if (!a.date || !b.date) return 0
    return new Date(b.date) - new Date(a.date)
  })
}

// Function to get a single markdown file by slug
export async function getMarkdownFile(slug) {
  try {
    const content = await import(`../posts/${slug}.md?raw`)
    const { attributes, body } = frontMatter(content.default)
    return {
      slug,
      title: attributes.title || slug,
      date: attributes.date,
      content: marked(body),
      ...attributes,
    }
  } catch (error) {
    console.error(`Error loading markdown file: ${slug}`, error)
    return null
  }
}
