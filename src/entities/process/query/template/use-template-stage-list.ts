import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { http } from "~/shared/api";
import { queryKeys } from "~/shared/lib/utils";
import { ProcessTemplateStage } from "../../types";

type Props = Omit<
  UseQueryOptions<ProcessTemplateStage[]>,
  "queryKey" | "queryFn"
>;

type Params = {
  templateId?: ID;
};

export const useTemplateStageList = (params?: Params, props?: Props) => {
  return useQuery<ProcessTemplateStage[]>({
    queryKey: queryKeys({
      entity: "process-template-stage",
      type: "find-many",
      params,
    }),
    queryFn: async () => {
      const res = await http.get("process-template-stages", {
        params,
      });
      return res.data;
    },
    ...props,
  });
};
