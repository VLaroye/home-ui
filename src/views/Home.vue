<template>
  <div class="my-3 mx-3">
    <weather />
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
