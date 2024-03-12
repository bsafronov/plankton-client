import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { http } from "~/shared/api";
import { queryKeys } from "~/shared/lib/utils";
import { ProcessTemplate } from "../../types";

type Props = Omit<UseQueryOptions<ProcessTemplate[]>, "queryKey" | "queryFn">;

type Params = {};

export const useTemplateList = (params?: Params, props?: Props) => {
  return useQuery<ProcessTemplate[]>({
    queryKey: queryKeys({
      entity: "process-template",
      type: "find-many",
      params,
    }),
    queryFn: async () => {
      const res = await http.get<ProcessTemplate[]>("/processes/templates/", {
        params,
      });
      return res.data;
    },
    ...props,
  });
};
