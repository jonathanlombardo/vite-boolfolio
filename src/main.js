import { createApp } from "vue";

import "./scss/general.scss";
import * as bootstrap from "bootstrap";

import App from "./App.vue";
import { router } from "./router.js";

import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

// Import specific icons from FontAwesome
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
library.add(faGithub);

const app = createApp(App);
app.component("app-header", AppHeader);
app.component("app-footer", AppFooter);
app.component("font-awesome-icon", FontAwesomeIcon);

app.use(router).mount("#app");
