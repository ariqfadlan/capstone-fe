import type { IUserResponseData, IUserRequestData } from "@/types/users";
import { defineStore } from "pinia";
import { ref } from "vue";
import request from "@/utils/request";

export const useUserStore = defineStore("user", () => {
  const users = ref<IUserResponseData[]>([]);
  const user = ref<IUserResponseData>({});

  const getAll = async (): Promise<void> => {
    const { data } = await request.get("/users");
    users.value = data;
  };

  const getById = async (id: string): Promise<void> => {
    const { data } = await request.get(`/users/${id}`);
    user.value = data;
  };

  const create = async (u: IUserRequestData): Promise<void> => {
    const { data } = await request.post(`/users`, u);
    user.value = data;
  };

  const update = async (id: string, u: IUserRequestData): Promise<void> => {
    const { data } = await request.put(`/users/${id}`, u);
    user.value = data;
  };

  return { users, user, getAll, getById, create, update };
});
