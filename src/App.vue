<script setup>
  import Header from './components/layout/Header.vue'; 
  import Footer from '@/components/layout/Footer.vue';
</script>

<template>
   <Header/>
   <div class="mt-[98px] lg:mt-[105px]">
      <router-view />
   </div>
 
  <Footer />
  
</template>

