<template>
  <div v-if="experiences.length">
    <div class="row mb-5 ms-lg-3">
      <div class="col-lg-10">
        <div class="h1 mt-3">
          <div>
            My <span class="text-primary">Experience</span>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-4 d-none d-lg-block">
        <ul class="text-light p-2 list-group" style="top: 120px; position: sticky;">
          <li class="list-group-item active bg-secondary">
            <span class="badge">
              Experiences
            </span>
          </li>
          <li class="list-group-item" v-for="section in experiences">
            <span>
              {{ section.title }}
            </span>
          </li>
        </ul>
      </div>
      <div class="col-lg-7">
        <div v-for="section in experiences">
          <h2 class="md-m-bottom">
            <div>{{ section.title }} - {{ section.company }}</div>
          </h2>

          <div>
            <p v-if="section.dates">
              <strong>{{ section.dates }}</strong>
            </p>
            <Marked :value="section.summary" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { AppState } from '../AppState.js';

export default {
  setup() {
    return {
      experiences: computed(() => AppState.experiences)
    }
  }
};
</script>

<style lang="scss" scoped></style>
