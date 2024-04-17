import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import ProjectIndex from "./pages/ProjectIndex.vue";
import ProjectShow from "./pages/ProjectShow.vue";
import NotFound from "./pages/NotFound.vue";

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
    {
      path: "/projects/:slug",
      name: "projects.show",
      component: ProjectShow,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notfound",
      component: NotFound,
    },
  ],
});

export { router };
