<template>
  <Navbar v-if="!hideNavbar" />

  <main>
    <router-view />
  </main>

  <Foot v-if="!hideFooter" />
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { AppState } from './AppState';

export default {
  setup() {
    const route = useRoute()
    return {
      appState: computed(() => AppState),
      hideNavbar: computed(() => route.meta?.hideNavbar),
      hideFooter: computed(() => route.meta?.hideFooter)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
</style>
