import { createRouter, createWebHistory } from "vue-router";
import pages from "./page";
const router = createRouter({
  history: createWebHistory(),
  routes: pages,
});

export default router;
