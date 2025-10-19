<template>
  <article class="post">
    <header class="post-header">
      <h1 class="post-title">{{ title }}</h1>
      <div class="post-meta">
        <time :datetime="date">{{ formattedDate }}</time>
        <div v-if="tags && tags.length > 0" class="post-tags">
          <span v-for="(tag, index) in tags" :key="index" class="tag">
            {{ tag }}
          </span>
        </div>
      </div>
    </header>
    
    <div class="post-content">
      <slot></slot>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  tags: {
    type: Array,
    default: () => []
  }
});

const formattedDate = computed(() => {
  return new Date(props.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
});
</script>

<style scoped>
.post {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.post-header {
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eaecef;
}

.post-title {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.post-meta {
  color: #6a737d;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.post-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.tag {
  background-color: #f3f4f6;
  color: #4b5563;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.8rem;
}

.post-content {
  line-height: 1.6;
  color: #374151;
}

.post-content :deep(h3) {
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: #1f2937;
}

.post-content :deep(p) {
  margin-bottom: 1.25rem;
}

.post-content :deep(ul) {
  padding-left: 1.5rem;
  margin-bottom: 1.25rem;
}

.post-content :deep(li) {
  margin-bottom: 0.5rem;
}
</style>
