<template>
  <div class="my-3 mx-3">
    <weather />
  </div>
  <div class="my-3 mx-3 flex gap-5">
    <div class="card w-1/2 bg-green-700 bg-opacity-70 text-white">Volets</div>
    <div class="card w-1/2 bg-red-800 bg-opacity-70 text-white">Chauffages</div>
  </div>
  <div class="my-5 mx-3 flex gap-5">
    <div class="card w-1/2 bg-yellow-700 bg-opacity-70 text-white">Lumières</div>
    <div class="card w-1/2 bg-blue-800 bg-opacity-70 text-white">Appareils</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Weather from '../components/Weather.vue';

export default defineComponent({
  name: 'Home',
  components: { Weather },
});
</script>
