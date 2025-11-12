<template>
  <v-app>
    <v-main>
      <!-- Hero Section -->
      <section id="hero">
        <v-container>
          <v-row justify="center" align="center" style="min-height: 70vh;">
            <v-col cols="12" md="7" order="2" order-md="1" class="text-center">
              <h1 :class="['mb-6', { 'text-h3': !isMobile, 'text-h4': isMobile }]" class="text-primary"
                fetchpriority="high">
                We Simplify Website Design
              </h1>
              <p class="text-body-1 mb-6">
                Our websites are visually appealing
                and high-performing digital experiences. With intuitive navigation, our designs will not only look
                great but also drive engagement and conversions.
              </p>
            </v-col>
            <v-col cols="12" md="5" order="1" order-md="2" class="d-flex justify-center">
              <v-img src="/websites.svg" max-width="450" max-height="350" contain alt="Website Design"></v-img>
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
            <v-col v-for="(project, i) in portfolioProjects" :key="i" cols="12" sm="6" md="4" class="mb-6">
              <v-card class="h-100 d-flex flex-column" :elevation="hoverIndex === i ? 12 : 2" style="cursor: pointer"
                @click.stop="handleProjectClick(project)" @mouseover="hoverIndex = i" @mouseleave="hoverIndex = -1">
                <v-img :src="project.image" :alt="project.title" height="200">
                  <template v-slot:placeholder>
                    <v-row class="fill-height ma-0" align="center" justify="center">
                      <v-progress-circular indeterminate color="primary"></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
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

          <v-row class="justify-center">
            <v-col v-for="(testimonial, index) in testimonials" :key="index" cols="12" md="10">
              <v-card elevation="6" :href="testimonial.website" target="_blank" rel="noopener noreferrer"
                style="cursor: pointer" @click.stop>
                <v-card-text class="flex-grow-1">
                  <v-row>
                    <v-col cols="12" md="3" class="d-flex flex-column align-center">
                      <v-avatar size="80" class="mb-4">
                        <v-img :src="/clients/ + testimonial.avatar" alt="Avatar"></v-img>
                      </v-avatar>
                      <div class="font-weight-bold">{{ testimonial.name }}</div>
                      <div class="text-caption text-medium-emphasis">{{ testimonial.company }}</div>
                    </v-col>
                    <v-col cols="12" md="9" class="d-flex align-center">
                      <p class="text-body-1">"{{ testimonial.text }}"</p>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
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
                Transform Your Online Presence!
              </h3>
              <p class="text-body-1 mb-6">
                Let's discuss how we can help you create/redesign your website that drives results
                for your business.
              </p>
              <v-btn color="primary" size="large" href="mailto:hello@digisarathi.com">
                Drop an Email
              </v-btn>
            </v-col>
            <v-col cols="12" md="4" class="text-center">
              <h3 class="text-h6 text-primary font-weight-bold mb-3">Just need a quick fix?</h3>
              <p class="text-body-2 mb-6">Cost-effective Website Audit & Content Updates.</p>
              <v-btn color="accent" size="large" href="/website-audit"> Website Quick-Fix </v-btn>
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
const hoverIndex = ref(-1)
const testimonials = ref([
  {
    name: 'Dr. Dwivedi',
    company: 'Secretary, SEEDS',
    text: 'We are happy to state that Digisarathi has designed the SEEDS website in 2022. The team led by Mr Prashant Pandit did a wonderful job - just the way one had visualized. Digisarathi is organization-friendly and we appreciate their sensitivities at all levels. On top of it the charges are reasonable and affordable for grass root NGOs.',
    avatar: 'shubhra.png',
    website: 'http://www.seedsjsr.org/',
  },
  {
    name: 'Trustee',
    company: 'Niswaan',
    text: 'The team delivered our project on time and exceeded our expectations. Their focus on simplicity while maintaining powerful functionality was exactly what we needed.',
    avatar: 'niswan.jpg',
    website: 'https://niswaan.org/',
  },
  {
    name: 'Uma',
    company: 'Founder, Aarambh India',
    text: "DigiSarathi has an impeccable sense of the technical aspects of website development. What sets them apart is their commitment & passion to understand and engage with the subject. This approach can't help but lead to a great product that is perfectly synced in terms of design, technology and content. Aarambh India is a testament to this.",
    avatar: 'uma.jpg',
    website: 'https://www.aarambhindia.org/',
  },
  {
    name: 'Dr. Sharada',
    company: 'Founder, Population First',
    text: 'Thank you for making technology less threatening.',
    avatar: 'sharada.jpg',
    website: 'https://www.populationfirst.org/',
  },
])


const handleProjectClick = (project) => {
  if (!project.website) window.open(`https://www.digisarathi.com/${project.image}`, '_blank', 'noopener,noreferrer')
  window.open(project.website, '_blank', 'noopener,noreferrer')
}


const portfolioProjects = ref([
  {
    title: 'Surendra Forgings',
    description: 'A growing manufacturing company showcasing its products and state-of-the-art facilities.',
    image: '/portfolio/surendra.png',
    technologies: ['Custom Web Stack', 'Google Analytics'],
    website: 'https://surendraforgings.com/',
  },
  {
    title: 'RenewSys Solar',
    description:
      'One of India\'s leading solar manufacturers, RenewSys required a professional corporate website showcasing their premium product catalog.',
    image: '/portfolio/thumbnails/renewsys.png',
    technologies: ['Wix', 'Google Analytics', 'Google Ads'],
    website: 'https://renewsysworld.com/',
  },
  {
    title: 'Aarambh India',
    description:
      "India's first comprehensive portal on Child Sexual Abuse & Prevention of Child Sexual Offences",
    image: '/portfolio/thumbnails/aarambh.png',
    technologies: ['WordPress', 'Google Analytics'],
    website: 'https://www.aarambhindia.org/',
  },
  {
    title: 'SEEDS',
    description:
      'A professional website for nonprofit working with marginalized communities to create sustainable change.',
    image: '/portfolio/thumbnails/seeds.png',
    technologies: ['WordPress', 'Google Analytics'],
    website: 'http://www.seedsjsr.org/',
  },
  {
    title: 'Harrasmap Mumbai',
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
  },
  {
    title: 'Awaaz-e-Niswaan',
    description: 'A nonprofit website for minority women rehabilitation for Awaaz-e-Niswaan',
    image: '/portfolio/thumbnails/niswaan.jpg',
    technologies: ['WordPress', 'Google Analytics'],
  },
  {
    title: 'Women Helpline',
    description: 'A India-wide multilingual helpline information website for women safety',
    image: '/portfolio/thumbnails/standup.png',
    technologies: ['WordPress', 'Google Analytics'],
    website: 'https://standupagainstviolence.org/',
  },
  {
    title: 'Entrepreneurship Mentorship',
    description: 'A startup incubator website for startups in Amravati, Maharashtra',
    image: '/portfolio/thumbnails/varuntalwar.png',
    technologies: ['WordPress', 'Google Analytics'],
  },
  {
    title: 'Water conservation',
    description: 'A modern website for WaterAid India',
    image: '/portfolio/thumbnails/wateraid.jpg',
    technologies: ['WordPress', 'Google Analytics'],
  },
  {
    title: 'IDIA',
    description: 'A nonprofit website for Legal Education provided by IDIA',
    image: '/portfolio/thumbnails/idia.png',
    technologies: ['PHP', 'Google Analytics'],
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
