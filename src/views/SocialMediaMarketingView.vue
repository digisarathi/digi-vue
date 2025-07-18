<script setup>
import { onMounted } from 'vue';
import { useMetaTags } from '@/composables/useMetaTags';
import {
    mdiAccount,
    mdiChartBar,
    mdiPencilRuler,
    mdiAccountGroup,
} from '@mdi/js'
// Set meta tags for the page
const { updateMetaTags } = useMetaTags();
onMounted(() => {
  updateMetaTags(
    'Social Media Marketing Workshops | digiSarathi',
    'Master social media marketing with our expert-led workshops. Learn to grow your organization\'s online presence and engagement effectively.',
    '/social-media-og-image.jpg'
  );
});
</script>

<template>
    <v-main>
        <!-- Hero Section -->
        <section id="hero" class="py-16">
            <v-container>
                <v-row align="center">
                    <v-col cols="12" md="7" order="2" order-md="1">
                        <h1 class="text-h2 text-primary font-weight-bold mb-4">
                            Master Social Media Marketing
                        </h1>
                        <p class="text-body-1 mb-6">
                            Equip your team with the skills to grow your organization's presence and impact through
                            effective social media strategies.
                        </p>
                    </v-col>
                    <v-col cols="12" md="5" order="1" order-md="2" class="text-center">
                        <v-img src="/social.svg" max-width="450" contain alt="Social Media Marketing"></v-img>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <!-- Courses Section -->
        <section id="courses" class="py-12">
            <v-container>
                <v-row class="text-center mb-8">
                    <v-col>
                        <h2 class="text-h4 text-primary font-weight-bold">Our Social Media Marketing Workshops</h2>
                        <p class="text-body-1 mt-2">Comprehensive, actionable training for your team</p>
                    </v-col>
                </v-row>

                <v-row>
                    <!-- Social Media Essentials Course -->
                    <v-col cols="12" md="6" lg="6">
                        <v-card class="h-100">
                            <v-img src="/social.svg" height="200" cover></v-img>
                            <v-card-item>
                                <v-card-title class="text-h5 text-primary font-weight-bold">Social Media
                                    Essentials</v-card-title>
                                <v-card-subtitle class="text-secondary">Build Your Foundation</v-card-subtitle>
                                <v-card-text>
                                    <p class="mb-2">
                                        A beginner-friendly workshop covering the basics of social media platforms,
                                        content creation, and audience engagement. Perfect for NGOs and small businesses
                                        starting their digital journey.
                                    </p>
                                    <strong>What You’ll Learn</strong>
                                    <ul class="mt-1 px-4">
                                        <li>Choosing the right platforms for your goals</li>
                                        <li>Creating engaging posts and stories</li>
                                        <li>Scheduling and planning content</li>
                                        <li>Basic analytics and measuring success</li>
                                    </ul>
                                    <br>
                                    <strong>Who Should Attend</strong>
                                    <p class="mt-1">Staff, volunteers, and anyone interested in building a social media
                                        presence for their organization.</p>
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
                                        <v-chip class="ma-1" color="primary" size="small">Content Creation</v-chip>
                                        <v-chip class="ma-1" color="primary" size="small">Engagement</v-chip>
                                        <v-chip class="ma-1" color="primary" size="small">Analytics</v-chip>
                                    </div>
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="primary" href="https://forms.gle/fYyPsMivM4U5v4Gi6" target="_blank"
                                        rel="noopener">
                                        Register </v-btn>
                                </v-card-actions>
                            </v-card-item>
                        </v-card>
                    </v-col>

                    <!-- Advanced Social Media Strategy Course -->
                    <v-col cols="12" md="6" lg="6">
                        <v-card class="h-100">
                            <v-img src="/social.svg" height="200" cover></v-img>
                            <v-card-item>
                                <v-card-title class="text-h5 text-primary font-weight-bold">Advanced Social Media
                                    Strategy</v-card-title>
                                <v-card-subtitle class="text-secondary">Grow & Measure Your Impact</v-card-subtitle>
                                <v-card-text>
                                    <p class="mb-2">
                                        Take your social media to the next level with advanced strategies for growth,
                                        campaign management, and analytics. Learn to run effective campaigns and measure
                                        real impact.
                                    </p>
                                    <strong>What You’ll Learn</strong>
                                    <ul class="my-1 px-4">
                                        <li>Developing a content calendar</li>
                                        <li>Running paid and organic campaigns</li>
                                        <li>Using analytics tools for insights</li>
                                        <li>Case studies of successful campaigns</li>
                                    </ul>
                                    <br>
                                    <strong>Who Should Attend</strong>
                                    <br>
                                    <p class="mt-1">Marketing leads, communications staff, and anyone responsible for
                                        digital outreach.</p>
                                    <br>
                                    <strong>Duration:</strong> 2 hours
                                    <br>
                                    <strong>Format:</strong> Online interactive session with live demos and Q&A
                                    <br> <strong>Prerequisites:</strong> Basic understanding of social media platforms
                                    is recommended but not required.
                                    <br> <strong>Registration:</strong> Please register in advance to secure your spot.

                                    <div class="mt-4">
                                        <v-chip class="ma-1" color="primary" size="small">Campaigns</v-chip>
                                        <v-chip class="ma-1" color="primary" size="small">Strategy</v-chip>
                                        <v-chip class="ma-1" color="primary" size="small">Measurement</v-chip>
                                    </div>
                                </v-card-text>
                            </v-card-item>
                            <v-card-actions class="d-flex justify-end">
                                For inquiries, please contact us at <a
                                    href="mailto:admin@digisarathi.com">admin@digisarathi.com</a>
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
                        <div class="text-h2 font-weight-bold">100+</div>
                        <div class="text-subtitle-1">Participants Trained</div>
                    </v-col>
                    <v-col cols="6" md="3" class="text-center">
                        <div class="text-h2 font-weight-bold">8+</div>
                        <div class="text-subtitle-1">Workshops Conducted</div>
                    </v-col>
                    <v-col cols="6" md="3" class="text-center">
                        <div class="text-h2 font-weight-bold">90%</div>
                        <div class="text-subtitle-1">Satisfaction Rate</div>
                    </v-col>
                    <v-col cols="6" md="3" class="text-center">
                        <div class="text-h2 font-weight-bold">25+</div>
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
                            Hear from those who have benefited from our social media marketing workshops.
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
                                        <div class="font-weight-bold">Meera Dedia</div>
                                        <div class="text-caption">Communications, GreenTree Foundation</div>
                                    </div>
                                </div>
                                <v-card-text>
                                    <p>
                                        "The social media workshop taught us what is effective content to reach a wider
                                        audience. The many examples of campaigns were very helpful."
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
                                        <div class="font-weight-bold">Arjun Singh</div>
                                        <div class="text-caption">Marketing Lead, Kreya India</div>
                                    </div>
                                </div>
                                <v-card-text>
                                    <p>
                                        "I learned how to plan campaigns and actually measure our results. Highly
                                        recommended for beginners who are serious about social media."
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
                    <v-col cols="12" md="8" class="text-center ">
                        <h3 class="text-h5 font-weight-bold mb-3">Grow Your Impact with Social Media Skills!</h3>
                        <p class="text-body-1 mb-6">
                            Join our Social Media Marketing workshops and unlock the potential of digital outreach for
                            your organization.
                        </p>
                        <v-btn color="white" size="large" href="mailto:hello@digisarathi.com" class="mr-4">
                            Connect with us
                        </v-btn>
                        <v-btn color="white" size="large" href="https://forms.gle/fYyPsMivM4U5v4Gi6" target="_blank"
                            rel="noopener">
                            Register Now
                        </v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </section>
    </v-main>
</template>

<style scoped>
.feature-card {
    transition: transform 0.3s ease;
}

.feature-card:hover {
    transform: translateY(-5px);
}
</style>