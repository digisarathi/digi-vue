

<template>
  <v-main>
    <!-- Hero Section -->
    <section id="hero" class="py-16">
      <v-container>
        <v-row align="center">
          <v-col cols="12" md="7" order="2" order-md="1">
            <h1 class="text-h2 text-primary font-weight-bold mb-4">
              Project Management for Career Growth
            </h1>
            <p class="text-body-1 mb-6">
              Designed for fresh graduates and professionals stepping into leadership roles. Master essential project
              management skills to excel in your career and deliver successful projects.
            </p>
            <v-btn color="primary" size="large" class="mr-4 mb-4" href="https://forms.gle/fYyPsMivM4U5v4Gi6"
              target="_blank" rel="noopener noreferrer">Register Now</v-btn>
          </v-col>
          <v-col cols="12" md="5" order="1" order-md="2" class="text-center">
            <v-img src="/project-management-hero.svg" max-width="450" contain alt="Project Management"></v-img>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Workshop Modules Section -->
    <section id="workshop-modules" class="py-12">
      <v-container>
        <v-row class="text-center mb-8">
          <v-col>
            <h2 class="text-h4 text-primary font-weight-bold">Workshop Modules</h2>
            <p class="text-body-1 mt-2">
              Comprehensive training covering all aspects of modern project management
            </p>
          </v-col>
        </v-row>

        <template v-for="(module, index) in modules" :key="index">
          <v-row class="mb-12" :class="{ 'flex-row-reverse': index % 2 !== 0 }">
            <!-- Image Column -->
            <v-col cols="12" md="5" class="d-flex align-center">
              <v-img :src="module.image" height="300" contain class="mx-auto"></v-img>
            </v-col>

            <!-- Content Column -->
            <v-col cols="12" md="7" class="d-flex align-center">
              <div>
                <h3 class="text-h4 text-primary font-weight-bold mb-2">{{ index + 1 }}. {{ module.title }}</h3>
                <p class="text-h6 text-secondary mb-4">{{ module.subtitle }}</p>
                <p class="text-body-1 mb-4">{{ module.description }}</p>
                <v-list density="comfortable" class="text-left">
                  <v-list-item v-for="(item, i) in module.items" :key="i" class="px-0">
                    <template v-slot:prepend>
                      <v-icon :icon="mdiCheck" color="success" class="me-2"></v-icon>
                    </template>
                    <v-list-item-title class="text-body-1">{{ item }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </div>
            </v-col>
          </v-row>

          <!-- Add divider between modules except after last one -->
          <v-divider v-if="index < modules.length - 1" class="my-8"></v-divider>
        </template>
      </v-container>
    </section>

    <!-- Stats Counter -->
    <section class="py-12 bg-primary text-white">
      <v-container>
        <v-row class="text-center">
          <v-col cols="6" md="3" v-for="(stat, index) in stats" :key="index">
            <div class="text-h2 font-weight-bold mb-2">{{ stat.value }}</div>
            <div class="text-subtitle-1">{{ stat.label }}</div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Enrollment CTA Section -->
    <section class="py-12">
      <v-container>
        <v-card class="py-8 px-4 text-center" color="primary">
          <v-card-title class="text-h4 font-weight-bold mb-4 text-white">Ready to Boost Your Career?</v-card-title>
          <v-card-text class="text-h6 mb-6 text-white">
            Whether you're a fresh graduate or looking to step up in your career, our Project Management Workshop will
            give
            you the skills and confidence to succeed.
          </v-card-text>
          <v-btn color="white" size="x-large" class="text-primary mb-2" href="https://forms.gle/fYyPsMivM4U5v4Gi6"
            target="_blank" rel="noopener noreferrer">Enroll Now</v-btn>
          <div class="text-caption mt-2 text-white">
            Next batch starting soon | Limited seats available
          </div>
        </v-card>
      </v-container>
    </section>
  </v-main>
</template>

<script setup>
import { ref } from 'vue';
import { mdiChartTimelineVariant, mdiChartGantt, mdiAccountGroup, mdiCheck } from '@mdi/js';
import { onMounted } from 'vue';
import { useMetaTags } from '@/composables/useMetaTags';
// Set meta tags for the page
const { updateMetaTags } = useMetaTags();
onMounted(() => {
  updateMetaTags(
    'Project Management Workshop for Career Growth | digiSarathi',
    'Master essential project management skills with our comprehensive workshop. Designed for fresh graduates and professionals stepping into leadership roles.',
    '/project-management-og-image.jpg'
  );
});
const stats = ref([
  { value: '100+', label: 'Participants Trained' },
  { value: '15+', label: 'Workshops Conducted' },
  { value: '95%', label: 'Satisfaction Rate' },
  { value: '30+', label: 'Organizations Served' },
]);

const modules = ref([
  {
    title: 'Project Planning Fundamentals',
    subtitle: 'Master the basics of project planning',
    description: 'Learn how to define project scope, set SMART goals, and create effective project plans that set you up for success.',
    image: '/project-planning.svg',
    items: [
      'Defining project scope and objectives',
      'Creating work breakdown structures',
      'Developing realistic timelines',
      'Identifying and managing risks'
    ]
  },
  {
    title: 'Effective Project Execution',
    subtitle: 'Lead projects to successful completion',
    description: 'Develop the skills to lead teams, track progress, and ensure quality in your project delivery.',
    image: '/project-execution.svg',
    items: [
      'Leading and motivating project teams',
      'Tracking progress and performance metrics',
      'Ensuring quality deliverables',
      'Effective stakeholder communication'
    ]
  },
  {
    title: 'Monitoring & Control',
    subtitle: 'Keep projects on track',
    description: 'Learn to monitor project health, manage changes, and implement corrective actions when needed.',
    image: '/project-monitoring.svg',
    items: [
      'Key performance indicators (KPIs)',
      'Budget and schedule control',
      'Change management processes',
      'Generating effective progress reports'
    ]
  }
]);
</script>

<style scoped>
.feature-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1) !important;
}

.v-card {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.v-card-title {
  word-break: break-word;
}
</style>
