<script setup lang="ts">

import data from "../data/data.ts";
import Logo from "@/assets/Logo.vue";
</script>

<template>
  <div class="footerWrap">

    <div class="footerTop">
      <div>
        <div class="visit">VISIT US</div>
        <div class="small">{{data.company.location}}</div>
      </div>
      <div class="logoWrap">
        <div class="logo"><Logo/></div>
        <div>STORMANT DESIGNS</div>
      </div>
    </div>

    <div class="footer">
      <div class="small">{{data.footer.copyright}}</div>
      <div class="small right">Made by Apotome Labs</div>
    </div>

  </div>
</template>

<style scoped lang="scss">


.footerWrap{
  padding: 2rem;
  display: flex;
  flex-direction: column;
  margin:0 2rem 2rem 2rem;
  background-color: black;
  color: #f8f4f0;
  border-radius: 45px;
  height:30vh;
}

.footerTop{
  display: flex;
  justify-content: space-between;
  align-items: end;
  height: 6vh;
  margin-top: auto;
  margin-bottom: 0.5vw;
}

.footer{
  margin-top: 0.5vw;
  display: flex;
  height: 6vh;
  gap: 2rem;
  justify-content: space-between;
  align-items: center;
  border-top: 2px solid #f8f4f0;
}

.logoWrap{
  text-align: center;
  transform: translateX(12px);
}

.logo{
  height: 80px;
  width: 180px;
}

.right{
  text-align: right;
}


</style>
