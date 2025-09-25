<template>
  <v-app>
    <v-main>
      <!-- Hero Section -->
      <section id="hero" class="py-16">
        <v-container>
          <v-row align="center">
            <v-col cols="12" md="7" order="2" order-md="1">
              <h1 class="text-h2 text-primary font-weight-bold mb-4">Elevate Your Business with Custom Software
                Solutions</h1>
              <p class="text-body-1 mb-6">
                Our software development services leverage Agile methodologies to deliver high-quality, scalable
                applications tailored to your business needs. We focus on collaboration, flexibility, and continuous
                improvement to ensure your project’s success.
              </p>
            </v-col>
            <v-col cols="12" md="5" order="1" order-md="2" class="text-center">
              <v-img src="/software-hero.svg" max-width="450" contain alt="Software Development"></v-img>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- Process Section -->
      <section id="process" class="py-12 bg-grey-lighten-4">
        <v-container>
          <v-row class="text-center mb-8">
            <v-col>
              <h2 class="text-h4 text-primary font-weight-bold">Our Software Development Process</h2>
              <p class="text-body-1 mt-2">A streamlined approach to delivering exceptional software</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6">
              <v-card height="100%" class="feature-card">
                <v-card-item class="pa-6">
                  <div class="d-flex flex-column align-center text-center">
                    <v-icon color="primary" size="x-large" class="mb-4">{{ mdiChartLine }}</v-icon>
                    <v-card-title class="text-primary font-weight-bold mb-3 text-wrap">Requirements
                      Gathering</v-card-title>
                    <v-card-text class="text-body-1">
                      Collaborating with stakeholders to understand needs and define project scope.
                    </v-card-text>
                  </div>
                </v-card-item>
              </v-card>
            </v-col>
            <v-col cols="12" md="6">
              <v-card height="100%" class="feature-card">
                <v-card-item class="pa-6">
                  <div class="d-flex flex-column align-center text-center">
                    <v-icon color="primary" size="x-large" class="mb-4">{{ mdiPencil }}</v-icon>
                    <v-card-title class="text-primary font-weight-bold mb-3 text-wrap">Design &
                      Prototyping</v-card-title>
                    <v-card-text class="text-body-1">
                      Creating user-friendly designs and prototypes to visualize the final product.
                    </v-card-text>
                  </div>
                </v-card-item>
              </v-card>
            </v-col>
            <v-col cols="12" md="6">
              <v-card height="100%" class="feature-card">
                <v-card-item class="pa-6">
                  <div class="d-flex flex-column align-center text-center">
                    <v-icon color="primary" size="x-large" class="mb-4">{{ mdiRocketLaunch }}</v-icon>
                    <v-card-title class="text-primary font-weight-bold mb-3 text-wrap">Development &
                      Testing</v-card-title>
                    <v-card-text class="text-body-1">
                      Agile development cycles with continuous testing to ensure quality and performance.
                    </v-card-text>
                  </div>
                </v-card-item>
              </v-card>
            </v-col>
            <v-col cols="12" md="6">
              <v-card height="100%" class="feature-card">
                <v-card-item class="pa-6">
                  <div class="d-flex flex-column align-center text-center">
                    <v-icon color="primary" size="x-large" class="mb-4">{{ mdiChartBar }}</v-icon>
                    <v-card-title class="text-primary font-weight-bold mb-3 text-wrap">Deployment &
                      Support</v-card-title>
                    <v-card-text class="text-body-1">
                      Launching the application and providing ongoing support and maintenance.
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
              <h2 class="text-h4 text-primary font-weight-bold">Our Software Development Services</h2>
              <p class="text-body-1 mt-2">For smaller, simpler
                projects, we utilize the Waterfall model and for bigger, complex scope of work, we depend on Agile
                methodologies to ensure a structured and efficient development process.</p>

            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="4">
              <v-card height="100%" class="feature-card">
                <v-card-item class="pa-6">
                  <div class="d-flex flex-column align-center text-center">
                    <v-icon color="primary" size="x-large" class="mb-4">{{ mdiSearchWeb }}</v-icon>
                    <v-card-title class="text-primary font-weight-bold mb-3 text-wrap">Web Application
                      Development</v-card-title>
                    <v-card-text class="text-body-1">
                      Building responsive and scalable web applications tailored to your business requirements.
                    </v-card-text>
                  </div>
                </v-card-item>
              </v-card>
            </v-col>
            <v-col cols="12" md="4">
              <v-card height="100%" class="feature-card">
                <v-card-item class="pa-6">
                  <div class="d-flex flex-column align-center text-center">
                    <v-icon color="primary" size="x-large" class="mb-4">{{ mdiRocketLaunch }}</v-icon>
                    <v-card-title class="text-primary font-weight-bold mb-3 text-wrap">Mobile Application
                      Development</v-card-title>
                    <v-card-text class="text-body-1">
                      Creating user-friendly mobile applications for iOS and Android platforms.
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
                    <v-card-title class="text-primary font-weight-bold mb-3 text-wrap">API Development &
                      Integration</v-card-title>
                    <v-card-text class="text-body-1">
                      Developing and integrating APIs to enhance functionality and connectivity between systems.
                    </v-card-text>
                  </div>
                </v-card-item>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>
    </v-main>
  </v-app>
</template>
<script setup>
import { mdiEmail, mdiRocketLaunch, mdiSearchWeb, mdiChartBar, mdiPencil, mdiChartLine, } from '@mdi/js'
</script>