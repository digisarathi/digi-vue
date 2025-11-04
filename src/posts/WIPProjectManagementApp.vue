<template>
  <PostLayout :post="post">
    <p>Hi everyone,</p>

    <p>
      I'm excited to share that we are building a new project management tool, and I'm looking for
      small teams to try it out. If your team is between 3-5 people, you'd be perfect for this
      initial testing phase.
    </p>

    <h3>What's in it for you</h3>
    <ul>
      <li>Early access to all features</li>
      <li>Direct input into the product roadmap</li>
      <li>Priority support from us</li>
      <li>Free usage during the beta period</li>
      <li>
        50% off your first year when you switch to a paid plan (if you register within 2 weeks)
      </li>
    </ul>

    <h3>
      Interested? Just email us the following on
      <a href="mailto:admin@digisarathi.com">admin@digisarathi.com</a>
    </h3>
    <ul>
      <li>Your team size</li>
      <li>What you're currently using for project management</li>
      <li>When you could start (aiming to begin this week)</li>
    </ul>

    <p><em>Looking forward to having some of you onboard!</em></p>
  </PostLayout>
</template>

<script>
const post = {
  id: '1348',
  title: 'WIP project management app',
  date: '2025-02-14T06:42:24+00:00',
  tags: ['Manufacturing', 'Nonprofits (NGOs)', 'SMEs', 'Socent'],
  excerpt:
    'Looking for small teams (3-5 people) to test drive our new project management app. Get early access, direct input into roadmap, and 50% off first year.',
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
