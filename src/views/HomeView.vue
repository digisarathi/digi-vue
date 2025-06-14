<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { mdiWeb, mdiCellphoneLink, mdiTrendingUp, mdiSchool, mdiCircle } from '@mdi/js';

const router = useRouter();
const props = defineProps({
  isMobile: {
    type: Boolean,
    default: false
  }
});

onMounted(() => {
  const script = document.createElement('script');
  script.setAttribute('data-uid', '7d5a62888b');
  script.setAttribute('src', 'https://digisarathi-.kit.com/7d5a62888b/index.js');
  script.setAttribute('async', '');
  document.getElementById('kit-form').appendChild(script);
});

// Improved testimonials with more content and images
const testimonials = ref([
  {
    name: 'Santayan Sengupta',
    company: 'Founder, ThoughtShop Foundation',
    text: 'Prashant is certainly passionate about technology, but he has the vision and skill to make technology bend to human needs and not the other way around. This was particularly important in our context where users are young marginalised people with little prior access or comfort with technology. I was delighted to get a glimpse of his empathy for the people he was crafting a solution for.', avatar: '/images/avatars/jane-smith.jpg'
  },
  {
    name: 'Dr. Dwivedi',
    company: 'Secretary, SEEDS',
    text: 'We are happy to state that Digisarathi has designed the SEEDS website in 2022. The team led by Mr Prashant Pandit did a wonderful job - just the way one had visualized. Digisarathi is organization-friendly and we appreciate their sensitivities at all levels. On top of it the charges are reasonable and affordable for grass root NGOs.',
    avatar: '/images/avatars/john-doe.jpg'
  },
  {
    name: 'Adv. Jyoti',
    company: 'Founder, DISHA',
    text: "We deeply appreciate the invaluable contributions digiSarathi has made to DISHA. Your dedication and hard work have significantly impacted our organization. ",
    avatar: '/images/avatars/jane-smith.jpg'
  },
  {
    name: '',
    company: 'Trustee, Niswaan',
    text: 'The team delivered our project on time and exceeded our expectations. Their focus on simplicity while maintaining powerful functionality was exactly what we needed.',
    avatar: '/images/avatars/john-doe.jpg'
  },
  {
    name: 'Uma',
    company: 'Founder, Aarambh India',
    text: "DigiSarathi has an impeccable sense of the technical aspects of website development. What sets them apart is their commitment & passion to understand and engage with the subject. This approach can't help but lead to a great product that is perfectly synced in terms of design, technology and content. Aarambh India is a testament to this.",
    avatar: '/images/avatars/jane-smith.jpg'
  },
  {
    name: 'Dr. Sharada',
    company: 'Founder, Population First',
    text: 'Thank you for making technology less threatening.',
    avatar: '/images/avatars/john-doe.jpg'
  },
  {
    name: 'Vinelle Vaz',
    company: 'Head - Retail, RenewSys',
    text: 'digiSarathi is my go-to whenever I want to discuss some new tech idea and its implementation.',
    avatar: '/images/avatars/jane-smith.jpg'
  },
  {
    name: 'Daniel Ben Horin',
    company: 'Founder, Techsoup.org',
    text: "A comprehensive knowledge of tech issues, cross-cultural sophistication and a fierce dedication to his work were all apparent. Much of our network's success in India can be credited to his involvement.",
    avatar: '/images/avatars/jane-smith.jpg'
  },
  {
    name: 'Sundar Iyer',
    company: 'Founder, Suryodaya',
    text: "digiSarathi helped us decide that the software system we had in mind should be evaluated after we reach a certain scale otherwise we are only adding complexities to the resolution process.",
    avatar: '/images/avatars/jane-smith.jpg'
  },
  {
    name: 'Seroja Manoj',
    company: 'Communications, Maya India NGO',
    text: "Prashant, your session was extremely helpful. Using AI tools at work makes life so much more enjoyable and easier as it is both effective and efficient. Do consider conducting more sessions to help us keep ourselves updated on how we can leverage technology to perform better at work. Keep up the good work!",
    avatar: '/images/avatars/jane-smith.jpg'
  },

]);

