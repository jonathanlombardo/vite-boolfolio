<script>
// import ProjectCard from "../components/projects/ProjectCard.vue";
// import CollectionPaginator from "../components/partials/CollectionPaginator.vue";
import ProjectSection from "../components/projects/ProjectSection.vue";
import AppBtn from "../components/partials/AppBtn.vue";
import AppLoader from "../components/partials/AppLoader.vue";
import { config, store } from "../store/index.js";
import axios from "axios";

export default {
  data() {
    return {
      config,
      projects: [],
      prjCollection: [],

      types: [],
      techs: [],
      searchTerm: "",
      searchClock: false,
      loading: {
        projects: true,
        techs: true,
        types: true,
      },
    };
  },

  computed: {
    activeTypes() {
      let activeTypes = this.types;

      activeTypes = activeTypes.filter((type) => type.active == true);
      activeTypes = activeTypes.map((type) => type.id);

      return activeTypes;
    },

    activeTechs() {
      let activeTechs = this.techs;

      activeTechs = activeTechs.filter((tech) => tech.active == true);
      activeTechs = activeTechs.map((tech) => tech.id);

      return activeTechs;
    },
  },

  methods: {
    fetchProjects(endpoint = config.api.baseUrl + config.api.endpoint.projectIndex, loadMore = false) {
      const params = {
        types: this.activeTypes,
        techs: this.activeTechs,
        searchTerm: this.searchTerm,
      };

      axios.get(`${endpoint}`, { params }).then((res) => {
        if (!res.data.success) this.$router.push({ name: "notfound" });
        this.projects = loadMore ? this.projects.concat(res.data.projects.data) : res.data.projects.data;
        this.prjCollection = res.data.projects;
        this.loading.projects = false;

        if (loadMore) this.loading.more = false;
      });
    },

    fetchTypes(endpoint = config.api.baseUrl + config.api.endpoint.typeIndex) {
      axios.get(`${endpoint}`).then((res) => {
        this.types = res.data;
        this.loading.types = false;
      });
    },

    fetchTechs(endpoint = config.api.baseUrl + config.api.endpoint.techIndex) {
      axios.get(`${endpoint}`).then((res) => {
        this.techs = res.data;
        this.loading.techs = false;
      });
    },

    loadMore() {
      const endpoint = this.prjCollection.next_page_url;
      this.loading.more = true;
      this.fetchProjects(endpoint, true);
    },

    typesHandleClick(type) {
      this.types.forEach((_type) => {
        if (type.id != _type.id) _type.active = false;
      });
      type.active = !type.active;
      this.fetchProjects();
    },

    techsHandleClick(tech) {
      tech.active = !tech.active;
      this.fetchProjects();
    },

    handleSearchInput() {
      clearTimeout(this.searchClock);

      this.searchClock = setTimeout(() => {
        this.fetchProjects();
      }, 1500);
    },
  },

  components: { ProjectSection, AppBtn, AppLoader },

  created() {
    this.fetchProjects();
    this.fetchTypes();
    this.fetchTechs();
  },
};
</script>

<template>
  <h1 class="text-center mb-3">{{ config.appName }}</h1>

  <app-loader v-if="loading.projects || loading.types || loading.techs" class="text-primary my-5 fs-5" />

  <div v-else>
    <div class="container">
      <div class="accordion mb-3" id="filterAccordion">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#filterAccordion-options" aria-expanded="true" aria-controls="filterAccordion-options">Filter</button>
          </h2>
          <div id="filterAccordion-options" class="accordion-collapse collapse">
            <div class="accordion-body d-flex flex-column gap-3">
              <div class="input-group">
                <span class="input-group-text" id="search-addon"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></span>
                <input v-model="searchTerm" @input="handleSearchInput()" type="text" class="form-control" placeholder="Search project..." aria-label="Search" aria-describedby="search-addon" />
              </div>
              <div class="types-wrapper">
                <span :class="['badge', 'fs-6', { active: _type.active }]" v-for="_type in types" @click="typesHandleClick(_type)">
                  {{ _type.label }}
                </span>
              </div>
              <div class="techs-wrapper">
                <span :class="['badge', 'fs-6', { active: _tech.active }]" v-for="_tech in techs" @click="techsHandleClick(_tech)">
                  {{ _tech.label }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div v-if="projects.length" class="row row-cols-4 g-4 py-4">
      <project-card v-for="project in projects" :project="project" />
    </div> -->

    <project-section v-if="projects.length" v-for="(project, index) in projects" :project="project" :key="index" :sectionID="index" />
    <div v-else class="fs-5 text-center fst-italic">No results</div>

    <app-loader v-if="loading.more" class="text-primary" />
    <app-btn v-else-if="prjCollection.next_page_url" btnText="Load More" btnClasses="btn btn-link w-100 text-center" @btnClicked="loadMore" />
  </div>
</template>

<style lang="scss" scoped>
@use "../scss/partials/var" as *;

.badge {
  border-radius: 0;
  margin-right: 10px;
  background-color: $primary-white;
  color: $secondary;
  cursor: pointer;

  &.active {
    background-color: $primary;
    color: white;
  }
}
</style>
