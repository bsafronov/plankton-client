import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { http } from "~/shared/api";
import { queryKeys } from "~/shared/lib/utils";
import { ProcessTemplateField } from "../../types";

type Props = Omit<
  UseQueryOptions<ProcessTemplateField[]>,
  "queryKey" | "queryFn"
>;

type Params = {
  templateId?: ID;
};

export const useTemplateFieldList = (params?: Params, props?: Props) => {
  return useQuery<ProcessTemplateField[]>({
    queryKey: queryKeys({
      entity: "process-template-field",
      type: "find-many",
      params,
    }),
    queryFn: async () => {
      const res = await http.get<ProcessTemplateField[]>(
        "/processes/templates/fields/",
        {
          params,
        }
      );
      return res.data;
    },
    ...props,
  });
};
