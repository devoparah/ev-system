<template>
    <swiper :modules="modules" :slides-per-view="1" :space-between="50" navigation :pagination="{ clickable: true }"
        :autoplay="{ delay: 15000, disableOnInteraction: false }" loop="true" @swiper="onSwiper"
        @slideChange="onSlideChange" class="mySwiper">
        <swiper-slide data-swiper-autoplay="20000" >
            <div class="relative w-full h-screen text-gray-50">
                <!-- Background Video -->
                <video autoplay muted loop playsinline class="absolute top-0 left-0 w-full h-full object-cover z-0">
                    <source src="/videos/family-cutdown-.mp4" type="video/mp4" />
                </video>
                <div class="relative z-10 w-full lg:w-3/4 h-full px-5 lg:px-[5%] flex flex-wrap items-center justify-start p-4">
                    <div>
                        <h2 class="mb-4">ENERGY EVOLUTION</h2>
                        <p class="text-sm md:text-lg mb-6 text-neutral-100">AI-powered initiative that seamlessly
                            integrates the physical
                            and digital worlds, designed to unlock new pathways to financial freedom and create lasting
                            economic opportunities for people across the globe.
                        </p>
                        <p>
                            <button
                                class="bg-transparent border-2 font-semibold px-6 py-3 rounded-sm hover:bg-gray-100 hover:text-black hover:opacity-50 transition duration-300">
                                Get Started
                            </button>
                        </p>
                    </div>
                </div>
            </div>

        </swiper-slide>
        <swiper-slide>
            <div class="w-full h-screen text-gray-50"
                style="background: url('/images/slide-36.jpg') no-repeat center center; background-size: cover;">
                <div class="w-full lg:w-3/4 h-full px-5 lg:px-[5%] flex flex-wrap items-center justify-start p-4">
                    <div>
                        <h2 class="mb-4">GREEN ECONOMY</h2>
                        <p class="text-sm md:text-lg mb-6 text-neutral-100">Transforming industries through eco-friendly investments that fuel long-term prosperity and innovation.
                        </p>
                        <p>
                            <button
                                class="bg-transparent border-2 font-semibold px-6 py-3 rounded-sm hover:bg-gray-100 hover:text-black hover:opacity-50 transition duration-300">
                                Get Started
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="w-full h-screen text-gray-50"
                style="background: url('/images/slide-39.png') no-repeat center center; background-size: cover;">
                <div class="w-full lg:w-3/4 h-full px-5 lg:px-[5%] flex flex-wrap items-center justify-start p-4">
                    <div>
                        <h2 class="mb-4">DIGITAL TRANSFORMATION</h2>
                        <p class="text-sm md:text-lg mb-6 text-neutral-100">Empowering the future through digital
                            transformation, automation, and electrification—turning every moment into
                            limitless possibilities
                        </p>
                        <p>
                            <button
                                class="bg-transparent font-semibold border-2 px-6 py-3 rounded-sm hover:bg-gray-100 hover:text-black hover:opacity-50 transition duration-300">
                                Get Started
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </swiper-slide>
        ...
    </swiper>
</template>
<script>
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import Swiper styles
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange,
            modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
        };
    },
};
</script>
<style>
.swiper,
.swiper-wrapper,
.swiper-slide {
  height: 89vh; /* full viewport height */
}

.swiper-button-prev,
.swiper-button-next {
    color: white;
    /* or any color */
    background: rgba(0, 0, 0, 0.5);
    /* add a background */
    border-radius: 50%;
    padding: 10px;
}
.swiper-pagination-bullet {
  background-color: #d1d5db; /* gray-300 for inactive */
  opacity: 1;
}

.swiper-pagination-bullet-active {
  background-color: #047857; /* blue-600 for active */
}
</style>