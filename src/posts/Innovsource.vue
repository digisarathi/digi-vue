<template>
  <PostLayout :post="post">
    <p>
      In a rapidly evolving workforce landscape, a prominent Indian staffing company sought to enhance communication and connectivity for its on-site employees. With over 33,000 users across India, the need for a robust mobile application that could facilitate 24/7 access to HR services became paramount.
    </p>

    <h3>Research Insights</h3>
    <p>
      Our comprehensive research revealed that the majority of users were utilizing Android and Windows devices, particularly Nokia phones. This insight guided our development strategy, ensuring that the mobile app would cater specifically to the needs of these platforms.
    </p>

    <h3>Development Strategy</h3>
    <p>
      To optimize deployment speed and reduce costs for our client, we opted for a hybrid app architecture rather than a traditional native app approach. This decision allowed us to create a unified codebase for both Android and Windows platforms, streamlining the development process. As a result, we were able to implement new features and updates swiftly, ensuring that all users benefited from enhancements simultaneously.
    </p>

    <h3>Outcome</h3>
    <p>
      The intuitive mobile app not only improved connectivity between on-site employees and HR but also demonstrated the effectiveness of a hybrid development approach in meeting the diverse needs of a large user base. By focusing on the platforms most utilized by employees, we successfully delivered a solution that enhances operational efficiency and employee satisfaction.
    </p>
  </PostLayout>
</template>

<script>
const post = {
  id: '915',
  title: 'Innovsource',
  date: '2021-06-24T04:23:03+00:00',
  tags: ['Software Development', 'Product UX/UI', 'Software Architecture', 'Industry', 'Mobile App'],
  excerpt:
    'Hybrid mobile app connecting 33,000+ on-site employees with HR services across India. Optimized for Android and Windows platforms with unified codebase for faster deployment.',
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
