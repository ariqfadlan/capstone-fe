import { defineStore } from "pinia";
import request from "@/utils/request";
import type { ICollectionResponseData } from "@/types/collections";

export const useCollectionStore = defineStore("collection", () => {
  const getAll = async (): Promise<ICollectionResponseData[]> => {
    const { data } = await request.get<ICollectionResponseData[]>(
      "/collections"
    );
    return data;
  };
  return { getAll };
});
