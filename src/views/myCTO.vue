<template>
  <v-app>
    <v-main>
      <!-- Hero Section -->
      <section id="hero" class="py-16">
        <v-container>
          <v-row align="center">
            <v-col cols="12" md="7">
              <h1 :class="['mb-6', { 'text-h3': !isMobile, 'text-h4': isMobile }]" class="text-primary">
                You don't have to hire a full-time CTO to get expert tech leadership.
              </h1>
              <p class="text-body-1 mb-6">
                You need SMART part-time. Get expert guidance, avoid costly mistakes, have peace of mind.
              </p>
              <v-btn href="mailto:hello@digisarathi.com" color="primary" size="large" class="me-3">
                Let's Chat
              </v-btn>
            </v-col>
            <v-col cols="12" md="5" class="text-center">
              <v-img src="/myCTO.png" max-width="450" max-height="350" contain alt="myCTO"></v-img>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- Two Paths Section -->
      <section id="paths" class="py-16 bg-light">
        <v-container>
          <v-row class="mb-12">
            <v-col cols="12" class="text-center">
              <h2 class="text-h5 text-primary mb-2">Choose Your Starting Point</h2>
            </v-col>
          </v-row>

          <v-row>
            <!-- Audit Path -->
            <v-col cols="12" md="6" class="mb-6">
              <v-card class="h-100 pa-8" elevation="2">
                <h3 class="text-h6 text-primary mb-4">
                  <v-icon class="me-2">{{ mdiMagnify }}</v-icon>Have Systems but unsure if its the right path?
                </h3>
                <p class="text-body-2 mb-6">
                  Our one-time audit gives you clarity on what you have, what's broken, and what to do next.
                </p>

                <h4 class="text-subtitle-2 text-primary mb-3">You'll get:</h4>
                <ul class="mb-6" style="list-style: none; padding: 0;">
                  <li v-for="item in auditItems" :key="item" class="mb-2 text-body-2"
                    style="padding-left: 25px; position: relative;">
                    <span style="position: absolute; left: 0; color: #3254ae; font-weight: bold;">✓</span>
                    {{ item }}
                  </li>
                </ul>

                <p class="text-caption mb-6">
                  <strong>Timeline:</strong> 2-4 weeks | <strong>Investment:</strong> Customized quote
                </p>

                <v-btn href="mailto:hello@digisarathi.com?subject=Interested in Audit" color="primary" block>
                  Request Audit
                </v-btn>
              </v-card>
            </v-col>

            <!-- Retainer Path -->
            <v-col cols="12" md="6" class="mb-6">
              <v-card class="h-100 pa-8" elevation="2">
                <h3 class="text-h6 text-primary mb-4">
                  <v-icon class="me-2">{{ mdiRocket }}</v-icon>Building Fresh? Get expert guidance from day one.
                </h3>
                <p class="text-body-2 mb-6">
                  Our monthly retainer means you get a part-time CTO guiding every decision from day one. No mistakes,
                  just momentum.
                </p>

                <h4 class="text-subtitle-2 text-primary mb-3">You'll get:</h4>
                <ul class="mb-6" style="list-style: none; padding: 0;">
                  <li v-for="item in retainerItems" :key="item" class="mb-2 text-body-2"
                    style="padding-left: 25px; position: relative;">
                    <span style="position: absolute; left: 0; color: #3254ae; font-weight: bold;">✓</span>
                    {{ item }}
                  </li>
                </ul>

                <p class="text-caption mb-6">
                  <strong>Commitment:</strong> Month-to-month, no lock-in | <strong>Investment:</strong> Customized
                  quote
                </p>

                <v-btn href="mailto:hello@digisarathi.com?subject=Interested in Retainer" color="primary" block>
                  Explore Retainer
                </v-btn>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- How It Works -->
      <section id="process" class="py-16">
        <v-container>
          <v-row class="mb-12">
            <v-col cols="12" class="text-center">
              <h2 class="text-h5 text-primary mb-2">How We Work</h2>
              <p class="text-subtitle-2 text-primary">The Audit Process</p>
            </v-col>
          </v-row>

          <v-row>
            <v-col v-for="(step, idx) in steps" :key="idx" cols="12" md="4" class="text-center mb-6">
              <div class="mb-4">
                <v-avatar color="primary" size="60">
                  <span class="text-white text-h5">{{ idx + 1 }}</span>
                </v-avatar>
              </div>
              <h4 class="text-subtitle-1 text-primary mb-2">{{ step.title }}</h4>
              <p class="text-body-2">{{ step.desc }}</p>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- FAQ Section -->
      <section id="faq" class="py-16 bg-light">
        <v-container>
          <v-row class="mb-12">
            <v-col cols="12" class="text-center">
              <h2 class="text-h5 text-primary mb-2">Common Questions</h2>
            </v-col>
          </v-row>

          <v-row justify="center">
            <v-col cols="12" md="8">
              <v-expansion-panels>
                <v-expansion-panel v-for="(item, idx) in faqItems" :key="idx">
                  <template v-slot:title>
                    <span class="text-body-2 font-weight-500">{{ item.q }}</span>
                  </template>
                  <template v-slot:text>
                    <p class="text-body-2">{{ item.a }}</p>
                  </template>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- CTA Section -->
      <section id="cta" class="py-16 bg-primary">
        <v-container>
          <v-row align="center">
            <v-col cols="12" md="8" class="mx-auto text-center">
              <h2 class="text-h5 text-white mb-4">Ready to get your tech house in order?</h2>
              <p class="text-body-1 text-white mb-6">
                Let's talk about where you are and what you need.
              </p>
              <v-btn href="mailto:hello@digisarathi.com" color="white" size="large">
                Get in Touch
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </section>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, computed } from 'vue'
import { mdiRocket, mdiMagnify } from '@mdi/js'
import { useDisplay } from 'vuetify'

