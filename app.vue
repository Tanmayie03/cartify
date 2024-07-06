<template>
  <div class="font-poppins">
    <NuxtLayout>
      <Navbar />
      <NuxtPage />
      <Footer />
    </NuxtLayout>
  </div>
</template>

<script setup >
  import Navbar from './layouts/navbar.vue'
  // AOS.init();
</script>