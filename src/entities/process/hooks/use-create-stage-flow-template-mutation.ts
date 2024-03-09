import { UseMutationOptions, useMutation } from "@tanstack/react-query";
import {
  CreateProcessStageFlowTemplate,
  ProcessStageFlowTemplate,
} from "../types";
import { createStageFlowTemplate } from "../api";

type Props = Omit<
  UseMutationOptions<
    ProcessStageFlowTemplate,
    Error,
    CreateProcessStageFlowTemplate
  >,
  "mutationKey" | "mutationFn"
>;

export const useCreateStageFlowTemplateMutation = (props?: Props) => {
  return useMutation<
    ProcessStageFlowTemplate,
    Error,
    CreateProcessStageFlowTemplate
  >({
    mutationKey: ["process", "template", "stage", "flow", "create"],
    mutationFn: async (body) => {
      const res = await createStageFlowTemplate(body);
      return res.data;
    },
    ...props,
  });
};
