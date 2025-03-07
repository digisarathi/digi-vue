<script setup></script>

<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col cols="12">
          <h1>Welcome to digiSarathi</h1>
          <p>Your one-stop solution for website design, software consulting, and development.</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <h2>Testimonials</h2>
          <v-carousel>
            <v-carousel-item v-for="(testimonial, index) in testimonials" :key="index">
              <v-card>
                <v-card-title>{{ testimonial.name }}</v-card-title>
                <v-card-text>{{ testimonial.text }}</v-card-text>
              </v-card>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <h2>Our Clients</h2>
          <v-row>
            <v-col v-for="(client, index) in clients" :key="index" cols="4">
              <v-img :src="client.logo" contain></v-img>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <h2>Subscribe to Our Newsletter</h2>
          <v-form>
            <v-text-field label="Email" v-model="email"></v-text-field>
            <v-btn @click="subscribe">Subscribe</v-btn>
          </v-form>
        </v-col>
      </v-row>    </v-container>

  </v-main>
</template>
