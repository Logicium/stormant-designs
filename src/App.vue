<script setup lang="ts">

import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="webapp">
    <Navbar/>
    <RouterView/>
    <Footer/>
  </div>
</template>

<style lang="scss" scoped>
.webapp {
  display: flex;
  flex-direction: column;
  position: relative;
}
</style>
