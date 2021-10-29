import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App";
import router from "./router";
import axios from "./plugins/axios";
import VueAxios from "vue-axios";

//import layouts
import defaultLayout from "~/layouts/default.vue";
import loggedInLayout from "~/layouts/loggedIn.vue";

createApp(App)
  .use(createPinia())
  .use(router)
  .use(VueAxios, axios)
  .component("default", defaultLayout)
  .component("loggedIn", loggedInLayout)
  .mount("#app");
