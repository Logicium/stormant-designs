<script setup lang="ts">

import data from "@/data/data.ts";

const props = defineProps(['title','description']);

</script>

<template>

  <div class="inner">
    <div class="flex">
      <div class="title">{{title.toUpperCase()}}</div>
      <div class="icon"><slot/></div>
    </div>
    <div class="small">{{description}}</div>
  </div>

</template>

<style scoped lang="scss">

.title{
  font-weight: 500;
  width: 50%;
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


.flex{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

</style>