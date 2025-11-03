<template>
  <v-app>
    <v-main>
      <!-- Hero Section -->
      <section id="hero" class="py-16">
        <v-container>
          <v-row align="center">
            <v-col cols="12" md="7" order="2" order-md="1">
              <h1 :class="['mb-6', { 'text-h3': !isMobile, 'text-h4': isMobile }]" class="text-primary"
                fetchpriority="high">
                <strong>#TechforGood</strong>
              </h1>
              <p class="text-body-1 mb-6">
                At digiSarathi, social impact isn't a program, it's our engineering philosophy! We build
                enterprise-grade technology specifically for nonprofits and social enterprises: custom solutions, SaaS
                products, and
                training that help you scale impact.
              </p>
            </v-col>
            <v-col cols="12" md="5" order="1" order-md="2" class="text-center">
              <v-img src="/ai-robot.svg" max-width="450" max-height="350" contain alt="Website Design"></v-img>
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
              <p class="text-body-1 mt-2">Explore some of our recent projects</p>
            </v-col>
          </v-row>

          <v-row class="justify-center ">
            <v-col v-for="(project, i) in portfolioProjects" :key="i" cols="8" class="border mb-8">
              <v-row
                style="background-color: rgba(var(--v-theme-primary), 0.05); border-left: 4px solid rgb(var(--v-theme-primary))">
                <!-- Project Card -->
                <v-col cols="12">
                  <v-card class="h-100 d-flex flex-column" elevation="0" @click.stop="handleProjectClick(project)">
                    <v-img :src="project.image" :alt="project.title" height="200" cover
                      style="mask-image: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%); -webkit-mask-image: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)"></v-img>
                    <v-card-item>
                      <v-card-title class="text-h6 font-weight-bold">{{ project.title }}</v-card-title>
                    </v-card-item>
                    <v-card-text class="flex-grow-1">
                      <p class="text-body-2 mb-2">{{ project.description }}</p>
                      <div class="mt-2">
                        <v-chip v-for="(tech, index) in project.technologies.slice(0, 3)" :key="index" size="small"
                          class="mr-1 mb-1" color="primary" variant="outlined">
                          {{ tech }}
                        </v-chip>
                        <v-chip v-if="project.technologies.length > 3" size="small" class="mb-1" color="grey"
                          variant="outlined">
                          +{{ project.technologies.length - 3 }} more
                        </v-chip>
                      </div>
                    </v-card-text>
                  </v-card>
                </v-col>

                <!-- Testimonial Callout (if exists) -->
                <v-col v-if="project.testimonial" cols="12" class="mt-4">
                  <v-row class="align-start pa-4">
                    <!-- Avatar -->
                    <v-col cols="auto">
                      <v-avatar :image="project.testimonial.avatar" :alt="project.testimonial.name"
                        size="48"></v-avatar>
                    </v-col>

                    <!-- Testimonial Text -->
                    <v-col cols="auto" class="flex-grow-1">
                      <p class="text-body-2 mb-2 font-italic">
                        "{{ project.testimonial.quote }}"
                      </p>
                      <p class="text-caption font-weight-bold mb-0">
                        {{ project.testimonial.name }}
                      </p>
                      <p class="text-caption text-grey">
                        {{ project.testimonial.designation }}
                      </p>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- CTA Section -->
      <section class="py-10 bg-grey-lighten-4">
        <v-container>
          <v-row align="center" justify="space-evenly">
            <v-col cols="12" md="6" class="text-center">
              <h3 class="text-h5 text-primary font-weight-bold mb-3">
                Inspire your visitors!
              </h3>
              <p class="text-body-1 mb-6">
                Let's discuss how we can help you create/redesign your website.
              </p>
              <v-btn color="primary" size="large" href="mailto:hello@digisarathi.com">
                Drop an Email
              </v-btn>
            </v-col>
            <v-col cols="12" md="6" class="text-center">
              <h3 class="text-h6 text-primary font-weight-bold mb-3">Just need a quick fix?</h3>
              <p class="text-body-2 mb-6">Cost-effective Website Audit & Content Updates.</p>
              <v-btn color="accent" size="large" href="/website-audit"> Website Quick-Fix </v-btn>
            </v-col>
            <v-col cols="12" md="6" class="text-center">
              <h3 class="text-h6 text-primary font-weight-bold mb-3">Looking for training?</h3>
              <p class="text-body-2 mb-6">Upskill your team with our tailored training programs.</p>
              <v-btn color="secondary" size="large" href="/training-workshops"> Explore Training </v-btn>
            </v-col>
            <v-col cols="12" md="6" class="text-center">
              <h3 class="text-h6 text-primary font-weight-bold mb-3">Need Tech Strategy?</h3>
              <p class="text-body-2 mb-6">Explore our service, myCTO, for nonprofits.</p>
              <v-btn color="tertiary" size="large" href="/mycto"> View myCTO </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </section>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
  isMobile: {
    type: Boolean,
    default: false,
  },
})

