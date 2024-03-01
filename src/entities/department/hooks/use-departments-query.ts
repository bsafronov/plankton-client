import { useQuery } from "@tanstack/react-query";
import { http } from "~/shared/api";
import { Department } from "../types";

export const useDepartmentsQuery = () => {
  return useQuery({
    queryKey: ["departments"],
    queryFn: async () => {
      const { data } = await http.get<Department[]>("/departments");
      return data;
    },
  });
};
