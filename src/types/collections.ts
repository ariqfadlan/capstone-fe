export enum MaterialType {
  Metal,
  Ceramic,
  Glass,
  Stone,
  Fabric,
}

export enum StatusType {
  Excellent,
  Good,
  Bad,
}

export enum AcquisitionWayType {
  Grant,
  Purchase,
  Gift,
  Contract,
  Exchange,
}

export interface ICollectionResponseData {
  id?: number;
  name?: string;
  registrationNumber?: string;
  originDescription?: string;
  originalMaterial?: string;
  originSource?: string;
  recordOfTransfer?: string;
  objectDescription?: string;
  inventoryNumber?: string;
  region?: string;
  objectSize?: string;
  storage?: string;
  imagePath?: string;
  conditionDescription?: string;
  additionalInformation?: string;
  acquisitionEntryDate?: string;
  material?: number;
  status?: number;
  acquisitionWay?: number;
  typeCode?: number;
  startYear?: number;
  endYear?: number;
  authorId?: number;
}

export interface ICollectionData {
  id?: number;
  name?: string;
  registrationNumber?: string;
  originDescription?: string;
  originalMaterial?: string;
  originSource?: string;
  recordOfTransfer?: string;
  objectDescription?: string;
  inventoryNumber?: string;
  region?: string;
  objectSize?: string;
  storage?: string;
  imagePath?: string;
  conditionDescription?: string;
  additionalInformation?: string;
  acquisitionEntryDate?: string;
  material?: string;
  status?: string;
  acquisitionWay?: string;
  typeCode?: number;
  startYear?: number;
  endYear?: number;
  authorId?: number;
}

export interface ICollectionCreateFormData {
  id?: number;
  name?: string;
  registrationNumber?: string;
  originDescription?: string;
  originalMaterial?: string;
  originSource?: string;
  recordOfTransfer?: string;
  objectDescription?: string;
  inventoryNumber?: string;
  region?: string;
  objectSize?: string;
  storage?: string;
  imagePath?: string;
  conditionDescription?: string;
  additionalInformation?: string;
  acquisitionEntryDate?: string;
  material?: string;
  status?: string;
  acquisitionWay?: string;
  typeCode?: string;
  startYear?: number;
  endYear?: number;
  authorId?: string;
}

export interface ICollectionRequestData extends ICollectionResponseData {}
