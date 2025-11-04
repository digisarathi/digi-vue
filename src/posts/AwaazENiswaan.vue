<template>
  <PostLayout :post="post">
    <p>
      Awaaz-e-Niswaan works with Muslim women and girls in improving their safety, access to
      justice, education and livelihood means. As their budgets are always limited, the digital
      presence of Niswaan was very limited and inefficient.
    </p>

    <p>
      digiSarathi overhauled the Niswaan website in a simple manner that conveyed their community's
      pain-points and the ensuing social impact journey effectively. Regularly blogging would have
      been an overwhelming task for the Niswaan team so Instagram was suggested and the team has
      taken it up very quickly.
    </p>

    <p>
      The Instagram feed is automatically reflected on the website's homepage so the website
      visitors can get to know the ground activities and programs regularly.
    </p>

    <h3>Here is what Niswaan's Trustee have to say:</h3>

    <p>
      <em
        >Our (Aawaaz-e-Niswaan)'s website was designed and completed by digiSarathi and has been
        receiving applauds from different people. It is so eye-appealing and professionally done
        that it looks great. It works well on mobile devices, we have tried it on android and
        iPhones and it worked great on both. We love how easy it is to navigate through the pages
        and digiSarthi is available in a blink of an eye to provide any required support when / if
        we need it.</em
      >
    </p>
  </PostLayout>
</template>

<script>
const post = {
  id: '1045',
  title: 'Awaaz-e-Niswaan',
  date: '2022-06-08T10:21:10+00:00',
  tags: ['Nonprofits (NGOs)', 'Children & Women Safety', 'Website Design'],
  excerpt:
    'Website overhaul for Awaaz-e-Niswaan, working with Muslim women and girls on safety, justice, education and livelihood. Features integrated Instagram feed for regular updates.',
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
