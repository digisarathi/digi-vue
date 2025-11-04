<template>
  <PostLayout :post="post">
    <p>
      Map based frontend web application for Akshara to collect actual data directly from citizens
      on unsafe areas for women in Mumbai. MIS reports submitted to Municipality and Police
      authorities.
    </p>
  </PostLayout>
</template>

<script>
const post = {
  id: '869',
  title: 'Harassmap Mumbai',
  date: '2021-06-23T23:00:21+00:00',
  tags: ['Nonprofits (NGOs)', 'Website Design', 'Children & Women Safety'],
  excerpt:
    'Map based frontend web application for Akshara to collect actual data directly from citizens on unsafe areas for women in Mumbai. MIS reports submitted to Municipality and Police authorities.',
}

export { post }
</script>

<script setup>
import PostLayout from '../layouts/PostLayout.vue'

defineProps({
  post: {
    type: Object,
    default: () => post,
  },
})
</script>
