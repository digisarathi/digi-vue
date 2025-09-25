<template>
  <v-app>
    <v-main>
      <!-- Hero Section -->
      <section id="hero" class="py-16">
        <v-container>
          <v-row align="center">
            <v-col cols="12" md="7">
              <h1 class="text-h2 text-primary font-weight-bold mb-4">Quick-Fix Website Audit Service</h1>
              <p class="text-body-1 mb-6">
                This Website Audit & Quick Fix Package is designed for NGOs seeking to enhance their online presence
                without a full website revamp. Through targeted analysis and minor tweaks, we deliver significant
                improvements in user experience, accessibility, and performance, maximizing your website’s impact for
                your mission.
              </p>
            </v-col>
            <v-col cols="12" md="5" class="text-center">
              <v-img src="/website-audit.svg" max-width="450" contain alt="Website Audit" class="mx-auto"></v-img>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- What's Included -->
      <section id="included" class="py-12 bg-grey-lighten-4">
        <v-container>
          <v-row class="text-center mb-8">
            <v-col>
              <h2 class="text-h4 text-primary font-weight-bold">What's Included</h2>
              <p class="text-body-1 mt-2">A thorough analysis of your website's key performance indicators</p>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="6" v-for="(item, index) in auditFeatures" :key="index">
              <v-card height="100%" class="feature-card h-100" elevation="2">
                <v-card-item class="pa-6">
                  <div class="d-flex flex-column">
                    <div class="d-flex align-center mb-3">
                      <v-icon color="primary" size="large" class="mr-3">{{ item.icon }}</v-icon>
                      <v-card-title class="text-primary font-weight-bold pa-0">{{ item.title }}</v-card-title>
                    </div>
                    <v-card-text class="text-body-1 pa-0">
                      {{ item.description }}
                    </v-card-text>
                  </div>
                </v-card-item>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- Benefits Section -->
      <section id="benefits" class="py-12">
        <v-container>
          <v-row class="text-center mb-8">
            <v-col>
              <h2 class="text-h4 text-primary font-weight-bold">Key Benefits</h2>
              <p class="text-body-1 mt-2">Why choose our quick-fix audit service for your NGO</p>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="6" lg="3" v-for="(benefit, index) in benefits" :key="index">
              <v-card height="100%" class="benefit-card h-100" elevation="2">
                <v-card-item class="pa-6">
                  <div class="d-flex flex-column">
                    <div class="d-flex align-center mb-3">
                      <v-icon color="primary" size="large" class="mr-3">{{ benefit.icon }}</v-icon>
                      <v-card-title class="text-primary font-weight-bold pa-0">{{ benefit.title }}</v-card-title>
                    </div>
                    <v-card-text class="text-h6 text-accent pa-0">
                      {{ benefit.description }}
                    </v-card-text>
                  </div>
                </v-card-item>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- Pricing Section -->
      <section id="pricing" class="py-12">
        <v-container>
          <v-row class="text-center mb-8">
            <v-col>
              <h2 class="text-h4 text-primary font-weight-bold">Pricing</h2>
              <v-card class="bordered-card pa-2 mb-4 text-accent" rounded="lg">
                <v-card-text>Customizable based on website size and complexity</v-card-text>
              </v-card>
              <v-card class="bordered-card pa-2 mb-4 text-accent" rounded="lg">
                <v-card-text>Includes audit, report, and implementation of agreed-upon fixes.</v-card-text>
              </v-card>
              <v-card class="bordered-card pa-2 mb-4 text-accent" rounded="lg">
                <v-card-text
                  >Optional add-ons (e.g., social media integration, basic analytics setup) available</v-card-text
                >
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- CTA Section -->
      <section id="cta" class="py-12 bg-primary">
        <v-container>
          <v-row justify="center">
            <v-col cols="12" md="8" class="text-center">
              <h2 class="text-h4 font-weight-bold text-white mb-4">Ready to Improve Your Website?</h2>
              <p>Fill out the form below to request a website audit and get started!</p>
              <v-btn
                variant="tonal"
                color="white"
                size="large"
                class="mt-8"
                target="_blank"
                href="https://forms.gle/zagFB9c9SJtrLcZd6"
              >
                Request Your Audit Now
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </section>
    </v-main>
  </v-app>
</template>

<script setup>
  import { ref } from 'vue';
  import {
    mdiSpeedometer,
    mdiShieldCheck,
    mdiMagnify,
    mdiCellphone,
    mdiChartTimelineVariant,
    mdiCashMultiple,
    mdiClockFast,
    mdiChartAreaspline,
    mdiHandHeart,
  } from '@mdi/js';

  const isSubmitting = ref(false);
  const formData = ref({
    name: '',
    email: '',
    website: '',
  });

  const benefits = [
    {
      title: 'Cost-Effective',
      icon: mdiCashMultiple,
      description: 'Enhance your website without the expense of a full redesign.',
    },
    {
      title: 'Quick Turnaround',
      icon: mdiClockFast,
      description: 'Completed within 8-12 business days.',
    },
    {
      title: 'Significant Impact',
      icon: mdiChartAreaspline,
      description: "Boost engagement, accessibility, and SEO rankings to support your NGO's goals.",
    },
    {
      title: 'Mission-Focused',
      icon: mdiHandHeart,
      description: 'Tailored to increase donations, volunteer sign-ups, or community outreach.',
    },
  ];

  const auditFeatures = [
    {
      title: 'User Experience (UX/UI)',
      icon: mdiCellphone,
      description:
        'Enhance how users interact with your website for better engagement with navigation mobile responsiveness, and call-to-action (CTA) clarity.',
    },
    {
      title: 'Content Scan',
      icon: mdiChartTimelineVariant,
      description:
        'Evaluate your content strategy and identify outdated or unclear content affecting donor or volunteer engagement.',
    },
    {
      title: 'SEO Check',
      icon: mdiMagnify,
      description: 'Analyze meta tags, keywords, and page load speed to boost search engine visibility.',
    },
    {
      title: 'Performance Metrics',
      icon: mdiSpeedometer,
      description:
        'Evaluate load times, security vulnerabilities and broken links using tools like Google PageSpeed Insights.',
    },
  ];

  const scrollToForm = () => {
    const form = document.getElementById('audit-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const submitAuditRequest = () => {
    isSubmitting.value = true;
    // TODO: Implement form submission logic
    setTimeout(() => {
      isSubmitting.value = false;
      alert('Thank you for your audit request! We will get back to you within 24 hours.');
      formData.value = { name: '', email: '', website: '' };
    }, 1500);
  };
</script>

<style scoped>
  .feature-card {
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;
    border-radius: 8px;
  }

  .feature-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1) !important;
  }

  .benefit-card {
    transition: all 0.3s ease;
    border-left: 4px solid #325ea4;
  }

  .benefit-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1) !important;
  }
  .v-card.bordered-card {
    border-left: 5px solid #325ea4; /* Change the color and width as needed */
    padding-left: 16px; /* Optional: Add padding to the left for better spacing */
    border-right: 5px solid var(--v-accent-base);
  }
</style>
