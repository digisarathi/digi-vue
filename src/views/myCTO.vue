<template>
  <v-main>
    <!-- Hero Section -->
    <section id="hero" class="py-16">
      <v-container>
        <v-row align="center">
          <v-col cols="12" md="7" order="2" order-md="1">
            <h1 class="text-h2 text-primary font-weight-bold mb-4">
              Your Virtual Chief Technology Officer
            </h1>
            <p class="text-body-1 mb-6">
              With <strong>myCTO</strong>, we bring the expertise of a Chief Technology Officer to your SME or NGO without the hefty price tag.
               Whether you’re navigating digital transformation, troubleshooting tech issues, or planning your next big project, myCTO is your trusted partner.
            </p>
            <v-btn color="primary" size="large" class="mr-4 mb-4" href="mailto:mycto@digisarathi.com">
              Get in touch
            </v-btn>
          </v-col>
         <v-col cols="12" md="5" order="1" order-md="2" class="text-center justify-center">
            <v-img src="/myCTO_logo.png" max-width="350" contain alt="myCTO"></v-img>
          </v-col>
        </v-row>
      </v-container>
    </section>


    <!-- Key Features Section -->
    <section id="features" class="py-12 bg-grey-lighten-4">
      <v-container>
        <v-row class="text-center mb-8">
          <v-col>
            <h2 class="text-h4 text-primary font-weight-bold">Key Features</h2>
            <p class="text-body-1 mt-2">
              Our subscription-based service connects your CEO and team to a dedicated tech expert via <strong>email, Zoom/Google Meet, and phone calls</strong> for strategic guidance and technical answers, tailored to your needs. 
              From small startups to growing organizations, myCTO scales with you.
            </p>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="4" v-for="(feature, index) in features" :key="index">
            <v-card height="100%" class="feature-card">
              <v-card-item class="pa-6">
                <div class="d-flex flex-column align-center text-center">
                  <v-icon :icon="feature.icon" color="primary" size="x-large" class="mb-4"></v-icon>
                  <v-card-title class="text-primary font-weight-bold mb-3 text-wrap">
                    {{ feature.title }}
                  </v-card-title>
                  <v-card-text class="text-body-1">
                    {{ feature.description }}
                  </v-card-text>
                </div>
              </v-card-item>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- How It Works Section -->
    <section id="how-it-works" class="py-12">
      <v-container>
        <v-row class="text-center mb-8">
          <v-col>
            <h2 class="text-h4 text-primary font-weight-bold mb-4">How It Works</h2>
            <p class="text-body-1"></p>
          </v-col>
        </v-row>

        <v-row class="justify-center">
          <v-col cols="12" md="3" v-for="(step, index) in steps" :key="index">
            <v-card height="100%" class="step-card pa-6 text-center">
              <v-avatar color="primary" size="64" class="mb-4">
                <span class="text-h4 text-white">{{ index + 1 }}</span>
              </v-avatar>
              <h3 class="text-h6 font-weight-bold mb-3">{{ step.title }}</h3>
              <p class="text-body-2">{{ step.description }}</p>
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
            <h2 class="text-h4 text-primary font-weight-bold mb-4">Simple, Transparent Pricing</h2>
            <p class="text-body-1">Choose the plan that works best for your organization</p>
          </v-col>
        </v-row>

        <v-row class="justify-center">
          <v-col cols="12" md="6" v-for="(plan, index) in pricingPlans" :key="index">
            <v-card height="100%" :class="['pricing-card', { 'popular': plan.popular }]">
              <v-card-text class="text-center pa-6">
                <div v-if="plan.popular" class="popular-badge">
                  <span>MOST POPULAR</span>
                </div>
                <h3 class="text-h5 font-weight-bold mb-3">{{ plan.name }}</h3>
                <div class="price mb-4">
                  <span class="text-h4 font-weight-bold"> {{ plan.price }}</span>
                  <span class="text-body-2 text-medium-emphasis">/year</span>
                </div>
                <p class="text-body-2 mb-6">{{ plan.description }}</p>
                <v-list density="compact" class="text-start mb-6 bg-transparent">
                  <!-- Query Volume as first item -->
                  <v-list-item class="px-0">
                    <template v-slot:prepend>
                      <v-icon color="success" size="small" class="">{{mdiCheckCircle}}</v-icon>
                    </template>
                    <v-list-item-title class="text-primary text-h6"><strong>{{ plan.queryVolume }}</strong></v-list-item-title>
                  </v-list-item>
                  <!-- Other features -->
                  <v-list-item v-for="(feature, i) in plan.features" :key="i" class="px-0">
                    <template v-slot:prepend>
                      <v-icon color="success" size="small" class="">{{mdiCheckCircle}}</v-icon>
                    </template>
                    <v-list-item-title class="text-body-2">{{ feature }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="text-center">
            <v-btn color="primary" variant="flat" size="large" class="mt-4" href="mailto:mycto@digisarathi.com">
                  Get Started!
                </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- What Can You Ask Section -->
    <section id="what-can-you-ask" class="py-12 bg-grey-lighten-4">
      <v-container>
        <v-row class="text-center mb-8">
          <v-col cols="12" md="8" class="mx-auto">
            <h2 class="text-h3 font-weight-bold text-primary mb-4">What Can You Ask?</h2>
            <p class="text-body-1 mb-8">No question is too big or too small – we're here to help you succeed.</p>
          </v-col>
        </v-row>

        <v-row class="justify-center">
          <!-- For CEOs Column -->
          <v-col cols="12" md="5" class="px-6">
            <v-card variant="flat" class="h-100">
              <v-card-text class="text-center pa-6">
                <v-icon :icon="mdiAccountTie" size="48" color="primary" class="mb-4"></v-icon>
                <h3 class="text-h5 font-weight-bold mb-4">For CEOs & Leaders</h3>
                <v-list density="compact" class="text-start bg-transparent">
                  <v-list-item v-for="(item, i) in ceoQuestions" :key="'ceo-' + i" class="px-0 align-start">
                    <template v-slot:prepend>
                      <v-icon color="primary" size="small" class="mt-1 me-2 flex-shrink-0">{{ mdiChevronRight }}</v-icon>
                    </template>
                    <v-list-item-title class="text-body-2">
                      <div class="text-wrap">{{ item }}</div>
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>

          <!-- For Teams Column -->
          <v-col cols="12" md="5" class="px-6">
            <v-card variant="flat" class="h-100">
              <v-card-text class="text-center pa-6">
                <v-icon :icon="mdiAccountGroup" size="48" color="primary" class="mb-4"></v-icon>
                <h3 class="text-h5 font-weight-bold mb-4">For Teams</h3>
                <v-list density="compact" class="text-start bg-transparent">
                  <v-list-item v-for="(item, i) in teamQuestions" :key="'team-' + i" class="px-0 align-start">
                    <template v-slot:prepend>
                      <v-icon color="primary" size="small" class="mt-1 me-2 flex-shrink-0">{{ mdiChevronRight }}</v-icon>
                    </template>
                    <v-list-item-title class="text-body-2">
                      <div class="text-wrap">{{ item }}</div>
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Testimonials Section -->
    <section id="testimonials" class="py-12">
      <v-container>
        <v-row class="text-center mb-8">
          <v-col cols="12" md="8" class="mx-auto">
            <h2 class="text-h3 font-weight-bold text-primary mb-4">Why SMEs and NGOs Love myCTO</h2>
            <p class="text-body-1 mb-8">Hear from organizations that have transformed their tech strategy with our expert guidance</p>
          </v-col>
        </v-row>

        <v-row class="justify-center">
          <v-col cols="12" md="4" v-for="(testimonial, index) in testimonials" :key="index" class="mb-6">
            <v-card variant="flat" class="h-100 d-flex flex-column">
              <v-card-text class="flex-grow-1">
                <v-rating
                  v-model="testimonial.rating"
                  color="amber"
                  density="compact"
                  size="small"
                  readonly
                  class="mb-3"
                ></v-rating>
                <p class="text-body-1 font-italic mb-4">"{{ testimonial.quote }}"</p>
              </v-card-text>
              <v-card-actions class="bg-grey-lighten-4 pa-4">
                <v-avatar size="48" class="me-3">
                  <v-icon size="large" color="primary">{{ testimonial.icon }}</v-icon>
                </v-avatar>
                <div>
                  <div class="font-weight-bold">{{ testimonial.name }}</div>
                  <div class="text-caption">{{ testimonial.role }}, {{ testimonial.company }}</div>
                </div>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- FAQ Section -->
    <section id="faq" class="py-12 bg-grey-lighten-3">
      <v-container>
        <v-row class="text-center mb-8">
          <v-col cols="12" md="8" class="mx-auto">
            <h2 class="text-h3 font-weight-bold text-primary mb-4">Frequently Asked Questions</h2>
            <p class="text-body-1">Can't find the answer you're looking for? <a href="mailto:mycto@digisarathi.com" class="text-primary">Contact us</a>.</p>
          </v-col>
        </v-row>

        <v-row class="justify-center">
          <v-col cols="12" md="8">
            <v-card variant="flat" class="mb-6" v-for="(faq, index) in faqs" :key="index">
              <v-card-text class="pa-6">
                <div class="d-flex align-center mb-3">
                  <v-icon :icon="mdiHelpCircleOutline" color="primary" class="mr-2"></v-icon>
                  <h3 class="text-h6 font-weight-bold text-primary mb-0">{{ faq.question }}</h3>
                </div>
                <p class="text-body-2 mb-0">{{ faq.answer }}</p>
              </v-card-text>
              <v-divider v-if="index < faqs.length - 1"></v-divider>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-primary">
      <v-container class="text-center">
        <h2 class="text-h4 font-weight-bold text-white mb-4">No more searching endlessly on the Internet for your tech queries!</h2>
        <p class="text-body-1 text-white mb-8 mx-auto" style="max-width: 600px">
          Don’t let tech challenges hold your organization back. With <strong>myCTO</strong>, you get expert strategy and support tailored to your needs, all on a flexible subscription.
        </p>
        <v-btn
          color="white"
         
          class="text-primary"
          href="mailto:mycto@digisarathi.com"
          variant="flat"
        >
          Connect with myCTO
        </v-btn>
      </v-container>
    </section>

  </v-main>
</template>

<script setup>
import { ref } from 'vue';
import { 
  mdiChartTimelineVariant, 
  mdiRobot, 
  mdiCodeBraces, 
  mdiChartGantt,
  mdiAccountGroup,
  mdiShieldCheck,
  mdiEmailOutline,
  mdiCalendarCheck,
  mdiHeadset,
  mdiHelpCircleOutline,
  mdiCheckCircle,
  mdiAccountTie,
  mdiChevronRight,
  mdiAccount,
  mdiDomain,
  mdiOfficeBuilding
} from '@mdi/js';

const features = ref([
  {
    title: 'Expert Guidance',
    description: 'Strategic advice for CEOs to align tech with organizational goals.',
    icon: mdiRobot
  },
  {
    title: 'Technical Support',
    description: 'Clear, actionable answers for your team’s technical questions.',
    icon: mdiCodeBraces
  },
  {
    title: 'Flexible Access',
    description: 'Connect via email, Zoom/Google Meet, or phone – whatever works for you.',
    icon: mdiAccountGroup
  },
  {
    title: 'Cost-Effective',
    description: 'All the benefits of a CTO at a fraction of the cost of hiring one.',
    icon: mdiChartGantt
  },
  {
    title: 'Scalable Plans',
    description: 'Choose a subscription tier that matches your team’s size and query volume.',
    icon: mdiShieldCheck
  },
  {
    title: 'Robust Solutions',
    description: 'Our guidance is well thought-out and valid for the long run.',
    icon: mdiShieldCheck 
  }
]);

const steps = ref([
  {
    title: 'Choose Your Plan',
    description: 'Select a subscription tier that fits your team\'s size and query volume.'
  },
  {
    title: 'Submit Your Questions',
    description: 'CEOs ask strategic questions; teams ask technical ones via email, Zoom/Google Meet, or phone.'
  },
  {
    title: 'Get Expert Answers',
    description: 'Our experienced CTOs provide clear, actionable advice within 24-48 hours (or faster for urgent queries).'
  },
  {
    title: 'Grow with Confidence',
    description: 'Leverage expert insights to make informed decisions and drive success.'
  }
]);

// Common features for all plans
const commonFeatures = [
  'Email, Zoom/Google Meet, Phone support',
  'Basic tech strategy',
  'Monthly check-in call',
  'Access to resource library',
  'Team training (1 session/month)',
  'Vendor selection assistance'
];

const pricingPlans = ref([
  {
    name: 'Starter',
    price: 'INR 2,500',
    description: 'Perfect for small teams & startups (1 - 10 members).',
    popular: false,
    queryVolume: 'Up to 50 queries/month',
    features: [...commonFeatures]
  },
  {
    name: 'Growth',
    price: 'INR 10,000',
    description: 'Ideal for growing SMEs & NGOs (11 - 50 members).',
    popular: true,
    queryVolume: 'Up to 200 queries/month',
    features: [
      ...commonFeatures,
      'Priority support',
      'Monthly check-in calls'
    ]
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Tailored solutions for large organizations (50+ members).',
    popular: false,
    queryVolume: 'Unlimited queries',
    features: [
      ...commonFeatures,
      '24/7 priority support',
      'Weekly check-in calls',
      'Monthly team training',
      'Custom reporting',
    ]
  }
]);

// Testimonials data
const testimonials = ref([
  {
    quote: "myCTO helped us evaluate if our portal needed an upgrade or not. This strategic advice saved us lot of money & time!",
    name: "Sarah M.",
    role: "CEO",
    company: "Nonprofit association",
    rating: 5,
    icon: mdiOfficeBuilding
  },
  {
    quote: "myCTO showed us how our hosting bill was too high. We appreciate the annual savings!",
    name: "Raj K.",
    role: "Founder",
    company: "Agritech startup",
    rating: 5,
    icon: mdiDomain
  },
  {
    quote: "Having access to a CTO expert via email and calls feels like having an in-house expert. It's a game-changer for our small team.",
    name: "Gayatri",
    role: "Operations Lead",
    company: "NGO",
    rating: 5,
    icon: mdiAccountGroup
  }
]);

// Questions for 'What Can You Ask' section
const ceoQuestions = ref([
  'How do I align technology with my business goals?',
  'Should we invest in cloud solutions or custom software?',
  'What\'s the best tech stack for our next project?',
  'How can we improve cybersecurity on a budget?',
  'What emerging technologies should we consider?',
  'How can we measure the ROI of our tech investments?'
]);

const teamQuestions = ref([
  'How do we fix specific technical issues (e.g., website downtime, app bugs)?',
  'What tools should we use for project management or collaboration?',
  'How do we optimize our database performance?',
  'Can you review our code or architecture for best practices?',
  'How can we improve our development workflow?',
  'What are the best practices for API design and integration?'
]);

const faqs = ref([
  {
    question: 'What is myCTO?',
    answer: 'myCTO is a subscription-based service that connects your CEO and team to a dedicated tech expert via email, Zoom/Google Meet, or phone for strategic guidance and technical answers, tailored to your needs.'
  },
  {
    question: 'What types of organizations can benefit from myCTO?',
    answer: 'myCTO is ideal for organizations of all sizes, from SMEs, NGOs & startups to established enterprises especially those without a dedicated CTO or technical expertise.'
  },
  {
    question: 'What kind of questions can I ask myCTO?',
    answer: 'You can ask any technology-related questions, from strategic decisions and architecture to specific technical challenges. Our experts cover software development, infrastructure, security, and digital transformation.'
  },
  {
    question: 'How quickly can I expect a response?',
    answer: 'We typically respond within 24-48 hours for standard queries. For urgent matters, we offer expedited response times based on your subscription plan.'
  },
  {
    question: 'Is there a limit to how many questions I can ask?',
    answer: 'Your subscription tier determines the number of questions you can ask per month. We offer flexible plans to accommodate different needs, from growing startups to established enterprises.'
  },
  {
    question: 'Can I upgrade or downgrade my plan?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time to match your team’s needs.'
  },
  {
    question: 'What is the cost of myCTO?',
    answer: 'The cost of myCTO is based on the subscription tier you choose. We offer flexible plans to accommodate different team sizes.'
  },
  {
    question: 'Who are the experts behind myCTO?',
    answer: 'Our team consists of seasoned CTOs and technology leaders with extensive experience across various industries. Each expert is carefully vetted to address each specific type of organization (NGO, startup, SME, enterprise) appropriately.'
  },
  {
    question: 'Can I schedule a call with a CTO?',
    answer: 'Yes! In any of the subscription plans, you can schedule video or phone calls with our CTOs for more in-depth discussions and strategic planning sessions.'
  },
  {
    question: 'Is my data secure?',
    answer: 'Yes, we take data security seriously. We use industry-standard encryption and privacy protocols to protect your data.'
  }
]);
</script>

<style scoped>
.feature-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
}

.feature-card:hover, .step-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1) !important;
}

.step-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  height: 100%;
  border-radius: 12px;
  border-left: 4px solid #1976D2;
}

/* FAQ Styles */
#faq .v-card {
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.3s ease;
}

#faq .v-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

#faq .v-card-text {
  padding: 1.5rem;
}

#faq .v-divider {
  margin: 0 1.5rem;
  width: calc(100% - 3rem);
}

.rounded-lg {
  border-radius: 12px;
}

/* Pricing Section Styles */
.pricing-card {
  position: relative;
  border: 1px solid #e0e0e0;
  transition: all 0.3s ease;
  overflow: hidden;
}

.pricing-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1) !important;
}

.pricing-card.popular {
  border: 2px solid var(--v-primary-base);
  position: relative;
  z-index: 1;
}

.popular-badge {
  position: absolute;
  top: 0;
  right: 20px;
  background: var(--v-primary-base);
  color: white;
  padding: 4px 12px;
  font-size: 0.7rem;
  font-weight: 600;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.price {
  color: var(--v-primary-base);
  margin: 1.5rem 0;
}

.v-list-item {
  min-height: 36px;
}
</style>
