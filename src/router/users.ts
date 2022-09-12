import type { RouteRecordRaw } from "vue-router";
import Layout from "@/views/users/Layout.vue";
import AddEdit from "@/views/users/AddEdit.vue";
import List from "@/views/users/List.vue";
import Read from "@/views/users/Read.vue";

const route: RouteRecordRaw = {
  path: "/users",
  name: "Users",
  component: Layout,
  meta: { requiresAuth: true },
  children: [
    {
      name: "UserList",
      path: "list",
      component: List,
    },
    {
      name: "UserAdd",
      path: "add",
      component: AddEdit,
    },
    {
      name: "UserRead",
      path: ":id/details",
      component: Read,
    },
    {
      name: "UserUpdate",
      path: ":id/update",
      component: AddEdit,
    },
  ],
};

export default route;
