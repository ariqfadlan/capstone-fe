import type { RouteRecordRaw } from "vue-router";
import CollectionLayout from "@/views/collections/CollectionLayout.vue";
import List from "@/views/collections/List.vue";
import Read from "@/views/collections/Read.vue";
import AddEdit from "@/views/collections/AddEdit.vue";

const route: RouteRecordRaw = {
  path: "/directorates",
  name: "Directorates",
  component: CollectionLayout,
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
