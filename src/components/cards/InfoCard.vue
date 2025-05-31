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
    <div class="infoRow">
      <div class="med name">{{title}}</div>
      <div class="descWrap half">
        <transition name="grow">
          <div class="desc" v-if="toggle">{{content}}</div>
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
    </div>

    <transition name="grow">
      <div class="mobileDesc" v-if="toggle">
        {{content}}
      </div>
    </transition>

  </div>
</template>

<style scoped lang="scss">

.infoSection{
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid black;
}

.infoRow{
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.med{
  z-index: 10;
  bottom: 0;
}

.descWrap{
  display: flex;
  justify-content: end;
}

.mobileDesc,.desc{
  margin-bottom: 1rem;
}

.button{
  margin-left: 2rem;
}

@media (max-width: 480px) {
  .desc{
    display: none;
  }
  .name{
    width: 100%;
  }
}

@media (min-width: 480px) {
  .mobileDesc{
    display: none;
  }
}


</style>