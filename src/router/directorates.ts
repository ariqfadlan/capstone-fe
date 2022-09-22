import type { RouteRecordRaw } from "vue-router";
import Layout from "@/views/directorates/Layout.vue";
import List from "@/views/directorates/List.vue";
import Read from "@/views/directorates/Read.vue";
import AddEdit from "@/views/directorates/AddEdit.vue";

const route: RouteRecordRaw = {
  path: "/directorates",
  name: "Directorates",
  component: Layout,
  children: [
    {
      name: "DirectorateList",
      path: "list",
      component: List,
    },
    {
      name: "DirectorateAdd",
      path: "add",
      component: AddEdit,
    },
    {
      name: "DirectorateRead",
      path: ":id/details",
      component: Read,
    },
    {
      name: "DirectorateEdit",
      path: ":id/edit",
      component: AddEdit,
    },
  ],
};

export default route;
