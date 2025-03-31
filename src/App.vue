<template>
  <v-app>
    <v-main>
      <v-container>
        <header>
          <v-toolbar class="bg-white">
            <v-toolbar-title>
              <RouterLink to="/" class="text-decoration-none">
                <div class="text-h4 d-none d-sm-inline">
                  <strong><span class="text-accent">digi</span>
                    <span class="text-primary">Sarathi</span></strong>
                </div>
                <div class="text-h6 d-sm-none">
                  <strong><span class="text-accent">digi</span>
                    <span class="text-primary">Sarathi</span></strong>
                </div>
              </RouterLink>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn variant="plain" size="small" class="hidden-sm-and-down text-overline" text
              v-for="(item, index) in navItems" :key="index" :to="item.route">
              {{ item.title }}
            </v-btn>
            <v-btn icon class="hidden-md-and-up" color="accent" @click="drawer = true">
              <v-icon>{{ drawer ? mdiClose : mdiMenu }}</v-icon>
            </v-btn>
          </v-toolbar>
        </header>

        <v-navigation-drawer v-model="drawer" position="end" temporary app>
          <v-list>
            <v-list-item v-for="(item, index) in navItems" :key="index" :to="item.route">
              {{ item.title }}</v-list-item>
          </v-list>
        </v-navigation-drawer>

        <router-view :isMobile="isMobile"></router-view>
        <v-footer absolute app class="bg-primary text-white">
          <v-container>

            <v-row>
              <v-col cols="12" md="4" class="mb-6 mb-md-0">
                <h3 class="text-h6 font-weight-bold mb-4">digiSarathi</h3>
                <p class="text-body-2">
                  Tech4Growth, Tech4Good!
                </p>
              </v-col>
              <v-col cols="6" md="2" class="mb-6 mb-md-0">
                <h4 class="text-subtitle-1 font-weight-bold mb-4">Quick Links</h4>
                <div class="d-flex flex-column">
                  <a href="#" class="text-white text-decoration-none mb-2">Home</a>
                  <a href="#courses" class="text-white text-decoration-none mb-2">Courses</a>
                  <a href="/about" class="text-white text-decoration-none mb-2">About Us</a>
                </div>
              </v-col>
              <v-col cols="6" md="2" class="mb-6 mb-md-0">
                <h4 class="text-subtitle-1 font-weight-bold mb-4">Courses</h4>
                <div class="d-flex flex-column">
                  <a href="#" class="text-white text-decoration-none mb-2">AI Workshops</a>
                  <a href="#" class="text-white text-decoration-none mb-2">WordPress</a>
                  <a href="#" class="text-white text-decoration-none mb-2">Web Development</a>
                  <a href="#" class="text-white text-decoration-none mb-2">All Courses</a>
                </div>
              </v-col>
              <v-col cols="12" md="4">
                <h4 class="text-subtitle-1 font-weight-bold mb-4">Contact</h4>
                <div class="d-flex align-center mb-2">
                  <v-icon size="small" class="mr-2">{{ mdiMapMarker }}</v-icon>
                  <span class="text-body-2">Pune, Maharashtra, India</span>
                </div>
                <div class="d-flex align-center mb-2">
                  <v-icon size="small" class="mr-2">{{ mdiEmail }}</v-icon>
                  <span class="text-body-2">hello@digisarathi.com</span>
                </div>
                <div class="d-flex align-center mb-4">
                  <v-icon size="small" class="mr-2">{{ mdiPhone }}</v-icon>
                  <span class="text-body-2">+91 9022465676</span>
                </div>
                <div class="d-flex">
                  <a href="https://twitter.com/digisarathi" target="_blank" rel="noopener noreferrer">
                    <v-btn icon variant="text" color="white" class="mr-2">
                      <v-icon>{{ mdiTwitter }}</v-icon>
                    </v-btn>
                  </a>
                  <a href="https://www.linkedin.com/company/digisarathi-it-solutions-pvt-ltd/" target="_blank"
                    rel="noopener noreferrer">
                    <v-btn icon variant="text" color="white" class="mr-2">
                      <v-icon>{{ mdiLinkedin }}</v-icon>
                    </v-btn>
                  </a>
                  <a href="https://www.instagram.com/digi.sarathi/" target="_blank" rel="noopener noreferrer">
                    <v-btn icon variant="text" color="white">
                      <v-icon>{{ mdiInstagram }}</v-icon>
                    </v-btn></a>
                </div>
              </v-col>
            </v-row>


            <v-divider class="my-4 bg-white"></v-divider>
            <div class="text-center  text-caption footer">
              <a href="/privacy-policy">Privacy Policy</a> |
              <a href="/terms-of-service">Terms of Service</a> |
              &copy;
              {{ new Date().getFullYear() }} <a href="/">digiSarathi</a>
            </div>
          </v-container>
        </v-footer>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import { mdiMenu, mdiClose, mdiMapMarker, mdiEmail, mdiPhone, mdiLinkedin, mdiInstagram, mdiTwitter } from '@mdi/js' // Example of importing an icon

const drawer = ref(false)
const navItems = ref([
  { title: 'Home', route: '/' },
  { title: 'About', route: '/about' },
  { title: 'Contact', route: '/contact' },
  { title: 'Blog', route: '/blog' },
])

const isMobile = ref(window.innerWidth < 960);

window.addEventListener('resize', () => {
  isMobile.value = window.innerWidth < 960;
});

</script>
<style>
.footer a {
  text-decoration: none;
  color: inherit;
}
</style>
