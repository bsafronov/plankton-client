import { useQuery } from "@tanstack/react-query";
import { http } from "~/shared/api";
import { UserRes } from "../types";

export const useUser = () => {
  const { data: user } = useQuery<UserRes, Error>({
    queryKey: ["user", "me"],
    queryFn: async () => {
      const { data } = await http.get(`/users/me`);
      return data;
    },
  });

  return user;
};
