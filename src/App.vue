<script>
import ProjectIndex from "./pages/ProjectIndex.vue";
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

  components: { ProjectIndex },

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
        <project-index />
      </div>
    </main>
    <app-footer />
  </div>
</template>

<style lang="scss" scoped></style>
