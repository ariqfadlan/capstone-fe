import { defineStore } from "pinia";
import { ref } from "vue";
import request from "@/utils/request";
import type { IDirectorateData } from "@/types/directorates";

export const useDirectorateStore = defineStore("directorate", () => {
  const directorates = ref<IDirectorateData[]>([]);
  const directorate = ref<IDirectorateData>({});

  const getAll = async (): Promise<void> => {
    const { data } = await request.get<IDirectorateData[]>("/directorates");
    directorates.value = data;
  };

  const getById = async (id: string): Promise<void> => {
    const { data } = await request.get<IDirectorateData>(`/directorates/${id}`);
    directorate.value = data;
  };

  const create = async (u: IDirectorateData): Promise<void> => {
    const { data } = await request.post<IDirectorateData>(`/directorates`, u);
    directorate.value = data;
  };

  const updateById = async (id: string, u: IDirectorateData): Promise<void> => {
    const { data } = await request.put<IDirectorateData>(
      `/directorates/${id}`,
      u
    );
    directorate.value = data;
  };

  const deleteById = async (id: string): Promise<void> => {
    const { status } = await request.delete(`/directorates/${id}`);
    if (status === 204) {
      directorate.value = {};
    }
  };

  return {
    directorates,
    directorate,
    getAll,
    getById,
    create,
    updateById,
    deleteById,
  };
});
