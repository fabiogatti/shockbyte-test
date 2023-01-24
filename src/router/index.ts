import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { useCommonStore } from "@/store";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/grid/:page",
    name: "grid",
    props: route => ({ page: Number(route.params.page) }),
    component: () => import("../views/GridView.vue"),
  },
  {
    path: "/birdhouse/:ubid",
    name: "birdhouse",
    props: true,
    component: () => import("../views/BirdhouseView.vue"),
  },
  { path: "/:catchAll(.*)", redirect: '/' }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to) => {
  const store = useCommonStore();
  if(to.path.includes('grid') && (Object.keys(to.params).length == 0 || Number(to.params.page) > store.pageInfo.totalPages)){
    return { name: "grid", params:{ page:1 }}
  }
})

export default router;
