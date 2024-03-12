<template>
  <div class="hero shadow">
    <header class="container-fluid p-5">
      <div class="row h-100 align-items-center text-shadow">
        <div class="col offset-lg-1 col-lg-10">
          <div class="text-light">
            <h1 class="text-shadow mt-3">
              {{ about.name }}
              <span class="ms-md-3 me-md-3">|</span>
              {{ about.title }}
            </h1>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import { AppState } from '../AppState.js';

export default {
  computed: {
    about() {
      return AppState.about;
    }
  }
};
</script>

<style scoped lang="scss">
header {
  height: 33vh;
  font-size: 18pt;
  position: relative;
  background-color: #090219;
  z-index: 2;

  &::after {
    content: '';
    z-index: 1;
    background-image: url(../assets/img/logo.png);
    position: absolute;
    background-position: top;
    background-size: cover;
    pointer-events: none;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: .2;
  }

  h1 {
    animation: infinite 3s linear alternate hue-rotate;
  }

  @keyframes hue-rotate {
    0% {
      filter: hue-rotate(0deg) drop-shadow(2px 4px 6px #808000);
    }

    100% {
      filter: hue-rotate(360deg) drop-shadow(2px 4px 6px #80004d);
    }

  }
}
</style>
