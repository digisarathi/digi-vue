```vue
<template>
  <v-main>
    <!-- Hero Section -->
    <section id="hero" class="py-16">
      <v-container>
        <v-row align="center">
          <v-col cols="12" md="7" order="2" order-md="1">
            <h1 class="text-h2 text-primary font-weight-bold mb-4">
              Empower Your Team with AI: Interactive Workshop Series
            </h1>
            <p class="text-body-1 mb-6">
              Equip your organization with hands-on AI skills and practical strategies to drive innovation, boost
              productivity, and stay ahead in a digital world.
            </p>
          </v-col>
          <v-col cols="12" md="5" order="1" order-md="2" class="text-center">
            <v-img src="/ai-robot.svg" max-width="450" contain alt="AI Workshop"></v-img>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Courses Section -->
    <section id="courses" class="py-12">
      <v-container>
        <v-row class="text-center mb-8">
          <v-col>
            <h2 class="text-h4 text-primary font-weight-bold">Our AI Workshops</h2>
            <p class="text-body-1 mt-2">Comprehensive training for your team</p>
          </v-col>
        </v-row>

        <v-row>
          <!-- AI for NGO Empowerment Course -->
          <v-col cols="12" md="6" lg="6">
            <v-card class="h-100">
              <v-img src="/ai-ngo.svg" height="200" cover></v-img>
              <v-card-item>
                <v-card-title class="text-h5 text-primary font-weight-bold">AI for NGO Capacity Building</v-card-title>
                <v-card-subtitle class="text-secondary">Boost Efficiency and Impact</v-card-subtitle>
                <v-card-text>
                  <p class="mb-2">
                    Join us for an engaging 1 hour workshop designed specifically for NGOs to explore how AI can
                    supercharge your impact. Whether you’re looking to streamline operations, enhance fundraising, or
                    improve communication, this workshop will provide actionable insights and tools tailored to the
                    nonprofit sector.

                  </p>
                  <strong>What You’ll Learn</strong>
                  <ul class="mt-1 px-4">
                    <li>Auto generate high quality emails, newsletter & proposals using AI.</li>
                    <li>AI-powered tools for research & translation.</li>
                    <li>Case studies of NGOs successfully implementing AI.</li>
                    <li>Practical tips for getting started with AI for free.</li>
                  </ul>
                  <br>
                  <strong>Who Should Attend</strong>
                  <p class="mt-1">This workshop is ideal for NGO leaders, program managers, and
                    anyone interested in leveraging AI to enhance their organization’s impact.</p>
                  <br>
                  <strong>Duration:</strong> 2 hours
                  <br>
                  <strong>Format:</strong> Online
                  <br>
                  <strong>Prerequisites:</strong> None
                  <br>
                  <strong>Registration:</strong> Please register in advance to secure your spot.
                  <br>
                  <strong>Contact:</strong> For any questions, please reach out to us at <a
                    href="mailto:admin@digisarathi.com">admin@digisarathi.com</a>.
                  <div class="mt-4">
                    <v-chip class="ma-1" color="primary" size="small">AI Tools</v-chip>
                    <v-chip class="ma-1" color="primary" size="small">Research</v-chip>
                    <v-chip class="ma-1" color="primary" size="small">Translation</v-chip>
                    <v-chip class="ma-1" color="primary" size="small">Communications</v-chip>
                    <v-chip class="ma-1" color="primary" size="small">Data Analysis</v-chip>
                    <v-chip class="ma-1" color="primary" size="small">Fundraising</v-chip>
                  </div>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" href="https://forms.gle/fYyPsMivM4U5v4Gi6" target="_blank" rel="noopener">
                    Register </v-btn>
                </v-card-actions>
              </v-card-item>
            </v-card>
          </v-col>

          <!-- AI for Corporate Innovation (Vibe Coding) Course -->
          <v-col cols="12" md="6" lg="6">
            <v-card class="h-100">
              <v-img src="/ai-corporate.svg" height="200" cover></v-img>
              <v-card-item>
                <v-card-title class="text-h5 text-primary font-weight-bold">AI for Corporate Innovation (Vibe
                  Coding)</v-card-title>
                <v-card-subtitle class="text-secondary">Drive Innovation and Automate Processes</v-card-subtitle>
                <v-card-text>
                  <p class="mb-2">
                    Explore how AI can be leveraged in software development, process automation, and
                    the creation of innovative products.
                  </p>
                  <strong>What You’ll Learn</strong>

                  <ul class="my-1 px-4">
                    <li>How to leverage AI coding agents to rapidly prototype and deploy business applications.</li>
                    <li>Master the fundamentals of vibe coding, including prompt engineering, debugging, and UI/UX
                      design for AI apps.</li>
                    <li>Best practices for secure and scalable AI app development in a corporate environment.</li>
                    <li>Real-world case studies of companies successfully integrating AI tools to boost efficiency and
                      innovation.</li>
                    <li>Hands-on experience with leading AI platforms like Replit, Bolt, and Cursor to build
                      production-ready solutions.</li>
                  </ul>
                  <br>
                  <strong>Who Should Attend</strong>
                  <br>
                  <p class="mt-1">This workshop is ideal for corporate professionals including product managers,
                    software developers,
                    innovation leads, and business strategists who want to drive AI adoption and digital transformation
                    within their teams.</p>
                  <br>

                  <strong>Duration:</strong> 2 hours
                  <br>
                  <strong>Format:</strong> Online interactive session with live coding and Q&A
                  <br> <strong>Prerequisites:</strong> Basic understanding of programming concepts is recommended but
                  not
                  required.
                  <br> <strong>Registration:</strong> Please register in advance to secure your spot.

                  <div class="mt-4">
                    <v-chip class="ma-1" color="primary" size="small">Software Development</v-chip>
                    <v-chip class="ma-1" color="primary" size="small">Process Automation</v-chip>
                    <v-chip class="ma-1" color="primary" size="small">Product Creation</v-chip>
                  </div>
                </v-card-text>
              </v-card-item>
              <v-card-actions class="d-flex justify-end">
                For inquiries, please contact us at <a href="mailto:admin@digisarathi.com">admin@digisarathi.com</a>
                <br>
              </v-card-actions>
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
            <div class="text-h2 font-weight-bold">150+</div>
            <div class="text-subtitle-1">Participants Trained</div>
          </v-col>
          <v-col cols="6" md="3" class="text-center">
            <div class="text-h2 font-weight-bold">10+</div>
            <div class="text-subtitle-1">Workshops Conducted</div>
          </v-col>
          <v-col cols="6" md="3" class="text-center">
            <div class="text-h2 font-weight-bold">80%</div>
            <div class="text-subtitle-1">Satisfaction Rate</div>
          </v-col>
          <v-col cols="6" md="3" class="text-center">
            <div class="text-h2 font-weight-bold">30+</div>
            <div class="text-subtitle-1">Organizations Served</div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Testimonials Section -->
    <section id="testimonials" class="py-12">
      <v-container>
        <v-row class="text-center mb-8">
          <v-col>
            <h2 class="text-h4 text-primary font-weight-bold">What Our Attendees Say</h2>
            <p class="text-body-1 mt-2">
              Hear from those who have benefited from our AI workshops.
            </p>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="6">
            <v-card class="h-100">
              <v-card-item>
                <div class="d-flex align-center mb-4">
                  <v-avatar color="primary" class="mr-4">
                    <v-icon color="white">{{ mdiAccount }}</v-icon>
                  </v-avatar>
                  <div>
                    <div class="font-weight-bold">Seroja Manoj</div>
                    <div class="text-caption">Communications, Maya India NGO</div>
                  </div>
                </div>
                <v-card-text>
                  <p>
                    "Using AI tools at work makes life so much more enjoyable and easier as it is both effective and
                    efficient. Do consider conducting more sessions to help us keep ourselves updated on how we can
                    leverage technology to perform better at work. Keep up the good work!"
                  </p>
                </v-card-text>
              </v-card-item>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card class="h-100">
              <v-card-item>
                <div class="d-flex align-center mb-4">
                  <v-avatar color="primary" class="mr-4">
                    <v-icon color="white">{{ mdiAccount }}</v-icon>
                  </v-avatar>
                  <div>
                    <div class="font-weight-bold">Rashmi Shankar</div>
                    <div class="text-caption">Communications, Maya India NGO</div>
                  </div>
                </div>
                <v-card-text>
                  <p>
                    "I recently attended the Canva AI workshop organised by Digitech and found it to be extremely
                    informative. I learned many new skills and techniques that I'm excited to apply to my work. The
                    workshop was a great investment of my time and I recommend it to anyone looking to improve their
                    designing."
                  </p>
                </v-card-text>
              </v-card-item>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- CTA Section -->
    <section class="py-10 bg-primary text-white">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8" class="text-center">
            <h3 class="text-h5 font-weight-bold mb-3">Empower Your Team with AI Skills Today!</h3>
            <p class="text-body-1 mb-6">
              Join our AI Workshop Series and unlock the potential of artificial intelligence for
              your organization.
            </p>
            <v-btn color="white" size="large" href="https://forms.gle/fYyPsMivM4U5v4Gi6">
              Register Now
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </v-main>
</template>

<script setup>
import {
  mdiAccount,
  mdiBookOpenPageVariant,
  mdiLaptopAccount,
  mdiAccountGroup,
  mdiPencilRuler,
  mdiCodeBraces,
  mdiRocketLaunch,
  mdiChartBar,
  mdiSearchWeb,
  mdiGlobeModel,
  mdiEmail,
  mdiChartLine,
} from '@mdi/js'
</script>

<style scoped>
.feature-card {
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}
</style>
