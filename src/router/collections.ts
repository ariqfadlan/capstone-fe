import type { RouteRecordRaw } from "vue-router";
import CollectionLayout from "@/views/collections/CollectionLayout.vue";
import List from "@/views/collections/List.vue";
import Read from "@/views/collections/Read.vue";
import AddEdit from "@/views/collections/AddEdit.vue";

const route: RouteRecordRaw = {
  path: "/collections",
  name: "Collections",
  component: CollectionLayout,
  children: [
    {
      name: "CollectionList",
      path: "list",
      component: List,
    },
    {
      name: "CollectionAdd",
      path: "add",
      component: AddEdit,
    },
    {
      name: "CollectionRead",
      path: ":id/details",
      component: Read,
    },
    {
      name: "CollectionEdit",
      path: ":id/edit",
      component: AddEdit,
    },
  ],
};

export default route;
