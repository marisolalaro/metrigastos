import { createApp } from "vue";
import App from "./App.vue";

import Splash from "./components/SplashScreen.vue";
import HomePage from "./components/Home.vue";
import * as VueRouter from "vue-router";

const routes = [{ path: "/", component: Splash }];
const router = new VueRouter({
  routes, // short for `routes: routes`
});

createApp(App).use(router).mount("#app");
