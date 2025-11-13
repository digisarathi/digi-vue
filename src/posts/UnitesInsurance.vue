<template>
  <PostLayout :post="post">
    <v-container class="py-16">
      <!-- Header -->
      <v-row justify="center" class="mb-12">
        <v-col cols="12" md="10" lg="8">
          Case Study: Unites Technologies
          Real-Time Mobile Insurance at the Point of Sale — Built to Scale, Even on Shaky Networks
        </v-col>
      </v-row>

      <!-- The Challenge -->
      <v-row class="mb-10">
        <v-col cols="12" md="6">
          <h2 class="text-h5 font-weight-bold mb-4">The Challenge</h2>
          <p class="text-body-1 text-medium-emphasis">
            Unites, an ambitious IT firm in Navi Mumbai, wanted to launch a first-of-its-kind <strong>real-time mobile
              insurance platform</strong> for electronics retailers. The vision was simple: a shop owner scans a
            phone, validates eligibility, and hands over a digital insurance policy — all in under 10 seconds.
          </p>
          <p class="text-body-1 text-medium-emphasis">
            But reality was harsh. Most POS locations had <strong>unreliable internet</strong>. Policies couldn’t be
            duplicated. Only specific phone brands qualified. And the team? Fresh talent with no experience in
            mission-critical, offline-first systems.
          </p>
        </v-col>
        <v-col cols="12" md="6">
          <v-img src="/mobile-shop.jpg" alt="Retail shop with unstable network" height="300" cover class="rounded-lg mt-md-8">
            <template v-slot:placeholder>
              <v-progress-circular indeterminate class="ma-4" />
            </template>
          </v-img>
        </v-col>
      </v-row>

      <!-- Our Solution -->
      <v-row class="mb-10">
        <v-col cols="12" md="6" order-md="2">
          <h2 class="text-h5 font-weight-bold mb-4">Our Solution</h2>
          <p class="text-body-1 text-medium-emphasis">
            We became their <strong>technical backbone</strong>. In just 14 days, we assembled a lean, high-output
            team of 6 engineers — trained them in clean architecture, offline resilience, and secure API design — and
            delivered a production-ready system in 6 weeks.
          </p>
          <p class="text-body-1 text-medium-emphasis">
            The platform worked <em>with</em> the chaos: it validated devices locally, queued policies during outages,
            and synced flawlessly when signal returned. No duplicates. No delays. No excuses.
          </p>
        </v-col>
        <v-col cols="12" md="6" order-md="1">
          <v-card class="pa-4 h-100" variant="outlined">
            <v-card-title class="text-h6 font-weight-bold text-primary">
              Core Innovations
            </v-card-title>
            <v-card-text>
              <ul class="text-body-2">
                <li>Idempotency keys + device fingerprinting → <strong>0 duplicates</strong></li>
                <li>Local OEM whitelist cache → instant validation</li>
                <li>On-device PDF generation → policy in hand, even offline</li>
                <li>Auto-sync engine → 99.1% uptime in low-connectivity zones</li>
              </ul>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- Results -->
      <v-row class="mb-12">
        <v-col cols="12">
          <h2 class="text-h5 font-weight-bold text-center mb-6">The Results</h2>
          <v-row>
            <v-col v-for="(stat, i) in stats" :key="i" cols="6" sm="3">
              <div class="text-center">
                <div class="text-h4 font-weight-bold text-primary">{{ stat.value }}</div>
                <div class="text-caption text-medium-emphasis">{{ stat.label }}</div>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <!-- Testimonial -->
      <v-row justify="center">
        <v-col cols="12" md="10">
          <v-card class="pa-6 text-center" color="grey-lighten-4">
            <v-icon size="48" color="primary" class="mb-4">mdi-format-quote-open</v-icon>
            <p class="text-h6 font-italic mb-4">
              “I always remember Prashant as technology creative IT systems design professional. He is professional in
              his approach and always keeps the innovative application of technology for its best use. He ensure
              scalability, reliability, modularity…and many more aspects in mind when design system. I have seen him
              designing like committed professional. He has always helped clients to think Digital rather than analog
              and convert. I enjoyed working with him and will look forward to work with him again in future. ”
            </p>
            <p class="font-weight-bold text-primary">
              — Dilip Tikle, Business Head, Unites Technologies
            </p>
          </v-card>
        </v-col>
      </v-row>

      <!-- CTA -->
      <v-row justify="center" class="mt-12">
        <v-col cols="auto">
          <v-btn size="x-large" color="primary" append-icon="mdi-arrow-right" href="mailto:hello@digisarathi.com">
            Book Your Architecture Audit
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </PostLayout>
</template>

<script>
const post = {
  id: '8',
  title: 'Mobile Insurance Platform for Unites (Navi Mumbai)',
  date: '2023-06-23T23:07:40+00:00',
  tags: ['Insurance', 'Platform Development', 'Real-time Processing'],
  excerpt:
    'Unites was tasked with building a PoS mobile insurance platform from scratch. Here\'s how we helped them make the right tech choices & build a scalable & secure platform.',
}
const stats = [
  { value: '6.2s', label: 'Avg. Policy Issuance' },
  { value: '0', label: 'Duplicate Policies' },
  { value: '10K+', label: 'Policies in 3 Months' },
  { value: '47%', label: 'Cost Savings' },
]
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
