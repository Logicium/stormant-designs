<script setup lang="ts">

import PlusIcon from "@/components/icons/PlusIcon.vue";
import MinusIcon from "@/components/icons/MinusIcon.vue";
import IconToggle from "@/components/cards/IconToggle.vue";

const props = defineProps({
  showClick: {
    type: Function,
    required: true,
  },
  toggle:{
    type: Boolean
  },
  title:{
    type: String,
  },
  content:{
    type: String,
  }

});


</script>

<template>
  <div class="infoSection">
    <div class="med half">{{title}}</div>
    <transition name="grow">
      <div class="desc half" v-if="toggle">{{content}}</div>
    </transition>
    <div class="button round" @click="showClick()">
      <IconToggle :is-active="toggle">
        <template #inactive>
          <PlusIcon/>
        </template>
        <template #active>
          <MinusIcon/>
        </template>
      </IconToggle>
    </div>


  </div>
</template>

<style scoped lang="scss">

.infoSection{
  display: flex;
  border-bottom: 2px solid black;
}

.med{
  z-index: 10;
  bottom: 0;
}

.desc{
  margin-right: 2rem;
}

.button{
  margin-left: auto;
}

</style>