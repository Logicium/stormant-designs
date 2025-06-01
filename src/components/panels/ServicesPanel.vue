<script setup lang="ts">

import data from "@/data/data.ts";
import BlueprintIcon from "@/components/icons/BlueprintIcon.vue";
import StructureIcon from "@/components/icons/StructureIcon.vue";
import ServiceCard from "@/components/cards/ServiceCard.vue";
import SustainableIcon from "@/components/icons/SustainableIcon.vue";
import ProductIcon from "@/components/icons/ProductIcon.vue";
import MobileServicesGrid from "@/components/mobile/MobileServicesGrid.vue";
</script>

<template>
<div class="panelS" id="services">
  <div class="infoSection">
    <div class="med">{{data.hero.ctaText.toUpperCase()}}</div>
  </div>
  <div class="servicesGrid">

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

  <MobileServicesGrid class="mobile"/>

</div>
</template>

<style scoped lang="scss">

.infoSection{
  padding: 2rem 2rem 0 2rem;
  display: flex;
}

.panelS{
  background: #F2EFE7;
  grid-template-rows: auto 1fr;
}

.servicesGrid{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 50% 50%;
  height: 100%;
  padding: 2rem;
}

.title{
  font-weight: 500;
  width: 50%;
}

.item{
  background-color: white;
  padding: 2rem;
}

.bgItem{
  background-color: white;
}

.emptyBottom,.emptyTop{
  background-color: #F2EFE7;
  height: 100%;
  width: 100%;
}
.emptyBottom{
  border-top-right-radius: 45px;
}

.emptyTop{
  border-bottom-left-radius: 45px;
}

.left{
  border-top-left-radius: 45px;
  border-bottom-left-radius: 45px;
}

.right{
  border-top-right-radius: 45px;
  border-bottom-right-radius: 45px;
}
.bottom{
  border-bottom-left-radius: 45px;
}

.top{
  border-top-right-radius: 45px;
}

.flex{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media (max-width: 480px) {
  .servicesGrid{
    display: none;
  }

  .panelS{
    height: 100%;
  }
}

@media (min-width: 480px) {
  .mobile{
    display: none;
  }
}

</style>