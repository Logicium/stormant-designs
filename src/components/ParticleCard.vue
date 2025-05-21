<script setup lang="ts">
import { loadFull } from "tsparticles";
import { ref } from 'vue';
import configs from "@tsparticles/configs";
import options from "../config/particlesjs-config.json"
const props = defineProps(['id'])

// Create a reference to the particles container
const particlesContainer = ref(null);

// Use a predefined configuration from @tsparticles/configs
const particlesOptions = options;

// Initialize the tsparticles engine
const particlesInit = async (container: any) => {
  console.log("Particles container loaded:", container);
};
</script>

<template>
  <div class="particle-card">
    <div class="content">
      <slot></slot>
    </div>
    <vue-particles
      class="tsparticles"
      :id="`tsparticles-${id}`"
      @particles-loaded="particlesInit"
      :options="particlesOptions"
    />
  </div>
</template>

<style scoped lang="scss">
.particle-card {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.tsparticles {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: transparent; // Transparent background
  z-index: 1;
}

.content {
  position: absolute;
  padding: 2rem;
  z-index: 2;
  width: 100%;
  height: 100%;
}
</style>
