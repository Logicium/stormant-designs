<script setup lang="ts">

import data from "@/data/data.ts";
import StructureIcon from "@/components/icons/StructureIcon.vue";
import SustainableIcon from "@/components/icons/SustainableIcon.vue";
import ProductIcon from "@/components/icons/ProductIcon.vue";
import BlueprintIcon from "@/components/icons/BlueprintIcon.vue";
import ServiceCard from "@/components/cards/ServiceCard.vue";
</script>

<template>
  <div class="mobileServicesGrid">

    <div class="item left">
      <ServiceCard :title="data.services[0].title.toUpperCase()" :description="data.services[0].description">
        <BlueprintIcon/>
      </ServiceCard>
    </div>

    <div class="item top">
      <ServiceCard :title="data.services[1].title.toUpperCase()" :description="data.services[1].description">
        <StructureIcon/>
      </ServiceCard>
    </div>

    <div class="bgItem">
      <div class="emptyTop"/>
    </div>

    <div class="bgItem">
      <div class="emptyBottom"/>
    </div>

    <div class="item bottom">
      <ServiceCard :title="data.services[2].title.toUpperCase()" :description="data.services[2].description">
        <ProductIcon/>
      </ServiceCard>
    </div>

    <div class="item right">
      <ServiceCard :title="data.services[3].title.toUpperCase()" :description="data.services[3].description">
        <SustainableIcon/>
      </ServiceCard>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>