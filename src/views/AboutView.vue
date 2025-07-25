<template>
  <v-main>
    <!-- Hero Section -->
    <section class="">
      <v-container>
        <v-row justify="center" align="center" class="min-height-70vh">
          <v-col cols="12" md="7">
            <h1 :class="['font-weight-bold', 'mb-6', { 'text-h3': !isMobile, 'text-h4': isMobile }]" class="text-primary">
              We like to do things differently, never choosing the easy way, and permanently challenging inertia.
            </h1>
            <p :class="['mb-8', { 'text-h6': !isMobile, 'text-h7': isMobile }]" class="text-secondary">
              We are a team of passionate professionals dedicated to helping you achieve your goals through innovative and effective solutions.
            </p>
          </v-col>
          <v-col cols="12" md="5" class="d-none d-md-flex justify-center">
            <v-img src="/work.svg" max-width="450" contain></v-img>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section>
      <v-row>
          <v-col cols="12" class="text-center mb-6">
            <h2 class="font-weight-bold mb-3 text-primary" :class="{ 'text-h3': !isMobile, 'text-h6': isMobile }">Our Values</h2>
          </v-col>
        </v-row>
      <v-container>
        <v-row>
          <v-col v-for="(value, index) in values" :key="index" cols="12" md="4" class=" pa-4 text-center ">
            <v-card :elevation="2" height="100%" class="ma-1 pa-4">
              <v-img :src="value.image" max-width="450"  height="200" class="mb-4"  contain></v-img>
              <h2 class="text-h5 font-weight-bold text-primary mb-2">{{ value.title }}</h2>
              <p class="text-subtitle-1 text-secondary">{{ value.description }}</p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
  </section>
  <section>
    <v-container >
      <v-row class="my-2 py-6">
        <v-col class="text-center">
          <p class="text-h6 mb-8 text-secondary">Every new project is welcomed with open arms, and grows into an offer if it turns out to be sustainable. That’s the way we grow and stand out from the crowd.
Objectives Key Results (OKRs) are set up at a group, team, and individual level to accomplish our mission all together.
Our teams and people are our most precious asset. We aim to have a positive and valuable impact on Earth via our work with nonprofits.</p>
        </v-col>
      </v-row>
      <v-row>
          <v-col cols="12" class="text-center ">
            <h2 class="font-weight-bold mb-3 text-primary" :class="{ 'text-h3': !isMobile, 'text-h6': isMobile }">Our Team</h2>
          </v-col>
        </v-row>
      <v-row class="my-2 py-6">
        <v-col 
          v-for="(member, index) in teamMembers" 
          :key="index" 
          cols="12" 
          class="mb-8"
          :class="{ 'd-flex flex-column': index % 2 === 0, 'd-flex flex-column-reverse': index % 2 !== 0 }"
        >
          <v-row class="align-center">
            <v-col cols="12" md="8" :order-md="index % 2 === 0 ? 1 : 2">
              <v-card variant="text" class="h-100 d-flex flex-column">
                <v-card-title class="text-primary font-weight-bold">{{ member.name }}</v-card-title>
                <v-card-subtitle class="text-h6 text-secondary">{{ member.role }}</v-card-subtitle>
                <v-card-text class="text-secondary text-body-1">
                  <div v-for="(paragraph, pIndex) in member.bio" :key="pIndex" class="mb-3">
                    {{ paragraph }}
                  </div>
                </v-card-text>
                <v-card-actions class="mt-auto ml-1">
                  <a v-if="member.linkedin" :href="member.linkedin" target="_blank" class="text-decoration-none">
                    <v-icon size="24" class="text-primary mr-2">{{mdiLinkedin}}</v-icon>
                  </a>
                  <a v-if="member.twitter" :href="member.twitter" target="_blank" class="text-decoration-none">
                    <v-icon size="24" class="text-primary">{{mdiTwitter}}</v-icon>
                  </a>
                </v-card-actions>
              </v-card>
            </v-col>
            <v-col cols="12" md="4" :order-md="index % 2 === 0 ? 2 : 1" class="d-flex justify-center">
              <v-img 
                :src="member.image" 
                max-width="300" 
                contain 
                class="grey-filter"
                :style="{ maxHeight: '400px' }"
              ></v-img>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    </section>

    <!-- Advisory Board Section -->
    <section class="py-12 bg-grey-lighten-4">
      <v-container>
        <v-row>
          <v-col cols="12" class="text-center mb-8">
            <h2 class="font-weight-bold text-primary" :class="{ 'text-h3': !isMobile, 'text-h4': isMobile }">
              Our Advisory Board
            </h2>
            <p class="text-h6 text-secondary mt-4">
              Seasoned professionals guiding our strategic direction
            </p>
          </v-col>
        </v-row>

        <v-row class="justify-center">
          <v-col 
            v-for="(advisor, index) in advisors" 
            :key="index" 
            cols="12" 
            class="mb-6"
          >
            <v-card class="h-100" elevation="3">
              <v-row no-gutters class="h-100">
                <!-- Left Column - Image and Social Links -->
                <v-col cols="12" sm="4" class="pa-4 d-flex flex-column align-center text-center">
                  <v-avatar size="150" class="elevation-2 mb-3">
                    <v-img
                      :src="advisor.image"
                      cover
                      class="bg-grey-lighten-1"
                    ></v-img>
                  </v-avatar>
                  <!-- Social Links -->
                  <div class="mt-auto">
                    <v-btn
                      v-if="advisor.linkedin"
                      :href="advisor.linkedin"
                      target="_blank"
                      icon
                      size="small"
                      color="primary"
                      variant="text"
                      class="mx-1"
                    >
                      <v-icon>{{ mdiLinkedin }}</v-icon>
                    </v-btn>
                    <v-btn
                      v-if="advisor.twitter"
                      :href="advisor.twitter"
                      target="_blank"
                      icon
                      size="small"
                      color="primary"
                      variant="text"
                      class="mx-1"
                    >
                      <v-icon>{{ mdiTwitter }}</v-icon>
                    </v-btn>
                  </div>
                  
                </v-col>
                
                <!-- Right Column - Bio -->
                <v-col cols="12" sm="8" class="pa-4 d-flex flex-column">
                  <v-card-text class="text-body-2 pa-0">
                   <v-card-title class="text-h5 font-weight-bold text-primary pa-0 mb-1">{{ advisor.name }}</v-card-title>
                   <v-card-subtitle class="text-subtitle-1 pa-0 mb-3 text-medium-emphasis">{{ advisor.title }}</v-card-subtitle>
                    {{ advisor.bio }}
                  </v-card-text>
                  
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </v-main>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { mdiLinkedin, mdiTwitter } from '@mdi/js';
import { useMetaTags } from '@/composables/useMetaTags';

