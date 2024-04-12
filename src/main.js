import { createApp } from "vue";
// Import our custom CSS
import "./scss/general.scss";
// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
import App from "./App.vue";
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
library.add(faGithub);

const app = createApp(App);
app.component("app-header", AppHeader);
app.component("app-footer", AppFooter);

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
