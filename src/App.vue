<script>
import ProjectList from "./components/projects/ProjectList.vue";
import { config } from "./store/index.js";

export default {
  data() {
    return {
      config,
      // ...
    };
  },

  props: {
    // ...
  },

  methods: {
    // ...
  },

  components: { ProjectList },

  created() {
    // ...
  },
};
</script>

<template>
  <div class="main-wrapper">
    <app-header />
    <main>
      <div class="container">
        <h1 class="text-center">{{ config.appName }}</h1>
        <project-list />
      </div>
    </main>
    <app-footer />
  </div>
</template>

<style lang="scss" scoped></style>
