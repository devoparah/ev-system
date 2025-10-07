<template lang="">
    <header class="montserrat-x fixed top-0 w-full z-3">
        <div class="bg-black text-[12px] md:text-[16px] text-gray-100 py-3 px-5 lg:px-[5%] flex lg:flex items-center place-content-end">
            <span class="pr-5 hidden"><Icon class="" icon="oui:ws-search" /></span>
            <span class="hidden">|</span>
            <div class="flex gap-5 items-center px-5 font-bold hover:bg-white hover:text-black cursor-pointer"><Icon class="" icon="gridicons:grid" /><text>Login</text></div>
        </div>
        
        <div class="bg-neutral-950 text-white flex justify-between py-3 px-5 lg:px-[5%] gap-10 items-center">
            <a href="./"><div>
                <span class="text-2xl md:text-3xl font-black text-white uppercase">Certasynergy</span>
            </div></a>
            <nav class="hidden lg:flex justify-start items-center space-x-8 text-lg font-semibold">
                <div v-for="item in Menu.slice(0,3)" :key="item.name">
                    <a :href="item.link" class="hover:text-primary transition ease-linear">
                        {{ item.name }}
                    </a>
                </div>
            </nav>
            <div class="hidden lg:flex gap-5 items-center ml-auto">
                <span><Icon class="text-xl" icon="mdi:handshake" /></span>
                <text>Partner with us</text>
                <span><Icon class="text-xl" icon="mdi:earth" /></span>
            </div>
            <div class="lg:hidden">
                <button class="block focus:outline-none" @click="isMenuOpen = !isMenuOpen">
                    <Icon v-if="isMenuOpen" icon="material-symbols:close"
                        class="text-3xl lg:text-black text-white" />
                    <Icon v-else icon="material-symbols:menu" class="text-3xl lg:text-black text-white" />
                </button>
            </div>
        </div>
        <nav class="lg:hidden"
                :class="[`bg-gray-100 text-gray-950 fixed top-[98px] py-2 w-full ${isMenuOpen ? 'block' : 'hidden'} `]">
                <div v-for="item in Menu" :key="item.name" class="w-full border-b border-gray-300"
                    @click="isMenuOpen = false">
                    <a :href="item.link"
                        class="block py-4 px-5 text-gray-950 hover:bg-primary hover:text-gray-950/50 transition ease-linear text-sm font-semibold">
                        {{ item.name }}
                    </a>

                </div>
                <div>
                    <a class="block py-4 px-5 text-gray-950 hover:bg-primary hover:text-gray-950/50 transition ease-linear text-sm font-semibold">
                        <button class="px-10 py-3 bg-black text-gray-50 font-semibold md:text-bold">Get Started</button>
                    </a>
                </div>
            </nav>
    </header>
</template>
<script setup>
import { Icon } from "@iconify/vue";
import { ref } from "vue";
const isMenuOpen = ref(false);
const Menu = ref([
    { name: 'Home', link: './' },
    { name: 'About Certas', link: 'about' },
    { name: 'Terms', link: 'terms' },
    { name: 'Login', link: '#' },

]);
</script>
<style lang="">

</style>