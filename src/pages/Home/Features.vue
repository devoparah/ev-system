<template>
    <section class="bg-neutral-950 bg-opacity-95 text-gray-50 flex justify-center">
        <div class="px-5 lg:px-[5%] py-20">
            <div class="mb-10 text-center">
                <h6 class="text-primary text-sm uppercase font-bold mb-3 text-center">Features</h6>
                <h2 class="mb-4"> Cetar business offers a comprehensive array of features</h2>
            </div>
            <div class="grid lg:grid-cols-2 gap-10 lg:gap-10 lg:text-center">
                <div v-for="feature in features" :key="feature.title" class="mb-6">
                    <div class="grid grid-cols-3 ">
                        <div class="col-span-1 pt-10 bg-black shadow-lg text-gray-50 p-6 flex justify-center items-center">
                            <Icon :icon="feature.icon" class="text-emerald-500 text-6xl mb-4 lg:mx-auto" />
                        </div>
                        <div class="col-span-2 bg-gray-50 text-black py-3">
                            <div class="border-b border-neutral-300 py-3 px-5">
                                <span class="text-[20px] font-semibold mb-4">{{ feature.title }}</span>
                            </div>
                            <div class="py-3 px-5">
                                <p class="text-xs md:text-sm font-light">{{ feature.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>  
                




            </div>
        </div>

    </section>
</template>
<script setup>
import { Icon } from '@iconify/vue';
import { ref } from 'vue';
const features = ref([
    {
        icon: 'mdi:shield-check',
        title: 'Secure Transactions',
        description:
            'We prioritize your security with advanced encryption and fraud detection to ensure safe and reliable transactions.',
    },
    {
        icon: 'mdi:flash',
        title: 'Fast Processing',
        description:
            'Experience lightning-fast transaction processing, minimizing wait times and maximizing efficiency for your business operations.',
    },
    {
        icon: 'mdi:headset',
        title: '24/7 Support',
        description:
            'Our dedicated support team is available around the clock to assist you with any questions or issues you may encounter.',
    },
    {
        icon: 'mdi:chart-line',
        title: 'Real-time Analytics',
        description:
            'Gain insights into your transactions with our real-time analytics dashboard, helping you make informed business decisions.',
    },
    {
        icon: 'mdi:cloud-sync',
        title: 'Cloud Integration',
        description:
            'Seamlessly integrate with popular cloud services to streamline your workflow and enhance productivity.',
    },
    {
        icon: 'mdi:lock',
        title: 'Data Privacy',
        description:
            'We adhere to strict data privacy regulations, ensuring your personal and business information is protected at all times.',
    },
]);
</script>
<style></style>