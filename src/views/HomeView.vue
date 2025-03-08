<script setup></script>

<template>
  <v-main>
    <v-container class="">
      <v-row class="ma-md-8 pa-md-8 ">
        <v-col cols="12" class="ma-xs-8 pa-xs-8" >

          <h2 class=" text-primary">We simplify digitization. We achieve this by focusing on what truly matters, empowering every individual.</h2>
          <p class="text-secondary">Digitisation need not be complicated. Our strategy, system design and execution processes are speedy & agile which means you see results ASAP. </p>
        </v-col>
      </v-row>
      <v-row class="ma-md-2 pa-md-6">
        <v-col cols="12">
          <h2 class="text-accent">Services</h2>
            <div v-for="(service, index) in services" :key="index">
              <v-card variant="text" elevation="2" min-height="200" class="d-flex rounded flex-column  align-center ma-2 pa-2" @click="goToService(service.route)">
                <span class="text-primary text-h4 ma-2 pa-2" >{{ service.name }}</span>
                <span class="text-secondary ma-2 pa-2" >{{ service.text }}</span>
              </v-card>
            </div>
        </v-col>
      </v-row>

      <v-row class="ma-2 pa-6">
        <v-col xs="12" md="6" lg="4">
          <h2 class="text-accent">Testimonials</h2>
          <v-window     show-arrows="hover">
            <v-window-item v-for="(testimonial, index) in testimonials" :key="index">
              <v-card  height="200px">
                <v-card-title >{{ testimonial.text }}</v-card-title>
                <v-card-text >{{ testimonial.name }}</v-card-text>
              </v-card>
            </v-window-item>
          </v-window>
        </v-col>
      </v-row>

      <v-row class="ma-2 pa-6">
        <v-col cols="12">
          <h2 class="text-accent">Our Clients</h2>
          <v-row>
            <v-col v-for="(client, index) in clients" :key="index" cols="4">
              <v-img :src="client.logo" contain></v-img>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-row class="ma-2 pa-6">
        <v-col cols="12">
          <h2 class="text-accent">Subscribe to Our Newsletter</h2>
          <v-form>
            <v-text-field label="Email" v-model="email"></v-text-field>
            <v-btn @click="subscribe">Subscribe</v-btn>
          </v-form>
        </v-col>
      </v-row>    </v-container>

  </v-main>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const email = ref('');
const testimonials = ref([
  { name: 'John Doe', text: 'Great service!' },
  { name: 'Jane Smith', text: 'Highly recommend!' },
]);
const clients = ref([
  { logo: 'path/to/logo1.png' },
  { logo: 'path/to/logo2.png' },
  { logo: 'path/to/logo3.png' },
]);
const services = ref([
  { name: 'Website Design', text: 'Your website is the foundation upon which your digital marketing and fundraising campaigns are built.', route: 'website-design' },
  { name: 'Apps & Software Development', text: 'Innovative user experiences based on a modular and scalable architecture to scale with flexibility and create seamless digital experiences.', route: 'apps-software-development' },
  { name: 'Digital Marketing', text: 'Comprehensive strategies to enhance your online presence and drive engagement.', route: 'digital-marketing' },
  { name: 'Training & Workshops', text: 'Hands-on sessions designed to empower your team with essential skills and knowledge.', route: 'training-workshops' }
]);

const subscribe = () => {
  alert(`Subscribed with email: ${email.value}`);
};

const goToService = (route) => {
  router.push({ name: route });
};
</script>