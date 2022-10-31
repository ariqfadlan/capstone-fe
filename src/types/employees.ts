import type { IUserData } from "./users";
import type { IDirectorateData } from "./directorates";

export interface IEmployeeData {
  id?: number;
  fullname?: string;
  employeeNumber?: string;
  userId?: string;
  directorateId?: string;
  user?: IUserData;
  directorate?: IDirectorateData;
}

export interface ISyncEmployeeResponseData {
  synced?: number;
}
