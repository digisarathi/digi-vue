<template>
  <v-main>
    <!-- Hero Section -->
    <section class="hero-section">
      <v-container>
        <v-row align="center" class="min-height-70vh">
          <v-col cols="12" md="7">
            <h1 class="text-h3 font-weight-bold mb-6 text-primary">
              We like to do things differently, never choosing the easy way, and permanently challenging inertia.
            </h1>
            <p class="text-h6 mb-8 text-secondary">
              We are a team of passionate professionals dedicated to helping you achieve your goals through innovative and effective solutions.
            </p>
          </v-col>
          <v-col cols="12" md="5" class="d-none d-md-flex justify-center">
            <v-img src="@/assets/about-hero.svg" max-width="450" contain></v-img>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section>
      <v-row>
          <v-col cols="12" class="text-center mb-6">
            <h2 class="text-h3 font-weight-bold text-primary">Our Values</h2>
          </v-col>
        </v-row>
      <v-container>
        <v-row>
          <v-col v-for="(value, index) in values" :key="index" cols="12" md="4" class=" pa-4 text-center ">
            <v-card :elevation="2" height="100%" class="ma-1 pa-4">
              <v-img :src="value.image" max-width="450"  max-height="200" class="mb-4"  contain></v-img>
              <h2 class="text-h5 font-weight-bold text-primary mb-2">{{ value.title }}</h2>
              <p class="text-subtitle-1 text-secondary">{{ value.description }}</p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
  </section>
  <section>
    <v-container >
      <v-row class="ma-2 pa-6">
        <v-col class="text-center">
          <p class="text-h6 mb-8 text-secondary">Every new project is welcomed with open arms, and grows into an offer if it turns out to be sustainable. That’s the way we grow and stand out from the crowd.
Objectives Key Results (OKRs) are set up at a group, team, and individual level to accomplish our mission all together.
Our teams and people are our most precious asset. We aim to have a positive and valuable impact on Earth via our work with nonprofits.</p>
        </v-col>
      </v-row>
      <v-row>
          <v-col cols="12" class="text-center mb-6">
            <h2 class="text-h3 font-weight-bold text-primary">Our Founder</h2>
          </v-col>
        </v-row>
      <v-row class="ma-2 pa-6 align-center">
        <v-col xs="12" md="8" class="d-flex flex-column align-center">
          <v-card variant="text" class="">
            <v-card-title class="text-primary"><a href="https://www.linkedin.com/in/prashant11/" target="_blank">Prashant Pandit</a></v-card-title>
            <v-card-text class="text-secondary text-h6 mb-4">
              Prashant brings a comprehensive knowledge of technology and its application in a wide range of complex projects, both in the commercial and not-for-profit sectors. 
              After completing an M.S. degree in Computer Science from Leiden University in the Netherlands, 
              he spent five years at India’s NASSCOM Foundation launching and managing landmark programs such 
              as BiGTech with Techsoup USA and ConnectIT with Microsoft. True to his belief in volunteering impact, 
              Prashant conceptualized the MyKartavya program for NASSCOM member companies to leverage corporate 
              volunteering. <br/>Working with hundreds of non-profits across India, he gained first-hand insight into 
              their technology challenges. He founded digiSarathi in 2013, to cater to the innovation needs of its Indian and global clients across various industry sectors.
              <br/> Originally from Mumbai, Prashant now resides in Pune, engaging and mentoring its vibrant startup ecosystem.
            </v-card-text>
          </v-card>
        </v-col>
        <v-col xs="12" md="4" class="d-flex justify-center">
          <v-img src="/prashant.png" max-width="300" contain class="grey-filter"></v-img>
        </v-col>
      </v-row>
    </v-container>
    </section>
  </v-main>
</template>
<script setup>
import { ref } from 'vue';

const values = ref([
  {
    title: 'Innovation',
    description: 'We believe in continuous innovation and strive to bring the latest technology solutions to our clients.',
    image: '/innovation.svg' // Replace with your actual SVG path
  },
  {
    title: 'Integrity',
    description: 'Our commitment to integrity ensures that we maintain transparency and honesty in all our dealings.',
    image: '/certificate.svg' // Replace with your actual SVG path
  },
  {
    title: 'Customer Focus',
    description: 'We prioritize our customers and work closely with them to meet their needs and exceed their expectations.',
    image: '/reviews.svg' // Replace with your actual SVG path
  }
]);
</script>
<style>
.grey-filter {
  filter: grayscale(100%);
  opacity: 0.9;
  transition: all 0.3s ease;
}
</style>
