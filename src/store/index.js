import { reactive } from "vue";

export const config = {
  appName: "Portfolio",
  api: {
    baseUrl: "http://127.0.0.1:8000/api/",
    endpoint: {
      projectIndex: "projects",
      projectShow(id) {
        return `api/projects/${id}`;
      },
    },
  },
  socialUrl: {
    gitHub: "https://github.com/jonathanlombardo/",
  },
};

export const store = reactive({
  activePagination: {
    projectIndex: null,
  },
});
