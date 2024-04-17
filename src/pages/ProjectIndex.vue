<script>
import ProjectCard from "../components/projects/ProjectCard.vue";
import CollectionPaginator from "../components/partials/CollectionPaginator.vue";
import { config, store } from "../store/index.js";
import axios from "axios";

export default {
  data() {
    return {
      config,
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
        if (!res.data.success) this.$router.push({ name: "notfound" });
        this.projects = res.data.projects.data;
        this.prjCollection = res.data.projects;
        store.activePagination.projectIndex = endpoint;
      });
    },
  },

  components: { ProjectCard, CollectionPaginator },

  created() {
    if (store.activePagination.projectIndex) {
      this.fetchProjects(store.activePagination.projectIndex);
    } else {
      this.fetchProjects();
    }
  },
};
</script>

<template>
  <h1 class="text-center mb-5">{{ config.appName }}</h1>
  <collection-paginator :collection="prjCollection" @linkClicked="fetchProjects" />
  <div class="row row-cols-4 g-4 py-4">
    <project-card v-for="project in projects" :project="project" />
  </div>
  <collection-paginator :collection="prjCollection" @linkClicked="fetchProjects" />
</template>

<style lang="scss" scoped></style>
