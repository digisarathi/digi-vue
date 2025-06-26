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
import BlogView from '../views/BlogView.vue'
import Post from '../views/Post.vue'
import AiWorkshopsView from '@/views/AiWorkshopsView.vue'
import ProjectManagementView from '@/views/ProjectManagementView.vue'
import myCTOView from '@/views/myCTO.vue'
import NotFound from '../views/NotFound.vue'

const scrollBehavior = (to, from, savedPosition) => {
  if (to.hash) {
    return {
      el: to.hash,
      behavior: 'smooth',
      top: 100 // Adjust this value to account for any fixed headers
    }
  } else if (savedPosition) {
    return savedPosition
  } else {
    return { top: 0 }
  }
}

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior,
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
    {
      path: '/blog',
      name: 'blog',
      component: BlogView,
    },
    {
      path: '/blog/:slug',
      name: 'post',
      component: Post,
    },
    {
      path: '/workshop-ai-for-ngos/',
      redirect:'/ai-workshops',
    },
    {
      path: '/ai-workshops',
      name: 'ai-workshops',
      component: AiWorkshopsView,
    },
    {
      path: '/project-management',
      name: 'project-management',
      component: ProjectManagementView,
    },
    {
      path: '/mycto',
      name: 'mycto',
      component: myCTOView,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound,
    },
  ],
})
