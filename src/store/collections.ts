import { defineStore } from "pinia";
import request from "@/utils/request";
import type {
  ICollectionData,
  ICollectionResponseData,
  ICollectionRequestData,
} from "@/types/collections";
import { ref } from "vue";

export const useCollectionStore = defineStore("collection", () => {
  const collections = ref<ICollectionResponseData[]>([]);
  const collection = ref<ICollectionResponseData>({});

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
    collection.value = data;
  };

  const create = async (req: ICollectionRequestData): Promise<void> => {
    const { data } = await request.post<ICollectionResponseData>(
      `/collections`,
      req
    );
    collection.value = data;
  };

  const uploadImage = async (file: File): Promise<string> => {
    let fd = new FormData();

    fd.append("image", file);

    const { data } = await request.post("/collections/image-upload", fd, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return data.imageUrl;
  };

  const updateById = async (
    id: string,
    req: ICollectionRequestData
  ): Promise<void> => {
    const { data } = await request.put<ICollectionResponseData>(
      `/collections/${id}`,
      req
    );
    collection.value = data;
  };

  return {
    collections,
    collection,
    getAll,
    getById,
    create,
    uploadImage,
    updateById,
  };
});
