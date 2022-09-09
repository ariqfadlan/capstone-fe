import { useAuthStore } from "@/store/auth";
import type { AxiosInstance, AxiosRequestConfig, AxiosError } from "axios";
import axios from "axios";
import { useToast } from "vue-toastification";

const toast = useToast();

interface IErrorResponse {
  error?: string;
  errors?: string[];
}

const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 99999,
});

service.interceptors.request.use((config: AxiosRequestConfig) => {
  const { token } = useAuthStore();
  config.headers = config.headers ?? {};
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

service.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError<IErrorResponse>) => {
    if (error.response?.data.error) {
      toast.error(error.response.data.error);
    } else if (error.response?.data.errors) {
      for (let errorMessage of error.response.data.errors) {
        toast.error(errorMessage);
      }
    } else return Promise.reject(error);
  }
);

export default service;
