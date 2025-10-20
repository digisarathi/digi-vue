import { createRouter as createVueRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import Website from '../views/Website.vue'
import Training from '../views/Training.vue'
import BlogView from '../views/BlogView.vue'
import NotFound from '../views/NotFound.vue'

// Dynamically import all blog posts from the posts directory
const blogPostModules = import.meta.glob('../posts/*.vue', { eager: true })

// Create routes for blog posts and sort by date (newest first)
const blogPostRoutes = Object.entries(blogPostModules)
  .map(([path, module]) => {
    const name = path.split('/').pop().replace(/\.vue$/, '')
    return {
      path: `/blog/${name}`,
      name: `blog-${name}`,
      component: () => Promise.resolve(module),
      meta: {
        isBlogPost: true,
        slug: name,
        date: module.post?.date || null
      }
    }
  })
  .sort((a, b) => {
    // Sort by date, newest first
    if (!a.meta.date || !b.meta.date) return 0
    return new Date(b.meta.date) - new Date(a.meta.date)
  })

// Second pass: add next/previous post info to each route
blogPostRoutes.forEach((route, index) => {
  route.meta.nextPost = index > 0 ? {
    path: blogPostRoutes[index - 1].path,
    meta: blogPostRoutes[index - 1].meta
  } : null
  
  route.meta.previousPost = index < blogPostRoutes.length - 1 ? {
    path: blogPostRoutes[index + 1].path,
    meta: blogPostRoutes[index + 1].meta
  } : null
})

// Function to track page views
const trackPageView = (to) => {
  if (typeof window.gtag === 'function') {
    window.gtag('config', 'G-YNQCG8V7LP', {
      page_path: to.fullPath,
      page_title: to.name || 'digiSarathi - ' + (to.meta?.title || to.name || 'Page'),
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

// Export factory function for SSG compatibility
export function createRouter() {
  const router = createVueRouter({
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
  // Blog route (handled by file-based routing)
  {
    path: '/blog',
    name: 'blog',
    component: BlogView,
  },
  // Redirects
  {
    path: '/workshop-ai-for-ngos',
    redirect: '/ai-workshops',
  },
  {
    path: '/about-us',
    redirect: '/about',
  },
  {
    path: '/rapid-prototyping-vs-waterfall-model',
    redirect: '/blog/rapid-prototyping-vs-waterfall',
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
  // Add blog post routes
  ...blogPostRoutes,
  
  // 404 catch-all (must be the last route)
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

  return router
}

// Export router instance for non-SSG usage
export const router = createRouter()
