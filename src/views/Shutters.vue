<template>
  <div class="my-3 mx-3 flex gap-5">
    <div class="card w-1/2 flex flex-col items-center" @click="openShutters">
      <img :src="require(`../assets/icons/shutters/open.png`)" class="w-10" />
      <div class="mt-3">Tout ouvrir</div>
    </div>
    <div class="card w-1/2 flex flex-col items-center" @click="closeShutters">
      <img :src="require(`../assets/icons/shutters/close.png`)" class="w-10" />
      <div class="mt-3">Tout fermer</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { startScenario } from '../services/scenario';

export default defineComponent({
  name: 'Shutters',
  setup() {
    const openShutters = () => {
      startScenario(4);
    };

    const closeShutters = () => {
      startScenario(1);
    };

    return { openShutters, closeShutters };
  },
});
</script>
