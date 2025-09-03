<script setup>
import { onMounted } from 'vue';
import { useHeadManager } from '@/composables/useHeadManager';

const { setMetaTags, setStructuredData } = useHeadManager();

// Set meta tags for the page
onMounted(() => {
  // Set up meta tags
  setMetaTags({
    title: 'Contact Us - Get in Touch',
    description: 'Have questions? Reach out to our team for IT solutions, training, and consultancy services. We\'re here to help your business grow.',
    image: '/og-contact.jpg'
  });

  // Set up structured data for ContactPage
  setStructuredData({
    '@type': 'ContactPage',
    name: 'Contact digiSarathi',
    description: 'Get in touch with our team for IT solutions, training, and consultancy services.',
    url: 'https://digisarathi.com/contact',
    contactPoint: [{
      '@type': 'ContactPoint',
      telephone: '+91-9022465676',
      contactType: 'customer service',
      email: 'hello@digisarathi.com',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi']
    }],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'A 603, Satyam Shrey, Bavdhan',
      addressLocality: 'Pune',
      addressRegion: 'Maharashtra',
      postalCode: '411021',
      addressCountry: 'IN'
    }
  });
});
</script>

<template>
  <v-main>
    <!-- Hero Section -->
    <section class="hero-section">
      <v-container>
        <v-row align="center" class="min-height-70vh ">
          <v-col cols="12" md="7">
            <h1 class="text-h3 font-weight-bold mb-6 text-primary">
              Get in Touch
            </h1>
            <p class="text-h6 mb-8 text-secondary">
              We would love to hear from you! 
            </p>
          </v-col>
          <v-col cols="12" md="5" class="d-none d-md-flex justify-center">
            <v-img src="/contact.svg" max-width="450" contain></v-img>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <v-container >
      <v-row class="">
        <v-col cols="12" md="6">
          <h3 class="text-accent">Contact Information</h3>
          <span class="text-secondary">Email: <a href="mailto:hello@digisarathi.com">hello@digisarathi.com</a></span><br />
          <span class="text-secondary">Phone: +91 9022 465676</span><br />
          <span class="text-secondary">Whatsapp: +91 9022 465676</span>
        </v-col>
        <v-col cols="12" md="6">
          <h3 class="text-accent">Office Address</h3>
          <span class="text-secondary">A 603, Satyam Shrey, Bavdhan, Pune, Maharashtra, India - 411021</span>

        </v-col>
        <v-col cols="12" md="6">
          <h3 class="text-accent">Registered Address</h3>
          <span class="text-secondary">5, Deeplaxmi Apts, Mithaghar Road, Mulund East, Mumbai, Maharashtra, India - 400081</span>

        </v-col>
        <v-col cols="12" md="6">
          <h3 class="text-accent">Management</h3>
          <ul class="text-secondary" style="list-style-type: none; padding: 0;">
            <li class="">director@digisarathi.com | admin@digisarathi.com</li>
          </ul>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
<style scoped>

.hero-section {
  background: linear-gradient(135deg, var(--v-primary-base) 0%, var(--v-secondary-base) 100%);
}

.min-height-70vh {
  min-height: 70vh;
}

</style>