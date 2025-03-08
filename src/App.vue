<template>
  <v-app>
    <header>
      <v-toolbar >
        <v-toolbar-title>digiSarathi</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn class="hidden-sm-and-down" text v-for="(item, index) in navItems" :key="index" :to="item.route">
          {{ item.title }}
        </v-btn>
        <v-btn icon class="hidden-md-and-up" color="accent"  @click="drawer = true">
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

    <router-view></router-view>
    <footer>
      <v-footer app>
        <v-col class="text-center">
          © {{ new Date().getFullYear() }} digiSarathi
        </v-col>
      </v-footer>
    </footer>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';
import { mdiMenu, mdiClose } from '@mdi/js'; // Example of importing an icon


const drawer = ref(false);
const navItems = ref([
  { title: 'Home', route: '/' },
  { title: 'About', route: '/about' },
  { title: 'Services', route: '/' },
  { title: 'Contact', route: '/' },
]);


</script>