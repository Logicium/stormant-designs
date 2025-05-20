<script setup lang="ts">

import ParticleCard from "@/components/ParticleCard.vue";
import data from "../data/data.ts";
</script>

<template>

  <div class="panel">
    <div class="heroSection">
      <div class="med">{{data.company.subTagline}}</div>
      <ParticleCard/>
    </div>
  </div>


</template>

<style scoped lang="scss">

.heroSection{
  height: 60vh;
  width: 100%;
  position: relative;
}

.med{
  width: 60%;
  position: absolute;
  z-index: 10;
  bottom: 0;
}


</style>