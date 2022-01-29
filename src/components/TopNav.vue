<template>
  <div
    :class="[
      'flex',
      'justify-between',
      'bg-white',
      'py-4',
      'px-6',
      'items-center',
      'text-gray-300',
      'rounded-b-xl',
      'shadow-xl',
    ]"
  >
    <div>
      <span v-if="user.picture"
        ><img :src="user.picture" class="profile-pic"
      /></span>
      <span v-else><font-awesome-icon icon="user" size="lg" /></span>
    </div>
    <div class="text-gray-600 font-bold message">
      <span v-if="user">Welcome home, {{ user.name }} !</span>
    </div>
    <div>
      <font-awesome-icon icon="bars" size="lg" />
    </div>
  </div>
</template>

<script lang="ts">
import { AuthPlugin } from '@/auth';
import { computed, defineComponent, inject } from 'vue';

export default defineComponent({
  name: 'TopNav',

  setup() {
    const $auth: AuthPlugin | undefined = inject('Auth');
    const user = computed(() => $auth?.user);

    return { user: user.value };
  },
});
</script>

<style lang="scss" scoped>
.message {
  font-family: 'Roboto Condensed', cursive;
}

.profile-pic {
  height: auto;
  width: 2em;
  border-radius: 50%;
}
</style>
