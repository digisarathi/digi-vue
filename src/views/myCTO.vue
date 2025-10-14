<template>
  <v-main>
    <!-- Hero Section -->
    <section id="hero" class="py-16">
      <v-container>
        <v-row align="center">
          <v-col cols="12" md="7" order="2" order-md="1">
            <h1 class="text-h2 text-primary font-weight-bold mb-4">
              Your Virtual Chief Technology Officer
            </h1>
            <p class="text-h6 mb-6 text-secondary">
              Expertise without the hefty price tag! Whether you’re navigating Digital
              Transformation, Troubleshooting Tech Issues or Planning your next big project, myCTO
              is your trusted partner.
            </p>
            <v-btn
              color="primary"
              size="large"
              class="mr-4 mb-4"
              href="mailto:mycto@digisarathi.com"
            >
              Get in touch
            </v-btn>
          </v-col>
          <v-col cols="12" md="5" order="1" order-md="2" class="text-center justify-center">
            <v-img src="/myCTO_logo.png" max-width="350" contain alt="myCTO"></v-img>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Key Features Section -->
    <section id="features" class="py-12 bg-grey-lighten-4">
      <v-container>
        <v-row class="text-center mb-8">
          <v-col>
            <h2 class="text-h4 text-primary font-weight-bold">Key Features</h2>
            <p class="text-body-1 mt-2">
              Access a dedicated tech expert anytime via
              <strong>email, Zoom/Google Meet, and phone calls</strong> for strategic guidance and
              technical answers, tailored to your needs. From small startups to growing
              organizations, myCTO scales with you.
            </p>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="6" v-for="(feature, index) in features" :key="index">
            <v-card height="100%" class="feature-card rounded-lg">
              <v-card-item class="pa-5">
                <div class="d-flex flex-column align-center text-center">
                  <v-icon :icon="feature.icon" color="primary" size="x-large" class="mb-4"></v-icon>
                  <v-card-title class="text-primary font-weight-bold mb-3 text-wrap">
                    {{ feature.title }}
                  </v-card-title>
                  <v-card-text class="text-body-1">
                    {{ feature.description }}
                  </v-card-text>
                </div>
              </v-card-item>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- How It Works Section -->
    <section id="how-it-works" class="py-12">
      <v-container>
        <v-row class="text-center mb-8">
          <v-col>
            <h2 class="text-h4 text-primary font-weight-bold mb-4">How It Works</h2>
            <p class="text-body-1"></p>
          </v-col>
        </v-row>

        <v-row class="justify-center">
          <v-col cols="12" md="6" v-for="(step, index) in process" :key="index">
            <v-card height="100%" class="d-flex flex-column text-center pa-6">
              <v-icon :icon="step.icon" size="64" color="secondary" class="mb-4 mx-auto"></v-icon>
              <h3 class="text-h5 font-weight-bold mb-3 text-primary">{{ step.title }}</h3>
              <p class="text-body-2">{{ step.description }}</p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Audit Options Section -->
    <section id="pricing" class="py-12 bg-grey-lighten-4">
      <v-container>
        <v-row class="text-center mb-8">
          <v-col>
            <h2 class="text-h4 text-primary font-weight-bold mb-4">Flexible Engagement Models</h2>
            <p class="text-body-1">
              Choose the level of support that's right for your organization
            </p>
          </v-col>
        </v-row>

        <v-row class="justify-center">
          <!-- Tech Audit -->
          <v-col cols="12" md="6" class="d-flex">
            <v-card class="flex-grow-1" elevation="4">
              <v-card-actions class="justify-end">
                <v-chip color="success" variant="tonal" size="large" class="">Most Popular</v-chip>
              </v-card-actions>
              <v-card-title class="text-h5 font-weight-bold">
                <v-icon :icon="mdiMagnify" color="primary" class="mr-2" />
                Tech Audit
              </v-card-title>
              <v-card-text>
                <v-list density="compact" class="py-0">
                  <v-list-item v-for="(item, i) in auditInclusions" :key="i" class="px-0">
                    <template v-slot:prepend>
                      <v-icon :icon="mdiCheckCircle" color="success" size="small" class="mr-2" />
                    </template>
                    <v-list-item-title class="text-body-2">{{ item }}</v-list-item-title>
                  </v-list-item>
                </v-list>
                <v-divider class="my-4" />
                <div class="text-h6 mb-2">Custom Pricing</div>
                <p class="text-caption mb-4">
                  We'll work with your budget to create a package that fits your needs
                </p>
                <v-btn block color="primary" variant="outlined" href="mailto:mycto@digisarathi.com"
                  >Request Quote</v-btn
                >
              </v-card-text>
            </v-card>
          </v-col>

          <!-- Audit + Handholding -->
          <v-col cols="12" md="6" class="d-flex">
            <v-card class="flex-grow-1" color="primary" dark elevation="4">
              <v-card-actions class="justify-end"> </v-card-actions>
              <v-card-title class="text-h5 font-weight-bold">
                <v-icon :icon="mdiAccountTie" class="mr-2" />
                Audit + Handholding
              </v-card-title>
              <v-card-text>
                <v-list class="pa-4 rounded">
                  <v-list-item v-for="(item, i) in handholdingInclusions" :key="i" class="px-">
                    <template v-slot:prepend>
                      <v-icon :icon="mdiCheckCircle" color="success" size="small" class="mr-2" />
                    </template>
                    <v-list-item-title class="text-body-2">{{ item }}</v-list-item-title>
                  </v-list-item>
                </v-list>
                <v-divider class="my-4" />
                <div class="text-h6 mb-2">Flexible Engagement</div>
                <p class="text-caption mb-4">
                  Let's discuss the right level of support for your team and its productivity
                </p>
                <v-btn block color="white" variant="outlined" href="mailto:mycto@digisarathi.com"
                  >Let's Talk</v-btn
                >
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- What Can You Ask Section -->
    <section id="what-can-you-ask" class="py-12 bg-grey-lighten-4">
      <v-container>
        <v-row class="text-center mb-8">
          <v-col cols="12" md="8" class="mx-auto">
            <h2 class="text-h3 font-weight-bold text-primary mb-4">What Can You Expect?</h2>
            <p class="text-body-1 mb-8">
              No goal is too big or too small – we're here to help you succeed.
            </p>
          </v-col>
        </v-row>

        <v-row class="justify-center">
          <!-- For CEOs Column -->
          <v-col cols="12" md="6" class="px-1">
            <v-card variant="flat" class="h-100">
              <v-card-text class="text-center pa-4">
                <v-icon :icon="mdiAccountTie" size="48" color="primary" class="mb-4"></v-icon>
                <h3 class="text-h5 font-weight-bold mb-4">For CEOs & Leaders</h3>
                <v-list density="compact" class="text-start bg-transparent">
                  <v-list-item
                    v-for="(item, i) in ceoQuestions"
                    :key="'ceo-' + i"
                    class="px-0 align-start"
                  >
                    <template v-slot:prepend>
                      <v-icon color="primary" size="small" class="mt-1 me-2 flex-shrink-0">{{
                        mdiChevronRight
                      }}</v-icon>
                    </template>
                    <v-list-item-title class="text-body-2">
                      <div class="text-wrap">{{ item }}</div>
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>

          <!-- For Teams Column -->
          <v-col cols="12" md="6" class="px-1">
            <v-card variant="flat" class="h-100">
              <v-card-text class="text-center pa-4">
                <v-icon :icon="mdiAccountGroup" size="48" color="primary" class="mb-4"></v-icon>
                <h3 class="text-h5 font-weight-bold mb-4">For Teams</h3>
                <v-list density="compact" class="text-start bg-transparent">
                  <v-list-item
                    v-for="(item, i) in teamQuestions"
                    :key="'team-' + i"
                    class="px-0 align-start"
                  >
                    <template v-slot:prepend>
                      <v-icon color="primary" size="small" class="mt-1 me-2 flex-shrink-0">{{
                        mdiChevronRight
                      }}</v-icon>
                    </template>
                    <v-list-item-title class="text-body-2">
                      <div class="text-wrap">{{ item }}</div>
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Testimonials Section -->
    <section id="testimonials" class="py-12">
      <v-container>
        <v-row class="text-center mb-8">
          <v-col cols="12" md="8" class="mx-auto">
            <h2 class="text-h3 font-weight-bold text-primary mb-4">Why SMEs and NGOs Love myCTO</h2>
            <p class="text-body-1 mb-8">
              Hear from organizations that have transformed their tech strategy with our expert
              guidance
            </p>
          </v-col>
        </v-row>

        <v-row class="justify-center">
          <v-col
            cols="12"
            md="4"
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="mb-6"
          >
            <v-card variant="flat" class="h-100 d-flex flex-column">
              <v-card-text class="flex-grow-1">
                <v-rating
                  v-model="testimonial.rating"
                  color="amber"
                  density="compact"
                  size="small"
                  readonly
                  class="mb-3"
                ></v-rating>
                <p class="text-body-1 font-italic mb-4">"{{ testimonial.quote }}"</p>
              </v-card-text>
              <v-card-actions class="bg-grey-lighten-4 pa-4">
                <v-avatar size="48" class="me-3">
                  <v-icon size="large" color="primary">{{ testimonial.icon }}</v-icon>
                </v-avatar>
                <div>
                  <div class="font-weight-bold">{{ testimonial.name }}</div>
                  <div class="text-caption">{{ testimonial.role }}, {{ testimonial.company }}</div>
                </div>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- FAQ Section -->
    <section id="faq" class="py-12 bg-grey-lighten-3">
      <v-container>
        <v-row class="text-center mb-8">
          <v-col cols="12" md="8" class="mx-auto">
            <h2 class="text-h3 font-weight-bold text-primary mb-4">Frequently Asked Questions</h2>
            <p class="text-body-1">
              Can't find the answer you're looking for?
              <a href="mailto:mycto@digisarathi.com" class="text-primary">Contact us</a>.
            </p>
          </v-col>
        </v-row>

        <v-row class="justify-center">
          <v-col cols="12" md="8">
            <v-card variant="flat" class="mb-6" v-for="(faq, index) in faqs" :key="index">
              <v-card-text class="pa-6">
                <div class="d-flex align-center mb-3">
                  <v-icon :icon="mdiHelpCircleOutline" color="primary" class="mr-2"></v-icon>
                  <h3 class="text-h6 font-weight-bold text-primary mb-0">{{ faq.question }}</h3>
                </div>
                <p class="text-body-2 mb-0">{{ faq.answer }}</p>
              </v-card-text>
              <v-divider v-if="index < faqs.length - 1"></v-divider>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-primary">
      <v-container class="text-center">
        <h2 class="text-h4 font-weight-bold text-white mb-4">
          No more searching endlessly on the Internet for your tech queries!
        </h2>
        <p class="text-body-1 text-white mb-8 mx-auto" style="max-width: 600px">
          Get expert insights and a clear roadmap to improve your tech stack, security, and
          performance. No long-term commitments, just actionable recommendations.
        </p>
        <v-btn
          class="mx-2 mb-2 rounded-lg"
          href="mailto:mycto@digisarathi.com"
          size="large"
          variant="outlined"
        >
          Book a Consultation
        </v-btn>
      </v-container>
    </section>
  </v-main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useHeadManager } from '@/composables/useHeadManager'

