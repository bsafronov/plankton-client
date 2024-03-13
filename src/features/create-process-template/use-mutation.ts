import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { ProcessTemplate } from "~/entities/process";
import { http } from "~/shared/api";
import { queryKeys } from "~/shared/lib/utils";

type Body = Pick<ProcessTemplate, "name">;

export const useCurrentMutation = () => {
  const navigate = useNavigate();
  const ctx = useQueryClient();

  return useMutation<ProcessTemplate, Error, Body>({
    mutationKey: queryKeys({
      entity: "process-template",
      type: "create",
    }),
    mutationFn: async (body) => {
      const res = await http.post("process-templates", body);
      return res.data;
    },
    onSuccess: (template) => {
      ctx.invalidateQueries({
        queryKey: queryKeys({
          entity: "process-template",
          type: "find-many",
        }),
      });
      navigate(`/admin/templates/${template.id}`);
      toast.success("Шаблон успешно создан!");
    },
    onError: () => {
      toast.error("Что-то пошло не так!");
    },
  });
};
