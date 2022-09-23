import AddEditVue from "@/views/employees/AddEdit.vue";
import LayoutVue from "@/views/employees/Layout.vue";
import ListVue from "@/views/employees/List.vue";
import ReadVue from "@/views/employees/Read.vue";
import type { RouteRecordRaw } from "vue-router";

const route: RouteRecordRaw = {
  path: "/employees",
  name: "Employees",
  component: LayoutVue,
  meta: { requiresAuth: true },
  children: [
    {
      name: "EmployeeList",
      path: "list",
      component: ListVue,
    },
    {
      name: "EmployeeAdd",
      path: "add",
      component: AddEditVue,
    },
    {
      name: "EmployeeRead",
      path: ":id/details",
      component: ReadVue,
    },
    {
      name: "EmployeeUpdate",
      path: ":id/edit",
      component: AddEditVue,
    },
  ],
};

export default route;
