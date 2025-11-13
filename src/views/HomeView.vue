<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { mdiWeb, mdiCellphoneLink, mdiSchool, mdiCircle, mdiChevronRight } from '@mdi/js'

const router = useRouter()
const props = defineProps({
  isMobile: {
    type: Boolean,
    default: false,
  },
})

// TODO: Add head management with @unhead/vue

onMounted(() => {
  // Load ConvertKit script
  const script = document.createElement('script')
  script.setAttribute('data-uid', '7d5a62888b')
  script.setAttribute('src', 'https://digisarathi-.kit.com/7d5a62888b/index.js')
  script.setAttribute('async', '')
  document.getElementById('kit-form').appendChild(script)
})

const orgServices = [
  {
    name: 'Website Design',
    icon: mdiWeb,
    text: 'Your website is the foundation upon which your digital marketing or fundraising campaigns are built.',
    features: ['Responsive Design', 'SEO Optimization', 'Custom CMS', 'Performance Focus'],
    route: 'website-design',
    image: 'wordpress.svg',
  },
  {
    name: 'UX/UI Design',
    icon: mdiCellphoneLink,
    text: 'Creating intuitive & engaging digital experiences for user needs and business goals through unique design principles.',
    features: ['User Research', 'Wireframing & Prototyping', 'Visual Design', 'Usability Testing'],
    route: 'ux-ui-services',
    image: 'ux-ui.svg',
  },
]
const peopleServices = [
  {
    name: 'Training & Workshops',
    icon: mdiSchool,
    text: 'Hands-on sessions designed to empower your team with essential skills and knowledge, led by industry experts.',
    features: ['Customized Programs', 'Hands-on Learning', 'Remote Options', 'Ongoing Support'],
    route: 'training-workshops',
    image: 'shared.svg',
  },
  {
    name: 'ChainReaction',
    icon: mdiSchool,
    text: 'A unique yes/no journaling tool to help individuals reflect, set goals, and track progress over time.',
    features: ['Personal Growth', 'Goal Setting', 'Progress Tracking'],
    route: 'https://chainreaction.digisarathi.com',
    image: 'chainreaction.svg',
  }
]
const techServices = [
  {
    name: 'Custom Apps',
    icon: mdiCellphoneLink,
    text: 'Modular and scalable architecture to scale with flexibility and evolving business needs.',
    features: ['Mobile & Web Apps', 'Custom Software', 'API Integration'],
    route: 'apps-software-development',
    image: 'app.svg',
  },
  {
    name: 'myCTO',
    icon: mdiCellphoneLink,
    text: 'Your trusted virtual CTO helping you navigate Digital Transformation or  Tech Issues.',
    features: ['Tech Consulting', 'Tech Implementation', 'Tech Support'],
    route: 'mycto',
    image: 'myCTO.png',
  },
]

const services = ref([...orgServices, ...peopleServices, ...techServices])
// Improved testimonials with more content and images
const testimonials = ref([
  {
    name: 'Santayan Sengupta',
    company: 'Founder, ThoughtShop Foundation',
    text: "digiSarathi is certainly passionate about technology, but they have the vision and skill to make technology bend to human needs and not the other way around. This was particularly important in our context where users are young marginalised people with little prior access or comfort with technology. I was delighted to get a glimpse of Prashant's empathy for the people he was crafting a solution for.",
    photo: 'santayan.webp',
  },
  {
    name: 'Dr. Dwivedi',
    company: 'Secretary, SEEDS',
    text: 'We are happy to state that Digisarathi has designed the SEEDS website in 2022. The team led by Mr Prashant Pandit did a wonderful job - just the way one had visualized. Digisarathi is organization-friendly and we appreciate their sensitivities at all levels. On top of it the charges are reasonable and affordable for grass root NGOs.',
    photo: 'shubhra.png',
  },
  {
    name: '',
    company: 'Trustee, Niswaan',
    text: 'The team delivered our project on time and exceeded our expectations. Their focus on simplicity while maintaining powerful functionality was exactly what we needed.',
    avatar: '/images/avatars/john-doe.jpg',
  },
  {
    name: 'Uma',
    company: 'Founder, Aarambh India',
    text: "DigiSarathi has an impeccable sense of the technical aspects of website development. What sets them apart is their commitment & passion to understand and engage with the subject. This approach can't help but lead to a great product that is perfectly synced in terms of design, technology and content. Aarambh India is a testament to this.",
    photo: 'uma.jpg',
  },
  {
    name: 'Dr. Sharada',
    company: 'Founder, Population First',
    text: 'Thank you for making technology less threatening.',
    photo: 'sharada.jpg',
  },
  {
    name: 'Vinelle Vaz',
    company: 'Head - Retail, RenewSys',
    text: 'digiSarathi is my go-to whenever I want to discuss some new tech idea and its implementation.',
    photo: 'vinelle.jpeg',
  },
  {
    name: 'Daniel Ben Horin',
    company: 'Founder, Techsoup.org',
    text: "A comprehensive knowledge of tech issues, cross-cultural sophistication and a fierce dedication to his work were all apparent. Much of our network's success in India can be credited to his involvement.",
    photo: 'daniel.png',
  },
  {
    name: 'Sundar Iyer',
    company: 'Founder, Suryodaya',
    text: 'digiSarathi helped us decide that the software system we had in mind should be evaluated after we reach a certain scale otherwise we are only adding complexities to the resolution process.',
    photo: 'sundar.webp',
  },
  {
    name: 'Seroja Manoj',
    company: 'Communications, Maya India NGO',
    text: 'digiSarathi AI training session was extremely helpful. Using AI tools at work makes life so much more enjoyable and easier as it is both effective and efficient. Do consider conducting more sessions to help us keep ourselves updated on how we can leverage technology to perform better at work. Keep up the good work!',
    avatar: '/images/avatars/jane-smith.jpg',
  },
])

