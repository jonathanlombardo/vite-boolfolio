<script>
import ProjectCard from "./ProjectCard.vue";
import { config } from "../../store/index.js";
import axios from "axios";

export default {
  data() {
    return {
      // config,
      projects: [],
    };
  },

  props: {
    // ...
  },

  methods: {
    fetchProjects(endpoint = config.api.endpoint.projectIndex) {
      axios.get(`${config.api.baseUrl + endpoint}`).then((res) => {
        this.projects = res.data.data;
      });
    },
  },

  components: { ProjectCard },

  created() {
    this.fetchProjects();
  },
};
</script>

<template>
  <div class="row row-cols-5 g-3 py-5">
    <project-card v-for="project in projects" :project="project" />
  </div>
</template>

<style lang="scss" scoped></style>
