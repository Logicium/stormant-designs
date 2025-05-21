<script setup lang="ts">

</script>

<template>
  <nav>
    <div class="med">STORMANT DESIGNS</div>
    <div class="links">
      <div>HOME</div>
      <div>ABOUT</div>
      <div>SERVICES</div>
      <div>REVIEWS</div>
    </div>
    <div class="button">CONTACT</div>
  </nav>
</template>

<style scoped lang="scss">

nav{
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  width: 100%;
  padding: 2rem;
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
  border: 2px solid black;
  border-radius:45px;
  padding: 0 2rem;
  align-items: center;
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

</style>