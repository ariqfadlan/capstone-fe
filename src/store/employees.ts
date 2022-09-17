import type { IEmployeeData } from "@/types/employees";
import type { IUserData } from "@/types/users";
import request from "@/utils/request";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useEmployeeStore = defineStore("employee", () => {
  const employees = ref<IEmployeeData[]>();

  const getAll = async (): Promise<void> => {
    const { data } = await request.get(`/employees`);
    employees.value = data;
  };

  return { employees, getAll };
});
