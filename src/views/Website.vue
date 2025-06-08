<template>
  <v-app>
    <v-main>
      <!-- Hero Section -->
      <section id="hero" class="py-16">
        <v-container>
          <v-row align="center">
            <v-col cols="12" md="7" order="2" order-md="1">
              <h1 class="text-h2 text-primary font-weight-bold mb-4">We Simplify Website Design & Development</h1>
              <p class="text-body-1 mb-6">
                Our approach to website design emphasizes crafting intuitive, visually appealing, and high-performing digital experiences. 
                We prioritize seamless navigation and responsive design, ensuring that your website not only looks great but also drives engagement and conversions. 
              </p>
            </v-col>
            <v-col cols="12" md="5" order="1" order-md="2" class="text-center">
              <v-img src="/website-hero.svg" max-width="450" contain alt="Website Design"></v-img>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- Process Section -->
      <section id="process" class="py-12 bg-grey-lighten-4">
        <v-container>
          <v-row class="text-center mb-8">
            <v-col>
              <h2 class="text-h4 text-primary font-weight-bold">Our Website Design Process</h2>
              <p class="text-body-1 mt-2">A streamlined approach to creating your perfect website</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="3">
              <v-card height="100%" class="feature-card">
                <v-card-item class="pa-6">
                  <div class="d-flex flex-column align-center text-center">
                    <v-icon color="primary" size="x-large" class="mb-4">{{ mdiLightbulb }}</v-icon>
                    <v-card-title class="text-primary font-weight-bold mb-3 text-wrap">Discovery &
                      Planning</v-card-title>
                    <v-card-text class="text-body-1">
                      Understanding your needs, goals, and target audience to create a strategic website plan.
                    </v-card-text>
                  </div>
                </v-card-item>
              </v-card>
            </v-col>
            <v-col cols="12" md="3">
              <v-card height="100%" class="feature-card">
                <v-card-item class="pa-6">
                  <div class="d-flex flex-column align-center text-center">
                    <v-icon color="primary" size="x-large" class="mb-4">{{ mdiPencilRuler }}</v-icon>
                    <v-card-title class="text-primary font-weight-bold mb-3 text-wrap">Design & Prototype</v-card-title>
                    <v-card-text class="text-body-1">
                      Creating wireframes and visual designs that align with your brand and user needs.
                    </v-card-text>
                  </div>
                </v-card-item>
              </v-card>
            </v-col>
            <v-col cols="12" md="3">
              <v-card height="100%" class="feature-card">
                <v-card-item class="pa-6">
                  <div class="d-flex flex-column align-center text-center">
                    <v-icon color="primary" size="x-large" class="mb-4">{{ mdiCodeBraces }}</v-icon>
                    <v-card-title class="text-primary font-weight-bold mb-3 text-wrap">Development</v-card-title>
                    <v-card-text class="text-body-1">
                      Building your website using modern technologies and best practices.
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
                    <v-card-title class="text-primary font-weight-bold mb-3 text-wrap">Launch & Support</v-card-title>
                    <v-card-text class="text-body-1">
                      Deploying your website and providing ongoing maintenance and support.
                    </v-card-text>
                  </div>
                </v-card-item>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- Features Section -->
      <section id="features" class="py-12">
        <v-container>
          <v-row class="text-center mb-8">
            <v-col>
              <h2 class="text-h4 text-primary font-weight-bold">Why Choose Our Website Services?</h2>
              <p class="text-body-1 mt-2">What makes our website design process unique</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="4">
              <v-card height="100%" class="feature-card">
                <v-card-item class="pa-6">
                  <div class="d-flex flex-column align-center text-center">
                    <v-icon color="primary" size="x-large" class="mb-4">{{ mdiSpeedometer }}</v-icon>
                    <v-card-title class="text-primary font-weight-bold mb-3 text-wrap">Fast & Efficient</v-card-title>
                    <v-card-text class="text-body-1">
                      Quick turnaround times without compromising on quality or attention to detail.
                    </v-card-text>
                  </div>
                </v-card-item>
              </v-card>
            </v-col>
            <v-col cols="12" md="4">
              <v-card height="100%" class="feature-card">
                <v-card-item class="pa-6">
                  <div class="d-flex flex-column align-center text-center">
                    <v-icon color="primary" size="x-large" class="mb-4">{{ mdiResponsive }}</v-icon>
                    <v-card-title class="text-primary font-weight-bold mb-3 text-wrap">Responsive Design</v-card-title>
                    <v-card-text class="text-body-1">
                      Websites that are visually appealing across all devices and screen sizes.
                    </v-card-text>
                  </div>
                </v-card-item>
              </v-card>
            </v-col>
            <v-col cols="12" md="4">
              <v-card height="100%" class="feature-card">
                <v-card-item class="pa-6">
                  <div class="d-flex flex-column align-center text-center">
                    <v-icon color="primary" size="x-large" class="mb-4">{{ mdiShieldCheck }}</v-icon>
                    <v-card-title class="text-primary font-weight-bold mb-3 text-wrap">Security First</v-card-title>
                    <v-card-text class="text-body-1">
                      Built-in security features and regular updates to keep your website safe.
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
              <p class="text-body-1 mt-2">See what our clients say about our website services</p>
            </v-col>
          </v-row>

          <v-row>
            <v-col v-for="(testimonial, index) in testimonials" :key="index" cols="12" md="4">
              <v-card class="h-100">
                <v-card-item>
                  <div class="d-flex align-center mb-4">
                    <v-avatar :color="testimonial.avatarColor || 'primary'" class="mr-4">
                      <v-icon color="white">{{ testimonial.icon || mdiAccount }}</v-icon>
                    </v-avatar>
                    <div>
                      <div class="font-weight-bold">{{ testimonial.name }}</div>
                      <div class="text-caption">{{ testimonial.title }}</div>
                    </div>
                  </div>
                  <v-card-text>
                    <p>"{{ testimonial.quote }}"</p>
                  </v-card-text>
                </v-card-item>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- Portfolio Section -->
      <section id="portfolio" class="py-12">
        <v-container>
          <v-row class="text-center mb-8">
            <v-col>
              <h2 class="text-h4 text-primary font-weight-bold">Our Portfolio</h2>
              <p class="text-body-1 mt-2">Explore some of our recent website projects</p>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12">
              <v-carousel cycle height="400" hide-delimiter-background show-arrows="hover" delimiter-icon="mdi-circle"
                class="portfolio-carousel">
                <v-carousel-item v-for="(project, i) in portfolioProjects" :key="i">
                  <v-sheet height="100%">
                    <v-row class="fill-height" align="center" justify="center">
                      <v-col cols="12" md="6" class="text-center text-md-left pa-6">
                        <h3 class="text-h5 font-weight-bold mb-2">{{ project.title }}</h3>
                        <p class="text-body-1 mb-4">{{ project.description }}</p>
                        <v-chip v-for="(tech, index) in project.technologies" :key="index" class="ma-1" color="primary"
                          variant="outlined">
                          {{ tech }}
                        </v-chip>
                      </v-col>
                      <v-col cols="12" md="6" class="d-flex justify-center">
                        <v-img :src="project.image" max-height="300" contain class="portfolio-image"></v-img>
                      </v-col>
                    </v-row>
                  </v-sheet>
                </v-carousel-item>
              </v-carousel>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- CTA Section -->
      <section class="py-10 bg-grey-lighten-4">
        <v-container>
          <v-row align="center" justify="center">
            <v-col cols="12" md="8" class="text-center">
              <h3 class="text-h5 font-weight-bold mb-3">Ready to Transform Your Online Presence?</h3>
              <p class="text-body-1 mb-6">
                Let's discuss how we can help you create a website that drives results for your business.
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
import { ref } from 'vue';
import {
  mdiAccountTie,
  mdiAccountTieWoman,
  mdiAccountBadge,
  mdiLightbulb,
  mdiPencilRuler,
  mdiCodeBraces,
  mdiRocketLaunch,
  mdiSpeedometer,
  mdiResponsive,
  mdiShieldCheck,
  mdiAccount,
  mdiCircle
} from '@mdi/js';

