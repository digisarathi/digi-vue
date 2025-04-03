<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { getMarkdownFile, importMarkdownFiles } from '@/utils/markdown'
import { formatDate } from '@/utils/date'
import { useMetaTags } from '@/composables/useMetaTags'

const route = useRoute()
const post = ref(null)
const nextPost = ref(null)
const prevPost = ref(null)
const posts = ref([])
const { updateMetaTags } = useMetaTags()

const findAdjacentPosts = (currentSlug) => {
    const currentIndex = posts.value.findIndex(p => p.slug === currentSlug)
    if (currentIndex === -1) return { prev: null, next: null }

    return {
        prev: currentIndex > 0 ? posts.value[currentIndex - 1] : null,
        next: currentIndex < posts.value.length - 1 ? posts.value[currentIndex + 1] : null
    }
}

const updatePostMeta = (postData) => {
    if (postData) {
        const description = postData.excerpt || postData.content.substring(0, 160)
        updateMetaTags(
            postData.title,
            description,
            postData.image || '/og-image.jpg'
        )
    }
}

const loadPost = async (slug) => {
    post.value = await getMarkdownFile(slug)
    const { prev, next } = findAdjacentPosts(slug)
    prevPost.value = prev
    nextPost.value = next
    updatePostMeta(post.value)
}

// Initial load
onMounted(async () => {
    posts.value = await importMarkdownFiles()
    await loadPost(route.params.slug)
})

// Handle route changes
watch(() => route.params.slug, async (newSlug) => {
    await loadPost(newSlug)
}, { immediate: true })
</script>

<template>
    <v-main>
        <v-container>
            <v-row justify="center">
                <v-col cols="12" md="8">
                    <div v-if="post" class="mt-4">
                        <h1 class="text-h3 text-primary mb-4">{{ post.title }}</h1>
                        <div class="d-flex align-center mb-6">
                            <span class="text-secondary">{{ formatDate(post.date) }}</span>
                            <v-chip v-for="tag in post.tags" :key="tag" size="small" class="ml-2" color="primary"
                                variant="outlined">
                                {{ tag }}
                            </v-chip>
                        </div>
                        <div class="content mb-4" v-html="post.content"></div>
                        <div class="d-flex justify-space-between align-center">
                            <div class="d-flex gap-2">
                                <v-btn v-if="prevPost" :to="{ name: 'post', params: { slug: prevPost.slug } }"
                                    color="primary" variant="outlined" size="x-small">
                                    Previous
                                </v-btn>
                                <v-btn to="/blog" color="primary" variant="outlined" size="x-small">
                                    Back to Blog
                                </v-btn>
                            </div>
                            <v-btn v-if="nextPost" :to="{ name: 'post', params: { slug: nextPost.slug } }"
                                color="primary" variant="outlined" size="x-small">
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

.content :deep(h1),
.content :deep(h2),
.content :deep(h3),
.content :deep(h4),
.content :deep(h5),
.content :deep(h6) {
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: rgb(var(--v-theme-primary));
}

.content :deep(p) {
    margin-bottom: 1rem;
    line-height: 1.6;
}

.content :deep(ul),
.content :deep(ol) {
    margin-left: 1.5rem;
    margin-bottom: 1rem;
    padding-left: 1rem;
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
    display: block;
    text-align: center;
    margin-top: 0.5rem;
    color: var(--v-primary-base);
    text-decoration: none;
}

.content :deep(a:hover) {
    text-decoration: underline;
}
</style>
