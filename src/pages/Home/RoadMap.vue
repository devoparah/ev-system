<template>
    <section class="bg-cover bg-center bg-no-repeat lg:bg-cover text-neutral-300 "style="background: url('/images/roadmap-x9.jpg')">
        <div class="px-6 py-20 bg-[rgba(0,0,0,0.5)] text-sm md:text-base">
            <div class="mb-5 lg:text-center">
                <h2 class="text-3xl md:text-4xl font-bold mb-4">EV Roadmap</h2>
                <h3 class="mb-6">Building the Future of Transportation and Clean Energy</h3>
                <p class="mb-4 max-w-4xl text-sm md:text-lg font-light">
                    To accelerate the global transition to electric mobility by developing scalable, smart, and
                    sustainable EV charging infrastructure,laying the groundwork for innovations in battery technology
                    and clean energy integration.
                </p>
                <p class="font-semibold text-base md:xl">Click on each phase to expand and read more
                    details</p>
            </div>
            <div class="relative overflow-hidden ">
                <!-- Grid layout -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-10 py-5 relative">
                    <svg class="opacity-95 absolute inset-0 w-full h-full pointer-events-none"
                        preserveAspectRatio="none">
                        <g stroke="#99a1af" stroke-width="2" fill="none">
                            <!-- Horizontal connectors -->
                            <line class="draw-line" x1="15%" y1="25%" x2="50%" y2="25%" />
                            <line class="draw-line" x1="50%" y1="25%" x2="85%" y2="25%" />
                            <!-- Vertical connector between rows -->
                            <line class="draw-line" x1="85%" y1="25%" x2="85%" y2="75%" />
                            <line class="draw-line" x1="85%" y1="75%" x2="15%" y2="75%" />
                        </g>
                    </svg>

                    <div v-for="(phase, i) in phases" :key="phase.id"
                        class="relative bg-transparent p-6 rounded-sm shadow-md hover:shadow-lg transition cursor-pointer border border-gray-400"
                        @mouseenter="active = i" @mouseleave="active = null" @click="toggleExpand(i)">
                        <!-- Dot connector -->
                        <div class="absolute -top-2 z-2 left-1/2 transform -translate-x-1/2">
                            <div class="w-6 h-6 rounded-full border-4 transition-all duration-300"
                                :class="active === i ? 'bg-green-500 border-green-600 scale-110' : 'bg-white border-gray-300'">
                            </div>
                        </div>

                        <h4 class="text-lg font-semibold mb-1" :class="{ 'text-green-600': active === i }">{{ phase.title
                            }}</h4>
                        <p class=" mb-3 text-base md:text-lg">{{ phase.range }} • {{ phase.status }}</p>

                        <p class="" v-if="!expanded[i]">{{ phase.summaryShort }}</p>

                        <transition name="fade">
                            <div v-if="expanded[i]" class="  mt-3 space-y-3">
                                <p>{{ phase.summary }}</p>

                                <div>
                                    <h3 class="font-medium">Objectives</h3>
                                    <ul class="list-disc pl-5 mt-1">
                                        <li v-for="o in phase.objectives" :key="o">{{ o }}</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 class="font-medium">Investment Areas</h3>
                                    <ul class="list-decimal pl-5 mt-1">
                                        <li v-for="a in phase.investmentAreas" :key="a.title">
                                            <strong>{{ a.title }}:</strong> {{ a.desc }}
                                        </li>
                                    </ul>
                                </div>

                                <div v-if="phase.revenueStreams">
                                    <h3 class="font-medium">Revenue Streams</h3>
                                    <ul class="list-disc pl-5 mt-1">
                                        <li v-for="r in phase.revenueStreams" :key="r">{{ r }}</li>
                                    </ul>
                                </div>
                            </div>
                        </transition>

                        <div class="mt-4 opacity-85 hidden">Click to expand more for details</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const phases = ref([
    {
        id: 1,
        title: 'Phase 1: Charging Infrastructure',
        range: '2025–2028',
        status: 'Laying the Foundation',
        summaryShort:
            'Build a robust, accessible, intelligent EV charging network — the core enabler of EV adoption and revenue generation.',
        summary:
            'The first stage focuses on building a robust, accessible, and intelligent EV charging network — the core enabler of EV adoption and revenue generation.',
        objectives: [
            'Establish national and regional charging networks.',
            'Deploy smart, automated, and renewable-powered charging systems.',
            'Generate consistent revenue through user fees, partnerships, and franchise models.'
        ],
        investmentAreas: [
            { title: 'Public Charging Stations', desc: 'Deploy Level 2 and DC Fast Charging Stations across cities and workplaces.' },
            { title: 'Smart Charging Networks', desc: 'Develop connected platforms with apps and analytics.' },
            { title: 'Battery Swapping Hubs', desc: 'Build automated battery exchange points for fleets and two-wheelers.' },
            { title: 'Renewable-Powered Charging', desc: 'Integrate solar, wind, or hybrid microgrids to power stations.' },
            { title: 'Franchise & Partnerships', desc: 'Offer franchise opportunities and expand through collaborations.' }
        ],
        revenueStreams: [
            'Charging fees (per kWh or time-based)',
            'Subscription plans for fleets',
            'Data services and energy contracts',
            'Franchise royalties and tech licensing'
        ]
    },
    {
        id: 2,
        title: 'Phase 2: Battery Technology',
        range: '2028–2032',
        status: 'R&D & Supply Chain',
        summaryShort:
            'Shift to battery manufacturing, recycling, and advanced storage — improving efficiency and lifecycle.',
        summary:
            'Once the charging foundation is established, focus shifts to battery manufacturing, recycling, and energy storage.',
        objectives: [
            'Secure position in battery supply chain.',
            'Develop technologies improving energy density and lifecycle.',
            'Support recycling and reuse for circular economy.'
        ],
        investmentAreas: [
            { title: 'Battery Manufacturing Plants', desc: 'Partner in Gigafactories producing lithium-ion and solid-state batteries.' },
            { title: 'Recycling & Second-Life', desc: 'Invest in repurposing used batteries for renewable energy storage.' },
            { title: 'Battery Management Systems', desc: 'Fund AI-driven systems for monitoring battery health.' },
            { title: 'Raw Material Supply', desc: 'Secure ethical sources of lithium, nickel, and cobalt.' },
            { title: 'Research & Development', desc: 'Invest in next-gen materials like graphene or hydrogen.' }
        ]
    },
    {
        id: 3,
        title: 'Phase 3: Global EV & Clean Energy Leader',
        range: '2032–2040',
        status: 'Scale & Integrate',
        summaryShort:
            'Evolve into a clean energy and mobility ecosystem, positioning as a global EV leader.',
        summary:
            'With infrastructure and battery tech in place, evolve into an integrated clean energy and mobility ecosystem.',
        objectives: [
            'Expand internationally in EV exports.',
            'Integrate clean energy generation with mobility networks.',
            'Leverage sustainability assets in carbon markets.'
        ],
        investmentAreas: [
            { title: 'Vertical Integration', desc: 'Combine EV manufacturing, battery production, and charging.' },
            { title: 'Green Energy Expansion', desc: 'Invest in solar farms, wind parks, and hydrogen plants.' },
            { title: 'Smart Grid Solutions', desc: 'Develop intelligent grids to manage EV load and surplus energy.' },
            { title: 'Fleet Electrification', desc: 'Partner with logistics and governments for EV transitions.' },
            { title: 'Technology Export', desc: 'License charging and battery tech to emerging markets.' },
            { title: 'Carbon Credit Markets', desc: 'Monetize clean operations via carbon trading.' }
        ]
    }
])

const active = ref(null)
const expanded = ref(phases.value.map(() => false))

function toggleExpand(i) {
    expanded.value[i] = !expanded.value[i]
}

onMounted(() => {
    // Trigger SVG line animations after mount
    const lines = document.querySelectorAll('.draw-line')
    lines.forEach((line, i) => {
        const length = line.getTotalLength()
        line.style.strokeDasharray = length
        line.style.strokeDashoffset = length
        setTimeout(() => {
            line.style.transition = 'stroke-dashoffset 1s ease-in-out'
            line.style.strokeDashoffset = '0'
        }, 300 * i)
    })
})
</script>

<style scoped>
svg line {
    stroke-dasharray: 4 6;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>