const testimonials = ref([
  {
    name: 'Rajesh Mehta',
    title: 'CEO, TechStart India',
    quote: 'The team delivered a modern, responsive website that perfectly represents our brand. The process was smooth and professional from start to finish.',
    icon: mdiAccountTie,
    avatarColor: 'primary'
  },
  {
    name: 'Priya Sharma',
    title: 'Marketing Director, Bloom Cosmetics',
    quote: 'Our new website has significantly improved our online presence and customer engagement. The design is beautiful and user-friendly.',
    icon: mdiAccountTieWoman,
    avatarColor: 'secondary'
  },
  {
    name: 'Amit Patel',
    title: 'Founder, Foodie Express',
    quote: 'The development team was professional and delivered our food delivery app ahead of schedule. Highly recommended for any web development needs!',
    icon: mdiAccountBadge,
    avatarColor: 'success'
  }
]);

const portfolioProjects = ref([
  {
    title: 'E-commerce Platform',
    description: 'A modern e-commerce solution with seamless user experience and secure payment integration.',
    image: '/portfolio/ecommerce.jpg',
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Stripe']
  },
  {
    title: 'Corporate Website',
    description: 'A professional corporate website with dynamic content management and multilingual support.',
    image: '/portfolio/corporate.jpg',
    technologies: ['React', 'WordPress', 'PHP', 'MySQL']
  },
  {
    title: 'Educational Portal',
    description: 'An interactive learning platform with real-time collaboration features and progress tracking.',
    image: '/portfolio/education.jpg',
    technologies: ['Vue.js', 'Firebase', 'WebRTC', 'Material UI']
  }
]);
</script>

<style scoped>
.feature-card {
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.portfolio-carousel {
  border-radius: 8px;
  overflow: hidden;
}

.portfolio-image {
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>