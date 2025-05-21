<script setup lang="ts">

import data from "@/data/data.ts";
import BlueprintIcon from "@/components/icons/BlueprintIcon.vue";
import StructureIcon from "@/components/icons/StructureIcon.vue";
</script>

<template>
<div class="panel">
  <div class="infoSection">
    <div class="med">{{data.hero.ctaText.toUpperCase()}}</div>
  </div>
  <div class="servicesGrid">
    <div class="item left">
      <div class="inner">
        <div class="flex">
          <div class="title">{{data.services[0].title.toUpperCase()}}</div>
          <div class="icon"><BlueprintIcon/></div>
        </div>
        <div class="small">{{data.services[0].description}}</div>
      </div>
    </div>
    <div class="item top">
      <div class="inner">
        <div class="flex">
          <div class="title">{{data.services[1].title.toUpperCase()}}</div>
          <div class="icon"><StructureIcon/></div>
        </div>
        <div class="small">{{data.services[1].description}}</div>
        <div></div>
      </div>
    </div>

    <div class="bgItem">
      <div class="emptyTop"/>
    </div>
    <div class="bgItem">
      <div class="emptyBottom"/>
    </div>

    <div class="item bottom">
      <div class="inner">
        <div class="">{{data.services[2].title.toUpperCase()}}</div>
        <div>{{data.services[2].description}}</div>
        <div></div>
      </div>
    </div>
    <div class="item right">
      <div class="inner">
        <div class="">{{data.services[3].title.toUpperCase()}}</div>
        <div>{{data.services[3].description}}</div>
        <div></div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped lang="scss">

.infoSection{
  padding: 2rem;
  display: flex;
}

.panel{
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

.icon{
  height: 75px;
  width: 75px;
}

.inner{
  border-radius: 45px;
  height: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #F2EFE7;
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

</style>