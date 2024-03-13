import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { ProcessTemplateStage } from "~/entities/process";
import { http } from "~/shared/api";
import { queryKeys } from "~/shared/lib";

type Body = Pick<ProcessTemplateStage, "name" | "id">;

export const useCurrentMutation = () => {
  const ctx = useQueryClient();
  return useMutation<ProcessTemplateStage, Error, Body>({
    mutationKey: queryKeys({
      entity: "process-template-stage",
      type: "update",
    }),
    mutationFn: async (body) => {
      const res = await http.patch("/process-template-stages/", body);
      return res.data;
    },
    onSuccess: (stage) => {
      toast.success("Данные успешно обновлены!");
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
      toast.error("Ошибка обновления данных");
    },
  });
};