// Enhanced clients with names and industries
const clients = ref([
  { name: 'Aarambh India', industry: 'Nonprofit', logo: 'logos/aarambh.png' },
  { name: 'Akshara', industry: 'Nonprofit', logo: 'logos/akshara.png' },
  { name: 'InnovSource', industry: 'Staffing', logo: 'logos/innov.png' },
  { name: 'KServe', industry: 'BPO', logo: 'logos/kserve.png' },
  { name: 'RenewSys', industry: 'Manufacturing', logo: 'logos/renewsys.png' },
  { name: 'WaterAid India', industry: 'Nonprofit', logo: 'logos/wateraid.png' },
  { name: 'LLF', industry: 'Nonprofit', logo: 'logos/learninglinks.png' },
  { name: 'Entrib ShopWorx', industry: 'Manufacturing', logo: 'logos/shopworx.png' },
  { name: 'UIC Energy', industry: 'Renewable Energy', logo: 'logos/uicenergy.png' },
  { name: 'Yunus Social', industry: 'Nonprofit', logo: 'logos/ysb.png' },
  { name: 'GuideStar India', industry: 'Nonprofit', logo: 'logos/guidestar.png' },
  { name: 'SEEDS', industry: 'Nonprofit', logo: 'logos/seeds.png' },
]);

// Enhanced services with icons and more detailed descriptions
const services = ref([
  {
    name: 'Website Design',
    icon: mdiWeb,
    text: 'Your website is the foundation upon which your digital marketing or fundraising campaigns are built. We create responsive, user-friendly designs that connect with your audience.',
    features: ['Responsive Design', 'SEO Optimization', 'Custom CMS', 'Performance Focus'],
    route: 'website-design',
    image: 'wordpress.svg'
  },
  {
    name: 'Apps & Custom Software ',
    icon: mdiCellphoneLink,
    text: 'Innovative user experiences based on a modular and scalable architecture to scale with flexibility and create seamless digital experiences across all platforms.',
    features: ['Native Mobile Apps', 'Progressive Web Apps', 'Custom Software', 'API Integration'],
    route: 'apps-software-development',
    image: 'app.svg'
  },
  {
    name: 'Digital Marketing',
    icon: mdiTrendingUp,
    text: 'Comprehensive strategies to enhance your online presence and drive engagement. We use data-driven approaches to maximize your ROI and reach your target audience effectively.',
    features: ['SEO/SEM', 'Content Marketing', 'Social Media', 'Analytics & Reporting'],
    route: 'digital-marketing',
    image: 'social.svg'
  },
  {
    name: 'Training & Workshops',
    icon: mdiSchool,
    text: 'Hands-on sessions designed to empower your team with essential skills and knowledge. Our expert-led workshops provide practical knowledge that can be immediately applied.',
    features: ['Customized Programs', 'Hands-on Learning', 'Remote Options', 'Ongoing Support'],
    route: 'training-workshops',
    image: 'shared.svg'
  }
]);


const goToService = (route) => {
  router.push({ name: route });
};
</script>

