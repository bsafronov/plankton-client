import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { findManyStageFieldTemplates } from "../api";
import {
  FindManyProcessStageFieldTemplates,
  ProcessStageFieldTemplate,
} from "../types";
import { objectToStringArray } from "~/shared/lib";

type Props = Omit<
  UseQueryOptions<ProcessStageFieldTemplate[]>,
  "queryKey" | "queryFn"
>;

export const useFindManyStageFieldTemplatesQuery = (
  params?: FindManyProcessStageFieldTemplates,
  props?: Props
) => {
  return useQuery<ProcessStageFieldTemplate[]>({
    queryKey: [
      "process",
      "template",
      "field",
      "find-many",
      ...objectToStringArray(params),
    ],
    queryFn: async () => {
      const res = await findManyStageFieldTemplates(params);
      return res.data;
    },
    ...props,
  });
};
