import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { ProcessTemplateStage } from "~/entities/process";
import { http } from "~/shared/api";
import { queryKeys } from "~/shared/lib";

type Body = Pick<ProcessTemplateStage, "name" | "templateId">;

type Props = {
  toggle: () => void;
  reset: () => void;
};

export const useCurrentMutation = ({ reset, toggle }: Props) => {
  const ctx = useQueryClient();

  return useMutation<ProcessTemplateStage, Error, Body>({
    mutationKey: queryKeys({
      entity: "process-template-stage",
      type: "create",
    }),
    mutationFn: async (body) => {
      const res = await http.post("/processes/templates/stages/", body);
      return res.data;
    },
    onSuccess: (stage) => {
      reset();
      toggle();
      ctx.invalidateQueries({
        queryKey: queryKeys({
          entity: "process-template-stage",
          type: "find-many",
          params: {
            templateId: stage.templateId,
          },
        }),
      });
    },
    onError: () => {
      toast.error("Что-то пошло не так!");
    },
  });
};
