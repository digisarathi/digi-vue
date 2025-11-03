import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import vuetify from './plugins/vuetify'

// Import router - no need to import createRouter/createWebHistory here
import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import ContactView from './views/ContactView.vue'
import Website from './views/Website.vue'
import Training from './views/Training.vue'
import BlogView from './views/BlogView.vue'
import NotFound from './views/NotFound.vue'
import UXUI from './views/UX-UIServices.vue'
import Nonprofits from './views/Nonprofits.vue'

// Dynamically import all blog posts
const blogPostModules = import.meta.glob('./posts/*.vue', { eager: true })

// Create routes for blog posts and sort by date
const blogPostRoutes = Object.entries(blogPostModules)
  .map(([path, module]) => {
    const name = path.split('/').pop().replace(/\.vue$/, '')
    const post = module.post || {}
    
    return {
      path: `/blog/${name}`,
      name: `blog-${name}`,
      component: () => Promise.resolve(module),
      meta: {
        isBlogPost: true,
        slug: name,
        date: post.date || null,
        // Add meta for SSG
        title: post.title,
        description: post.description || post.excerpt,
        tags: post.tags || [],
        ogImage: post.ogImage || 'https://digisarathi.com/og-image.png'
      }
    }
  })
  .sort((a, b) => {
    if (!a.meta.date || !b.meta.date) return 0
    return new Date(b.meta.date) - new Date(a.meta.date)
  })

// Add next/previous post info
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

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/about', name: 'about', component: AboutView },
  { path: '/contact', name: 'contact', component: ContactView },
  { path: '/website-design', name: 'website-design', component: Website },
  { path: '/apps-software-development', name: 'apps-software-development', component: () => import('./views/AppsSoftware.vue') },
  { path: '/digital-marketing', name: 'digital-marketing', component: () => import('./views/Digital.vue') },
  { path: '/training-workshops', name: 'training-workshops', component: Training },
  { path: '/privacy-policy', name: 'privacy-policy', component: () => import('./views/PrivacyPolicy.vue') },
  { path: '/terms-of-service', name: 'terms-of-service', component: () => import('./views/TermsOfService.vue') },
  { path: '/blog', name: 'blog', component: BlogView },
  { path: '/workshop-ai-for-ngos', redirect: '/ai-workshops' },
  { path: '/about-us', redirect: '/about' },
  { path: '/rapid-prototyping-vs-waterfall-model', redirect: '/blog/rapid-prototyping-vs-waterfall' },
  { path: '/ai-workshops', name: 'ai-workshops', component: () => import('./views/AiWorkshopsView.vue') },
  { path: '/project-management', name: 'project-management', component: () => import('./views/ProjectManagementView.vue') },
  { path: '/ux-ui-services', name: 'ux-ui-services', component: UXUI },
  { path: '/mycto', name: 'mycto', component: () => import('./views/myCTO.vue') },
  { path: '/social-media-marketing', name: 'social-media-marketing', component: () => import('./views/SocialMediaMarketingView.vue') },
  { path: '/website-audit', name: 'website-audit', component: () => import('./views/WebsiteAudit.vue') },
  { path: '/ngos', name: 'nonprofits', component: Nonprofits },
  ...blogPostRoutes,
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound },
]

const scrollBehavior = (to, from, savedPosition) => {
  if (to.hash) {
    return {
      el: to.hash,
      behavior: 'smooth',
      top: 100,
    }
  } else if (savedPosition) {
    return savedPosition
  } else {
    return { top: 0 }
  }
}

// SSG entry point
export const createApp = ViteSSG(
  App,
  { 
    routes,
    scrollBehavior
  },
  ({ app, router, routes, isClient, initialState, head }) => {
    // Install plugins
    app.use(vuetify)
    
    // Client-side only code
    if (isClient) {
      // Google Analytics tracking
      router.afterEach((to) => {
        if (typeof window.gtag === 'function') {
          window.gtag('config', 'G-YNQCG8V7LP', {
            page_path: to.fullPath,
            page_title: to.name || 'digiSarathi - ' + (to.meta?.title || to.name || 'Page'),
          })
        }
      })
    }
    
    // Set up head management for SSG
    router.beforeEach((to, from, next) => {
      if (to.meta.title) {
        const fullTitle = `${to.meta.title} - digiSarathi`
        const fullUrl = `https://digisarathi.com${to.path}`
        const description = to.meta.description || 'digiSarathi is technology company providing cost-effective IT solutions and trainings to empower organizations and individuals.'
        const image = to.meta.ogImage || 'https://digisarathi.com/og-image.png'
        
        if (head) {
          head.push({
            title: fullTitle,
            meta: [
              { name: 'description', content: description },
              { property: 'og:title', content: fullTitle },
              { property: 'og:description', content: description },
              { property: 'og:image', content: image },
              { property: 'og:url', content: fullUrl },
              { property: 'og:type', content: to.meta.isBlogPost ? 'article' : 'website' },
              { property: 'og:site_name', content: 'digiSarathi' },
              ...(to.meta.isBlogPost && to.meta.date ? [
                { property: 'article:published_time', content: to.meta.date },
                { property: 'article:author', content: 'digiSarathi' },
              ] : []),
              { name: 'twitter:card', content: 'summary_large_image' },
              { name: 'twitter:title', content: fullTitle },
              { name: 'twitter:description', content: description },
              { name: 'twitter:image', content: image },
            ],
            link: [
              { rel: 'canonical', href: fullUrl }
            ]
          })
        }
      }
      next()
    })
  }
)
