<script setup lang="ts">

import {nextTick, onMounted, ref} from "vue";
import Logo from "@/assets/Logo.vue";
const changeColor = ref(false);

// Function to handle scroll events
const handleScroll = () => {
  changeColor.value = window.scrollY > 0;
};

// Set up scroll event listener when component is mounted
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

const scrollToRef = (id:string) => {
  nextTick(() => {
    console.log(window?.document?.getElementById(id));
    const element = window?.document?.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offset = id === 'home' ? 0 : 100;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  });
};


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
    <div class="button"  @click="scrollToRef('contact')">CONTACT</div>
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
}

.link{
  cursor: pointer;
  transition: 0.5s;
}

.link:hover{
  font-weight: 500;
  transition: 0.5s;
}

</style>
