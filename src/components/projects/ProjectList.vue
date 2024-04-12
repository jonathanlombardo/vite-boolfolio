<script>
import ProjectCard from "./ProjectCard.vue";
import CollectionPaginator from "../partials/CollectionPaginator.vue";
import { config } from "../../store/index.js";
import axios from "axios";

export default {
  data() {
    return {
      // config,
      projects: [],
      prjCollection: [],
    };
  },

  props: {
    // ...
  },

  methods: {
    fetchProjects(endpoint = config.api.baseUrl + config.api.endpoint.projectIndex) {
      axios.get(`${endpoint}`).then((res) => {
        this.projects = res.data.data;
        this.prjCollection = res.data;
      });
    },
  },

  components: { ProjectCard, CollectionPaginator },

  created() {
    this.fetchProjects();
  },
};
</script>

<template>
  <collection-paginator :collection="prjCollection" @linkClicked="fetchProjects" />
  <div class="row row-cols-3 g-4 pb-4">
    <project-card v-for="project in projects" :project="project" />
  </div>
  <collection-paginator :collection="prjCollection" @linkClicked="fetchProjects" />
</template>

<style lang="scss" scoped></style>
