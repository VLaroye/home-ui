<template>
  <div class="card">
    <div>icon meteo</div>
    <div>
      <span v-if="temperature !== null">{{ `${temperature} °C` }}</span>
    </div>
    <div>
      <span v-if="humidity !== null">{{ `${humidity}%` }}</span>
    </div>
    <div>
      <span v-if="windSpeed !== null">{{ `${windSpeed} km/h` }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, Ref, ref } from 'vue';
import executeCmd from '../services/cmd';

export default defineComponent({
  name: 'Weather',

  setup() {
    const temperature: Ref<number | null> = ref(null);
    const humidity: Ref<number | null> = ref(null);
    const windSpeed: Ref<number | null> = ref(null);

    onMounted(async () => {
      temperature.value = await executeCmd(1059);
      humidity.value = await executeCmd(1060);
      windSpeed.value = await executeCmd(1062);
    });

    const roundedWindSpeed = computed(
      () => windSpeed.value !== null && Math.round(windSpeed.value),
    );

    return { temperature, humidity, windSpeed: roundedWindSpeed };
  },
});
</script>
