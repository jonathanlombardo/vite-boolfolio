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
      <img :src="project.imgUrl" class="card-img-top" :alt="`${project.title} image`" />
      <div class="card-body gap-2">
        <div class="d-flex justify-content-between align-items-center">
          <h5 class="card-title">{{ project.title }}</h5>
          <span class="badge" :style="`background-color: ${project.type.color}`">{{ project.type.label }}</span>
        </div>
        <p class="card-text">{{ project.abstract }}</p>
        <router-link class="btn btn-primary" aria-current="page" :to="{ name: 'projects.show', params: { slug: project.slug } }">Show more</router-link>
        <div><strong>Author</strong>: {{ project.author }}</div>
      </div>
      <div class="card-footer">
        <div class="d-inline" v-if="project.technologies.length" v-for="(tech, index) in project.technologies">
          <span v-if="index"> | </span>
          <span class="fw-bold" :style="`color: ${tech.color}`">{{ tech.label }}</span>
        </div>
        <div class="d-inline" v-else>
          <i>No specific technologies</i>
        </div>
      </div>
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
