import { marked } from 'marked'
import frontMatter from 'front-matter'

// Static import of all markdown files
const markdownFiles = import.meta.glob('../posts/*.md', { query: '?raw', import: 'default', eager: true })

export function importMarkdownFiles() {
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
  return posts.sort((a, b) => {
    if (!a.date || !b.date) return 0
    return new Date(b.date) - new Date(a.date)
  })
}

// Get a single post by slug using the static imports
export function getMarkdownFile(slug) {
  const filePath = `../posts/${slug}.md`
  const content = markdownFiles[filePath]
  if (!content) {
    console.error(`Markdown file not found: ${slug}`)
    return null
  }
  const { attributes, body } = frontMatter(content)
  return {
    slug,
    title: attributes.title || slug,
    date: attributes.date,
    content: marked(body),
    ...attributes,
  }
}
