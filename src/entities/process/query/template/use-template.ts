import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { http } from "~/shared/api";
import { queryKeys } from "~/shared/lib/utils";
import { ProcessTemplate } from "../../types";

type Props = Omit<UseQueryOptions<ProcessTemplate>, "queryKey" | "queryFn">;
type Params = {
  templateId: ID;
};

export const useTemplate = (params: Params, props?: Props) => {
  return useQuery<ProcessTemplate>({
    queryKey: queryKeys({
      entity: "process-template",
      type: "find-one",
      params,
    }),
    queryFn: async () => {
      const res = await http.get(`/processes/templates/${params.templateId}`);
      return res.data;
    },
    ...props,
  });
};
