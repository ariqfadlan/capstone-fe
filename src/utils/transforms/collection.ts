import {
  AcquisitionWayType,
  MaterialType,
  StatusType,
} from "@/types/collections";
import type {
  ICollectionData,
  ICollectionRequestData,
  ICollectionResponseData,
  ICollectionCreateFormData,
} from "@/types/collections";

const dateOptions: Intl.DateTimeFormatOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

export function parseCollectionResponse(
  x: ICollectionResponseData
): ICollectionData {
  return {
    ...x,
    acquisitionEntryDate: new Date(
      x.acquisitionEntryDate as string
    ).toLocaleDateString("id-ID", dateOptions),
    material: MaterialType[x.material as number],
    status: StatusType[x.status as number],
    acquisitionWay: AcquisitionWayType[x.acquisitionWay as number],
  };
}
export function parseCollectionRequest(
  x: ICollectionCreateFormData
): ICollectionRequestData {
  if (x.acquisitionEntryDate === undefined) {
    throw new Error("Tanggal tak boleh kosong!");
  }
  const result = {
    ...x,
    acquisitionEntryDate: new Date(
      x.acquisitionEntryDate as string
    ).toISOString(),
    startYear: Number(x.startYear),
    endYear: Number(x.endYear),
    typeCode: Number(x.typeCode),
    material: Number(x.material),
    status: Number(x.status),
    acquisitionWay: Number(x.acquisitionWay),
  };
  return result;
}
