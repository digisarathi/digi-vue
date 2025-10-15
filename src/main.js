import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import App from './App.vue'
import { router } from './router'
import vuetify from './plugins/vuetify'

const app = createApp(App)
const head = createHead()

app.use(router)
app.use(vuetify)
app.use(head)

app.mount('#app')
// Set initial canonical URL
router.afterEach((to) => {
  const canonicalLink = document.querySelector("link[rel='canonical']")
  if (canonicalLink) {
    canonicalLink.setAttribute('href', `https://digisarathi.com${to.path}`)
  } else {
    const link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    link.setAttribute('href', `https://digisarathi.com${to.path}`)
    document.head.appendChild(link)
  }
})