const { setMetaTags, setStructuredData } = useHeadManager()

// Set page title and meta tags
const updatePageMeta = () => {
  setMetaTags({
    title: 'Your Virtual CTO Service',
    description:
      'Get expert tech leadership on demand with our Virtual CTO services. Perfect for startups and SMEs looking to scale their technology strategy.',
    image: '/og-mycto.jpg', // Add your custom OG image for this page
  })

  setStructuredData({
    '@type': 'Product',
    name: 'myCTO Service',
    description: 'On-demand CTO services for startups and SMEs',
    brand: {
      '@type': 'Brand',
      name: 'digiSarathi',
    },
    offers: {
      '@type': 'Offer',
      price: '19999',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
    },
  })
}

onMounted(() => {
  updatePageMeta()
})

import {
  mdiChartTimelineVariant,
  mdiAccountGroup,
  mdiShieldCheck,
  mdiHelpCircleOutline,
  mdiCheckCircle,
  mdiAccountTie,
  mdiChevronRight,
  mdiDomain,
  mdiOfficeBuilding,
  mdiMagnify,
  mdiFileDocumentOutline,
} from '@mdi/js'

const features = ref([
  {
    title: 'Comprehensive Review',
    description: 'Thorough analysis of your current tech stack, security, and architecture',
    icon: mdiMagnify,
  },
  {
    title: 'Actionable Insights',
    description: 'Clear, prioritized recommendations for immediate and long-term improvements',
    icon: mdiFileDocumentOutline,
  },
  {
    title: 'Cost Optimization',
    description: 'Identify cost-saving opportunities in your technology spend',
    icon: mdiChartTimelineVariant,
  },
  {
    title: 'Security First',
    description: 'Comprehensive security assessment and recommendations',
    icon: mdiShieldCheck,
  },
])

