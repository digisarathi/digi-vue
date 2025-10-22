<template>
    <div>
        <!-- Hero Section -->
        <v-container fluid class="hero-section">
            <v-row align="center" justify="center" class="min-height-70vh">
                <v-col cols="12" md="7" order="2" order-md="1">
                    <h1 class="text-h2 text-primary font-weight-bold  mb-6">
                        UX/UI Design & Digital Experience
                    </h1>
                    <p class="text-body-1 mb-8">
                        We craft intuitive user experiences and visual systems for digital products, presentations, and
                        reports.
                        Translating ideas into visually fluent, functional, and accessible designs for the modern
                        audience.
                    </p>
                    <v-btn size="large" color="primary" href="mailto:hello@digisarathi.com">
                        Start Your Design Project
                    </v-btn>
                </v-col>
                <v-col cols="12" md="5" order="1" order-md="2" class="text-center">
                    <v-img src="/ux-ui.svg" max-width="450" contain alt="UI Designers"></v-img>
                </v-col>
            </v-row>
        </v-container>

        <!-- Philosophy Section -->
        <v-container class="py-12">
            <v-row justify="center">
                <v-col cols="12" md="8" class="text-center">
                    <h2 class="text-h4 text-primary font-weight-bold mb-6">Our Design Philosophy</h2>
                    <p class="text-body-1">
                        Good design is not just about looks — it's how humans interact with technology and content.
                        Our UX/UI approach combines data, empathy, and clarity to guide users toward purposeful
                        engagement.
                    </p>
                </v-col>
            </v-row>
        </v-container>

        <!-- Service Modules -->
        <v-container class="py-12 bg-grey-lighten-4">
            <v-row>
                <v-col cols="12" class="text-center mb-8">
                    <h2 class="text-h4 text-primary font-weight-bold">What We Offer</h2>
                </v-col>
            </v-row>
            <v-row>
                <v-col v-for="(module, index) in modules" :key="index" cols="12" md="6" lg="3">
                    <v-card class="h-100 feature-card" elevation="2" rounded="lg">
                        <div class="text-center pt-6">
                            <v-icon color="primary" size="x-large">{{ module.icon }}</v-icon>
                        </div>
                        <v-card-item>
                            <v-card-title class="text-h6 text-primary font-weight-bold mb-4">{{ module.title
                            }}</v-card-title>
                            <v-card-text>
                                <p class="mb-4">{{ module.description }}</p>
                                <v-list density="compact">
                                    <v-list-item v-for="(point, i) in module.points" :key="i" class="px-0">
                                        <template v-slot:prepend>
                                            <v-icon color="primary" size="small">{{ mdiCheckCircle }}</v-icon>
                                        </template>
                                        {{ point }}
                                    </v-list-item>
                                </v-list>
                            </v-card-text>
                        </v-card-item>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>

        <!-- Case Studies -->
        <v-container class="py-12">
            <v-row>
                <v-col cols="12" class="text-center mb-8">
                    <h2 class="text-h4 text-primary font-weight-bold">Design Beyond Applications</h2>
                    <p class="text-body-1 mt-4">
                        Beyond digital interfaces, our teams apply UX-driven storytelling to communication assets such
                        as NGO
                        impact reports, corporate pitch decks, and learning aids.
                    </p>
                </v-col>
            </v-row>
            <v-row>
                <v-col v-for="(caseItem, index) in caseStudies" :key="index" cols="12" md="4">
                    <v-card class="h-100 feature-card" elevation="2" rounded="lg">
                        <v-card-item>
                            <v-card-title class="text-h6 text-primary text-wrap font-weight-bold mb-4">{{ caseItem.title
                            }}</v-card-title>
                            <v-card-text class="text-body-2">{{ caseItem.context }}</v-card-text>
                        </v-card-item>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>

        <!-- CTA Section -->
        <v-container class="py-12">
            <v-row justify="center">
                <v-col cols="12" md="10">
                    <v-card class="py-8 px-4 text-center" color="primary" rounded="lg">
                        <v-card-title class="text-h4 font-weight-bold mb-4 text-white text-wrap">
                            Let's Design Meaningful Experiences
                        </v-card-title>
                        <v-card-text class="text-h6 mb-6 text-white">
                            Collaborate with us to enrich your products, presentations, and publications through
                            purposeful
                            design thinking.
                        </v-card-text>
                        <v-btn color="white" size="x-large" class="text-primary" href="mailto:hello@digisarathi.com">
                            Start a Project
                        </v-btn>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script setup>
import { mdiCheckCircle, mdiAccountGroupOutline, mdiTabletCellphone, mdiVectorSquareEdit, mdiPresentationPlay } from '@mdi/js'
const modules = [
    {
        icon: mdiAccountGroupOutline,
        title: "User Research & Experience Mapping",
        description: "Understanding behavior through journey maps, personas, and empathy workshops.",
        points: [
            "Conduct usability tests & interviews",
            "Map user journeys and service blueprints",
            "Apply heuristic evaluation & analytics"
        ]
    },
    {
        icon: mdiTabletCellphone,
        title: "Product Design for Web & Mobile",
        description: "Design responsive apps focused on accessibility, clarity, and smooth interactions.",
        points: [
            "Wireframes and mid/high-fidelity prototypes",
            "Design tokens and responsive grids",
            "Component consistency across devices"
        ]
    },
    {
        icon: mdiVectorSquareEdit,
        title: "Design Systems & Prototyping",
        description: "Streamlined design with scalable systems, ensuring alignment between dev and design.",
        points: [
            "Reusable Figma components & tokens",
            "Interactive Vue-based UI library setup",
            "Handoff documentation & collaboration"
        ]
    },
    {
        icon: mdiPresentationPlay,
        title: "Storytelling & Visual Communication",
        description: "Design-driven storytelling for organizations and changemakers.",
        points: [
            "Corporate presentations & pitch decks",
            "NGO research/impact annual reports",
            "Data visualization for clarity & trust"
        ]
    }
];

const caseStudies = [
    {
        title: "Accessible UX for Rural Health App",
        context: "Collaborative research for a health NGO, focusing on mobile-first UX for low-literacy users."
    },
    {
        title: "Corporate Visual Systems",
        context: "Built cohesive design identity and slide templates for internal leadership programs."
    },
    {
        title: "Data Visualization for Impact Reports",
        context: "Created mission-driven layouts that simplified complex research data into intuitive visuals."
    }
];
</script>

<style scoped>
.hero-section {
    background: linear-gradient(135deg, var(--v-primary-base) 0%, var(--v-secondary-base) 100%);
    position: relative;
    overflow: hidden;
}

.min-height-70vh {
    min-height: 70vh;
}

.feature-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    height: 100%;
}

.feature-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1) !important;
}

.v-card {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.v-card-title {
    word-break: break-word;
}
</style>
