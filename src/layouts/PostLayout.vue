<template>
  <v-main>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="8">
          <article class="post">
            <header class="post-header">
              <h1 class="text-h3 d-md-block d-none text-primary mb-4">{{ post.title }}</h1>
              <h1 class="text-h4 d-sm-block d-md-none text-primary mb-4">{{ post.title }}</h1>
              <div class="d-flex flex-wrap align-start mb-4">
                <v-chip
                  v-for="(tag, index) in props.post.tags"
                  :key="index"
                  size="small"
                  color="primary"
                  variant="tonal"
                  class="mr-1 mb-1"
                >
                  {{ tag }}
                </v-chip>
              </div>
              <p class="text-caption text-secondary mb-4">{{ formattedDate }}</p>
              <v-divider class="mb-6"></v-divider>
            </header>
            
            <div class="post-content">
              <slot></slot>
            </div>

            <v-divider class="my-8"></v-divider>

            <div class="d-flex justify-space-between align-center">
              <v-btn
                v-if="route.meta.previousPost"
                :to="route.meta.previousPost.path"
                color="primary"
                variant="outlined"
                size="small"
              >
                Previous
              </v-btn>
              <v-spacer v-else></v-spacer>

              <v-btn
                to="/blog"
                color="primary"
                variant="outlined"
                size="small"
              >
                Back to Blog
              </v-btn>

              <v-btn
                v-if="route.meta.nextPost"
                :to="route.meta.nextPost.path"
                color="primary"
                variant="outlined"
                size="small"
              >
                Next
              </v-btn>
              <v-spacer v-else></v-spacer>
            </div>
          </article>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { formatDate } from '@/utils/date'

const route = useRoute()

const props = defineProps({
  post: {
    type: Object,
    required: true
  },
})

const formattedDate = computed(() => {
  return formatDate(props.post.date)
})
</script>

<style scoped>
.post-content {
  line-height: 1.6;
}

.post-content :deep(h3) {
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-weight: 600;
  color: rgb(var(--v-theme-primary));
}

.post-content :deep(h4) {
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
  font-weight: 600;
}

.post-content :deep(p) {
  margin-bottom: 1.25rem;
}

.post-content :deep(ul),
.post-content :deep(ol) {
  padding-left: 1.5rem;
  margin-bottom: 1.25rem;
}

.post-content :deep(li) {
  margin-bottom: 0.5rem;
}

.post-content :deep(a) {
  color: rgb(var(--v-theme-primary));
  text-decoration: none;
}

.post-content :deep(a:hover) {
  text-decoration: underline;
}

.post-content :deep(strong) {
  font-weight: 600;
}

.post-content :deep(em) {
  font-style: italic;
}

.post-content :deep(code) {
  background-color: rgba(0, 0, 0, 0.05);
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  font-family: monospace;
  font-size: 0.9em;
}

.post-content :deep(table) {
  width: 100%;
  margin: 1.5rem 0;
  border-collapse: collapse;
}

.post-content :deep(th),
.post-content :deep(td) {
  padding: 0.75rem;
  border: 1px solid rgba(0, 0, 0, 0.12);
  text-align: left;
}

.post-content :deep(th) {
  background-color: rgba(var(--v-theme-primary), 0.1);
  font-weight: 600;
}
</style>
