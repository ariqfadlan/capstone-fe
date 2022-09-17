import { useAuthStore } from "@/store/auth";
import type { AxiosInstance, AxiosRequestConfig, AxiosError } from "axios";
import axios from "axios";
import { useToast } from "vue-toastification";
import applyCaseMiddleware from "axios-case-converter";
import type { IErrorResponse } from "@/types/errors";

const toast = useToast();

const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 99999,
});

service.interceptors.request.use((config: AxiosRequestConfig) => {
  const { token } = useAuthStore();
  config.headers = config.headers ?? {};
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
    config.headers.ContentType = "application/json";
  }
  return config;
});

service.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError<IErrorResponse & String>) => {
    const { logout } = useAuthStore();
    if (error?.response?.data?.error) {
      toast.error(error.response.data.error);
    } else if (error?.response?.data?.errors) {
      for (const errorMessage of error.response.data.errors) {
        toast.error(errorMessage);
      }
    } else if (
      error?.response?.status === 401 &&
      error?.response?.data.includes("token is expired")
    ) {
      logout();
      toast.info("Sesi Anda telah habis, silakan login kembali!");
    } else return Promise.reject(error);
  }
);

export default applyCaseMiddleware(service);