// Enhanced clients with names and industries
const clients = ref([
  { name: 'Aarambh India', industry: 'Nonprofit', logo: 'logos/aarambh.png' },
  { name: 'Akshara', industry: 'Nonprofit', logo: 'logos/akshara.png' },
  { name: 'InnovSource', industry: 'Staffing', logo: 'logos/innov.png' },
  { name: 'KServe', industry: 'BPO', logo: 'logos/kserve.png' },
  { name: 'RenewSys', industry: 'Manufacturing', logo: 'logos/renewsys.png' },
  { name: 'WaterAid India', industry: 'Nonprofit', logo: 'logos/wateraid.png' },
  { name: 'LLF', industry: 'Nonprofit', logo: 'logos/learninglinks.png' },
  { name: 'Yunus Social', industry: 'Nonprofit', logo: 'logos/ysb.png' },
  { name: 'GuideStar India', industry: 'Nonprofit', logo: 'logos/guidestar.png' },
  { name: 'SEEDS', industry: 'Nonprofit', logo: 'logos/seeds.png' },
  { name: 'Surendra Forgings', industry: 'Manufacturing', logo: 'logos/surendra.png' },
])

const goToService = (route) => {
  if (route.startsWith('http://') || route.startsWith('https://')) {
    // External URL, open in new tab
    window.open(route, '_blank');
  } else {
    // Internal named route, navigate within SPA
    router.push({ name: route });
  }
}

</script>

