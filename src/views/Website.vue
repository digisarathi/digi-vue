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
              <v-card class="h-100 d-flex flex-column" :href="testimonial.website" target="_blank" rel="noopener noreferrer" style="cursor: pointer;" @click.stop>
                <v-card-text class="flex-grow-1">
                  <p class="text-body-1">"{{ testimonial.text }}"</p>
                </v-card-text>
                <v-card-actions class="pt-0">
                  <v-avatar size="56" class="mr-3">
                    <v-img :src="testimonial.avatar" :alt="testimonial.name"></v-img>
                  </v-avatar>
                  <div>
                    <div class="font-weight-bold">{{ testimonial.name }}</div>
                    <div class="text-caption text-medium-emphasis">{{ testimonial.company }}</div>
                  </div>
                </v-card-actions>
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
              <v-carousel cycle height="500" hide-delimiter-background show-arrows="hover" delimiter-icon="mdi-circle"
                class="portfolio-carousel">
                <v-carousel-item v-for="(project, i) in portfolioProjects" :key="i">
                  <div class="portfolio-item" :style="{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(' + project.image + ')' }">
                    <v-container class="fill-height">
                      <v-row class="fill-height" align="center" justify="center">
                        <v-col cols="12" md="8" class="text-center text-white">
                          <h3 class="text-h4 font-weight-bold mb-4">{{ project.title }}</h3>
                          <p class="text-body-1 mb-6">{{ project.description }}</p>
                          <div class="mb-6">
                            <v-chip v-for="(tech, index) in project.technologies" :key="index" class="ma-1" color="primary"
                              variant="outlined" label>
                              {{ tech }}
                            </v-chip>
                          </div>
                          <v-btn v-if="project.website" :href="project.website" target="_blank" color="white" 
                            variant="flat" size="large" :append-icon="mdiOpenInNew" class="elevation-4 text-primary font-weight-bold"
                            style="text-transform: none; letter-spacing: 0.5px;">
                            Visit Website
                          </v-btn>
                        </v-col>
                      </v-row>
                    </v-container>
                  </div>
                </v-carousel-item>
              </v-carousel>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- CTA Section -->
      <section class="py-10 bg-grey-lighten-4">
        <v-container>
          <v-row align="center" justify="space-evenly">
            <v-col cols="12" md="6" class="text-center">
              <h3 class="text-h5 text-primary font-weight-bold mb-3">Transform Your Online Presence!</h3>
              <p class="text-body-1 mb-6">
                Let's discuss how we can help you create/redesign your website that drives results for your business.
              </p>
              <v-btn color="primary" size="large" href="mailto:hello@digisarathi.com">
                Drop an Email
              </v-btn>
             
            </v-col>
            <v-col cols="12" md="4" class="text-center">
              <h3 class="text-h6 text-primary font-weight-bold mb-3">Just need a quick fix?</h3>
              <p class="text-body-2 mb-6">
                Cost-effective Website Audit & Content Updates.
              </p>
              <v-btn color="accent" size="x-small" href="/website-audit">
                 Website Quick-Fix
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
  mdiCircle,
  mdiOpenInNew,
} from '@mdi/js';

const testimonials = ref([
  {
    name: 'Dr. Dwivedi',
    company: 'Secretary, SEEDS',
    text: 'We are happy to state that Digisarathi has designed the SEEDS website in 2022. The team led by Mr Prashant Pandit did a wonderful job - just the way one had visualized. Digisarathi is organization-friendly and we appreciate their sensitivities at all levels. On top of it the charges are reasonable and affordable for grass root NGOs.',
    avatar: '/images/avatars/john-doe.jpg',
    website: 'http://www.seedsjsr.org/'
  },
  {
    name: 'Adv. Jyoti',
    company: 'Founder, DISHA',
    text: 'We deeply appreciate the invaluable contributions digiSarathi has made to DISHA. Your dedication and hard work have significantly impacted our organization.',
    avatar: '/images/avatars/jane-smith.jpg',
    website: 'https://dishaforvictim.org/'
  },
  {
    name: 'Trustee',
    company: 'Niswaan',
    text: 'The team delivered our project on time and exceeded our expectations. Their focus on simplicity while maintaining powerful functionality was exactly what we needed.',
    avatar: '/images/avatars/john-doe.jpg',
    website: 'https://niswaan.org/'
  },
  {
    name: 'Uma',
    company: 'Founder, Aarambh India',
    text: 'DigiSarathi has an impeccable sense of the technical aspects of website development. What sets them apart is their commitment & passion to understand and engage with the subject. This approach can\'t help but lead to a great product that is perfectly synced in terms of design, technology and content. Aarambh India is a testament to this.',
    avatar: '/images/avatars/jane-smith.jpg',
    website: 'https://www.aarambhindia.org/'
  },
  {
    name: 'Dr. Sharada',
    company: 'Founder, Population First',
    text: 'Thank you for making technology less threatening.',
    avatar: '/images/avatars/john-doe.jpg',
    website: 'https://www.populationfirst.org/'
  }
]);

