import { useUser } from ".";

export const useAdmin = () => {
  return useUser()?.role === "ADMIN";
};