const handleProjectClick = (project) => {
  if (!project.website) window.open(`https://www.digisarathi.com/${project.image}`, '_blank', 'noopener,noreferrer')
  window.open(project.website, '_blank', 'noopener,noreferrer')
}


const portfolioProjects = ref([

  {
    title: 'Aarambh India',
    description:
      "India's first comprehensive portal on Child Sexual Abuse & Prevention of Child Sexual Offences",
    image: '/portfolio/thumbnails/aarambh.png',
    technologies: ['WordPress', 'Google Analytics'],
    website: 'https://www.aarambhindia.org/',
    testimonial: {
      name: 'Uma',
      designation: 'Founder, Aarambh India',
      quote:
        "DigiSarathi has an impeccable sense of the technical aspects of website development. What sets them apart is their commitment & passion to understand and engage with the subject. This approach can't help but lead to a great product that is perfectly synced in terms of design, technology and content. Aarambh India is a testament to this.",
      avatar: '/clients/uma.jpg',
    },
  },
  {
    title: 'SEEDS',
    description:
      'A professional website for nonprofit working with marginalized communities to create sustainable change.',
    image: '/portfolio/thumbnails/seeds.png',
    technologies: ['WordPress', 'Google Analytics'],
    website: 'http://www.seedsjsr.org/',
    testimonial: {
      name: 'Dr. Dwivedi',
      designation: 'Secretary, SEEDS',
      quote:
        'We are happy to state that Digisarathi has designed the SEEDS website in 2022. The team led by Mr Prashant Pandit did a wonderful job - just the way one had visualized. Digisarathi is organization-friendly and we appreciate their sensitivities at all levels. On top of it the charges are reasonable and affordable for grass root NGOs.',
      avatar: '/clients/shubhra.png',
    },
  },
  {
    title: 'Women Helpline by Akshara',
    description: 'One of the first *Multilingual* helpline websites to improve access for women safety',
    image: '/portfolio/thumbnails/standup.png',
    technologies: ['WordPress', 'Google Analytics'],
    website: 'https://standupagainstviolence.org/',
  },
  {
    title: 'Minority women rehabilitation',
    description: 'A nonprofit website for minority women rehabilitation for Awaaz-e-Niswaan',
    image: '/portfolio/thumbnails/niswaan.jpg',
    technologies: ['WordPress', 'Google Analytics'],
    testimonial: {
      name: 'Trustee',
      designation: 'Niswaan',
      quote:
        'The team delivered our project on time and exceeded our expectations. Their focus on simplicity while maintaining powerful functionality was exactly what we needed.',
      avatar: '/clients/niswan.jpg',
    },
  },
  {
    title: 'Crowdsourcing for Women Safety',
    description: 'Open source platform for data gathering from citizens to enhance women safety',
    image: '/portfolio/thumbnails/harassmap.png',
    technologies: ['Ushahidi', 'Google Maps'],
  },
  {
    title: 'Rural women empowerment & livelihood',
    description:
      'A professional website for nonprofit in Amravati, Maharashtra working for rural women empowerment & livelihood',
    image: '/portfolio/thumbnails/apeksha.png',
    technologies: ['WordPress', 'Google Analytics'],
  },
  {
    title: 'Laadli Alumni',
    description: 'A community platform for Laadli alumni by Population First',
    image: '/portfolio/thumbnails/laadli.png',
    technologies: ['WordPress', 'Google Analytics'],
    testimonial: {
      name: 'Dr. Sharada',
      designation: 'Founder, Population First',
      quote: 'Thank you for making technology less threatening.',
      avatar: '/clients/sharada.jpg',
    },
  },

  {
    title: 'Water conservation',
    description: 'A modern website for WaterAid India',
    image: '/portfolio/thumbnails/wateraid.jpg',
    technologies: ['WordPress', 'Google Analytics'],
  },
  {
    title: 'Legal Education',
    description: 'A nonprofit website for Legal Education provided by IDIA',
    image: '/portfolio/thumbnails/idia.png',
    technologies: ['PHP', 'Google Analytics'],
  },
  {
    title: 'Entrepreneurship Mentorship',
    description: 'A startup incubator website for startups in Amravati, Maharashtra',
    image: '/portfolio/thumbnails/varuntalwar.png',
    technologies: ['WordPress', 'Google Analytics'],
  },

])
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
