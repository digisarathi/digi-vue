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
        <footer>
          <v-footer absolute app>
            <v-col class="text-center text-secondary text-caption footer">
              <a href="/privacy-policy">Privacy Policy</a> |
              <a href="/terms-of-service">Terms of Service</a> |
              <a href="mailto:hello@digisarathi.com">hello@digisarathi.com</a> ©
              {{ new Date().getFullYear() }} <a href="/">digiSarathi</a>
            </v-col>
          </v-footer>
        </footer>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import { mdiMenu, mdiClose } from '@mdi/js' // Example of importing an icon

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
