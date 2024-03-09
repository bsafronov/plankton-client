import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { ProcessTemplate } from "../types";
import { findOneTemplate } from "../api";
import { objectToStringArray } from "~/shared/lib";

type Props = Omit<UseQueryOptions<ProcessTemplate>, "queryKey" | "queryFn">;
type Params = {
  templateId: ID;
};

export const useFindOneTemplateQuery = (params: Params, props?: Props) => {
  return useQuery<ProcessTemplate>({
    queryKey: [
      "process",
      "template",
      "find-one",
      ...objectToStringArray(params),
    ],
    queryFn: async () => {
      const res = await findOneTemplate(params.templateId);
      return res.data;
    },
    ...props,
  });
};
