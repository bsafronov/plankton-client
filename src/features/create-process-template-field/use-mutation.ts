import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { ProcessTemplateField } from "~/entities/process";
import { http } from "~/shared/api";
import { queryKeys } from "~/shared/lib/utils";

type Body = Pick<ProcessTemplateField, "name" | "templateId">;

type Props = {
  toggle: () => void;
  reset: () => void;
};

export const useCurrentMutation = ({ reset, toggle }: Props) => {
  const ctx = useQueryClient();

  return useMutation<ProcessTemplateField, Error, Body>({
    mutationKey: queryKeys({
      entity: "process-template-field",
      type: "create",
    }),
    mutationFn: async (body) => {
      const res = await http.post("process-template-fields", body);
      return res.data;
    },
    onSuccess: (field) => {
      reset();
      toggle();
      ctx.invalidateQueries({
        queryKey: queryKeys({
          entity: "process-template-field",
          type: "find-many",
          params: {
            templateId: field.templateId,
          },
        }),
      });
    },
    onError: () => {
      toast.error("Что-то пошло не так!");
    },
  });
};