const portfolioProjects = ref([
  {
    title: 'CSA & POCSO',
    description: 'India\'s first comprehensive portal on Child Sexual Abuse & Prevention of Child Sexual Offences',
    image: '/portfolio/aarambh.png',
    technologies: ['WordPress', 'Google Analytics'],
    website: 'https://www.aarambhindia.org/'
  },
  {
    title: 'SEEDS',
    description: 'A professional website for nonprofit working with marginalized communities to create sustainable change.',
    image: '/portfolio/seeds.png',
    technologies: ['WordPress', 'Google Analytics'],
    website: 'http://www.seedsjsr.org/'
  },
  {
    title: 'Solar Manufacturer',
    description: 'A professional corporate website with dynamic content management and product catalog.',
    image: '/portfolio/renewsys.png',
    technologies: ['Wix', 'Google Analytics', 'Google Ads'],
    website: 'https://renewsysworld.com/'
  },
  {
    title: 'Crowdsourcing for Women Safety',
    description: 'Open source platform for data gathering from citizens to enhance women safety',
    image: '/portfolio/harassmap.png',
    technologies: ['Ushahidi', 'Google Maps']
  },
  {
    title: 'Rural women empowerment & livelihood',
    description: 'A professional website for nonprofit in Amravati, Maharashtra working for rural women empowerment & livelihood',
    image: '/portfolio/apeksha.png',
    technologies: ['WordPress', 'Google Analytics'],
    website: 'https://apekshasociety.org/'
  },
  {
    title: 'Laadli Alumni',
    description: 'A community platform for Laadli alumni by Population First',
    image: '/portfolio/laadli.png',
    technologies: ['WordPress', 'Google Analytics']
  },
  {
    title: 'Minority women rehabilitation',
    description: 'A nonprofit website for minority women rehabilitation for Awaaz-e-Niswaan',
    image: '/portfolio/niswaan.jpg',
    technologies: ['WordPress', 'Google Analytics']
  },
  {
    title: 'Women Helpline',
    description: 'A India-wide multilingual helpline information website for women safety',
    image: '/portfolio/standup.png',
    technologies: ['WordPress', 'Google Analytics'],
    website: 'https://standupagainstviolence.org/'
  },
  {
    title: 'Entrepreneurship Mentorship',
    description: 'A startup incubator website for startups in Amravati, Maharashtra',
    image: '/portfolio/varuntalwar.png',
    technologies: ['WordPress', 'Google Analytics']
  },
  {
    title: 'Water conservation',
    description: 'A modern website for WaterAid India',
    image: '/portfolio/wateraid.jpg',
    technologies: ['WordPress', 'Google Analytics'],
  },
  {
    title: 'Legal Education',
    description: 'A nonprofit website for Legal Education provided by IDIA',
    image: '/portfolio/idia.png',
    technologies: ['PHP', 'Google Analytics'],
    website: 'https://www.idialaw.org/'
  },
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
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.portfolio-item {
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  position: relative;
  transition: transform 0.3s ease;
}

.portfolio-item:hover {
  transform: scale(1.01);
}

.portfolio-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
}

.portfolio-item .v-container {
  position: relative;
  z-index: 2;
}

.portfolio-item .v-chip {
  background-color: rgba(255, 255, 255, 0.1) !important;
  border: 1px solid rgba(255, 255, 255, 0.5) !important;
  color: white !important;
  backdrop-filter: blur(5px);
}

.portfolio-item .v-btn {
  font-weight: 600;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  min-width: 180px;
}

.portfolio-item .v-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2) !important;
}

.portfolio-image {
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>