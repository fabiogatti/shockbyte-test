import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";
import { createPinia } from "pinia";
import VueApexCharts from "vue3-apexcharts";

createApp(App).use(createPinia()).use(router).use(VueApexCharts).mount("#app");
