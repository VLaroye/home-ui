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
  <div class="my-3 mx-3">
    <tabs v-model="selectedTab">
      <tab label="Salon" val="salon" indicator />
      <tab label="Salle à manger" val="salle_a_manger" indicator />
    </tabs>
    <tab-panels v-model="selectedTab" animate>
      <tab-panel val="salon">Salon</tab-panel>
      <tab-panel val="salle_a_manger">Salle à manger</tab-panel>
    </tab-panels>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { Tabs, Tab, TabPanels, TabPanel } from 'vue3-tabs';
import { startScenario } from '../services/scenario';

export default defineComponent({
  name: 'Shutters',
  components: { Tabs, Tab, TabPanels, TabPanel },
  setup() {
    const state = reactive({
      selectedTab: 'salon',
    });
    const openShutters = () => {
      startScenario(4);
    };

    const closeShutters = () => {
      startScenario(1);
    };

    return { openShutters, closeShutters, ...toRefs(state) };
  },
});
</script>
