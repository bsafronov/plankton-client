import axios from "axios";
import { useAuthStore } from "../hooks";

export const http = axios.create({
  baseURL: import.meta.env.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const httpAuth = axios.create({
  baseURL: import.meta.env.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// http.interceptors.request.use(async (config) => {
//   const auth = useAuthStore.getState();

//   if (auth.isAuth && config.headers) {
//     config.headers["Authorization"] = `Bearer ${auth.accessToken}`;
//   }

//   return config;
// });

http.interceptors.response.use(undefined, async (error) => {
  const originalRequest = error.config;
  const auth = useAuthStore.getState();

  if (error.response.status === 401 && !originalRequest._retry) {
    originalRequest._retry = true;
    auth.signOut();
  }

  return Promise.reject(error);
});
