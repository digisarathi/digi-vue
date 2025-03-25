import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Website from '../views/Website.vue'
import AppsSoftware from '../views/AppsSoftware.vue'
import Digital from '../views/Digital.vue'
import Training from '../views/Training.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'
import TermsOfService from '../views/TermsOfService.vue'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/website-design',
      name: 'website-design',
      component: Website,
    },
    {
      path: '/apps-software-development',
      name: 'apps-software-development',
      component: AppsSoftware,
    },
    {
      path: '/digital-marketing',
      name: 'digital-marketing',
      component: Digital,
    },
    {
      path: '/training-workshops',
      name: 'training-workshops',
      component: Training,
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: PrivacyPolicy,
    },
    {
      path: '/terms-of-service',
      name: 'terms-of-service',
      component: TermsOfService,
    },
  ],
})
