<template>
    <v-app>
      
      <v-main>
        <!-- Hero Section -->
        <section id="hero" class="py-16">
          <v-container>
            <v-row align="center">
              <v-col cols="12" md="6" order="2" order-md="1">
                <h1 class="text-h2 font-weight-bold mb-4">Empowering NGOs & SMEs with Tech Skills</h1>
                <p class="text-body-1 mb-6">
                  digiSarathi provides specialized tech training for NGO and SME staff, as well as tech students in Pune. 
                  From AI workshops to WordPress development, we help bridge the digital divide.
                </p>
                <div class="d-flex flex-column flex-sm-row gap-4">
                  <v-btn color="primary" size="large" rounded>
                    Explore Courses
                  </v-btn>
                  <v-btn variant="outlined" size="large" rounded>
                    Contact Us
                  </v-btn>
                </div>
              </v-col>
              <v-col cols="12" md="6" order="1" order-md="2" class="text-center">
                <v-img
                  src="/api/placeholder/600/400"
                  alt="DigiSarathi Training"
                  class="rounded-lg elevation-5"
                ></v-img>
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
                <h2 class="text-h4 font-weight-bold">Why Choose DigiSarathi?</h2>
                <p class="text-body-1 mt-2">What makes our tech training programs unique</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="4">
                <v-card height="100%">
                  <v-card-item>
                    <v-icon color="primary" size="x-large" class="mb-4">{{mdiLaptopAccount}}</v-icon>
                    <v-card-title>Specialized for NGOs & SMEs</v-card-title>
                    <v-card-text>
                      Curriculum designed specifically for the unique needs and constraints of NGOs and small businesses.
                    </v-card-text>
                  </v-card-item>
                </v-card>
              </v-col>
              <v-col cols="12" md="4">
                <v-card height="100%">
                  <v-card-item>
                    <v-icon color="primary" size="x-large" class="mb-4">{{mdiGoogleClassroom}}</v-icon>
                    <v-card-title>Hands-on Learning</v-card-title>
                    <v-card-text>
                      Practical, project-based training that ensures you can apply your skills immediately after the course.
                    </v-card-text>
                  </v-card-item>
                </v-card>
              </v-col>
              <v-col cols="12" md="4">
                <v-card height="100%">
                  <v-card-item>
                    <v-icon color="primary" size="x-large" class="mb-4">{{mdiAccountGroup}}</v-icon>
                    <v-card-title>Community Support</v-card-title>
                    <v-card-text>
                      Ongoing mentorship and community support to help you implement your learnings effectively.
                    </v-card-text>
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
                <h2 class="text-h4 font-weight-bold">Our Training Programs</h2>
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
                      <p>Learn how to leverage AI tools to enhance your organization's impact. Covering practical applications in data analysis, content creation, and automation.</p>
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
                      <p>Master WordPress to create and maintain professional websites for your organization. Covers site setup, content management, and basic customization.</p>
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
                      <p>Deep dive into modern web development with Vue.js, React, and other frameworks. Build portfolio-ready projects and prepare for tech careers.</p>
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
                <div class="text-h2 font-weight-bold">500+</div>
                <div class="text-subtitle-1">Trainees</div>
              </v-col>
              <v-col cols="6" md="3" class="text-center">
                <div class="text-h2 font-weight-bold">25+</div>
                <div class="text-subtitle-1">Workshops</div>
              </v-col>
              <v-col cols="6" md="3" class="text-center">
                <div class="text-h2 font-weight-bold">40+</div>
                <div class="text-subtitle-1">NGO Partners</div>
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
                <h2 class="text-h4 font-weight-bold">What Our Trainees Say</h2>
                <p class="text-body-1 mt-2">Hear from the organizations and individuals we've trained</p>
              </v-col>
            </v-row>
            
            <v-row>
              <v-col cols="12">
                <v-carousel
                  hide-delimiters
                  :show-arrows="false"
                  height="auto"
                >
                  <v-carousel-item>
                    <v-row>
                      <v-col cols="12" md="4">
                        <v-card class="h-100">
                          <v-card-item>
                            <div class="d-flex align-center mb-4">
                              <v-avatar color="primary" class="mr-4">
                                <v-icon color="white">{{mdiAccount}}</v-icon>
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
                                <v-icon color="white">{{mdiAccount}}</v-icon>
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
                                <v-icon color="white">{{mdiAccount}}</v-icon>
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
  
        <!-- Contact Section -->
        <section id="contact" class="py-12">
          <v-container>
            <v-row>
              <v-col cols="12" md="6">
                <h2 class="text-h4 font-weight-bold mb-4">Contact Us</h2>
                <p class="text-body-1 mb-6">
                  Have questions about our training programs? Reach out to us and we'll get back to you soon.
                </p>
                
                <div class="mb-4 d-flex align-center">
                  <v-icon color="primary" class="mr-3">{{mdiMapMarker}}</v-icon>
                  <span>Pune, Maharashtra, India</span>
                </div>
                
                <div class="mb-4 d-flex align-center">
                  <v-icon color="primary" class="mr-3">{{mdiEmail}}</v-icon>
                  <span>hello@digisarathi.com</span>
                </div>
                
                <div class="mb-6 d-flex align-center">
                  <v-icon color="primary" class="mr-3">{{mdiPhone}}</v-icon>
                  <span>WhatsApp: +91 9022465676</span>
                </div>
                
                <div class="d-flex">
                  <v-btn icon color="primary" class="mr-2">
                    <v-icon>{{mdiTwitter}}</v-icon>
                  </v-btn>
                  <v-btn icon color="primary" class="mr-2">
                    <v-icon>{{mdiLinkedin}}</v-icon>
                  </v-btn>
                  <v-btn icon color="primary">
                    <v-icon>{{mdiInstagram}}</v-icon>
                  </v-btn>
                </div>
              </v-col>
              
              <v-col cols="12" md="6">
                <v-card elevation="3">
                  <v-card-text>
                   
                  </v-card-text>
                </v-card>
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
                      <v-text-field
                        placeholder="Your Email Address"
                        variant="outlined"
                        density="comfortable"
                        class="mr-2 flex-grow-1"
                        hide-details
                      ></v-text-field>
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
  
      <!-- Footer -->
      <v-footer class="bg-primary text-white">
        <v-container>
          <v-row>
            <v-col cols="12" md="4" class="mb-6 mb-md-0">
              <h3 class="text-h6 font-weight-bold mb-4">digiSarathi</h3>
              <p class="text-body-2">
                Empowering NGOs, SMEs, and tech students with practical digital skills to create positive social impact.
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
                <v-icon size="small" class="mr-2">{{mdiMapMarker}}</v-icon>
                <span class="text-body-2">Pune, Maharashtra, India</span>
              </div>
              <div class="d-flex align-center mb-2">
                <v-icon size="small" class="mr-2">{{mdiEmail}}</v-icon>
                <span class="text-body-2">contact@digisarathi.org</span>
              </div>
              <div class="d-flex align-center mb-4">
                <v-icon size="small" class="mr-2">{{mdiPhone}}</v-icon>
                <span class="text-body-2">+91 9876543210</span>
              </div>
              <div class="d-flex">
                <v-btn icon variant="text" color="white" class="mr-2">
                  <v-icon>{{mdiTwitter}}</v-icon>
                </v-btn>
                <v-btn icon variant="text" color="white" class="mr-2">
                  <v-icon>{{mdiLinkedin}}</v-icon>
                </v-btn>
                <v-btn icon variant="text" color="white">
                  <v-icon>{{mdiInstagram}}</v-icon>
                </v-btn>
              </div>
            </v-col>
          </v-row>
          <v-divider class="my-4 bg-white"></v-divider>
          <div class="text-center text-body-2">
            &copy; {{ new Date().getFullYear() }} DigiSarathi. All rights reserved.
          </div>
        </v-container>
      </v-footer>
    </v-app>
  </template>
  
  <script setup>
  import { ref } from 'vue';
import { mdiMapMarker, mdiEmail, mdiPhone, mdiTwitter, mdiLinkedin, mdiInstagram, mdiLaptopAccount, mdiGoogleClassroom, mdiAccountGroup, mdiAccount,    } from '@mdi/js';
  </script>
  
  <style scoped>
  /* Custom styles can be added here if needed */
  </style>