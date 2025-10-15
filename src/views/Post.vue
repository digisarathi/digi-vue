<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { getMarkdownFile, importMarkdownFiles } from '@/utils/markdown'
import { formatDate } from '@/utils/date'
import { useHeadManager } from '@/composables/useHeadManager'

const route = useRoute()
const post = ref(null)
const nextPost = ref(null)
const prevPost = ref(null)
const posts = ref([])
const { setMetaTags } = useHeadManager()

const findAdjacentPosts = (currentSlug) => {
  const currentIndex = posts.value.findIndex((p) => p.slug === currentSlug)
  if (currentIndex === -1) return { prev: null, next: null }

  return {
    prev: currentIndex > 0 ? posts.value[currentIndex - 1] : null,
    next: currentIndex < posts.value.length - 1 ? posts.value[currentIndex + 1] : null,
  }
}

const updateCanonicalUrl = (url) => {
  let link = document.querySelector('link[rel="canonical"]')
  if (!link) {
    link = document.createElement('link')
    link.rel = 'canonical'
    document.head.appendChild(link)
  }
  link.href = url
}

const updatePostMeta = (postData) => {
  if (!postData) return

  const baseUrl = 'https://digisarathi.com'
  const canonicalUrl = postData.permalink
    ? `${baseUrl}${postData.permalink}`.replace(/([^:]\/)\/+/g, '$1')
    : window.location.href

  // Update the canonical URL in the DOM
  updateCanonicalUrl(canonicalUrl)
  console.log('Setting canonical URL to:', canonicalUrl)

  // Set meta tags
  setMetaTags({
    title: postData.title,
    description: postData.excerpt || postData.content.substring(0, 160),
    image: postData.image || '/og-blog.jpg',
    url: canonicalUrl,
  })
}

const loadPost = async (slug) => {
  post.value = await getMarkdownFile(slug)
  const { prev, next } = findAdjacentPosts(slug)
  prevPost.value = prev
  nextPost.value = next
  // Generate permalink if not provided
  if (!post.value.permalink) {
    post.value.permalink = `/blog/${slug}/`
  }
  console.log('Generated permalink:', post.value.permalink)
  updatePostMeta(post.value)
}

// Initial load
onMounted(async () => {
  posts.value = await importMarkdownFiles()
  await loadPost(route.params.slug)
})

// Handle route changes
watch(
  () => route.params.slug,
  async (newSlug) => {
    await loadPost(newSlug)
  },
  { immediate: true },
)
</script>

<template>
  <v-main>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="8">
          <div v-if="post" class="mt-4">
            <h1 class="text-h3 text-primary mb-4">{{ post.title }}</h1>
            <div class="d-flex flex-wrap align-center mb-6">
              <p class="text-secondary flex-1-1 flex-sm-1">{{ formatDate(post.date) }}</p>
              <v-chip
                v-for="tag in post.tags"
                :key="tag"
                size="small"
                class="ml-2 flex-1-1 flex-sm-0"
                color="primary"
                variant="outlined"
              >
                {{ tag }}
              </v-chip>
            </div>
            <div class="content mb-4" v-html="post.content"></div>
            <div class="mt-16 d-flex justify-space-between align-center">
              <v-btn
                v-if="prevPost"
                :to="{ name: 'post', params: { slug: prevPost.slug } }"
                color="primary"
                variant="outlined"
                size="x-small"
              >
                Previous
              </v-btn>
              <v-btn to="/blog" color="primary" variant="outlined" size="x-small">
                Back to Blog
              </v-btn>
              <v-btn
                v-if="nextPost"
                :to="{ name: 'post', params: { slug: nextPost.slug } }"
                color="primary"
                variant="outlined"
                size="x-small"
              >
                Next
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<style scoped>
.blog-post {
  max-width: 800px;
  margin: 0 auto;
}

.content :deep(*) {
  font-family: inherit;
  line-height: 1.6;
  color: inherit;
}

.content :deep(h1),
.content :deep(h2),
.content :deep(h3),
.content :deep(h4),
.content :deep(h5),
.content :deep(h6) {
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: var(--v-primary-base);
  font-weight: 600;
  line-height: 1.3;
  font-family: var(--font-heading, inherit);
}

.content :deep(p) {
  margin-bottom: 1rem;
  line-height: 1.6;
  font-family: var(--font-body, inherit);
}

.content :deep(ul),
.content :deep(ol) {
  margin-left: 1.5rem;
  margin-bottom: 1rem;
  padding-left: 1rem;
  list-style-type: disc;
  font-family: var(--font-body, inherit);
}

.content :deep(li) {
  margin-bottom: 0.5rem;
  line-height: 1.6;
}

.content :deep(code) {
  background-color: #f5f5f5;
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  font-family: monospace;
}

.content :deep(pre) {
  background-color: #f5f5f5;
  padding: 1rem;
  border-radius: 4px;
  overflow-x: auto;
  margin: 1rem 0;
}

.content :deep(img) {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 2rem auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.content :deep(a) {
  color: var(--v-primary-base);
  text-decoration: none;
  display: inline !important;
  text-align: left !important;
}

.content :deep(a:hover) {
  text-decoration: underline;
}

/* Only apply block styling to image links */
.content :deep(p > a:only-child:has(img)) {
  display: block !important;
  text-align: center !important;
  margin-top: 0.5rem;
}

/* Fix for links with zero-width spaces */
.content :deep(a[href*='​']) {
  display: inline;
  text-align: left;
}
</style>
