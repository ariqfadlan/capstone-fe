import type { IDirectorateData } from "@/types/directorates";
import type { IEmployeeData } from "@/types/employees";
import type { IUserData } from "@/types/users";
import request from "@/utils/request";
import parseUserResponse from "@/utils/transforms/user";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useEmployeeStore = defineStore("employee", () => {
  const employees = ref<IEmployeeData[]>();
  const employee = ref<IEmployeeData>();

  const getAll = async (): Promise<void> => {
    const { data } = await request.get(`/employees`);
    employees.value = data;
  };

  const getById = async (id: string): Promise<void> => {
    const { data } = await request.get<IEmployeeData>(`/employees/${id}`);
    const userRequest = request.get<IUserData>(`/users/${data.userId}`);
    const directorateRequest = await request.get<IDirectorateData>(
      `/directorates/${data.directorateId}`
    );
    const [{ data: userData }, { data: directorateData }] = await Promise.all([
      userRequest,
      directorateRequest,
    ]);
    data.user = parseUserResponse(userData);
    data.directorate = directorateData;
    employee.value = data;
  };

  const create = async (u: IEmployeeData): Promise<void> => {
    const { data } = await request.post<IEmployeeData>(`/employees`, u);
    employee.value = data;
  };

  return { employee, employees, getAll, getById, create };
});
