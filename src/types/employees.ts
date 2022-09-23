import type { IUserData } from "./users";

export interface IEmployeeData {
  id: number;
  fullname: string;
  employeeNumber: string;
  user: IUserData;
  directorate: {
    id: number;
    name: string;
  };
}
