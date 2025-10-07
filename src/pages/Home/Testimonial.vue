<template>
    <section class="bg-gradient-to-tr bg-gray-50 via-emerald-50 to-gray-50 text-black">
        <div class="px-5 lg:pl-[5%] py-10 lg:pb-20">
            <div class="text-center lg:hidden">
                <h6 class="text-primary text-sm uppercase font-bold mb-3 text-center">OUR TESTIMONIALS</h6>
                <h3 class="mb-3">Real Experiences, Real Growth</h3>
                <p class="max-w-4xl text-sm md:text-lg font-light">
                    How our services transformed their careers
                </p>
            </div>

            <div class="grid lg:grid-cols-2 place-content-center">
                <div class="flex lg:-mr-[15%] py-10 lg:py-20">
                    <div v-for="(item,index) in testimonials.slice(0,2)" :key="index "class="relative" :class="{'z-2 mt-[5%] -ml-[2.5%]':index===1}">
                        <div
                            class="text-center max-w-sm bg-white text-black border border-neutral-100 px-5 py-10 inline-block rounded-sm">
                            <div class="flex text-start mb-5">
                                <Icon v-for="n in item.rating" :key="n" icon="mdi:star" class="text-yellow-400 text-2xl" />
                            </div>
                            <img :src="`/images/${item.img}`"
                                class="size-16 md:size-24 rounded-full inline-block mb-2" />
                            <h4 class="mb-1">{{ item.name }}</h4>
                            <p class="mb-2">{{ item.role }}</p>
                            <p class="text-xs md:text-sm lg:text-[15px] font-light">{{item.remark}}  </p>

                        </div>
                    </div>
                </div>

                <div class="hidden lg:block">
                    <div
                        class="inline-block lg:block lg:pl-[25%] pt-[5%] pb-[15%] rounded-[50%] bg-gradient-to-tr from-gray-200 via-emerald-50 to-gray-200 text-center">
                        <div class=" py-[65px] max-w-[400px] px-[85px] rounded-sm flex items-center justify-content-center bg-white text-start">
                                
                            <div>
                                <h6 class="text-primary text-sm uppercase font-bold mb-10 texr">OUR TESTIMONIALS</h6>
                                <span class="block mb-4 text-lg sm:text-xl md:text-[25px] font-semibold">Real
                                    Experiences,<br/>
                                    Real Growth</span>
                                <p class="text-sm md:text-lg font-light mb-10">
                                    How our services transformed their careers
                                </p>
                                <p>
                                    <button
                                        class="w-full px-10 py-3 bg-black text-gray-50 font-semibold md:text-lg hover:opacity-65">Get
                                        Started</button>
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <div class="-mt-[5%]">
                <div class="grid md:grid-cols-2 lg:grid-cols-3 place-content-center gap-5 ">
                    <div v-for="(item,index) in testimonials.slice(2)" :key="key" class="relative">
                        <div
                            class="max-w-sm bg-white text-black border border-neutral-100 px-5 py-5 inline-block rounded-sm">
                            <div class="flex text-start mb-5">
                                <Icon v-for="n in item.rating" :key="n" icon="mdi:star" class="text-yellow-400 text-xl" />
                            </div>
                            <div class="flex gap-5">
                                <img :src="`/images/${item.img}`"
                                class="size-16 rounded-full inline-block mb-2" />
                                <div>
                                    <h4 class="mb-0">{{ item.name }}</h4>
                                    <p class="mb-2">{{ item.role }}</p>
                                </div>
                            </div>
                            <p class="text-sm lg:text-[15px] font-light">{{ item.remark }}</p>
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
const testimonials=ref([
    {rating:5,img:'cf7aa090-74df-44da-b6a0-1dce8d288f02.jpg',name:'David.L',role:'Finance Analyst',remark:'What sets this apart is the dual focus, environmental impact and financial growth. I feel part of something bigger than just returns'},
    {rating:5,img:'df1382e7-e0f7-4c45-97f6-44b3dbe5505e.jpg',name:'Sophie M.',role:'Architect',remark:'The green projects I’ve invested in are well-managed and transparent. I can track both performance and environmental impact'},
    {rating:5,img:'e260b2c0-b3f7-4b98-8347-a6bfebb9b55e.jpg',name:'Anita.E',role:'Home Owner',remark:'The EV plan was straightforward, affordable, and aligned with my eco-friendly lifestyle. Highly recommend'},
    {rating:4,img:'edeaed66-9ef0-4985-ad64-11320a8ee6a1.jpg',name:'Leo P.',role:'Tech Professional',remark:'I never imagined I could invest directly in green mobility. Now, I’m earning while supporting the transition to clean transport'},
    {rating:5,img:'3b9fb00b-ca99-411e-9697-f88b94eb32ed.jpg',name:'James O.',role:'Private Investor',remark:'"From consultation to leveraging on EV, the team was transparent and efficient. It feels good as this completely changed my perspective'},
]);

</script>