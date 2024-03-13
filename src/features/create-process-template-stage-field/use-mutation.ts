import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { ProcessTemplateStageField } from "~/entities/process";
import { http } from "~/shared/api";
import { queryKeys } from "~/shared/lib";

type Body = Pick<
  ProcessTemplateStageField,
  | "fieldId"
  | "description"
  | "label"
  | "placeholder"
  | "stageId"
  | "templateId"
  | "type"
>;

type Props = {
  toggle: () => void;
  reset: () => void;
};

export const useCurrentMutation = ({ reset, toggle }: Props) => {
  const ctx = useQueryClient();

  return useMutation<ProcessTemplateStageField, Error, Body>({
    mutationKey: queryKeys({
      entity: "process-template-stage-field",
      type: "create",
    }),
    mutationFn: async (body) => {
      const res = await http.post("process-template-stage-fields", body);
      return res.data;
    },
    onSuccess: (item) => {
      reset();
      toggle();
      toast.success("Поле добавлено!");
      ctx.invalidateQueries({
        queryKey: queryKeys({
          entity: "process-template-stage-field",
          type: "find-many",
          params: {
            stageId: item.stageId,
          },
        }),
      });
    },
    onError: () => {
      toast.error("Что-то пошло не так!");
    },
  });
};
