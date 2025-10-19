<template>
  <PostLayout :post="post">
    <h3>Overview</h3>
    <p>
      Entrib is at the forefront of bringing much-needed digitization to the manufacturing sector in India and beyond. Their innovative software product, <strong>ShopWorx</strong>, outlines an effective Industry 4.0 roadmap for manufacturers, enabling them to enhance efficiency and productivity in their operations.
    </p>

    <h3>Objectives</h3>
    <p>
      The primary goal of Entrib is to empower manufacturers with cutting-edge technology that facilitates digital transformation. By implementing ShopWorx, manufacturers can streamline processes and adapt to the evolving demands of the industry.
    </p>

    <h3>Development Process</h3>
    <p>
      DigiSarathi provided comprehensive product consulting and implementation support to the Entrib Product Design team. Key contributions included:
    </p>
    <ul>
      <li>
        <strong>Reducing Deployment Timelines:</strong> Achieving a remarkable reduction in customer deployment timelines by over 80%.
      </li>
      <li>
        <strong>Advocating Best Practices:</strong> Promoting strong and robust product development processes to ensure high-quality outcomes.
      </li>
      <li>
        <strong>Implementing DevOps:</strong> Establishing DevOps practices that allowed Entrib engineers to prioritize effectively and respond to customer needs without being overwhelmed by constant changes.
      </li>
    </ul>

    <h3>Impact and Sustainability</h3>
    <p>
      Today, Entrib successfully serves the needs of some of India's leading manufacturers, including:
    </p>
    <ul>
      <li>Bajaj</li>
      <li>Hero Motors</li>
      <li>Carrier</li>
    </ul>
    <p>
      By leveraging the ShopWorx platform, these manufacturers are better equipped to navigate the complexities of modern production environments and embrace the principles of Industry 4.0.
    </p>

    <h3>Conclusion</h3>
    <p>
      Entrib's commitment to digitization in manufacturing, combined with DigiSarathi's consulting expertise, has resulted in a transformative solution that enhances operational efficiency. The successful implementation of ShopWorx not only benefits individual manufacturers but also contributes to the overall advancement of the manufacturing sector in India and abroad.
    </p>
  </PostLayout>
</template>

<script>
const post = {
  id: '899',
  title: 'Entrib Analytics',
  date: '2021-06-24T00:41:10+00:00',
  tags: ['Industry', 'Manufacturing', 'CI/CD', 'Consulting', 'Product UX/UI', 'Software Architecture'],
  excerpt:
    'Pioneering digitization in manufacturing with ShopWorx - an Industry 4.0 roadmap that reduced deployment timelines by over 80% for leading manufacturers like Bajaj, Hero Motors, and Carrier.',
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
