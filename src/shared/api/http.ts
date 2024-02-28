import axios from "axios";
import { useAuthStore } from "../hooks";

export const http = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

http.interceptors.response.use(undefined, async (error) => {
  const auth = useAuthStore.getState();

  if (error.response.status === 401) {
    auth.signOut();
  }

  return Promise.reject(error);
});
