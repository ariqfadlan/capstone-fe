export interface IUserResponseData {
  id?: number;
  username?: string;
  isSuperuser?: boolean;
}

export interface IUserData {
  id?: number;
  username?: string;
  role?: string;
}

export interface IUserCreateFormData {
  username?: string;
  password?: string;
  role?: string;
}

export interface IUserRequestData {
  username?: string;
  password?: string;
  isSuperuser?: boolean;
}

export enum RoleType {
  Admin,
  "Super Admin",
}
