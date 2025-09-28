<script setup>
  import { ref, computed, onMounted } from 'vue';
  import { importMarkdownFiles } from '@/utils/markdown';
  import { formatDate } from '@/utils/date';
  import { useHeadManager } from '@/composables/useHeadManager';

  const { setMetaTags, setStructuredData } = useHeadManager();

  // Set meta tags for the page
  onMounted(() => {
    // Set up meta tags
    setMetaTags({
      title: 'Blog - Latest Tech Insights & Digital Trends',
      description:
        'Stay ahead with our expert articles on technology, digital transformation, and IT solutions for businesses and NGOs.',
      image: '/og-blog.jpg',
    });

    // Set up structured data for Blog
    setStructuredData({
      '@type': 'Blog',
      '@id': 'https://digisarathi.com/blog',
      name: 'digiSarathi Blog',
      description: 'Expert insights on technology and digital transformation',
      publisher: {
        '@type': 'Organization',
        name: 'digiSarathi',
        logo: 'https://digisarathi.com/logo.png',
      },
      blogPost: posts.value.slice(0, 5).map((post) => ({
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        author: {
          '@type': 'Organization',
          name: 'digiSarathi',
          url: 'https://digisarathi.com',
        },
      })),
    });
  });

  const props = defineProps({
    isMobile: {
      type: Boolean,
      default: false,
    },
  });

  // Statically load posts
  const posts = ref(importMarkdownFiles());
  const selectedTag = ref(null);

  const uniqueTags = computed(() => {
    const allTags = posts.value.flatMap((post) => post.tags || []);
    return [...new Set(allTags)];
  });

  const filteredPosts = computed(() => {
    if (!selectedTag.value) return posts.value;
    return posts.value.filter((post) => post.tags?.includes(selectedTag.value));
  });

  const toggleTag = (tag) => {
    selectedTag.value = selectedTag.value === tag ? null : tag;
  };
</script>

<template>
  <v-main>
    <!-- Hero Section -->
    <section>
      <v-container>
        <v-row justify="center" align="center" class="min-height-70vh">
          <v-col cols="12" md="7">
            <h1
              :class="['font-weight-bold', 'mb-6', { 'text-h3': !isMobile, 'text-h4': isMobile }]"
              class="text-primary"
            >
              Insights, Updates, and Digital Innovation
            </h1>
            <p :class="['mb-8', { 'text-h6': !isMobile, 'text-h7': isMobile }]" class="text-secondary">
              Explore our latest thoughts on technology, digital transformation, and industry trends. Stay informed with
              our expert insights and practical guides.
            </p>
          </v-col>
          <v-col cols="12" md="5" class="d-none d-md-flex justify-center">
            <v-img src="/blog.svg" max-width="450" contain></v-img>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Blog Content Section -->
    <section>
      <v-container>
        <div class="d-flex flex-wrap justify-center mb-8">
          <v-chip
            v-for="tag in uniqueTags"
            :key="tag"
            size="small"
            class="mr-2 mb-2"
            :color="selectedTag === tag ? 'primary' : undefined"
            :variant="selectedTag === tag ? 'elevated' : 'outlined'"
            @click="toggleTag(tag)"
            style="cursor: pointer"
          >
            {{ tag }}
          </v-chip>
        </div>
        <v-row>
          <v-col v-for="post in filteredPosts" :key="post.slug" cols="12" md="6" lg="4" class="mb-6">
            <v-card class="pa-0 h-100" :to="{ name: 'post', params: { slug: post.slug } }">
              <v-card-title class="text-h6 bg-primary text-wrap mt-0 pa-4">{{ post.title }}</v-card-title>
              <v-card-subtitle>
                <div class="d-flex align-center mt-1">
                  <span class="text-secondary">{{ formatDate(post.date) }}</span>
                </div>
              </v-card-subtitle>
              <v-card-text>
                <div class="blog-preview-content" v-html="post.content"></div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
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

  .min-height-70vh {
    min-height: 70vh;
  }

  .blog-preview-content {
    width: 100%;
    word-break: break-word;
    overflow-wrap: break-word;
    white-space: pre-wrap;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .blog-preview-content :deep(p) {
    margin-bottom: 0.5rem;
  }
</style>
