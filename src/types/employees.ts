import type { IUserData } from "./users";

export interface IEmployeeData {
  id: number;
  fullname: string;
  user: IUserData;
  directorate: {
    id: number;
    name: string;
  };
}
