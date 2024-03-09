import { UseMutationOptions, useMutation } from "@tanstack/react-query";
import {
  CreateProcessStageFieldTemplate,
  ProcessStageFieldTemplate,
} from "../types";
import { createStageFieldTemplate } from "../api";

type Props = Omit<
  UseMutationOptions<
    ProcessStageFieldTemplate,
    Error,
    CreateProcessStageFieldTemplate
  >,
  "mutationKey" | "mutationFn"
>;

export const useCreateStageFieldTemplateMutation = (props?: Props) => {
  return useMutation<
    ProcessStageFieldTemplate,
    Error,
    CreateProcessStageFieldTemplate
  >({
    mutationKey: ["process", "template", "stage", "field", "create"],
    mutationFn: async (body) => {
      const res = await createStageFieldTemplate(body);
      return res.data;
    },
    ...props,
  });
};
