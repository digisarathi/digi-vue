<template>
  <PostLayout :post="post">
    <p>
      India's leading Solar PV Modules manufacturer needed a new website to showcase their innovative product range. digiSarathi is proud to have successfully launched their new design in under three months. Our team understood how Renewsys stands out among competition and created an information hierarchy that tells their USP and strengths in the right manner. Their website audience is consistently giving the highest rating for the site's user experience. With a global audience, SEO was of utmost importance and digiSarathi has taken great care of the same.
    </p>
  </PostLayout>
</template>

<script>
const post = {
  id: '886',
  title: 'RenewSys Solar',
  date: '2021-06-24T00:31:52+00:00',
  tags: ['Industry', 'Manufacturing', 'SEO', 'Website Design'],
  excerpt:
    "India's leading Solar PV Modules manufacturer's website launched in under three months with exceptional UX ratings and global SEO optimization.",
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
