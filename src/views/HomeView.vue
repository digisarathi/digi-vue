<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const email = ref('');

// Improved testimonials with more content and images
const testimonials = ref([
  { 
    name: 'John Doe',
    company: 'Tech Solutions Inc.',
    text: 'The team delivered our project on time and exceeded our expectations. Their focus on simplicity while maintaining powerful functionality was exactly what we needed.',
    avatar: '/images/avatars/john-doe.jpg'
  },
  { 
    name: 'Jane Smith',
    company: 'Creative Designs',
    text: 'Highly recommend! Their digital marketing strategy transformed our online presence and increased our conversion rates by 45% in just three months.',
    avatar: '/images/avatars/jane-smith.jpg'
  },
]);

// Enhanced clients with names and industries
const clients = ref([
  { name: 'TechCorp', industry: 'Technology', logo: '/images/logos/techcorp.svg' },
  { name: 'GreenEnergy', industry: 'Renewable Energy', logo: '/images/logos/greenenergy.svg' },
  { name: 'HealthPlus', industry: 'Healthcare', logo: '/images/logos/healthplus.svg' },
  { name: 'EduLearn', industry: 'Education', logo: '/images/logos/edulearn.svg' },
  { name: 'FinanceHub', industry: 'Finance', logo: '/images/logos/financehub.svg' },
]);

// Enhanced services with icons and more detailed descriptions
const services = ref([
  { 
    name: 'Website Design', 
    icon: 'mdi-web',
    text: 'Your website is the foundation upon which your digital marketing and fundraising campaigns are built. We create responsive, user-friendly designs that convert visitors into customers.',
    features: ['Responsive Design', 'SEO Optimization', 'Custom CMS', 'Performance Focus'],
    route: 'website-design' 
  },
  { 
    name: 'Apps & Software Development', 
    icon: 'mdi-cellphone-link',
    text: 'Innovative user experiences based on a modular and scalable architecture to scale with flexibility and create seamless digital experiences across all platforms.',
    features: ['Native Mobile Apps', 'Progressive Web Apps', 'Custom Software', 'API Integration'],
    route: 'apps-software-development' 
  },
  { 
    name: 'Digital Marketing', 
    icon: 'mdi-trending-up',
    text: 'Comprehensive strategies to enhance your online presence and drive engagement. We use data-driven approaches to maximize your ROI and reach your target audience effectively.',
    features: ['SEO/SEM', 'Content Marketing', 'Social Media', 'Analytics & Reporting'],
    route: 'digital-marketing' 
  },
  { 
    name: 'Training & Workshops', 
    icon: 'mdi-school',
    text: 'Hands-on sessions designed to empower your team with essential skills and knowledge. Our expert-led workshops provide practical knowledge that can be immediately applied.',
    features: ['Customized Programs', 'Hands-on Learning', 'Remote Options', 'Ongoing Support'],
    route: 'training-workshops' 
  }
]);

const subscribe = () => {
  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    alert('Please enter a valid email address');
    return;
  }
  
  alert(`Thanks for subscribing with email: ${email.value}`);
  email.value = '';
};

const goToService = (route) => {
  router.push({ name: route });
};
</script>