<template>
  <main>
    <!-- Hero Section with Gradient Background -->
    <section id="hero-section" class="hero-section" fetchpriority="high">
      <v-container>
        <v-row justify="center" align="center" class="min-height-70vh">
          <v-col cols="12" md="7" order="2" order-md="1" class="text-center">
            <h1 :class="['mb-6', { 'text-h3': !isMobile, 'text-h4': isMobile }]" class="text-primary"
              fetchpriority="high">
              Your goals can't wait for 'someday'.
            </h1>
            <p class="text-secondary text-h6">
              In a fiercely competitive marketplace, strategy alone won’t secure victory. Speed of execution is the
              decisive edge and speed demands deep expertise.
              Fortunately, we bring both.
            </p>
          </v-col>
          <v-col cols="12" md="5" order="1" order-md="2" class="d-flex justify-center align-center">
            <v-img src="/home_hero.svg" max-width="450" :max-height="isMobile ? 200 : 350" contain loading="eager"
              fetchpriority="high" alt="Hero illustration"></v-img>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <!-- Technology for Good Section -->
    <section id="techforgood" class="py-16 bg-grey-lighten-4">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8" class="text-center">
            <h2 class="font-weight-bold mb-3 text-primary" :class="{ 'text-h3': !isMobile, 'text-h6': isMobile }">
              Technology for Good
            </h2>
            <p class="text-subtitle-1 mx-auto max-width-600 text-secondary">
              At digiSarathi, we believe in the transformative power of technology to drive positive
              change. We are committed to leveraging our expertise to support ngos, nonprofits and
              social enterprises in achieving their missions more effectively.
            </p>
            <v-btn color="primary" to="/ngos" class="mt-4">Learn More</v-btn>
          </v-col>
          <v-col>
            <v-img src="/green.svg" alt="Technology for Good" :max-height="isMobile ? 250 : 500" contain></v-img>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <!-- Services Section with Cards -->
    <section class="py-16">
      <v-container>
        <v-row>
          <v-col cols="12" class="text-center mb-12">
            <h2 class="font-weight-bold mb-3 text-primary" :class="{ 'text-h3': !isMobile, 'text-h6': isMobile }">
              Our Services
            </h2>
            <p id="services" class="text-subtitle-1 mx-auto max-width-600 text-secondary">
              Comprehensive digital solutions for growth, tailored to your specific needs
            </p>
          </v-col>
        </v-row>
        <v-row class="mb-8">
          <v-col v-for="(service, index) in services" :key="index" cols="12" sm="6" md="6" class="d-flex">
            <v-hover v-slot="{ isHovering, props }">
              <v-card v-bind="props" :elevation="isHovering ? 8 : 3" class="service-card d-flex flex-column h-100"
                @click="goToService(service.route)">
                <v-card-title class="font-weight-bold text-white text-center py-4"
                  style="background: linear-gradient(90deg, #325ea4 0%, #42a5f5 100%);">
                  {{ service.name }}
                </v-card-title>

                <div class="image-container">
                  <v-img :src="service.image" :aspect-ratio="4 / 3" class="rounded-b">
                    <template v-slot:placeholder>
                      <div class="d-flex align-center justify-center fill-height">
                        <v-progress-circular indeterminate color="primary" />
                      </div>
                    </template>
                  </v-img>
                </div>

                <v-card-text class="flex-grow-1 d-flex flex-column">
                  <p class="mb-4 text-secondary flex-grow-1">{{ service.text }}</p>
                  <v-chip-group>
                    <v-chip v-for="feature in service.features" :key="feature" size="small" class="ma-1">
                      {{ feature }}
                    </v-chip>
                  </v-chip-group>
                </v-card-text>

                <v-btn block variant="text" color="primary" :append-icon="mdiChevronRight"
                  @click.stop="goToService(service.route)" class="mt-auto">
                  Read More
                </v-btn>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Testimonials Section with Modern Carousel -->
    <section id="testimonials" class="py-16 bg-grey-lighten-4">
      <v-container>
        <v-row>
          <v-col cols="12" class="text-center mb-12">
            <h2 class="font-weight-bold mb-3 text-primary" :class="{ 'text-h3': !isMobile, 'text-h6': isMobile }">
              What Our Clients Say
            </h2>
            <p class="text-subtitle-1 mx-auto max-width-600 text-secondary">
              Hear from the organizations we've helped transform digitally
            </p>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col cols="12">
            <v-carousel :show-arrows="false" progress="primary" height="auto" hide-delimiter-background
              :delimiter-icon="mdiCircle" color="primary" class="testimonial-carousel">
              <v-carousel-item v-for="(testimonial, index) in testimonials" :key="index">
                <v-card class="testimonial-card mx-auto pa-6" max-width="950">
                  <div class="d-flex flex-column align-center text-center">
                    <v-avatar size="80" class="mb-4">
                      <v-img :src="testimonial.avatar" alt="Avatar"></v-img>
                    </v-avatar>
                    <div class="quote-marks mb-4">"</div>
                    <p class="text-h6 font-italic mb-6">{{ testimonial.text }}</p>
                    <v-divider width="60" class="mb-4"></v-divider>
                    <div class="d-flex align-center justify-center">
                      <v-avatar size="60" class="mr-4">
                        <v-img :src="'/clients/' + testimonial.photo" :alt="testimonial.name + ' photo'" cover
                          class="bg-grey-lighten-3">
                          <template v-slot:placeholder>
                            <v-icon size="24">mdiAccount</v-icon>
                          </template>
                        </v-img>
                      </v-avatar>
                      <div class="text-left">
                        <p class="text-subtitle-1 font-weight-bold mb-1">{{ testimonial.name }}</p>
                        <p class="text-subtitle-2 text-medium-emphasis">{{ testimonial.role }}</p>
                        <p class="text-caption text-medium-emphasis">{{ testimonial.company }}</p>
                      </div>
                    </div>
                  </div>
                </v-card>
              </v-carousel-item>
            </v-carousel>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Clients Logo Section with Animation -->
    <section id="clients" class="py-16">
      <v-container>
        <v-row>
          <v-col cols="12" class="text-center mb-12">
            <h2 class="font-weight-bold mb-3 text-primary" :class="{ 'text-h3': !isMobile, 'text-h6': isMobile }">
              Our Clients
            </h2>
            <p class="text-subtitle-1 mx-auto max-width-600 text-secondary">
              Trusted by leading organizations across industries
            </p>
          </v-col>
        </v-row>

        <v-row justify="center" align="center" class="">
          <v-col v-for="(client, index) in clients" :key="index" cols="6" sm="4" md="2" class="text-center mb-8">
            <v-hover v-slot="{ isHovering, props }">
              <v-card v-bind="props" variant="flat" class="client-logo bg-transparent">
                <v-tooltip :text="client.name + ' - ' + client.industry" location="top">
                  <template v-slot:activator="{ props }">
                    <v-img v-bind="props" :src="client.logo" :alt="client.name" height="100" width="200" contain
                      :class="['mx-auto', !isHovering ? 'grey-filter' : '']"></v-img>
                  </template>
                </v-tooltip>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Newsletter Section with Modern Form -->
    <section id="newsletter" class="py-16 bg-primary">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8" lg="6" class="text-center">
            <h2 class="font-weight-bold mb-3 text-white" :class="{ 'text-h3': !isMobile, 'text-h6': isMobile }">
              Join 5000+ people who get our email newsletter to stay updated.
            </h2>
            <p class="text-caption mt-4 text-white">
              We’ll share product updates, thoughts, new releases, and other tidbits we think you’ll
              find interesting.
            </p>
            <p class="text-caption mt-4 text-white">
              We respect your privacy. Unsubscribe at any time.
            </p>
            <div class="mx-auto pa-2" style="width: 300px" id="kit-form"></div>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </main>
