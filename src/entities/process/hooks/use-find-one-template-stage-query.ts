import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { objectToStringArray } from "~/shared/lib";
import { findOneStageTemplate } from "../api";
import { ProcessStageTemplate } from "../types";

type Props = Omit<
  UseQueryOptions<ProcessStageTemplate>,
  "queryKey" | "queryFn"
>;
type Params = {
  stageId: ID;
};

export const useFindOneTemplateStageQuery = (params: Params, props?: Props) => {
  return useQuery<ProcessStageTemplate>({
    queryKey: [
      "process",
      "template",
      "stage",
      "find-one",
      ...objectToStringArray(params),
    ],
    queryFn: async () => {
      const res = await findOneStageTemplate(params.stageId);
      return res.data;
    },
    ...props,
  });
};
