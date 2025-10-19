<template>
  <PostLayout :post="post">
    <h3>Why have a website at all?</h3>
    <p>
      It's 2024 and everyone has a website. But this question is important because it directly leads to how any organization could or should use their website and for what goals.
    </p>

    <p>
      While websites started out as a marketing asset, today they are nothing short of a <strong>virtual office</strong> that enable collaboration or a 'two way communication'. One can invite visitors to the website and inform them about programs, challenges, journey so far, collect their thoughts on blog posts, conduct surveys or polls, announce and collect registrations for events, display training videos, enable donations, etc.
    </p>

    <h3>What content goes into a website?</h3>
    <p>
      Two key differences though between a website &amp; physical offices. Unlike physical offices with opening and closing hours, a website is <strong>open 24/7</strong> for anyone in the world – donors, CSR managers, volunteers, just curious folks, etc.
    </p>

    <p>
      But the bad news is that while a physical visit can last for one or more <em>hours</em>, the visitor to your website will give you less than a <em>minute</em>! One minute (56 secs.) is the average time a visitor spends on any website. Our content then has to follow the principle – <strong>Less is More</strong>! Its our responsibility to convey our story in an uncluttered, easy to understand manner such that they get the bigger picture &amp; know how to contribute.
    </p>

    <h3>What about design?</h3>
    <p>
      Same rules as that of a physical office visit apply to websites too. In the office, we will wear formal clothes and look sharp, right? that's the amount of design a website should have too. Just the way we won't plan a fancy dress competition, a highly animated page with sections flying in and out in bright colors will only confuse the donor as to where the actual story of change is!
    </p>

    <h3>If our principles of digital storytelling via website design resonates with you, connect with us and lets work together to ensure every visitor to the website goes well informed and inspired</h3>
  </PostLayout>
</template>

<script>
const post = {
  id: '1260',
  title: 'Why should NGOs invest in a website?',
  date: '2024-11-01T11:13:00+00:00',
  tags: ['Nonprofits (NGOs)', 'SMEs', 'Socent', 'Website Design'],
  excerpt:
    'Websites are virtual offices open 24/7 for donors, volunteers, and stakeholders. Learn why Less is More when it comes to content and design for maximum impact.',
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
