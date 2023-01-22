import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/grid",
    name: "grid",
    component: () =>
      import("../views/GridView.vue"),
  },
  {
    path: "/birdhouse/:ubid",
    name: "birdhouse",
    component: () =>
      import("../views/BirdhouseView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
