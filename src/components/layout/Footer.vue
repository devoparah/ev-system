<template>
    <EndBanner/>
    <footer class="bg-gray-100">
        <div class="px-5 lg:px-[5%]">
            <div class="grid lg:grid-cols-12 gap-10 pt-20 text-sm lg:text-base">
                <div class="lg:col-span-6">
                    <div class="">
                        <h3 class="mb-10">Partner with Certas to stay up to date and leverage on EV Technology Innovations</h3>
                        <p>
                              <button
                                class="bg-black text-white border-2 text-base md:text-xl font-semibold px-10 py-3 hover:bg-gray-100 hover:text-black hover:opacity-95 transition duration-300">
                                Join Us
                            </button>
                        </p>       
                    </div>
                </div>
                <div class="lg:col-span-3">
                    <div>
                       
                        <p class="text-neutral-700 mb-1 text-base">Company Links</p>
                        <ul v-for="(link,index) in links" :key="index" class="font-light">
                            <li class="mb-1"><a :href="link.link">{{ link.name }}</a></li>
                        </ul>
                        
                    </div>
                </div>
                <div class="lg:col-span-3">
                    <div class="font-light mb-3">
                        <p class="text-neutral-700 mb-1 text-base font-normal">Quick Contact</p>
                        <p class="mb-2">
                            Elias Smiths vei 24, SANDVIKA, 1337, Norge<br/>                            
                        </p>
                        <p>support@certasenergy.com</p>
                    </div>
                    <div class="flex gap-3">

                    </div>
                </div>
            </div>
            
            <div class="grid lg:grid-cols-2 border-t border-b border-neutral-300 mt-10 py-10 gap-5">
                <div>
                     <p class="text-neutral-500 text-xs">
                        © 2025 Certas and/or its affiliates. All rights reserved.
                     </p>
                </div>
                <div>
                    <p class="text-neutral-500 text-xs">
                        Disclaimer: The availability of product, specifications, features, and configurations may vary by region. Certas reserves the right to update or modify offerings without prior notice. Vehicles, solar solutions, and investment opportunities shown may include optional or region-specific features not included in the standard package. All images, videos, and representations are for illustrative purposes only and may differ from actual products or services. This website is subject to Certas’s Terms of Use.
                    </p>
                </div>


            </div>
        </div>
    </footer>
</template>
<script setup>
import EndBanner from './EndBanner.vue';
import { ref } from 'vue';
const links=ref([
    { name:'Home', link:'./'},
    { name: 'About Certas', link: 'about' },
    { name: 'Terms', link: 'terms' },
]);
</script>
<style>
    
</style>