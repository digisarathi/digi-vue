<template>
  <PostLayout :post="post">
    <p>
      SEEDS is a NGO based out of Jamshedpur that works with the tribal and backward caste communities towards enhancing their equity and access to justice.
    </p>

    <p>
      digiSarathi was given the opportunity to design and develop their website <a href="http://seedsjsr.org" target="_blank" rel="noopener noreferrer">seedsjsr.org</a>
    </p>

    <p>
      We took about four months to go live with the new website. SEEDS helps the local community to create art work as a means of sustainable income. SEEDS also creates training publications for its partner NGOs and communities. The website enables SEEDS to showcase these services and its social impact to a larger audience.
    </p>
  </PostLayout>
</template>

<script>
const post = {
  id: '1036',
  title: 'SEEDS',
  date: '2022-06-07T09:49:17+00:00',
  tags: ['Nonprofits (NGOs)', 'Consulting', 'Website Design', 'SEO'],
  excerpt:
    'SEEDS is a Jamshedpur-based NGO working with tribal and backward caste communities. We designed their website to showcase their art programs, training publications, and social impact.',
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
