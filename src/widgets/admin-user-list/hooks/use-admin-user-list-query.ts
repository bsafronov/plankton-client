import { useInfiniteQuery } from "@tanstack/react-query";
import { User, useUserFilterStore } from "~/entities/user";
import { http } from "~/shared/api";

type Props = {
  take?: number;
};

export const useAdminUserListQuery = (params?: Props) => {
  const filters = useUserFilterStore((state) => ({
    username: state.username,
    email: state.email,
    firstName: state.firstName,
    lastName: state.lastName,
    departmentId: state.departmentId,
    role: state.role,
  }));

  const take = params?.take ?? 50;
  const keys = Object.entries(filters)
    .filter(([_, value]) => value)
    .map(([key, value]) => `${key}=${value}`);

  return useInfiniteQuery({
    queryKey: ["users", ...keys],
    queryFn: async ({ pageParam = 1, signal }) => {
      const { data } = await http.get<User[]>("/users", {
        signal,
        params: {
          take,
          page: pageParam,
          ...filters,
        },
      });

      return {
        next: pageParam + 1,
        count: data.length,
        results: data,
      };
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.count < take) return;
      return lastPage.next;
    },
  });
};
