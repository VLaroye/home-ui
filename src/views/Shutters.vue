<template>
  <div class="my-3 mx-3 flex gap-5 overflow-hidden">
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
    <tabs v-model="selectedTab" class="tabs text-sm">
      <tab
        v-for="room in rooms"
        :val="room.val"
        :key="room.val"
        :label="room.name"
        indicator
        class="tab"
      />
    </tabs>
    <tab-panels v-model="selectedTab" animate>
      <tab-panel v-for="room in rooms" :val="room.val" :key="room.val">
        <div
          v-for="shutter in room.shutters"
          :key="shutter.id"
          class="card flex justify-between items-center mb-3"
        >
          <div class="text-lg bold">{{ shutter.name }}</div>
          <div>
            <div v-if="shutter.cmd.up" @click="() => executeCmd(shutter.cmd.up.id)">
              <font-awesome-icon icon="arrow-up" size="lg" class="text-gray-500 mb-3" />
            </div>
            <div v-if="shutter.cmd.stop" @click="() => executeCmd(shutter.cmd.stop.id)">
              <font-awesome-icon icon="stop" size="lg" class="text-gray-500 my-2" />
            </div>
            <div v-if="shutter.cmd.down" @click="() => executeCmd(shutter.cmd.down.id)">
              <font-awesome-icon icon="arrow-down" size="lg" class="text-gray-500 mt-3" />
            </div>
          </div>
        </div>
      </tab-panel>
    </tab-panels>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { Tabs, Tab, TabPanels, TabPanel } from 'vue3-tabs';
import { startScenario } from '../services/scenario';
import { executeCmd } from '../services/cmd';
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
      executeCmd,
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

  &::-webkit-scrollbar {
    width: 0;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
  }
}

.tab {
  white-space: nowrap;
  padding: 10px 0;
}

</style>
