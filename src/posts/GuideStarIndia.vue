<template>
  <PostLayout :post="post">
    <p>
      Guidestar India, a prominent NGO association based in Mumbai, has been at the forefront of
      curating the NGO community in India for over two decades. By leveraging technology for online
      user engagement and outreach, Guidestar has successfully connected various stakeholders in the
      nonprofit sector. Recently, they have expanded their services to include corporate
      partnerships, enabling companies to collaborate with reputable and innovative NGO programs
      through their Corporate Social Responsibility (CSR) initiatives.
    </p>

    <h3>Objectives</h3>
    <p>
      The latest initiative, GivingTuesdays, aims to promote a culture of volunteering and
      philanthropy in India. This online portal is designed to encourage individuals and
      organizations to engage in giving back to their communities, thereby fostering a spirit of
      social responsibility.
    </p>

    <h3>Process</h3>
    <p>
      DigiSarathi is proud to have consulted on the tech strategy of the GivingTuesdays initiative.
    </p>
    <p>The consulting process involved:</p>
    <ul>
      <li>
        <strong>Technology Assessment:</strong> Evaluating the existing technology stack to identify
        strengths and areas for improvement.
      </li>
      <li>
        <strong>Knowledge Building:</strong> Providing insights and expertise to enhance Guidestar's
        understanding of the technology landscape and its potential applications.
      </li>
      <li>
        <strong>Roadmap Planning:</strong> Collaborating with the Guidestar team to outline a
        strategic roadmap for upgrades and future enhancements to the portal.
      </li>
    </ul>

    <h3>Impact and Sustainability</h3>
    <p>
      The GivingTuesdays portal is poised to make a significant impact on the volunteering landscape
      in India. By creating a dedicated platform for promoting a giving culture, Guidestar India
      aims to inspire individuals and organizations to participate actively in social causes. The
      initiative not only enhances community engagement but also strengthens the ties between NGOs
      and corporate partners.
    </p>

    <h3>Conclusion</h3>
    <p>
      Guidestar India's commitment to fostering a culture of giving, combined with DigiSarathi's
      technological expertise, has resulted in a powerful initiative that encourages social
      responsibility and community involvement. The GivingTuesdays portal represents a significant
      step forward in promoting volunteering and philanthropy in India, ultimately contributing to a
      more engaged and compassionate society.
    </p>
  </PostLayout>
</template>

<script>
const post = {
  id: '876',
  title: 'GuideStar India',
  date: '2021-06-23T23:07:40+00:00',
  tags: ['Nonprofits (NGOs)'],
  excerpt:
    'By creating a dedicated platform for promoting a giving culture, Guidestar India aims to inspire individuals and organizations to participate actively in social causes. The initiative not only enhances community engagement but also strengthens the ties between NGOs and corporate partners.',
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
