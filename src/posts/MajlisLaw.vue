<template>
  <PostLayout :post="post">
    <p>
      Case Study: How Majlis Law Cut Hosting Costs and Gained Digital Independence

    </p>
    <p>

      At digiSarathi, we believe that technology should simplify, not overwhelm. Majlis Law—a collective of lawyers
      fighting violence against women and children—came to us with a familiar challenge faced by many nonprofits:
      limited
      funds, no dedicated IT team, and a website weighed down by too many well-intentioned volunteer fixes.

      Over time, their WordPress site had grown heavy and hard to manage. Plugins overlapped, backups failed, and page
      load times stretched into seconds. To make up for poor performance, every piece of content—program details, team
      profiles, the organization’s journey, even photo galleries—ended up squeezed onto one homepage.
    </p>

    <h4>Phase 1: Rebuilding with Purpose</h4>
    <p>
      In the first month of our maintenance contract, our goal was clarity and control. We rebuilt their WordPress
      website
      from scratch, selecting only relevant, high-quality content and leaving behind what no longer served their
      audience.
      This instantly improved the site’s usability and stability.

    </p>

    <h4>
      Phase 2: Rethinking for Sustainability

    </h4>
    <p>

      Once the new site was live, we stepped back and studied Majlis’s long-term communication goals. We discovered that
      only the CEO actively published updates, and that most ongoing work involved light content changes rather than
      structural updates. That realization opened a bigger question: was WordPress really necessary going forward?

      A detailed review of their setup showed that the hosting provider—GoDaddy—was costing far more than the
      organization’s modest requirements justified. The fix wasn’t another plugin, but a platform rethink.
      The Sustainable Move to Wix

      We transitioned their website to Wix, a simpler and more cost-efficient platform that gave the CEO direct control
      without technical complexity. To ensure long-term comfort, we conducted a one-on-one training session to guide her
      through editing, updating, and publishing on Wix.

      With that, Majlis Law became fully self-sufficient. They eliminated expensive hosting bills, reduced dependencies
      on
      technical vendors, and gained the confidence to manage their own web presence.
      The digiSarathi myCTO Philosophy
    </p>

    <p class="bg-primary pa-4 rounded text-h6">

      Through our myCTO service, we act as a virtual CTO partner, helping nonprofits and enterprises make strategic,
      sustainable technology decisions. Sometimes that means reducing our own recurring revenue, but doing what’s right
      for the client always has a larger impact.
    </p>

    <p>

      Majlis Law now saves thousands of rupees every year and operates with digital independence.
      Majlis Law's journey exemplifies the power of strategic digital transformation.It’s a quiet
      transformation that keeps their focus where it belongs—on their mission, not on website maintenance.
      By reassessing their needs and
      embracing a more suitable platform, they not only improved their website's performance but also empowered their
      team to take control of their digital presence.
    </p>
  </PostLayout>
</template>

<script>
const post = {
  id: '898',
  title: 'Majlis Law',
  date: '2025-10-23T22:42:27+00:00',
  tags: ['Children & Women Safety', 'Website Design', 'Nonprofits (NGOs)'],
  excerpt:
    ' Majlis Law\'s journey exemplifies the power of strategic digital transformation. It\’s a quiet transformation that keeps their focus where it belongs—on their mission, not on website maintenance.',
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
