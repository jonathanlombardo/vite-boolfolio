<script>
// import MyComp from './components/MyComp.vue';
import { config } from "../store/index.js";

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

  components: {},

  created() {
    // ...
  },
};
</script>

<template>
  <footer>
    <div class="container">
      <div>Created by Jonathan Lombardo</div>
      <div class="fs-3">
        <a :href="config.socialUrl.gitHub"><font-awesome-icon icon="fa-brands fa-github" /></a>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  color: white;
  background-color: rgb(52, 52, 52);
  .container {
    min-height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
