<script>
import { config } from "../store/index.js";
import axios from "axios";

export default {
  data() {
    return {
      project: null,
    };
  },

  methods: {
    fetchProjects(endpoint = config.api.baseUrl + config.api.endpoint.projectShow(this.$route.params.slug)) {
      axios.get(`${endpoint}`).then((res) => {
        if(!res.data.success) this.$router.push({name: 'notfound'});
        this.project = res.data.project;
      });
    },
  },

  created() {
    this.fetchProjects();
  },
};
</script>

<template>
  <div class="container">  
  <div v-if="project">
    <div class="mb-5 d-flex justify-content-center align-items-center gap-3">
      <h1>{{ project.title }}</h1>
      <span class="badge" :style="`background-color: ${project.type.color}`">{{ project.type.label }}</span>
    </div>
    <div class="row">
      <div class="col-6">
        <img :src="project.imgUrl" alt="" />
      </div>
      <div class="col-6 d-flex flex-column">
        <p>{{ project.description }}</p>
        <a v-if="project.git_hub" :href="project.git_hub" class="btn btn-primary">Go to GitHubRepo</a>
        <p class="mt-auto text-end"><strong>Author: </strong>{{ project.author }}</p>
        <p class="text-end">
          <strong>Technologies: </strong>
          <div class="d-inline" v-if="project.technologies.length" v-for="(tech, index) in project.technologies">
            <span v-if="index"> | </span>
            <span class="fw-bold" :style="`color: ${tech.color}`">{{ tech.label }}</span>
          </div>
          <div class="d-inline" v-else>
            <i>No specific technologies</i>
          </div>
        </p>
      </div>
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped></style>
