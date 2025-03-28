<script setup>
import { ref, onMounted } from 'vue'
import { importMarkdownFiles } from '@/utils/markdown'
import { formatDate } from '@/utils/date'

const posts = ref([])

onMounted(async () => {
    posts.value = await importMarkdownFiles()
})
</script>

<template>
    <v-main>
        <v-container>
            <h1 class="text-h3 mb-8 text-center">Blog</h1>
            <v-row>
                <v-col v-for="post in posts" :key="post.slug" cols="12" md="6" lg="4" class="mb-6">
                    <v-card class="h-100" :to="{ name: 'post', params: { slug: post.slug } }">
                        <v-card-title class="text-h5 text-primary">{{ post.title }}</v-card-title>
                        <v-card-subtitle>
                            <div class="d-flex align-center">
                                <span class="text-secondary">{{ formatDate(post.date) }}</span>
                            </div>
                        </v-card-subtitle>
                        <v-card-text>
                            <div class="text-truncate" v-html="post.content"></div>
                        </v-card-text>
                        <v-card-actions class="justify-end">
                            <v-btn color="primary" size="small" variant="text">
                                Read More
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>

<style scoped>
.v-card {
    transition: transform 0.2s;
}

.v-card:hover {
    transform: translateY(-4px);
}

.v-card-text {
    max-height: 150px;
    overflow: hidden;
}

.v-card-text :deep(p) {
    margin-bottom: 0.5rem;
}
</style>
