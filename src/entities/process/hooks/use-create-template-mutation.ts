import { UseMutationOptions, useMutation } from "@tanstack/react-query";
import { CreateProcessTemplate, ProcessTemplate } from "../types";
import { createTemplate } from "../api";

type Props = Omit<
  UseMutationOptions<ProcessTemplate, Error, CreateProcessTemplate>,
  "mutationKey" | "mutationFn"
>;

export const useCreateTemplateMutation = (props?: Props) => {
  return useMutation<ProcessTemplate, Error, CreateProcessTemplate>({
    mutationKey: ["process", "template", "create"],
    mutationFn: async (body) => {
      const res = await createTemplate(body);
      return res.data;
    },
    ...props,
  });
};