// Set meta tags for the page
const { updateMetaTags } = useMetaTags();
onMounted(() => {
  updateMetaTags(
    'About Us - digiSarathi',
    'Discover the team and values behind digiSarathi. We innovate with purpose, challenge the status quo, and deliver impactful IT solutions and training.',
    '/team-og-image.jpg'
  );
});
const props = defineProps({
  isMobile: {
    type: Boolean,
    default: false
  }
});

const values = ref([
  {
    title: 'Innovation',
    description: 'We believe in continuous innovation to bring effective & efficient technology solutions to our clients.',
    image: '/innovation.svg'
  },
  {
    title: 'Integrity',
    description: 'Our commitment to integrity ensures that we maintain transparency and honesty in all our dealings.',
    image: '/certificate.svg'
  },
  {
    title: 'Customer Delight',
    description: 'We go beyond satisfaction, building lasting relationships through personalized attention.',
    image: '/reviews.svg'
  }
]);

const teamMembers = ref([
  {
    name: 'Prashant Pandit',
    role: 'Founder & CEO',
    image: '/prashant.png',
    bio: [
      'Prashant brings a comprehensive knowledge of technology and its application in a wide range of complex projects, both in the commercial and not-for-profit sectors.',
      'After completing an M.S. degree in Computer Science from Leiden University in the Netherlands, he spent five years at India\'s NASSCOM Foundation launching and managing landmark programs such as BiGTech with Techsoup USA and ConnectIT with Microsoft. True to his belief in volunteering impact, Prashant conceptualized the MyKartavya program for NASSCOM member companies to leverage corporate volunteering.',
      'Working with hundreds of non-profits across India, he gained first-hand insight into their technology challenges. He founded digiSarathi in 2013, to cater to the innovation needs of its Indian and global clients across various industry sectors. Originally from Mumbai, Prashant now resides in Pune, engaging and mentoring its vibrant startup ecosystem.'
    ],
    linkedin: 'https://www.linkedin.com/in/prashant11/',
    twitter: 'https://www.x.com/prashantpandit'
  },
  {
    name: 'Kshitija Pradhan',
    role: 'Human Resources',
    image: '/kshitija.jpeg',
    bio: [
      'Kshitija is a seasoned HR professional with a passion for talent acquisition and employee engagement. With expertise in recruitment, performance management, and organizational development, she plays a pivotal role in shaping our company culture and building high-performing teams.',
      'Her approach to human resources combines strategic thinking with a deep understanding of people dynamics. She specializes in identifying and attracting top talent, fostering professional growth, and creating an inclusive work environment where every team member can thrive.',
      'With a keen eye for potential and a commitment to employee well-being, Kshitija ensures that our organization not only finds the right people but also nurtures their growth and development. Her initiatives in learning and development have been instrumental in building a strong, motivated workforce aligned with our company values.'
    ],
    
  },
]);

const advisors = ref([
  {
    name: 'Marcel Cerveny',
    title: 'Technology Advisor',
    bio: 'Marcel Červený is an accomplished IT leader, currently serving as CEO of BOOTIQ, with extensive experience in managing large-scale IT projects. With a background in business intelligence, e-commerce, and AI, he has led hundreds of projects. Marcel excels in software architecture, team mentorship, and stakeholder coordination, delivering innovative solutions for clients like DPD SK.',
    image: '/advisors/marcel-cerveny.jpeg',
    linkedin: 'https://www.linkedin.com/in/marcelcerveny/',
  },
  {
    name: 'Ram Iyer',
    title: 'Mentor',
    bio: 'Ram Iyer is an experienced Business Strategy Consultant, having graduated from the prestigious Indian Institute of Management, Ahmedabad (IIMA). He brings 35 years of diverse work experience, including 12 years in investment banking and 12 years dedicated to alternative education and social innovation. His multifaceted background equips him with a unique perspective, making him a valuable advisor in various sectors.',
    image: '/advisors/ramiyer.jpg',
    linkedin: 'https://www.linkedin.com/in/ram-iyer-908840143/',
  }
]);
</script>
<style scoped>
.hero-section {
  position: relative;
  background: linear-gradient(135deg, var(--v-primary-base) 0%, var(--v-secondary-base) 100%);
  overflow: hidden;
}


.min-height-70vh {
  min-height: 70vh;
}

.grey-filter {
  filter: grayscale(100%);
  opacity: 0.9;
  transition: all 0.3s ease;
}
</style>
