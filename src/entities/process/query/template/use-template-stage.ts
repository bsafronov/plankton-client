import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { http } from "~/shared/api";
import { queryKeys } from "~/shared/lib/utils";
import { ProcessTemplateStage } from "../../types";

type Props = Omit<
  UseQueryOptions<ProcessTemplateStage>,
  "queryKey" | "queryFn"
>;

type Params = {
  stageId: ID;
};

export const useTemplateStage = (params: Params, props?: Props) => {
  return useQuery<ProcessTemplateStage>({
    queryKey: queryKeys({
      entity: "process-template-stage",
      type: "find-one",
      params,
    }),
    queryFn: async () => {
      const res = await http.get(
        `/processes/templates/stages/${params.stageId}`
      );
      return res.data;
    },
    ...props,
  });
};
