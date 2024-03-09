import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { findManyFieldTemplates } from "../api";
import { FindManyProcessFieldTemplates, ProcessFieldTemplate } from "../types";
import { objectToStringArray } from "~/shared/lib";

type Props = Omit<
  UseQueryOptions<ProcessFieldTemplate[]>,
  "queryKey" | "queryFn"
>;

export const useFindManyFieldTemplatesQuery = (
  params?: FindManyProcessFieldTemplates,
  props?: Props
) => {
  return useQuery<ProcessFieldTemplate[]>({
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