<template>
  <main>
    <!-- Hero Section with Gradient Background -->
    <section class="hero-section" fetchpriority="high">
      <v-container>
        <v-row justify="center" align="center" class="min-height-70vh">
          <v-col cols="12" md="7">
            <h1 :class="['font-weight-bold', 'mb-6', { 'text-h3': !isMobile, 'text-h4': isMobile }]"
              class="text-primary" fetchpriority="high">
              We simplify digitization by focusing on what truly matters, empowering the end user.
            </h1>
            <p :class="['mb-8', { 'text-h6': !isMobile, 'text-h7': isMobile }]" class="text-secondary">
              Our strategy, system design and implementation processes are speedy &
              agile which means you see results ASAP. Better control enables better results.
            </p>
          </v-col>
          <v-col cols="12" md="5" class="d-none d-md-flex justify-center">
            <v-img src="/websites.svg" max-width="450" contain loading="eager" fetchpriority="high"
              width="450" height="450" alt="Hero illustration"></v-img>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Services Section with Cards -->
    <section class="py-16">
      <v-container>
        <v-row>
          <v-col cols="12" class="text-center mb-12">
            <h2 class="font-weight-bold mb-3 text-primary" :class="{ 'text-h3': !isMobile, 'text-h6': isMobile }">Our
              Services</h2>
            <p class="text-subtitle-1 mx-auto max-width-600 text-secondary">
              Comprehensive digital solutions tailored to your specific needs
            </p>
          </v-col>
        </v-row>

        <v-row id="services">
          <v-col v-for="(service, index) in services" :key="index" cols="12" md="6" lg="6" class="mb-4 pa-6">
            <v-hover v-slot="{ props }">
              <v-card v-bind="props" :elevation="2" height="100%" class="service-card transition-fast overflow-hidden"
                @click="goToService(service.route)">
                <v-card-item class="text-center mb-4">
                  <v-card-title class="font-weight-bold text-primary"
                    :class="{ 'text-h5': !isMobile, 'text-h6': isMobile }">{{ service.name }}</v-card-title>
                </v-card-item>
                <v-card-text>
                  <div class="d-flex justify-center">
                    <v-img class="mb-4" :src="service.image" max-width="350" max-height="450" min-height="250"></v-img>
                  </div>
                  <p class="mb-4 text-secondary">{{ service.text }}</p>
                  <v-chip-group class="mb-0">
                    <v-chip v-for="feature in service.features" :key="feature" size="small" class="ma-1">
                      {{ feature }}
                    </v-chip>
                  </v-chip-group>
                </v-card-text>
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
            <h2 class="font-weight-bold mb-3 text-primary" :class="{ 'text-h3': !isMobile, 'text-h6': isMobile }">What
              Our Clients Say</h2>
            <p class="text-subtitle-1 mx-auto max-width-600 text-secondary">
              Hear from the organizations we've helped transform digitally
            </p>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col cols="12" md="10" lg="8">
            <v-carousel show-arrows="hover" height="auto" hide-delimiter-background :delimiter-icon="mdiCircle">
              <v-carousel-item v-for="(testimonial, index) in testimonials" :key="index">
                <v-card class="testimonial-card mx-auto pa-6" max-width="800">
                  <div class="d-flex flex-column align-center text-center">
                    <v-avatar size="80" class="mb-4">
                      <v-img :src="testimonial.avatar" alt="Avatar"></v-img>
                    </v-avatar>
                    <div class="quote-marks mb-4">"</div>
                    <p class="text-h6 font-italic mb-6">{{ testimonial.text }}</p>
                    <v-divider width="60" class="mb-4"></v-divider>
                    <p class="text-subtitle-1 font-weight-bold mb-1">{{ testimonial.name }}</p>
                    <p class="text-subtitle-2">{{ testimonial.company }}</p>
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
            <h2 class="font-weight-bold mb-3 text-primary" :class="{ 'text-h3': !isMobile, 'text-h6': isMobile }">Our
              Clients</h2>
            <p class="text-subtitle-1 mx-auto max-width-600 text-secondary">
              Trusted by leading organizations across industries
            </p>
          </v-col>
        </v-row>

        <v-row justify="center" align="center" class="">
          <v-col v-for="(client, index) in clients" :key="index" cols="6" sm="4" md="2" class="text-center mb-8">
            <v-hover v-slot="{ props }">
              <v-card v-bind="props" variant="flat" class="client-logo bg-transparent">
                <v-tooltip :text="client.name + ' - ' + client.industry" location="top">
                  <template v-slot:activator="{ props }">
                    <v-img v-bind="props" :src="client.logo" :alt="client.name" height="100" width="200" contain
                      class="mx-auto grey-filter"></v-img>
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
            <h2 class="font-weight-bold mb-3 text-white" :class="{ 'text-h3': !isMobile, 'text-h6': isMobile }">Stay
              Updated
            </h2>
            <p class="text-caption mt-4 text-white opacity-medium">
              We respect your privacy. Unsubscribe at any time.
            </p>
            <div class="mx-auto pa-2" style="width: 300px;" id="kit-form">
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </main>
</template>

<style scoped>
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
</style>