<template>
  <PostLayout :post="post">
    <p>
      Our engineering and design team hasn't been blogging consistently due to time constraints. Yet
      for 11 years, we've continued paying for hosting and maintenance of the digiSarathi website
      simply because it runs on WordPress.
    </p>

    <p>
      The overhead keeps growing – WordPress demands constant updates, security patches, and
      troubleshooting plugin conflicts. These maintenance tasks consume valuable resources that
      could be better spent elsewhere. Given that we're not actively publishing blog content,
      WordPress has become unnecessarily complex for our actual needs.
    </p>

    <p>
      We're essentially maintaining enterprise-level blogging infrastructure for a site that doesn't
      blog. It's time to consider a simpler, more appropriate solution.
    </p>

    <p>
      A website is essentially 4/5 pages that talks about any organization and its programs. Then I
      remembered how one of our clients,
      <a href="https://thoughtshopfoundation.org/" target="_blank" rel="noopener noreferrer"
        >ThoughtShop Foundation</a
      >, in Kolkatta, have a non-WordPress website. Whenever needed, they make some 'content'
      updates in the Team or Donor section. Without WordPress, there is no 'software' updates or the
      bare minimum. But with WordPress, the software updates is as frequent as the 'apps' on our
      phone, i.e. forever &amp; ever! Which means the cost of AMC that digiSarathi or other IT
      vendors charge their clients is not coming down. This didn't feel right!
    </p>

    <p>
      So, a month back, we started researching on alternative technologies that would work for a SME
      like digiSarathi and NGOs that simplifies the whole equation. And voila, not only can we have
      a blogging module without WordPress but also make use of 'Free Hosting' provided by Microsoft
      and other platforms. By month-end, digiSarathi website will be redone without WordPress and on
      free hosting. Looking forward to sharing our findings soon!
    </p>
  </PostLayout>
</template>

<script>
const post = {
  id: '1246',
  title: 'Ditching WordPress',
  date: '2025-01-03T10:38:12+00:00',
  tags: ['Nonprofits (NGOs)', 'SMEs', 'Socent', 'Website Design'],
  excerpt:
    'After 11 years of WordPress overhead, we explored simpler alternatives. Discover how modern static sites can eliminate maintenance costs while keeping blogging capabilities.',
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
