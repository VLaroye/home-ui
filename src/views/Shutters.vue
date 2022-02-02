<template>
  <div class="my-3 mx-3 flex gap-5 w-screen overflow-hidden">
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
    <tabs v-model="selectedTab" class="tabs text-sm px-3">
      <tab
        v-for="room in rooms"
        :val="room.val"
        :key="room.val"
        :label="room.name"
        indicator
        class="tab"
      />
    </tabs>
    <tab-panels v-model="selectedTab" animate class="mt-2">
      <tab-panel v-for="room in rooms" :val="room.val" :key="room.val">
        <div v-for="shutter in room.shutters" :key="shutter.id" class="card">
          {{ shutter.name }}
        </div>
      </tab-panel>
    </tab-panels>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { Tabs, Tab, TabPanels, TabPanel } from 'vue3-tabs';
import { startScenario } from '../services/scenario';
import { Room } from '../types/rooms.types';
import roomsJSON from '../config/rooms.json';

export default defineComponent({
  name: 'Shutters',
  components: { Tabs, Tab, TabPanels, TabPanel },
  setup() {
    // eslint-disable-next-line
    const rooms: Room[] = roomsJSON.rooms;
    const state = reactive({
      selectedTab: rooms[0].val,
    });

    const openShutters = () => {
      startScenario(4);
    };

    const closeShutters = () => {
      startScenario(1);
    };

    return {
      openShutters,
      closeShutters,
      rooms,
      ...toRefs(state),
    };
  },
});
</script>

<style lang="scss" scoped>
.tabs {
  flex-wrap: nowrap;
  width: 100vw;
  overflow-x: auto;
}
.tab {
  white-space: nowrap;
}
</style>
