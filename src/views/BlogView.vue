<template>
  <v-main>
    <!-- Hero Section -->
    <section>
      <v-container>
        <v-row justify="center" align="center" class="min-height-70vh">
          <v-col cols="12" md="7">
            <h1
              class="font-weight-bold mb-6 text-primary"
              :class="{ 'text-h3': !isMobile, 'text-h4': isMobile }"
            >
              Insights, Updates, and Digital Innovation
            </h1>
            <p class="mb-8 text-body-1 text-secondary">
              Explore our latest thoughts on technology, digital transformation, and industry
              trends. Stay informed with our expert insights and practical guides.
            </p>
          </v-col>
          <v-col cols="12" md="5" class="d-md-flex justify-center">
            <v-img src="/blog.svg" max-width="450" contain></v-img>
          </v-col>
        </v-row>

        <!-- Tag Filter -->
        <div v-if="uniqueTags.length > 0" class="my-8">
          <v-chip
            v-for="tag in uniqueTags"
            :key="tag"
            class="mr-2 mb-2"
            :color="selectedTag === tag ? 'primary' : 'accent'"
            @click="toggleTag(tag)"
          >
            {{ tag }}
          </v-chip>
        </div>

        <!-- Blog Posts -->
        <v-row>
          <v-col v-for="post in filteredPosts" :key="post.path" cols="12" class="mb-6">
            <v-card :to="post.path" class="pa-2 h-100 d-flex flex-column" elevation="2" hover>
              <v-card-title class="text-h5 text-primary">{{ post.title }}</v-card-title>
              <v-card-subtitle class="d-flex align-center">
                <span v-if="post.date">{{ formatDate(post.date) }}</span>
                <v-spacer></v-spacer>
                <template v-if="post.tags && post.tags.length > 0">
                  <v-chip
                    v-for="tag in post.tags"
                    :key="tag"
                    size="small"
                    class="ml-1"
                    color="primary"
                    variant="tonal"
                  >
                    {{ tag }}
                  </v-chip>
                </template>
              </v-card-subtitle>
              <v-card-text>
                <p class="text-body-1">{{ post.excerpt }}</p>
              </v-card-text>
              <v-spacer></v-spacer>
              <v-card-actions>
                <v-btn color="primary" variant="text" :prepend-icon="mdiArrowRight" size="small">
                  Read More
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col v-if="filteredPosts.length === 0" cols="12">
            <v-alert type="info">
              No blog posts found{{ selectedTag ? ` with tag "${selectedTag}"` : '' }}.
            </v-alert>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </v-main>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useDisplay } from 'vuetify'
import { mdiArrowRight } from '@mdi/js'
import { getPosts } from '../composables/posts'
import { formatDate } from '@/utils/date'

const router = useRouter()
const route = useRoute()
const { mobile } = useDisplay()
const isMobile = computed(() => mobile.value)

const selectedTag = ref(route.query.tag || null)

const posts = ref(getPosts())

// Get unique tags from all posts
const uniqueTags = computed(() => {
  const allTags = posts.value.flatMap((post) => post.tags || [])
  return [...new Set(allTags)].sort()
})

// Filter posts by selected tag
const filteredPosts = computed(() => {
  if (!selectedTag.value) return posts.value
  return posts.value.filter((post) =>
    post.tags?.some((tag) => tag.toLowerCase() === selectedTag.value.toLowerCase()),
  )
})

// Toggle tag filter
const toggleTag = (tag) => {
  selectedTag.value = selectedTag.value === tag ? null : tag

  // Update URL
  const query = selectedTag.value ? { tag: selectedTag.value } : {}
  router.push({ query })
}

// Watch for URL changes to update selected tag
onMounted(() => {
  if (route.query.tag) {
    selectedTag.value = route.query.tag
  }
})
</script>
