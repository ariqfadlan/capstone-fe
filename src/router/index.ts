import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Forms from "../views/Forms.vue";
import Tables from "../views/Tables.vue";
import UIElements from "../views/UIElements.vue";
import Login from "../views/Login.vue";
import Modal from "../views/Modal.vue";
import Chart from "../views/ChartView.vue";
import Card from "../views/CardView.vue";
import Blank from "../views/BlankView.vue";
import NotFound from "../views/NotFound.vue";
import Collection from "../views/CollectionView.vue";
import { useAuthStore } from "@/store/auth";

const routes: Array<RouteRecordRaw> = [
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
  {
    path: "/collections",
    name: "Collections",
    component: Collection,
    meta: { requiresAuth: true },
  },
  {
    path: "/forms",
    name: "Forms",
    component: Forms,
  },
  {
    path: "/cards",
    name: "Cards",
    component: Card,
  },
  {
    path: "/tables",
    name: "Tables",
    component: Tables,
  },
  {
    path: "/ui-elements",
    name: "UIElements",
    component: UIElements,
  },
  {
    path: "/modal",
    name: "Modal",
    component: Modal,
  },
  {
    path: "/charts",
    name: "Chart",
    component: Chart,
  },
  {
    path: "/blank",
    name: "Blank",
    component: Blank,
  },
  { path: "/:pathMatch(.*)*", component: NotFound, meta: { layout: "empty" } },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, _from, next) => {
  const { token } = useAuthStore();

  if (to.meta.requiresAuth && !token) next({ name: "Login" });
  else if (to.name == "Login" && token) next({ name: "Dashboard" });
  else next();
});

export default router;
