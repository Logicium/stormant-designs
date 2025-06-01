<script setup lang="ts">

import {onMounted, ref} from "vue";
import Logo from "@/assets/Logo.vue";
import { scrollToRef } from "@/utils/window.utils";
import MenuIcon from "@/components/icons/MenuIcon.vue";
import CloseIcon from "@/components/icons/CloseIcon.vue";
import IconToggle from "@/components/cards/IconToggle.vue";
const changeColor = ref(false);

// Function to handle scroll events
const handleScroll = () => {
  // Only update changeColor based on scroll if menu is not active
  if (!toggleMenu.value) {
    changeColor.value = window.scrollY > 0;
  }
};

// Set up scroll event listener when component is mounted
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

const toggleMenu = ref(false);

const toggleMenuClick = function (){
  toggleMenu.value = !toggleMenu.value;
  // Toggle colorChange class when menu is shown, or revert to scroll-based state when hidden
  if (toggleMenu.value) {
    changeColor.value = true;
  } else {
    // When menu is closed, set color based on current scroll position
    changeColor.value = window.scrollY > 0;
  }
}

const resetNav = function (){
  toggleMenu.value = false;
  changeColor.value = window.scrollY > 0;
}


</script>

<template>
  <nav :class="{colorChange: changeColor}">
    <div class="logoWrap"><div class="logo"><Logo/></div>STORMANT DESIGNS</div>
    <div class="links" :class="{changeBorder:changeColor}">
      <div class="link" @click="scrollToRef('home')">HOME</div>
      <div class="link" @click="scrollToRef('about')">ABOUT</div>
      <div class="link" @click="scrollToRef('services')">SERVICES</div>
      <div class="link" @click="scrollToRef('company')">COMPANY</div>
    </div>

    <transition name="fade">
      <div class="mobileLinks" v-if="toggleMenu">
        <div class="link" @click="scrollToRef('home');resetNav()">HOME</div>
        <div class="link" @click="scrollToRef('about');resetNav()">ABOUT</div>
        <div class="link" @click="scrollToRef('services');resetNav()">SERVICES</div>
        <div class="link" @click="scrollToRef('company');resetNav()">COMPANY</div>
        <div class="link" @click="scrollToRef('contact');resetNav()">CONTACT</div>
      </div>
    </transition>

    <div class="button menu" @click="toggleMenuClick">
      <IconToggle :is-active="toggleMenu">
        <template #inactive><MenuIcon/></template>
        <template #active><CloseIcon/></template>
      </IconToggle>
    </div>

    <div class="button cta"  @click="scrollToRef('contact')">CONTACT</div>
  </nav>
</template>

<style scoped lang="scss">

nav{
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 11;
  width: 100%;
  padding: 1rem 2rem;
  transition: 1s;
  height: 100px;
  max-height: 100px;
  color: white;
}

.colorChange{
  background-color: white;
  transition: 1s;
  color: black;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2);
}
.med{
  font-size: 2rem;
  line-height: 1.2;
  width: 200px;
}

.links{
  display: flex;
  gap: 2rem;
  height: 45px;
  border: 2px solid white;
  border-radius:45px;
  padding: 0 2rem;
  align-items: center;
}

.changeBorder{
  transition: 1s;
  color: black;
  border: 2px solid black;
}

.button{
  height: 45px;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  background-color: black;
  border-radius:45px;
  cursor: pointer;
  color: white;
}

.logo{
  height: 80px;
  width: 180px;
  margin-top: -20px;
}

.logoWrap{
  text-align: center;
  position: relative;
  z-index: 1;
}

.link{
  cursor: pointer;
  transition: 0.5s;
}

.link:hover{
  font-weight: 500;
  transition: 0.5s;
}

.mobileLinks{
  background-color: white;
  width: 100%;
  position: absolute;
  text-align: center;
  color: black;
  top: 0;
  padding-top: calc(100px + 2rem);
  padding-bottom: 2rem;
  margin-left: -2rem;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2);
}

.menu{
  z-index: 1;
}

@media (max-width: 480px) {
  .links,.cta{
    display: none;
  }
  .link{
    font-size: 2rem;
  }
}

@media (min-width: 480px) {
  .menu,.mobileLinks{
    display: none;
  }
}



</style>
