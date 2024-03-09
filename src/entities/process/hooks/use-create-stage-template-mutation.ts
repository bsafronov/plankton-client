import { UseMutationOptions, useMutation } from "@tanstack/react-query";
import { CreateProcessStageTemplate, ProcessStageTemplate } from "../types";
import { createStageTemplate } from "../api";

type Props = Omit<
  UseMutationOptions<ProcessStageTemplate, Error, CreateProcessStageTemplate>,
  "mutationKey" | "mutationFn"
>;

export const useCreateStageTemplateMutation = (props?: Props) => {
  return useMutation<ProcessStageTemplate, Error, CreateProcessStageTemplate>({
    mutationKey: ["process", "template", "stage", "create"],
    mutationFn: async (body) => {
      const res = await createStageTemplate(body);
      return res.data;
    },
    ...props,
  });
};
