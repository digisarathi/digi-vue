<template>
  <v-app>

    <v-main>
      <!-- Hero Section -->
      <section id="hero" class="py-16">
        <v-container>
          <v-row align="center">
            <v-col cols="12" md="7" order="2" order-md="1">
              <h1 class="text-h2 text-primary font-weight-bold mb-4">Building Tomorrow's Leaders with Tech Skills</h1>
              <p class="text-body-1 mb-6">
                digiSarathi offers specialized tech training for NGO and SME staff, as well as tech students in Pune.
                From AI workshops to software development to managing WordPress, we help bridge the digital divide.
              </p>

            </v-col>
            <v-col cols="12" md="5" order="1" order-md="2" class="text-center">
              <v-img src="/educator.svg" max-width="450" contain alt="DigiSarathi Training"></v-img>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- Upcoming Workshops Banner -->
      <section class="bg-secondary py-6">
        <v-container>
          <v-row align="center" justify="center">
            <v-col cols="12" md="8" class="text-center">
              <h2 class="text-h5 text-white font-weight-medium">
                Upcoming AI Workshops & WordPress Training Series
              </h2>
              <v-btn color="white" class="mt-3" variant="flat">
                Register Now
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- Features Section -->
      <section id="features" class="py-12 bg-grey-lighten-4">
        <v-container>
          <v-row class="text-center mb-8">
            <v-col>
              <h2 class="text-h4 text-primary font-weight-bold">Why choose digiSarathi?</h2>
              <p class="text-body-1 mt-2">What makes our tech training programs unique</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="4">
              <v-card height="100%" class="feature-card">
                <v-card-item class="pa-6">
                  <div class="d-flex flex-column align-center text-center">
                    <v-icon color="primary" size="x-large" class="mb-4">{{ mdiLaptopAccount }}</v-icon>
                    <v-card-title class="text-primary font-weight-bold mb-3">Specialized for NGOs & SMEs</v-card-title>
                    <v-card-text class="text-body-1">
                      Curriculum designed specifically for the unique needs and constraints of NGOs and small
                      businesses.
                    </v-card-text>
                  </div>
                </v-card-item>
              </v-card>
            </v-col>
            <v-col cols="12" md="4">
              <v-card height="100%" class="feature-card">
                <v-card-item class="pa-6">
                  <div class="d-flex flex-column align-center text-center">
                    <v-icon color="primary" size="x-large" class="mb-4">{{ mdiGoogleClassroom }}</v-icon>
                    <v-card-title class="text-primary font-weight-bold mb-3">Hands-on Learning</v-card-title>
                    <v-card-text class="text-body-1">
                      Practical, project-based training that ensures you can apply your skills immediately after the
                      course.
                    </v-card-text>
                  </div>
                </v-card-item>
              </v-card>
            </v-col>
            <v-col cols="12" md="4">
              <v-card height="100%" class="feature-card">
                <v-card-item class="pa-6">
                  <div class="d-flex flex-column align-center text-center">
                    <v-icon color="primary" size="x-large" class="mb-4">{{ mdiAccountGroup }}</v-icon>
                    <v-card-title class="text-primary font-weight-bold mb-3">Community Support</v-card-title>
                    <v-card-text class="text-body-1">
                      Ongoing mentorship and community support to help you implement your learnings effectively.
                    </v-card-text>
                  </div>
                </v-card-item>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- Courses Section -->
      <section id="courses" class="py-12">
        <v-container>
          <v-row class="text-center mb-8">
            <v-col>
              <h2 class="text-h4 text-primary font-weight-bold">Courses</h2>
              <p class="text-body-1 mt-2">Comprehensive tech training for NGOs, SMEs, and students</p>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="6" lg="4">
              <v-card class="h-100">
                <v-img src="/api/placeholder/400/200" height="200" cover></v-img>
                <v-card-item>
                  <v-card-title>AI Workshop Series</v-card-title>
                  <v-card-subtitle>For NGO & SME Staff</v-card-subtitle>
                  <v-card-text>
                    <p>Learn how to leverage AI tools to enhance your organization's impact. Covering practical
                      applications in data analysis, content creation, and automation.</p>
                    <v-chip class="ma-1" color="primary" size="small">Beginner-Friendly</v-chip>
                    <v-chip class="ma-1" color="primary" size="small">Hands-on</v-chip>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn variant="text" color="primary">
                      Learn More
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn color="primary">
                      Register
                    </v-btn>
                  </v-card-actions>
                </v-card-item>
              </v-card>
            </v-col>

            <v-col cols="12" md="6" lg="4">
              <v-card class="h-100">
                <v-img src="/api/placeholder/400/200" height="200" cover></v-img>
                <v-card-item>
                  <v-card-title>WordPress Development</v-card-title>
                  <v-card-subtitle>Website Building for Organizations</v-card-subtitle>
                  <v-card-text>
                    <p>Master WordPress to create and maintain professional websites for your organization. Covers site
                      setup, content management, and basic customization.</p>
                    <v-chip class="ma-1" color="primary" size="small">Practical</v-chip>
                    <v-chip class="ma-1" color="primary" size="small">No Coding Required</v-chip>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn variant="text" color="primary">
                      Learn More
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn color="primary">
                      Register
                    </v-btn>
                  </v-card-actions>
                </v-card-item>
              </v-card>
            </v-col>

            <v-col cols="12" md="6" lg="4">
              <v-card class="h-100">
                <v-img src="/api/placeholder/400/200" height="200" cover></v-img>
                <v-card-item>
                  <v-card-title>Advanced Web Development</v-card-title>
                  <v-card-subtitle>For Tech Students</v-card-subtitle>
                  <v-card-text>
                    <p>Deep dive into modern web development with Vue.js, React, and other frameworks. Build
                      portfolio-ready projects and prepare for tech careers.</p>
                    <v-chip class="ma-1" color="primary" size="small">Project-Based</v-chip>
                    <v-chip class="ma-1" color="primary" size="small">Certificate</v-chip>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn variant="text" color="primary">
                      Learn More
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn color="primary">
                      Register
                    </v-btn>
                  </v-card-actions>
                </v-card-item>
              </v-card>
            </v-col>
          </v-row>


        </v-container>
      </section>

      <!-- Stats Counter -->
      <section class="py-12 bg-primary text-white">
        <v-container>
          <v-row>
            <v-col cols="6" md="3" class="text-center">
              <div class="text-h2 font-weight-bold">200+</div>
              <div class="text-subtitle-1">Trainees</div>
            </v-col>
            <v-col cols="6" md="3" class="text-center">
              <div class="text-h2 font-weight-bold">15+</div>
              <div class="text-subtitle-1">Workshops</div>
            </v-col>
            <v-col cols="6" md="3" class="text-center">
              <div class="text-h2 font-weight-bold">40+</div>
              <div class="text-subtitle-1">Organizations</div>
            </v-col>
            <v-col cols="6" md="3" class="text-center">
              <div class="text-h2 font-weight-bold">5+</div>
              <div class="text-subtitle-1">Training Programs</div>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- Testimonials Section -->
      <section id="testimonials" class="py-12">
        <v-container>
          <v-row class="text-center mb-8">
            <v-col>
              <h2 class="text-h4 text-primary font-weight-bold">What Our Trainees Say</h2>
              <p class="text-body-1 mt-2">Hear from the organizations and individuals we've trained</p>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12">
              <v-carousel hide-delimiters :show-arrows="false" height="auto">
                <v-carousel-item>
                  <v-row>
                    <v-col cols="12" md="4">
                      <v-card class="h-100">
                        <v-card-item>
                          <div class="d-flex align-center mb-4">
                            <v-avatar color="primary" class="mr-4">
                              <v-icon color="white">{{ mdiAccount }}</v-icon>
                            </v-avatar>
                            <div>
                              <div class="font-weight-bold">Priya Sharma</div>
                              <div class="text-caption">Program Director, Asha Foundation</div>
                            </div>
                          </div>
                          <v-card-text>
                            <p>"The AI workshop helped our small NGO automate several administrative tasks,
                              giving us more time to focus on our core mission. The training was practical
                              and tailored to our specific needs."</p>
                          </v-card-text>
                        </v-card-item>
                      </v-card>
                    </v-col>

                    <v-col cols="12" md="4">
                      <v-card class="h-100">
                        <v-card-item>
                          <div class="d-flex align-center mb-4">
                            <v-avatar color="primary" class="mr-4">
                              <v-icon color="white">{{ mdiAccount }}</v-icon>
                            </v-avatar>
                            <div>
                              <div class="font-weight-bold">Rahul Desai</div>
                              <div class="text-caption">Owner, GreenTech Solutions</div>
                            </div>
                          </div>
                          <v-card-text>
                            <p>"As a small business owner with limited technical knowledge, the WordPress
                              training was a game-changer. I can now manage our website independently,
                              saving us significant costs."</p>
                          </v-card-text>
                        </v-card-item>
                      </v-card>
                    </v-col>

                    <v-col cols="12" md="4">
                      <v-card class="h-100">
                        <v-card-item>
                          <div class="d-flex align-center mb-4">
                            <v-avatar color="primary" class="mr-4">
                              <v-icon color="white">{{ mdiAccount }}</v-icon>
                            </v-avatar>
                            <div>
                              <div class="font-weight-bold">Anika Patel</div>
                              <div class="text-caption">Computer Science Student, Pune University</div>
                            </div>
                          </div>
                          <v-card-text>
                            <p>"The web development course went beyond theory and gave me hands-on
                              experience with real-world projects. The mentorship continued even after
                              the course ended, which was incredibly valuable."</p>
                          </v-card-text>
                        </v-card-item>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-carousel-item>
              </v-carousel>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- CTA Section -->
      <section class="py-12 bg-secondary text-white">
        <v-container>
          <v-row align="center" justify="center">
            <v-col cols="12" md="8" class="text-center">
              <h2 class="text-h3 font-weight-bold mb-4">Ready to Enhance Your Tech Skills?</h2>
              <p class="text-body-1 mb-6">
                Join our upcoming workshops and training programs. Limited seats available.
              </p>
              <v-btn color="white" size="large" class="mr-4" variant="flat">
                View Schedule
              </v-btn>
              <v-btn color="primary" size="large">
                Register Now
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </section>



      <!-- Newsletter Signup -->
      <section class="py-10 bg-grey-lighten-4">
        <v-container>
          <v-row align="center" justify="center">
            <v-col cols="12" md="8" class="text-center">
              <h3 class="text-h5 font-weight-bold mb-3">Stay Updated with Our Latest Courses</h3>
              <p class="text-body-1 mb-6">
                Subscribe to our newsletter for updates on upcoming workshops and tech tips.
              </p>
              <v-row justify="center">
                <v-col cols="12" md="8">
                  <v-form class="d-flex">
                    <v-text-field placeholder="Your Email Address" variant="outlined" density="comfortable"
                      class="mr-2 flex-grow-1" hide-details></v-text-field>
                    <v-btn color="primary">
                      Subscribe
                    </v-btn>
                  </v-form>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </section>
    </v-main>


  </v-app>
</template>

<script setup>
import { ref } from 'vue';
import { mdiMapMarker, mdiEmail, mdiPhone, mdiTwitter, mdiLinkedin, mdiInstagram, mdiLaptopAccount, mdiGoogleClassroom, mdiAccountGroup, mdiAccount, } from '@mdi/js';
</script>

<style scoped>
/* Custom styles can be added here if needed */
</style>