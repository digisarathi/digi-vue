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
                Our approach to website design emphasizes crafting intuitive, visually appealing, and high-performing
                digital experiences. We prioritize seamless navigation and responsive design, ensuring that your website
                not only looks great but also drives engagement and conversions.
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
            <v-col cols="12" md="6">
              <v-card height="100%" class="feature-card">
                <v-card-item class="pa-6">
                  <div class="d-flex flex-column align-center text-center">
                    <v-icon color="primary" size="x-large" class="mb-4">{{ mdiLightbulb }}</v-icon>
                    <v-card-title class="text-primary font-weight-bold mb-3 text-wrap"
                      >Strategic Discovery & Blueprinting</v-card-title
                    >
                    <v-card-text class="text-body-1">
                      We immerse ourselves in your vision, analyzing business objectives, user personas, and market
                      dynamics to craft a tailored digital strategy. Through collaborative workshops and data-driven
                      insights, we architect a comprehensive roadmap that ensures your website delivers measurable
                      impact and aligns seamlessly with your brand’s ethos.
                    </v-card-text>
                  </div>
                </v-card-item>
              </v-card>
            </v-col>
            <v-col cols="12" md="6">
              <v-card height="100%" class="feature-card">
                <v-card-item class="pa-6">
                  <div class="d-flex flex-column align-center text-center">
                    <v-icon color="primary" size="x-large" class="mb-4">{{ mdiPencilRuler }}</v-icon>
                    <v-card-title class="text-primary font-weight-bold mb-3 text-wrap"
                      >Innovative Design & Prototyping</v-card-title
                    >
                    <v-card-text class="text-body-1">
                      Our design phase transforms concepts into intuitive, visually compelling experiences. Leveraging
                      iterative wireframes, high-fidelity prototypes, and user-centric design principles, we create
                      interfaces that balance aesthetic sophistication with functional clarity, rigorously tested to
                      resonate with your audience and elevate your brand identity.
                    </v-card-text>
                  </div>
                </v-card-item>
              </v-card>
            </v-col>
            <v-col cols="12" md="6">
              <v-card height="100%" class="feature-card">
                <v-card-item class="pa-6">
                  <div class="d-flex flex-column align-center text-center">
                    <v-icon color="primary" size="x-large" class="mb-4">{{ mdiCodeBraces }}</v-icon>
                    <v-card-title class="text-primary font-weight-bold mb-3 text-wrap"
                      >Precision Development & Optimization</v-card-title
                    >
                    <v-card-text class="text-body-1">
                      Using cutting-edge frameworks, modular architectures, and performance-first coding practices, we
                      build robust, scalable websites. From TypeScript-driven frontends to API-first backends, our
                      development process integrates accessibility (WCAG 2.1), SEO optimization, and progressive web
                      capabilities to ensure a future-proof digital presence.
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
                    <v-card-title class="text-primary font-weight-bold mb-3 text-wrap"
                      >Seamless Launch & Proactive Support</v-card-title
                    >
                    <v-card-text class="text-body-1">
                      We orchestrate a flawless deployment with automated testing, CI/CD pipelines, and cloud-based
                      hosting for maximum uptime. Post-launch, our dedicated support includes performance monitoring,
                      iterative updates, and strategic enhancements to keep your website secure, relevant, and aligned
                      with evolving business goals.
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
            <v-col cols="12" md="6">
              <v-card height="100%" class="feature-card">
                <v-card-item class="pa-6">
                  <div class="d-flex flex-column align-center text-center">
                    <v-icon color="primary" size="x-large" class="mb-4">{{ mdiSpeedometer }}</v-icon>
                    <v-card-title class="text-primary font-weight-bold mb-3 text-wrap"
                      >Precision-Engineered Performance</v-card-title
                    >
                    <v-card-text class="text-body-1">
                      We architect websites with optimized codebases and cutting-edge frameworks, ensuring sub-second
                      load times and seamless user experiences. By leveraging server-side rendering, lazy loading, and
                      CDN integration, we deliver blazing-fast performance without sacrificing functionality or
                      scalability.
                    </v-card-text>
                  </div>
                </v-card-item>
              </v-card>
            </v-col>
            <v-col cols="12" md="6">
              <v-card height="100%" class="feature-card">
                <v-card-item class="pa-6">
                  <div class="d-flex flex-column align-center text-center">
                    <v-icon color="primary" size="x-large" class="mb-4">{{ mdiResponsive }}</v-icon>
                    <v-card-title class="text-primary font-weight-bold mb-3 text-wrap"
                      >Adaptive, Future-Proof Design</v-card-title
                    >
                    <v-card-text class="text-body-1">
                      Our designs transcend traditional responsive layouts, employing fluid grids, dynamic typography,
                      and progressive enhancement to create visually stunning interfaces that adapt effortlessly to any
                      device or viewport. Built with accessibility (WCAG 2.1) and SEO best practices at the core, your
                      site will engage diverse audiences and rank competitively.
                    </v-card-text>
                  </div>
                </v-card-item>
              </v-card>
            </v-col>
            <v-col cols="12" md="6">
              <v-card height="100%" class="feature-card">
                <v-card-item class="pa-6">
                  <div class="d-flex flex-column align-center text-center">
                    <v-icon color="primary" size="x-large" class="mb-4">{{ mdiShieldCheck }}</v-icon>
                    <v-card-title class="text-primary font-weight-bold mb-3 text-wrap"
                      >Fortified Security & Reliability</v-card-title
                    >
                    <v-card-text class="text-body-1">
                      Security is woven into every layer of our development process. From secure APIs and
                      OWASP-compliant coding to automated vulnerability scanning and robust CI/CD pipelines, we ensure
                      your website is resilient against threats. Regular updates and performance monitoring keep your
                      digital presence dependable and trustworthy.
                    </v-card-text>
                  </div>
                </v-card-item>
              </v-card>
            </v-col>
            <v-col cols="12" md="6">
              <v-card height="100%" class="feature-card">
                <v-card-item class="pa-6">
                  <div class="d-flex flex-column align-center text-center">
                    <v-icon color="primary" size="x-large" class="mb-4">{{ mdiShieldCheck }}</v-icon>
                    <v-card-title class="text-primary font-weight-bold mb-3 text-wrap"
                      >Tailored Innovation & Strategy</v-card-title
                    >
                    <v-card-text class="text-body-1">
                      We craft bespoke solutions that align with your brand’s unique vision and goals. By integrating
                      data-driven insights, A/B testing, and emerging technologies like WebAssembly or AI-powered
                      personalization, we create websites that not only captivate but also drive measurable business
                      outcomes, setting you apart in a crowded digital landscape.
                    </v-card-text>
                  </div>
                </v-card-item>
              </v-card>
            </v-col></v-row
          >
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
              <v-card
                elevation="6"
                :href="testimonial.website"
                target="_blank"
                rel="noopener noreferrer"
                style="cursor: pointer"
                @click.stop
              >
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
            <v-col v-for="(project, i) in portfolioProjects" :key="i" cols="12" sm="6" md="6" lg="6">
              <v-card
                class="h-100 d-flex flex-column"
                elevation="2"
                :to="project.website"
                target="_blank"
                rel="noopener noreferrer"
                style="cursor: pointer"
                @click.stop
              >
                <v-img :src="project.image" :alt="project.title" height="200" cover>
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
                    <v-chip
                      v-for="(tech, index) in project.technologies.slice(0, 3)"
                      :key="index"
                      size="small"
                      class="mr-1 mb-1"
                      color="primary"
                      variant="outlined"
                    >
                      {{ tech }}
                    </v-chip>
                    <v-chip
                      v-if="project.technologies.length > 3"
                      size="small"
                      class="mb-1"
                      color="grey"
                      variant="outlined"
                    >
                      +{{ project.technologies.length - 3 }} more
                    </v-chip>
                  </div>
                </v-card-text>
                <v-card-actions class="px-4 pb-4">
                  <v-spacer></v-spacer>
                  <!-- <v-btn
                    color="primary"
                    variant="text"
                    size="small"
                    :append-icon="mdiArrowRight"
                  >
                    
                  </v-btn> -->
                </v-card-actions>
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
              <h3 class="text-h5 text-primary font-weight-bold mb-3">Transform Your Online Presence!</h3>
              <p class="text-body-1 mb-6">
                Let's discuss how we can help you create/redesign your website that drives results for your business.
              </p>
              <v-btn color="primary" size="large" href="mailto:hello@digisarathi.com"> Drop an Email </v-btn>
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
  import { ref } from 'vue';
  import {
    mdiLightbulb,
    mdiPencilRuler,
    mdiCodeBraces,
    mdiRocketLaunch,
    mdiSpeedometer,
    mdiResponsive,
    mdiShieldCheck,
    mdiArrowRight,
  } from '@mdi/js';

  const testimonials = ref([
    {
      name: 'Dr. Dwivedi',
      company: 'Secretary, SEEDS',
      text: 'We are happy to state that Digisarathi has designed the SEEDS website in 2022. The team led by Mr Prashant Pandit did a wonderful job - just the way one had visualized. Digisarathi is organization-friendly and we appreciate their sensitivities at all levels. On top of it the charges are reasonable and affordable for grass root NGOs.',
      avatar: 'shubhra.png',
      website: 'http://www.seedsjsr.org/',
    },
    {
      name: 'Adv. Jyoti',
      company: 'Founder, DISHA',
      text: 'We deeply appreciate the invaluable contributions digiSarathi has made to DISHA. Your dedication and hard work have significantly impacted our organization.',
      avatar: 'jyoti.jpg',
      website: 'https://dishaforvictim.org/',
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
  ]);

  const portfolioProjects = ref([
    {
      title: 'CSA & POCSO',
      description: "India's first comprehensive portal on Child Sexual Abuse & Prevention of Child Sexual Offences",
      image: '/portfolio/aarambh.png',
      technologies: ['WordPress', 'Google Analytics'],
      website: 'https://www.aarambhindia.org/',
    },
    {
      title: 'SEEDS',
      description:
        'A professional website for nonprofit working with marginalized communities to create sustainable change.',
      image: '/portfolio/seeds.png',
      technologies: ['WordPress', 'Google Analytics'],
      website: 'http://www.seedsjsr.org/',
    },
    {
      title: 'Solar Manufacturer',
      description: 'A professional corporate website with dynamic content management and product catalog.',
      image: '/portfolio/renewsys.png',
      technologies: ['Wix', 'Google Analytics', 'Google Ads'],
      website: 'https://renewsysworld.com/',
    },
    {
      title: 'Crowdsourcing for Women Safety',
      description: 'Open source platform for data gathering from citizens to enhance women safety',
      image: '/portfolio/harassmap.png',
      technologies: ['Ushahidi', 'Google Maps'],
    },
    {
      title: 'Rural women empowerment & livelihood',
      description:
        'A professional website for nonprofit in Amravati, Maharashtra working for rural women empowerment & livelihood',
      image: '/portfolio/apeksha.png',
      technologies: ['WordPress', 'Google Analytics'],
      website: 'https://apekshasociety.org/',
    },
    {
      title: 'Laadli Alumni',
      description: 'A community platform for Laadli alumni by Population First',
      image: '/portfolio/laadli.png',
      technologies: ['WordPress', 'Google Analytics'],
    },
    {
      title: 'Minority women rehabilitation',
      description: 'A nonprofit website for minority women rehabilitation for Awaaz-e-Niswaan',
      image: '/portfolio/niswaan.jpg',
      technologies: ['WordPress', 'Google Analytics'],
      website: 'https://www.niswaan.org/',
    },
    {
      title: 'Women Helpline',
      description: 'A India-wide multilingual helpline information website for women safety',
      image: '/portfolio/standup.png',
      technologies: ['WordPress', 'Google Analytics'],
      website: 'https://standupagainstviolence.org/',
    },
    {
      title: 'Entrepreneurship Mentorship',
      description: 'A startup incubator website for startups in Amravati, Maharashtra',
      image: '/portfolio/varuntalwar.png',
      technologies: ['WordPress', 'Google Analytics'],
    },
    {
      title: 'Water conservation',
      description: 'A modern website for WaterAid India',
      image: '/portfolio/wateraid.jpg',
      technologies: ['WordPress', 'Google Analytics'],
      website: 'https://wateraidindia.org/',
    },
    {
      title: 'Legal Education',
      description: 'A nonprofit website for Legal Education provided by IDIA',
      image: '/portfolio/idia.png',
      technologies: ['PHP', 'Google Analytics'],
      website: 'https://www.idialaw.org/',
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
