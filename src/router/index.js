import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Website from '../views/Website.vue'
import Training from '../views/Training.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import BlogView from '../views/BlogView.vue'
import Post from '../views/Post.vue'
import AarambhIndia from '@/components/posts/AarambhIndia.vue'
import GuideStarIndia from '@/components/posts/GuideStarIndia.vue'
import NotFound from '../views/NotFound.vue'

// Function to track page views
const trackPageView = (to) => {
  // Ensure window.gtag is defined
  if (typeof window.gtag === 'function') {
    window.gtag('config', 'G-YNQCG8V7LP', {
      page_path: to.fullPath,
      page_title: to.name || 'digiSarathi - ' + (to.meta.title || to.name || 'Page'),
    })
  }
}

const scrollBehavior = (to, from, savedPosition) => {
  if (to.hash) {
    return {
      el: to.hash,
      behavior: 'smooth',
      top: 100, // Adjust this value to account for any fixed headers
    }
  } else if (savedPosition) {
    return savedPosition
  } else {
    return { top: 0 }
  }
}

const router = createRouter({
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
    // Static route for the Aarambh India post
    // This is a temporary solution until we set up dynamic route generation with vite-ssg
    {
      path: '/blog/aarambh-india',
      name: 'aarambh-india',
      component: AarambhIndia,
      meta: {
        title: 'Aarambh India - digiSarathi',
        description: 'Aarambh India - A digital initiative for child safety and awareness',
      },
    },
    {
      path: '/blog/guidestar-india',
      name: 'guidestar-india',
      component: GuideStarIndia,
      meta: {
        title: 'GuideStar India - digiSarathi',
        description: 'GuideStar India - Fostering a culture of giving and corporate social responsibility',
      },
    },
    {
      path: '/workshop-ai-for-ngos/',
      redirect: '/ai-workshops',
    },
    {
      path: '/about-us',
      redirect: '/about',
    },
    {
      path: '/rapid-prototyping-vs-waterfall-model',
      redirect: '/blog/Rapid%20Prototyping%20vs%20Waterfall',
    },
    {
      path: '/ai-workshops',
      name: 'ai-workshops',
      component: () => import('../views/AiWorkshopsView.vue'),
    },
    {
      path: '/project-management',
      name: 'project-management',
      component: () => import('../views/ProjectManagementView.vue'),
    },
    {
      path: '/mycto',
      name: 'mycto',
      component: () => import('../views/myCTO.vue'),
    },
    {
      path: '/social-media-marketing',
      name: 'social-media-marketing',
      component: () => import('../views/SocialMediaMarketingView.vue'),
    },
    {
      path: '/website-audit',
      name: 'website-audit',
      component: () => import('../views/WebsiteAudit.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound,
    },
  ],
})

// Track page views after navigation
router.afterEach((to) => {
  trackPageView(to)
})

export { router }