</template>

<style scoped>
/* Custom carousel delimiters */
.testimonial-carousel :deep(.v-carousel__controls) {
  padding-top: 14px !important;
  margin-top: 14px !important;
  position: relative;
}

.testimonial-carousel :deep(.v-carousel__controls .v-btn) {
  margin: 0 4px;
  color: rgba(var(--v-theme-primary), 0.5) !important;
}

.testimonial-carousel :deep(.v-carousel__controls .v-btn--active) {
  color: rgb(var(--v-theme-primary)) !important;
}

.hero-section {
  position: relative;
  background: linear-gradient(135deg, var(--v-primary-base) 0%, var(--v-secondary-base) 100%);
  overflow: hidden;
}

.min-height-70vh {
  min-height: 70vh;
}

.max-width-600 {
  max-width: 600px;
}

.service-card {
  cursor: pointer;
  border-radius: 16px;
}

.image-container {
  height: 250px;
  overflow: hidden;
}

.service-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.service-card:hover {
  transform: translateY(-4px);
}

.testimonial-card {
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.quote-marks {
  font-size: 4rem;
  line-height: 1;
  color: var(--v-primary-base);
  opacity: 0.5;
  font-family: 'Georgia', serif;
}

.client-logo {
  transition: transform 0.3s ease;
}

.scale-up {
  transform: scale(1.1);
}

.grey-filter {
  filter: grayscale(100%);
  opacity: 0.7;
  transition: all 0.3s ease;
}

.no-filter {
  filter: grayscale(0%);
  opacity: 1;
}

.transition-fast {
  transition: all 0.3s ease;
}

.opacity-high {
  opacity: 0.9;
}

.opacity-medium {
  opacity: 0.7;
}

.pillar-label {
  writing-mode: vertical-lr;
  text-orientation: upright;
  font-size: 1.2rem;
  font-weight: bold;
  color: #3254ae;
  /* Example: Light blue, adjust for your theme */
  margin-bottom: 1rem;
  letter-spacing: 0.1em;
  text-align: center;
}

@media (max-width: 960px) {
  .pillar-label {
    writing-mode: horizontal-tb;
    text-orientation: initial;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
    text-align: left;
  }
}
</style>
