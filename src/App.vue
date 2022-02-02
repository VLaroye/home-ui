<template>
  <div class="global-container bg-gray-100 bg-opacity-70">
    <div class="top-nav">
      <top-nav />
    </div>
    <div class="content w-screen overflow-hidden">
      <router-view />
    </div>
    <div class="bottom-nav">
      <bottom-nav />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TopNav from './components/TopNav.vue';
import BottomNav from './components/BottomNav.vue';

export default defineComponent({
  name: 'Home',
  components: { TopNav, BottomNav },
});
</script>

<style lang="scss" scoped>
.global-container {
  display: grid;
  grid-template-rows: 4em auto 3.5em;
  grid-template-areas:
    'top-nav'
    'content'
    'bottom-nav';
  height: 100vh;

  & .top-nav {
    grid-area: top-nav;
  }

  & .content {
    grid-area: content;
  }

  & .bottom-nav {
    grid-area: bottom-nav;
  }
}
</style>
