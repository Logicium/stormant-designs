<script setup lang="ts">

import ParticleCard from "@/components/cards/ParticleCard.vue";
import data from "../../data/data.ts";
import PlusIcon from "@/components/icons/PlusIcon.vue";
import {ref} from "vue";
import InfoCard from "@/components/cards/InfoCard.vue";

const showAbout = ref(true);
const showMission = ref(false);
const showValues = ref(false);

const showAboutClick = function (){
  showAbout.value = !showAbout.value;
  showMission.value = false;
  showValues.value = false;
}

const showMissionClick = function (){
  showMission.value = !showMission.value;
  showAbout.value = false;
  showValues.value = false;
}

const showValuesClick = function (){
  showValues.value = !showValues.value;
  showAbout.value = false;
  showMission.value = false;
}

</script>

<template>

  <div class="panel" id="home">
    <div class="heroSection">
      <div class="heroText">

        <div class="med half">{{data.company.subTagline}}</div>
        <div class="button cta">BOOK A MEETING</div>
      </div>
      <ParticleCard id="1"/>
    </div>
    <div class="infoWrap" id="about">

      <InfoCard
          :title="data.about.title"
          :content="data.about.content"
          :show-click="showAboutClick"
          :toggle="showAbout"
      />

      <InfoCard
          :title="data.mission.title"
          :content="data.mission.content"
          :show-click="showMissionClick"
          :toggle="showMission"
      />

      <InfoCard
          :title="data.values.title"
          :content="data.values.content"
          :show-click="showValuesClick"
          :toggle="showValues"
      />

    </div>
  </div>
</template>

<style scoped lang="scss">

.heroSection{
  height: 60vh;
  width: 100%;
  position: relative;
  color: white;
  //background: linear-gradient(45deg, rgba(114, 164, 140, 1.000) 0.000%, rgba(120, 170, 158, 1.000) 16.667%, rgba(137, 195, 203, 1.000) 33.333%, rgba(164, 231, 255, 1.000) 50.000%, rgba(193, 255, 255, 1.000) 66.667%, rgba(220, 255, 255, 1.000) 83.333%, rgba(239, 255, 255, 1.000) 100.000%)
  //background: linear-gradient(45deg, rgba(35, 212, 253, 1.000) 0.000%, rgba(58, 152, 240, 1.000) 50.000%, rgba(183, 33, 255, 1.000) 100.000%)
  background: linear-gradient(45deg, rgba(99, 85, 111, 1.000) 0.000%, rgba(85, 100, 121, 1.000) 8.333%, rgba(73, 115, 132, 1.000) 16.667%, rgba(64, 129, 145, 1.000) 25.000%, rgba(56, 142, 159, 1.000) 33.333%, rgba(51, 153, 173, 1.000) 41.667%, rgba(48, 163, 187, 1.000) 50.000%, rgba(49, 171, 201, 1.000) 58.333%, rgba(52, 177, 214, 1.000) 66.667%, rgba(58, 181, 226, 1.000) 75.000%, rgba(66, 184, 236, 1.000) 83.333%, rgba(77, 184, 245, 1.000) 91.667%, rgba(89, 182, 251, 1.000) 100.000%)
}

.infoWrap{
  padding: 2rem;
  display: grid;
  grid-gap: 1rem;
}

.infoSection{
  display: flex;
  border-bottom: 2px solid black;
}

.med{
  z-index: 10;
  bottom: 0;
}

.button{
  margin-left: auto;
}

.button.cta{
  margin-left: 0;
  background-color: black;
  border-radius: 45px;
  padding: 0 2rem;
  margin-top: 2rem;
  position: relative;
  z-index: 10;
}

.hidden{
  opacity: 0;
  visibility: hidden;
  transition: 1s;
}

.desc{
 margin-right: 2rem;
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

.logo{
  background-image: url("../../assets/logo.png");
  background-size: contain;
  background-repeat: no-repeat;
  width: 200px;
  height: 200px;
}

</style>