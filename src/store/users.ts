import type { IUserResponseData, IUserRequestData, IUserData } from "@/types/users";
import { defineStore } from "pinia";
import { ref } from "vue";
import request from "@/utils/request";
import formatUser from "@/utils/transforms/user";

export const useUserStore = defineStore("user", () => {
  const users = ref<IUserData[]>([]);
  const user = ref<IUserResponseData>({});

  const getAll = async (): Promise<void> => {
    const { data } = await request.get<IUserResponseData[]>("/users");
    users.value = data.map(formatUser);
  };

  const getById = async (id: string): Promise<void> => {
    const { data } = await request.get(`/users/${id}`);
    user.value = data;
  };

  const create = async (u: IUserRequestData): Promise<void> => {
    const { data } = await request.post(`/users`, u);
    user.value = data;
  };

  const updateById = async (id: string, u: IUserRequestData): Promise<void> => {
    const { data } = await request.put(`/users/${id}`, u);
    user.value = data;
  };

  const deleteById = async (id: string): Promise<void> => {
    const { status } = await request.delete(`/users/${id}`);
    if (status === 204) {
    user.value = {};
    }
  };

  return { users, user, getAll, getById, create, updateById, deleteById };
});
