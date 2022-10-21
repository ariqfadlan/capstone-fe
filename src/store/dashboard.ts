import request from "@/utils/request";
import { defineStore } from "pinia";
import { ref } from "vue";
import type { IDashboardData } from "@/types/dashboard";

export const useDashboardStore = defineStore("dashboard", () => {
  const dashboard = ref<IDashboardData>({});

  const getAll = async (): Promise<void> => {
    const { data } = await request.get<IDashboardData>("/dashboard");
    dashboard.value = data;
  };

  return {
    getAll,
    dashboard,
  };
});