const { mobile } = useDisplay()
const isMobile = computed(() => mobile.value)

const auditItems = [
  'Deep dive into your current IT systems and architecture',
  'Data flow analysis and security assessment',
  'Identification of automation and cost-saving opportunities',
  'Backup and disaster recovery review',
  'Prioritized recommendations with implementation roadmap'
]

const retainerItems = [
  'Ongoing IT systems health and vendor management',
  'Website management - strategy, design, and content guidance',
  'Marketing and analytics monitoring',
  'Continuous efficiency improvements',
  'Strategic roadmaps and implementation support',
  'Your sounding board for all tech decisions'
]

const steps = [
  {
    title: 'Initial Consultation',
    desc: 'We listen. Your goals, challenges, current tech stack—everything that matters.'
  },
  {
    title: 'In-Depth Analysis',
    desc: 'Comprehensive review of your infrastructure, people, processes, security, and data flows.'
  },
  {
    title: 'Actionable Report',
    desc: 'Detailed findings with prioritized recommendations and a clear implementation roadmap.'
  }
]

const faqItems = [
  {
    q: 'How long does the audit process take?',
    a: 'Most audits are completed within 2-4 weeks, depending on the size and complexity of your infrastructure. We start with an initial consultation, followed by data collection, analysis, and finally, a review session to discuss our findings.'
  },
  {
    q: 'What kind of organizations benefit from this audit?',
    a: 'Our audit is ideal for SMEs and NGOs that want to optimize their technology, improve security, reduce costs, or prepare for growth. Whether you have an in-house team or work with external IT vendors, our audit provides valuable insights.'
  },
  {
    q: 'What happens after the audit?',
    a: 'You\'ll receive a detailed report with our findings and recommendations. Many clients choose to continue with our optional handholding service to help implement the recommendations. However, there\'s no obligation to continue working with us.'
  },
  {
    q: 'How much does the audit cost?',
    a: 'Pricing is customized based on your organization\'s size and complexity. We offer transparent, fixed-fee pricing for the audit, with no hidden costs. Contact us for a personalized quote.'
  },
  {
    q: 'What if we need help implementing the recommendations?',
    a: 'We offer optional services that include software development, project management, vendor selection, team training, and ongoing advisory support. The level of involvement is entirely up to you.'
  },
  {
    q: 'How is this different from other technology audits?',
    a: 'Our experts understand the challenges of various sectors. We focus on practical, actionable recommendations rather than just pointing out problems. Our goal is to help you make informed technology decisions that support your organization\'s objectives.'
  },
  {
    q: 'What information do you need from us?',
    a: 'We\'ll need access to documentation about your current systems, architecture diagrams, and key team members for interviews. We work around your schedule and can adapt to your security requirements for information sharing.'
  },
  {
    q: 'Is my data secure?',
    a: 'Yes, we take data security seriously. We use industry-standard encryption and privacy protocols to protect your data.'
  }
]
</script>

<style scoped>
.bg-light {
  background-color: #f5f5f5;
}

.bg-primary {
  background-color: #3254ae;
}
</style>