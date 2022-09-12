import { RoleType } from "@/types/users";
import type {
  IUserResponseData,
  IUserData,
  IUserCreateFormData,
  IUserRequestData,
} from "@/types/users";

function parseUserResponse(x: IUserResponseData): IUserData {
  const result = {
    ...x,
    role: RoleType[Number(x.isSuperuser)],
  };
  delete result.isSuperuser;
  return result;
}

export function parseUserUpdate(x: IUserResponseData) {
  const result = {
    ...x,
    role: Number(x.isSuperuser).toString(),
  };
  delete result.isSuperuser;
  return result;
}

export function parseUserRequest(x: IUserCreateFormData): IUserRequestData {
  const result = {
    ...x,
    isSuperuser: Boolean(Number(x.role)),
  };
  delete result.role;
  return result;
}
export default parseUserResponse;
