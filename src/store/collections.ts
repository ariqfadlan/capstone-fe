import { defineStore } from "pinia";
import request from "@/utils/request";
import type {
  ICollectionData,
  ICollectionResponseData,
  ICollectionRequestData,
} from "@/types/collections";
import { ref } from "vue";
import { parseCollectionResponse } from "@/utils/transforms/collection";

export const useCollectionStore = defineStore("collection", () => {
  const collections = ref<ICollectionData[]>([]);
  const collection = ref<ICollectionData>({});

  const getAll = async (): Promise<ICollectionResponseData[]> => {
    const { data } = await request.get<ICollectionResponseData[]>(
      "/collections"
    );
    return data;
  };

  const getById = async (id: string): Promise<void> => {
    const { data } = await request.get<ICollectionResponseData>(
      `/collections/${id}`
    );
    collection.value = parseCollectionResponse(data);
  };

  const create = async (req: ICollectionRequestData): Promise<void> => {
    const { data } = await request.post<ICollectionResponseData>(
      `/collections`,
      req
    );
    collection.value = parseCollectionResponse(data);
  };

  return { collections, collection, getAll, getById, create };
});
