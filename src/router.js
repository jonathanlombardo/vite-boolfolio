import { createRouter, createWebHistory } from "vue-router";
import ProjectIndex from "./pages/ProjectIndex.vue";
import HomePage from "./pages/HomePage.vue";
// import NotFound from '.pages/NotFound.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/projects",
      name: "projects.index",
      component: ProjectIndex,
    },
  ],
});

export { router };
