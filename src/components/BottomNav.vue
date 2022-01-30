<template>
  <div :class="['bg-white', 'py-4', 'px-6', 'text-gray-300', 'rounded-t-xl']">
    <div
      :class="['flex', 'justify-between', 'items-center', 'w-5/6', 'mx-auto']"
    >
      <div><font-awesome-icon icon="bolt" size="lg" /></div>
      <router-link to="/">
        <font-awesome-icon icon="home" size="lg" class="text-blue-900" />
      </router-link>
      <div><font-awesome-icon icon="chart-line" size="lg" /></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BottomNav',
});
</script>
