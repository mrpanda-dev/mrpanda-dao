/**
 * 系统路由列表
 */
export default [
  {
    path: "/",
    name: "首页",
    component: () => import("@/views/Home/index.vue"),
  },
  {
    path: "/about",
    name: "关于",
    component: () => import("@/views/About/index.vue"),
  },
  {
    path: "/members",
    name: "成员",
    component: () => import("@/views/Members/index.vue"),
  },
];
