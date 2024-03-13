import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { http } from "~/shared/api";
import { queryKeys } from "~/shared/lib/utils";
import { ProcessTemplateStageField } from "../../types";

type Props = Omit<
  UseQueryOptions<ProcessTemplateStageField[]>,
  "queryKey" | "queryFn"
>;

type Params = {
  templateId?: ID;
  stageId?: ID;
};

export const useTemplateStageFieldList = (params?: Params, props?: Props) => {
  return useQuery<ProcessTemplateStageField[]>({
    queryKey: queryKeys({
      entity: "process-template-stage-field",
      type: "find-many",
      params,
    }),
    queryFn: async () => {
      const res = await http.get("process-template-stage-fields", {
        params,
      });
      return res.data;
    },
    ...props,
  });
};
