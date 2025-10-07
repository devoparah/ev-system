<template>
    <section class="bg-black text-white flex justify-center">
        <div class=" px-5 lg:px-[5%] py-20">
            <div class="mb-20 text-center">
                <h6 class="text-primary text-sm uppercase font-bold mb-3 text-center">Our Plans</h6>
                <h2 class="mb-4">Choose the plan that suits you</h2>
                <h3 class="mb-6">Flexible Pricing for Every Need</h3>
                <p class="max-w-4xl text-sm md:text-lg font-light">
                    Whether you're just starting out or looking to scale your operations, we have a plan that's perfect
                    for you. Explore our range of pricing options designed to fit your unique needs and budget.
                </p>
            </div>
            <div class="grid lg:grid-cols-3 gap-10 lg:gap-0">
                <div v-for="plan in plans" :key="plan.title" class="bg-gray-50 text-black p-6 lg:-mt-10 shadow-[-4px_0_6px_rgba(0,0,0,0.2)] transition-shadow duration-300">
                    <h3 class="text-xl font-semibold mb-4">{{ plan.title }}</h3>
                    <hr class="my-4" />
                    <p class="text-3xl font-bold mb-4">${{ plan.min }}<span class="text-base font-normal"> ~ Min </span></p>
                    <ul class="mb-6 space-y-2">
                        <li class="flex items-center gap-2">
                            <Icon icon="mdi:star" class="text-gray-100" />ROI - {{plan.roi}}%
                        </li>
                        <li class="flex items-center gap-2">
                            <Icon icon="mdi:star" class="text-gray-100" />Duration - {{ plan.duration }} Days
                        </li>
                        <li class="flex items-center gap-2">
                            <Icon icon="mdi:star" class="text-gray-100" />Max - {{ plan.max }} USD
                        </li>
                    </ul>
                    <button
                        class="w-full bg-black text-white font-semibold py-3 rounded hover:opacity-50 transition duration-300">Choose
                        Plan</button>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { Icon } from '@iconify/vue';
import { ref } from 'vue';
const plans=ref([
    {  title: 'Level 2',min: '100',roi:'1.25', duration:'7', max:'4999' },
    {  title: 'Level 3',min: '5000',roi:'1.25', duration:'21', max:'19999' },
    {  title: 'Automated Robotic',min: '20000',roi:'1.75', duration:'30', max:'∞' },
]);

</script>
<style></style>