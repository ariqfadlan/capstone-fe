import type { IUserData } from "./users";

export interface ILoginResponse {
  user: IUserData;
  token: string;
}
