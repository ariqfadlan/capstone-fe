import { defineStore } from "pinia";
import request from "@/utils/request";
import { ref } from "vue";
import router from "@/router";
import axios from "axios";

export interface IUserData {
  id?: number;
  username?: string;
  is_superuser?: boolean;
}

export interface ILoginResponse {
  user: IUserData;
  token: string;
}

export const useAuthStore = defineStore("auth", () => {
  const token = ref<string>(localStorage.getItem("access_token") || "");
  const user = ref<IUserData>(JSON.parse(localStorage.getItem("user") || "{}"));
  const hasAuth = ref<boolean>(false);

  const login = async (username: string, password: string): Promise<void> => {
    const { data } = await request.post<ILoginResponse>("/users/auth/login", {
      username,
      password,
    });

    user.value = data.user;
    token.value = data.token;
    localStorage.setItem("user", JSON.stringify(data.user));
    localStorage.setItem("access_token", data.token);
    hasAuth.value = true;
  };

  const logout = () => {
    user.value = {};
    token.value = "";
    localStorage.removeItem("user");
    localStorage.removeItem("access_token");
    router.push("/");
  };

  return { token, user, hasAuth, login, logout };
});
