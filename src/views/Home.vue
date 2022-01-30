<template>
  <div class="my-3 mx-3">
    <weather />
  </div>
  <div class="my-3 mx-3 flex gap-5">
    <router-link
      to="/shutters"
      :class="[
        'card',
        'overflow-hidden',
        'text-center',
        'relative',
        'w-1/2',
        'bg-purple',
        'text-white',
      ]"
    >
      <div class="bold font-extrabold text-lg">Volets</div>
    </router-link>
    <div class="card w-1/2 bg-deep-purple text-white text-center">
      <div class="bold font-extrabold text-lg">Chauffages</div>
    </div>
  </div>
  <div class="my-5 mx-3 flex gap-5">
    <div class="card w-1/2 bg-blue text-white text-center">
      <div class="bold font-extrabold text-lg">Lumières</div>
    </div>
    <div class="card w-1/2 bg-cyan text-white text-center">
      <div class="bold font-extrabold text-lg">Aspirateur</div>
    </div>
  </div>
  <div class="my-5 mx-3 flex gap-5">
    <div class="card w-1/2 bg-teal text-white text-center">
      <div class="bold font-extrabold text-lg">TV</div>
    </div>
    <div class="card w-1/2 text-white"></div>
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
