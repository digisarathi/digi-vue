<template>
  <v-app>
    <v-main>
      <!-- Hero Section -->
      <section id="hero" class="py-16">
        <v-container>
          <v-row align="center">
            <v-col cols="12" md="7" order="2" order-md="1">
              <h1 class="text-h2 text-primary font-weight-bold mb-4">Transform Your Digital Presence</h1>
              <p class="text-body-1 mb-6">
                Our digital marketing services help businesses grow their online presence through strategic,
                data-driven approaches. We combine creativity with analytics to deliver measurable results
                that drive your business forward.
              </p>
            </v-col>
            <v-col cols="12" md="5" order="1" order-md="2" class="text-center">
              <v-img src="/digital-hero.svg" max-width="450" contain alt="Digital Marketing"></v-img>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- Process Section -->
      <section id="process" class="py-12 bg-grey-lighten-4">
        <v-container>
          <v-row class="text-center mb-8">
            <v-col>
              <h2 class="text-h4 text-primary font-weight-bold">Our Digital Marketing Process</h2>
              <p class="text-body-1 mt-2">A comprehensive approach to growing your online presence</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="3">
              <v-card height="100%" class="feature-card">
                <v-card-item class="pa-6">
                  <div class="d-flex flex-column align-center text-center">
                    <v-icon color="primary" size="x-large" class="mb-4">{{ mdiChartLine }}</v-icon>
                    <v-card-title class="text-primary font-weight-bold mb-3 text-wrap">Analysis &
                      Strategy</v-card-title>
                    <v-card-text class="text-body-1">
                      Deep dive into your market, competitors, and target audience to create a winning strategy.
                    </v-card-text>
                  </div>
                </v-card-item>
              </v-card>
            </v-col>
            <v-col cols="12" md="3">
              <v-card height="100%" class="feature-card">
                <v-card-item class="pa-6">
                  <div class="d-flex flex-column align-center text-center">
                    <v-icon color="primary" size="x-large" class="mb-4">{{ mdiPencil }}</v-icon>
                    <v-card-title class="text-primary font-weight-bold mb-3 text-wrap">Content Creation</v-card-title>
                    <v-card-text class="text-body-1">
                      Developing engaging content that resonates with your audience and drives engagement.
                    </v-card-text>
                  </div>
                </v-card-item>
              </v-card>
            </v-col>
            <v-col cols="12" md="3">
              <v-card height="100%" class="feature-card">
                <v-card-item class="pa-6">
                  <div class="d-flex flex-column align-center text-center">
                    <v-icon color="primary" size="x-large" class="mb-4">{{ mdiRocketLaunch }}</v-icon>
                    <v-card-title class="text-primary font-weight-bold mb-3 text-wrap">Campaign Execution</v-card-title>
                    <v-card-text class="text-body-1">
                      Implementing multi-channel campaigns across various digital platforms.
                    </v-card-text>
                  </div>
                </v-card-item>
              </v-card>
            </v-col>
            <v-col cols="12" md="3">
              <v-card height="100%" class="feature-card">
                <v-card-item class="pa-6">
                  <div class="d-flex flex-column align-center text-center">
                    <v-icon color="primary" size="x-large" class="mb-4">{{ mdiChartBar }}</v-icon>
                    <v-card-title class="text-primary font-weight-bold mb-3 text-wrap">Analytics &
                      Optimization</v-card-title>
                    <v-card-text class="text-body-1">
                      Continuous monitoring and optimization to maximize ROI and performance.
                    </v-card-text>
                  </div>
                </v-card-item>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- Services Section -->
      <section id="services" class="py-12">
        <v-container>
          <v-row class="text-center mb-8">
            <v-col>
              <h2 class="text-h4 text-primary font-weight-bold">Our Digital Marketing Services</h2>
              <p class="text-body-1 mt-2">Comprehensive solutions for your digital growth</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="4">
              <v-card height="100%" class="feature-card">
                <v-card-item class="pa-6">
                  <div class="d-flex flex-column align-center text-center">
                    <v-icon color="primary" size="x-large" class="mb-4">{{ mdiSearchWeb }}</v-icon>
                    <v-card-title class="text-primary font-weight-bold mb-3 text-wrap">SEO & Content
                      Marketing</v-card-title>
                    <v-card-text class="text-body-1">
                      Improve your search rankings and drive organic traffic through optimized content.
                    </v-card-text>
                  </div>
                </v-card-item>
              </v-card>
            </v-col>
            <v-col cols="12" md="4">
              <v-card height="100%" class="feature-card">
                <v-card-item class="pa-6">
                  <div class="d-flex flex-column align-center text-center">
                    <v-icon color="primary" size="x-large" class="mb-4">{{ mdiGlobeModel }}</v-icon>
                    <v-card-title class="text-primary font-weight-bold mb-3 text-wrap">Social Media
                      Marketing</v-card-title>
                    <v-card-text class="text-body-1">
                      Build brand awareness and engage with your audience across social platforms.
                    </v-card-text>
                  </div>
                </v-card-item>
              </v-card>
            </v-col>
            <v-col cols="12" md="4">
              <v-card height="100%" class="feature-card">
                <v-card-item class="pa-6">
                  <div class="d-flex flex-column align-center text-center">
                    <v-icon color="primary" size="x-large" class="mb-4">{{ mdiEmail }}</v-icon>
                    <v-card-title class="text-primary font-weight-bold mb-3 text-wrap">Email Marketing</v-card-title>
                    <v-card-text class="text-body-1">
                      Create targeted email campaigns that convert and nurture customer relationships.
                    </v-card-text>
                  </div>
                </v-card-item>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- Testimonials Section -->
      <section id="testimonials" class="py-12 bg-grey-lighten-4">
        <v-container>
          <v-row class="text-center mb-8">
            <v-col>
              <h2 class="text-h4 text-primary font-weight-bold">Client Success Stories</h2>
              <p class="text-body-1 mt-2">See how we've helped businesses grow digitally</p>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="4">
              <v-card class="h-100">
                <v-card-item>
                  <div class="d-flex align-center mb-4">
                    <v-avatar color="primary" class="mr-4">
                      <v-icon color="white">{{ mdiAccount }}</v-icon>
                    </v-avatar>
                    <div>
                      <div class="font-weight-bold">Priya Sharma</div>
                      <div class="text-caption">Marketing Director, GrowthTech</div>
                    </div>
                  </div>
                  <v-card-text>
                    <p>"Their digital marketing strategies helped us increase our online visibility by 200% and double
                      our lead generation within six months."</p>
                  </v-card-text>
                </v-card-item>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- CTA Section -->
      <section class="py-10 bg-grey-lighten-4">
        <v-container>
          <v-row align="center" justify="center">
            <v-col cols="12" md="8" class="text-center">
              <h3 class="text-h5 font-weight-bold mb-3">Ready to Grow Your Digital Presence?</h3>
              <p class="text-body-1 mb-6">
                Let's discuss how our digital marketing services can help you achieve your business goals.
              </p>
              <v-btn color="primary" size="large" href="mailto:hello@digisarathi.com">
                Get Started
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </section>
    </v-main>
  </v-app>
</template>

<script setup>
import {
  mdiChartLine,
  mdiPencil,
  mdiRocketLaunch,
  mdiChartBar,
  mdiSearchWeb,
  mdiGlobeModel,
  mdiEmail,
  mdiAccount
} from '@mdi/js';
</script>

<style scoped>
.feature-card {
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}
</style>