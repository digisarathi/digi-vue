import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
      component: () => import('../views/Website.vue'),
    },
    {
      path: '/apps-software-development',
      name: 'apps-software-development',
      component: () => import('../views/AppsSoftware.vue'),
    },
    {
      path: '/digital-marketing',
      name: 'digital-marketing',
      component: () => import('../views/Digital.vue'),
    },
    {
      path: '/training-workshops',
      name: 'training-workshops',
      component: () => import('../views/Training.vue'),
    },
  ],
})

