import { defineStore } from "pinia";
import request from "@/utils/request";

export interface ICollectionData {
  id: number;
  name: string;
  registrationNumber: string;
  originDescription: string;
  originalMaterial: string;
  originSource: string;
  recordOfTransfer: string;
  objectDescription: string;
  inventoryNumber: string;
  region: string;
  objectSize: string;
  storage: string;
  imagePath: string;
  conditionDescription: string;
  additionalInformation: string;
  acquisitionEntryDate: Date;
  material: number;
  status: number;
  acquisitionWay: number;
  typeCode: number;
  startYear: number;
  endYear: number;
  authorId: number;
}

export const useCollectionStore = defineStore("collection", () => {
  const getAll = async (): Promise<void> => {
    const { data } = await request.get<ICollectionData>("/collections");
    console.log(data);
  };
  return { getAll };
});
