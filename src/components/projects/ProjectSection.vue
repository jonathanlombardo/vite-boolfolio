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
  <section class="">
    <div class="container py-4">
      <div class="row g-4">
        <div class="col-6 img-wrapper">
          <img :src="project.imgUrl" class="card-img-top" :alt="`${project.title} image`" />
          <span class="badge" :style="`background-color: ${project.type.color}`">{{ project.type.label }}</span>
        </div>
        <div class="col-6 d-flex flex-column justify-content-center">
          <div class="d-flex justify-content-between align-items-center">
            <h2 class="card-title">{{ project.title }}</h2>
          </div>
          <p>{{ project.abstract }}</p>
        </div>
      </div>
    </div>

    <!-- <div class="card h-100">
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
    </div> -->
  </section>
</template>

<style lang="scss" scoped>
// section {
//   background-color: v-bind("project.type.color");
// }

.img-wrapper {
  position: relative;
  img {
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
    object-position: center;
    border-radius: 10px;
  }
  span.badge {
    position: absolute;
    top: 5px;
    right: 0;
    font-size: 1em;
  }
}

.card-body {
  display: flex;
  flex-direction: column;

  a {
    margin-top: auto;
  }
}
</style>
