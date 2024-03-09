import { UseMutationOptions, useMutation } from "@tanstack/react-query";
import { CreateProcessFieldTemplate, ProcessFieldTemplate } from "../types";
import { createFieldTemplate } from "../api";

type Props = Omit<
  UseMutationOptions<ProcessFieldTemplate, Error, CreateProcessFieldTemplate>,
  "mutationKey" | "mutationFn"
>;

export const useCreateFieldTemplateMutation = (props?: Props) => {
  return useMutation<ProcessFieldTemplate, Error, CreateProcessFieldTemplate>({
    mutationKey: ["process", "template", "field", "create"],
    mutationFn: async (body) => {
      const res = await createFieldTemplate(body);
      return res.data;
    },
    ...props,
  });
};
