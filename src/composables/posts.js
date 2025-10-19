const modules = import.meta.glob('../posts/*.vue', { eager: true })

export function getPosts() {
  return Object.entries(modules)
    .map(([path, module]) => {
      const slug = path.split('/').pop().replace('.vue', '')
      return {
        slug,
        path: `/blog/${slug}`,
        ...module.post,
      }
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date))
}
