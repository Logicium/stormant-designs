<script setup lang="ts">

import ParticleCard from "@/components/ParticleCard.vue";
import data from "../data/data.ts";
</script>

<template>

  <div class="panel">
    <div class="heroSection">
      <div class="heroText">
        <div class="med">{{data.company.subTagline}}</div>
      </div>

      <ParticleCard/>
    </div>
  </div>


</template>

<style scoped lang="scss">

.heroSection{
  height: 60vh;
  width: 100%;
  position: relative;
  background: linear-gradient(45deg, rgba(114, 164, 140, 1.000) 0.000%, rgba(120, 170, 158, 1.000) 16.667%, rgba(137, 195, 203, 1.000) 33.333%, rgba(164, 231, 255, 1.000) 50.000%, rgba(193, 255, 255, 1.000) 66.667%, rgba(220, 255, 255, 1.000) 83.333%, rgba(239, 255, 255, 1.000) 100.000%)
  //background: linear-gradient(45deg, rgba(35, 212, 253, 1.000) 0.000%, rgba(58, 152, 240, 1.000) 50.000%, rgba(183, 33, 255, 1.000) 100.000%)
}

.med{
  width: 60%;
  z-index: 10;
  bottom: 0;
}

.heroText{
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: end;
  flex-direction: column;
  padding: 2rem;
}

</style>