<script setup lang="ts">

import data from "@/data/data.ts";
</script>

<template>

  <div class="mobileImageGrid">

    <div class="image img2">
      <div class=" info">
        <div class="small">Based out of</div>
        <div>TRINIDAD, CO</div>
      </div>
    </div>

    <div class="card">
      <div>
        <div class="med">250+</div>
        <div>PROJECTS COMPLETED</div>
      </div>
      <div class="small">{{data.cta.projects}}</div>
    </div>

    <div class="image img1">
      <div class=" info">
        <div class="small">Engineer, Founder</div>
        <div>ZACH STORMANT</div>
      </div>
    </div>

    <div class="card">
      <div>
        <div class="med">500,000+</div>
        <div>SQUARE FEET OF BLUEPRINTS</div>
      </div>
      <div class="small">{{data.cta.scope}}</div>
    </div>

    <div class="image img3">
      <div class=" info">
        <div class="small">Office at</div>
        <div>EMERGENT CAMPUS</div>
      </div>
    </div>



  </div>

</template>

<style scoped lang="scss">

.image{
  background-size: cover;
  background-position: center;
  border-radius: 45px;
  background-color: white;
  filter: grayscale(1);
  transition: 1s;
  display: flex;
  flex-direction: column;
  color: transparent;
  padding: 2rem;
}

.mobileImageGrid{
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 1fr);
  height: 100%;
  grid-gap: 2rem;
}

.card{
  border: 2px solid white;
  border-radius: 45px;
  padding: 2rem;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.image:hover .info{
  opacity: 1;
  transition: 0.5s;
}

.image:hover{
  filter: grayscale(0);
  transition: 1s;
  color: black;
}

.img1{
  background-image: url("/public/zach.webp");
  justify-content: end;
  background-position: 0% 50%;
}

.img2{
  background-image: url("/public/fishers-peak.jpg");
}

.img3{
  background-image: url("/public/emergent-campus.jpg");
}


.info{
  background-color: white;
  border-radius: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: fit-content;
  padding: 0 2rem;
  min-height: 45px;
  opacity: 0;
  transition: 0.5s;
}

</style>