<script>
// import MyComp from './components/MyComp.vue';
// import {store} from './store/index.js'

export default {
  data() {
    return {
      // store,
      // ...
    };
  },

  props: {
    project: Object,
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
  <div class="col">
    <div class="card h-100">
      <img :src="project.imgUrl" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ project.title }}</h5>
        <p class="card-text">{{ project.abstract }}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
      <div class="card-footer"><strong>Author</strong>: {{ project.author }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  object-position: center;
}

.card-body {
  display: flex;
  flex-direction: column;

  a {
    margin-top: auto;
  }
}
</style>
