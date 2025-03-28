<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getMarkdownFile } from '@/utils/markdown'
import { formatDate } from '@/utils/date'

const route = useRoute()
const post = ref(null)

onMounted(async () => {
    const slug = route.params.slug
    post.value = await getMarkdownFile(slug)
})
</script>

<template>
    <v-main>
        <v-container>
            <div v-if="post" class="blog-post">
                <h1 class="text-h3 mb-4">{{ post.title }}</h1>
                <div class="d-flex align-center mb-6">
                    <span class="text-subtitle-1 mr-2">Published on:</span>
                    <span class="text-secondary">{{ formatDate(post.date) }}</span>
                </div>
                <div class="content" v-html="post.content"></div>
            </div>
            <div v-else class="text-center">
                <h2 class="text-h4 mb-4">Post not found</h2>
                <v-btn to="/blog" color="primary">Back to Blog</v-btn>
            </div>
        </v-container>
    </v-main>
</template>

<style scoped>
.blog-post {
    max-width: 800px;
    margin: 0 auto;
}

.content :deep(h2) {
    margin-top: 2rem;
    margin-bottom: 1rem;
}

.content :deep(p) {
    margin-bottom: 1rem;
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
</style>