<template>
  <main>
    <!-- Hero Section with Gradient Background -->
    <section class="hero-section">
      <v-container>
        <v-row align="center" class="min-height-70vh">
          <v-col cols="12" md="7" class="hero-content">
            <h1 class="text-h3 font-weight-bold mb-6">
              We simplify digitization by focusing on what truly matters, empowering every individual.
            </h1>
            <p class="text-h6 mb-8">
              Digitisation need not be complicated. Our strategy, system design and execution processes are speedy & agile which means you see results ASAP.
            </p>
            <div class="d-flex flex-wrap gap-4">
              <v-btn size="large" color="primary" elevation="2" rounded>Get Started</v-btn>
              <v-btn size="large" variant="outlined" color="primary" elevation="0" rounded>Learn More</v-btn>
            </div>
          </v-col>
          <v-col cols="12" md="5" class="d-none d-md-flex justify-center">
            <v-img src="/images/hero-illustration.svg" max-width="450" contain></v-img>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Services Section with Cards -->
    <section id="services" class="py-16">
      <v-container>
        <v-row>
          <v-col cols="12" class="text-center mb-12">
            <h2 class="text-h3 font-weight-bold mb-3">Our Services</h2>
            <p class="text-subtitle-1 mx-auto max-width-600">
              Comprehensive digital solutions tailored to your specific needs
            </p>
          </v-col>
        </v-row>
        
        <v-row>
          <v-col v-for="(service, index) in services" :key="index" cols="12" md="6" lg="3" class="mb-4">
            <v-hover v-slot="{ props }">
              <v-card
                v-bind="props"
                :elevation="2"
                height="100%"
                class="service-card transition-fast overflow-hidden"
                @click="goToService(service.route)"
              >
                <v-card-item class="text-center pb-0">
                  <v-icon :icon="service.icon" size="48" color="primary" class="mb-4"></v-icon>
                  <v-card-title class="text-h5 font-weight-bold">{{ service.name }}</v-card-title>
                </v-card-item>
                
                <v-card-text>
                  <p class="mb-4">{{ service.text }}</p>
                  <v-chip-group class="mb-0">
                    <v-chip v-for="feature in service.features" :key="feature" size="small" class="ma-1">
                      {{ feature }}
                    </v-chip>
                  </v-chip-group>
                </v-card-text>
                
                <v-overlay
                  v-model="isHovering"
                  contained
                  scrim="primary"
                  class="align-center justify-center"
                >
                  <v-btn variant="elevated" color="white" @click.stop="goToService(service.route)">
                    Learn More
                  </v-btn>
                </v-overlay>
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
            <h2 class="text-h3 font-weight-bold mb-3">What Our Clients Say</h2>
            <p class="text-subtitle-1 mx-auto max-width-600">
              Hear from the businesses we've helped transform digitally
            </p>
          </v-col>
        </v-row>
        
        <v-row justify="center">
          <v-col cols="12" md="10" lg="8">
            <v-carousel
              show-arrows="hover"
              height="auto"
              hide-delimiter-background
              delimiter-icon="mdi-circle"
            >
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
            <h2 class="text-h3 font-weight-bold mb-3">Our Clients</h2>
            <p class="text-subtitle-1 mx-auto max-width-600">
              Trusted by leading companies across industries
            </p>
          </v-col>
        </v-row>
        
        <v-row justify="center" align="center">
          <v-col v-for="(client, index) in clients" :key="index" cols="6" sm="4" md="2" class="text-center mb-8">
            <v-hover v-slot="{ props }">
              <v-card
                v-bind="props"
                variant="flat"
                class="client-logo bg-transparent"
              >
                <v-tooltip :text="client.name + ' - ' + client.industry" location="top">
                  <template v-slot:activator="{ props }">
                    <v-img
                      v-bind="props"
                      :src="client.logo"
                      :alt="client.name"
                      height="80"
                      contain
                      class="mx-auto grey-filter"
                    ></v-img>
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
            <h2 class="text-h3 font-weight-bold mb-3 text-white">Stay Updated</h2>
            <p class="text-subtitle-1 mb-8 text-white opacity-high">
              Subscribe to our newsletter for the latest trends and insights in digital transformation.
            </p>
            
            <v-card class="pa-4">
              <v-form @submit.prevent="subscribe">
                <v-row no-gutters>
                  <v-col cols="12" sm="8">
                    <v-text-field
                      v-model="email"
                      label="Enter your email"
                      placeholder="you@example.com"
                      variant="outlined"
                      hide-details
                      class="rounded-r-0"
                      density="comfortable"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="4">
                    <v-btn
                      color="primary"
                      block
                      height="56"
                      class="rounded-l-0"
                      @click="subscribe"
                    >
                      Subscribe
                    </v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </v-card>
            
            <p class="text-caption mt-4 text-white opacity-medium">
              We respect your privacy. Unsubscribe at any time.
            </p>
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