const process = ref([
  {
    title: 'Initial Consultation',
    description:
      'Investigative session(s) to understand your Goals, Challenges and current Tech Stack',
    icon: mdiMagnify,
  },
  {
    title: 'In-Depth Analysis',
    description:
      'Comprehensive Review of your Technology Infrastructure, People Skills and Processes',
    icon: mdiFileDocumentOutline,
  },
  {
    title: 'Actionable Report',
    description: 'Detailed Findings with Prioritized Recommendations and Implementation Roadmap',
    icon: mdiChartTimelineVariant,
  },
])

// Audit inclusions
const auditInclusions = ref([
  'Comprehensive Technology Review',
  'Security Assessment',
  'Performance Analysis',
  'Detailed Findings Report',
  'Implementation Roadmap',
  'Strategy Sessions',
])

const handholdingInclusions = ref([
  'Everything in Tech Audit',
  'Implementation Support',
  'Weekly Check-ins',
  'Priority Email Support',
  'Team Training Sessions',
  'Quarterly Strategy Reviews',
])

// Testimonials data
const testimonials = ref([
  {
    quote:
      'myCTO helped us evaluate if our portal needed an upgrade or not. This strategic advice saved us lot of money & energy!',
    name: 'Sarah M.',
    role: 'CEO',
    company: 'Nonprofit association',
    rating: 5,
    icon: mdiOfficeBuilding,
  },
  {
    quote: 'myCTO showed us how our hosting bill was too high. We appreciate the annual savings!',
    name: 'Raj K.',
    role: 'Founder',
    company: 'Agritech startup',
    rating: 5,
    icon: mdiDomain,
  },
  {
    quote:
      "Having access to a CTO expert via email and calls feels like having an in-house expert. It's a game-changer for our small team.",
    name: 'Gayatri',
    role: 'Operations Lead',
    company: 'NGO',
    rating: 5,
    icon: mdiAccountGroup,
  },
])

