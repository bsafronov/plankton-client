import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { findManyFieldTemplates } from "../api";
import { FindManyProcessStageTemplates, ProcessStageTemplate } from "../types";
import { objectToStringArray } from "~/shared/lib";

type Props = Omit<
  UseQueryOptions<ProcessStageTemplate[]>,
  "queryKey" | "queryFn"
>;

export const useFindManyStageTemplatesQuery = (
  params?: FindManyProcessStageTemplates,
  props?: Props
) => {
  return useQuery<ProcessStageTemplate[]>({
    queryKey: [
      "process",
      "template",
      "field",
      "find-many",
      ...objectToStringArray(params),
    ],
    queryFn: async () => {
      const res = await findManyFieldTemplates(params);
      return res.data;
    },
    ...props,
  });
};
