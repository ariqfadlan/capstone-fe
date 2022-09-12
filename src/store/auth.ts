import { defineStore } from "pinia";
import request from "@/utils/request";
import { ref } from "vue";
import type { IUserResponseData } from "@/types/users";
import type { ILoginResponse } from "@/types/auth";
import { useRouter } from "vue-router";

export const useAuthStore = defineStore("auth", () => {
  const router = useRouter();
  const token = ref<string>(localStorage.getItem("access_token") || "");
  const user = ref<IUserResponseData>(
    JSON.parse(localStorage.getItem("user") || "{}")
  );

  const login = async (username: string, password: string): Promise<void> => {
    const { data } = await request.post<ILoginResponse>("/users/auth/login", {
      username,
      password,
    });

    user.value = data.user;
    token.value = data.token;
    localStorage.setItem("user", JSON.stringify(data.user));
    localStorage.setItem("access_token", data.token);
  };

  const logout = () => {
    user.value = {};
    token.value = "";
    localStorage.removeItem("user");
    localStorage.removeItem("access_token");
    router.push("/login");
  };

  return { token, user, login, logout };
});
