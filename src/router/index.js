import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Website from '../views/Website.vue'
import AppsSoftware from '../views/AppsSoftware.vue'
import Digital from '../views/Digital.vue'
import Training from '../views/Training.vue'
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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
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
      component: () => import('../views/PrivacyPolicy.vue'),
    },
    {
      path: '/terms-of-service',
      name: 'terms-of-service',
      component: () => import('../views/TermsOfService.vue'),
    },
  ],
})
