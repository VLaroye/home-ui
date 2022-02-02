<template>
  <div class="card">
    <div class="columns-2 flex justify-between">
      <div class="w-full">
        <img
          v-if="conditionIcon"
          :src="require(`../assets/icons/weather/${conditionIcon}.png`)"
        />
      </div>
      <div class="w-full">
        <div>
          <span v-if="temperature !== null" class="flex">
            <img
              :src="require(`../assets/icons/weather/thermometer.png`)"
              class="w-5 mr-5"
            />
            {{ `${temperature} °C` }}</span
          >
        </div>
        <div>
          <span v-if="humidity !== null" class="flex my-4">
            <img
              :src="require(`../assets/icons/weather/hygrometer.png`)"
              class="w-5 mr-5"
            />
            {{ `${humidity}%` }}
          </span>
        </div>
        <div>
          <span v-if="windSpeed !== null" class="flex">
            <img
              :src="require(`../assets/icons/weather/wind.png`)"
              class="w-5 mr-5"
            />
            {{ `${windSpeed} km/h` }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, Ref, ref } from 'vue';
import { Conditions } from '../types/weather.types';
import executeCmd from '../services/cmd';

const conditions = {
  [Conditions.Thunderstorm]: {
    value: Conditions.Thunderstorm,
    icon: 'thunderstorm',
  },
  [Conditions.Drizzle]: {
    value: Conditions.Drizzle,
    icon: 'drizzle',
  },
  [Conditions.Rain]: {
    value: Conditions.Rain,
    icon: 'rain',
  },
  [Conditions.Snow]: {
    value: Conditions.Snow,
    icon: 'snow',
  },
  [Conditions.Atmosphere]: {
    value: Conditions.Atmosphere,
    icon: 'atmosphere',
  },
  [Conditions.Clear]: {
    value: Conditions.Clear,
    icon: 'clear',
  },
  [Conditions.Clouds]: {
    value: Conditions.Clouds,
    icon: 'clouds',
  },
};

export default defineComponent({
  name: 'Weather',

  setup() {
    const temperature: Ref<number | null> = ref(null);
    const humidity: Ref<number | null> = ref(null);
    const windSpeed: Ref<number | null> = ref(null);
    const condition: Ref<number | null> = ref(null);

    onMounted(async () => {
      temperature.value = await executeCmd(1059);
      humidity.value = await executeCmd(1060);
      windSpeed.value = await executeCmd(1062);
      condition.value = await executeCmd(1069);
    });

    const getConditionByNumber = (
      conditionNumber: number | null,
    ): Conditions | null => {
      if (!conditionNumber) {
        return null;
      }

      if (conditionNumber >= 200 && conditionNumber < 300) {
        return Conditions.Thunderstorm;
      }

      if (conditionNumber >= 300 && conditionNumber < 500) {
        return Conditions.Drizzle;
      }

      if (conditionNumber >= 500 && conditionNumber < 600) {
        return Conditions.Rain;
      }

      if (conditionNumber >= 600 && conditionNumber < 700) {
        return Conditions.Snow;
      }
      if (conditionNumber >= 701 && conditionNumber < 800) {
        return Conditions.Atmosphere;
      }

      if (conditionNumber === 800) {
        return Conditions.Clear;
      }

      if (conditionNumber >= 800) {
        return Conditions.Clouds;
      }

      return null;
    };

    const roundedWindSpeed = computed(
      () => windSpeed.value !== null && Math.round(windSpeed.value),
    );

    const conditionValue = computed(
      () =>
        (condition.value !== null && getConditionByNumber(condition.value)) ||
        null,
    );

    const conditionIcon = computed(
      () =>
        (conditionValue.value !== null &&
          conditions[conditionValue.value]?.icon) ||
        null,
    );

    return {
      temperature,
      humidity,
      windSpeed: roundedWindSpeed,
      conditionIcon,
    };
  },
});
</script>