// Questions for 'What Can You Ask' section
const ceoQuestions = ref([
  'How do I align technology with my business goals?',
  'Should we invest in cloud solutions or custom software?',
  "What's the best tech stack for our next project?",
  'How can we improve cybersecurity on a budget?',
  'What emerging technologies should we consider?',
  'How can we measure the ROI of our tech investments?',
])

const teamQuestions = ref([
  'How do we fix specific technical issues (e.g., website downtime, app bugs)?',
  'What tools should we use for project management or collaboration?',
  'How do we optimize our database performance?',
  'Can you review our code or architecture for best practices?',
  'How can we improve our development workflow?',
  'What are the best practices for API design and integration?',
])

const faqs = ref([
  {
    question: 'What is myCTO?',
    answer:
      'myCTO is a comprehensive audit and tech handholding service that connects your CEO and team to a dedicated tech expert via email, Zoom/Google Meet, or phone for strategic guidance and technical answers, tailored to your needs.',
  },
  {
    question: 'How long does the audit process take?',
    answer:
      'Most audits are completed within 2-4 weeks, depending on the size and complexity of your infrastructure. We start with an initial consultation, followed by data collection, analysis, and finally, a review session to discuss our findings.',
  },
  {
    question: 'What kind of organizations benefit from this audit?',
    answer:
      'Our audit is ideal for SMEs and NGOs that want to optimize their technology, improve security, reduce costs, or prepare for growth. Whether you have an in-house team or work with external IT vendors, our audit provides valuable insights.',
  },
  {
    question: 'What happens after the audit?',
    answer:
      "You'll receive a detailed report with our findings and recommendations. Many clients choose to continue with our optional handholding service to help implement the recommendations. However, there's no obligation to continue working with us.",
  },
  {
    question: 'How much does the audit cost?',
    answer:
      "Pricing is customized based on your organization's size and complexity. We offer transparent, fixed-fee pricing for the audit, with no hidden costs. Contact us for a personalized quote.",
  },
  {
    question: 'What if we need help implementing the recommendations?',
    answer:
      'We offer optional services that include software development, project management, vendor selection, team training, and ongoing advisory support. The level of involvement is entirely up to you.',
  },
  {
    question: 'How is this different from other technology audits?',
    answer:
      "Our experts understand the challenges of various sectors. We focus on practical, actionable recommendations rather than just pointing out problems. Our goal is to help you make informed technology decisions that support your organization's objectives.",
  },
  {
    question: 'What information do you need from us?',
    answer:
      "We'll need access to documentation about your current systems, architecture diagrams, and key team members for interviews. We work around your schedule and can adapt to your security requirements for information sharing.",
  },
  {
    question: 'Is my data secure?',
    answer:
      'Yes, we take data security seriously. We use industry-standard encryption and privacy protocols to protect your data.',
  },
])
</script>

<style scoped>
.feature-card {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  height: 100%;
}

.feature-card:hover,
.step-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1) !important;
}

.step-card {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    border-color 0.3s ease;
  height: 100%;
  border-radius: 12px;
  border-left: 4px solid #1976d2;
}

/* FAQ Styles */
#faq .v-card {
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.3s ease;
}

#faq .v-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

#faq .v-card-text {
  padding: 1.5rem;
}

#faq .v-divider {
  margin: 0 1.5rem;
  width: calc(100% - 3rem);
}

.rounded-lg {
  border-radius: 12px;
}

/* Pricing Section Styles */
.pricing-card {
  position: relative;
  border: 1px solid #e0e0e0;
  transition: all 0.3s ease;
  overflow: hidden;
}

.pricing-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1) !important;
}

.pricing-card.popular {
  border: 2px solid var(--v-primary-base);
  position: relative;
  z-index: 1;
}

.popular-badge {
  position: absolute;
  top: 0;
  right: 20px;
  background: var(--v-primary-base);
  color: white;
  padding: 4px 12px;
  font-size: 0.7rem;
  font-weight: 600;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.price {
  color: var(--v-primary-base);
  margin: 1.5rem 0;
}

.v-list-item {
  min-height: 36px;
}
</style>
