<template>
  <nav class="navbar fixed-top navbar-expand-lg transition p-3"
    :class="scrolled ? 'navbar-light bg-light shadow scrolled' : ''">
    <router-link class="d-flex align-items-center" to="/">
      <img height="100" width="100" src="../assets/img/logo.png" alt="nav Logo" class="drop-shadow"
        :class="scrolled ? '' : ''" />
      <p class="fs-4 m-0 ms-2 text-primary" :class="scrolled ? 'text-dark' : 'text-shadow text-white'">
        {{ name }}
      </p>
    </router-link>
    <button @click="mobile = !mobile" class="navbar-toggler" type="button" data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse text-dark" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto d-flex align-items-end" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent">
        <li class="nav-item" v-for="link in pages" :key="link.to.name">
          <router-link class="nav-link text-uppercase" :to="link.to">
            {{ link.to.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { onBeforeUnmount, onMounted, ref } from 'vue';
export default {
  setup() {
    const scrolled = ref(window.scrollY > 100)
    function onScroll() {
      scrolled.value = window.scrollY > 100;
    }
    onMounted(() => {
      window.addEventListener("scroll", onScroll);
    })

    onBeforeUnmount(() => {
      window.removeEventListener("scroll", onScroll);
    })

    return {
      scrolled,
      pages: [ ]
    }
  }
};
</script>

<style scoped lang="scss">
.navbar {
  transition: background .35s linear;
  background-color: #00000000;
}

.nav-link {
  display: inline-block;
  border-bottom: 2px solid transparent;
  transition: all 0.2s linear;
  margin: 0 0.5rem;
}

.nav-link.router-link-exact-active {
  border-bottom: 2px solid var(--primary);
}

.drop-shadow {
  filter: drop-shadow(2px 4px 6px #00000055);
}
</style>
