import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";
import NotFound from "../views/NotFound.vue";
import { useAuthStore } from "@/store/auth";
import userRoutes from "./users";
import collectionRoutes from "./collections";
import directorateRoutes from "./directorates";
import employeeRoutes from "./employees";

const routes: Array<RouteRecordRaw> = [
  {
    name: "Root",
    path: "/",
    redirect: { name: "Dashboard" },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { layout: "empty" },
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: { requiresAuth: true },
  },
  { path: "/:pathMatch(.*)*", component: NotFound, meta: { layout: "empty" } },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...routes,
    userRoutes,
    collectionRoutes,
    directorateRoutes,
    employeeRoutes,
  ],
});

router.beforeEach((to, _from, next) => {
  const { token } = useAuthStore();

  if (to.meta.requiresAuth && !token) next({ name: "Login" });
  else if (to.name == "Login" && token) next({ name: "Dashboard" });
  else next();
});

export default router;
