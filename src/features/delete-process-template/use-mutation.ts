import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { ProcessTemplate } from "~/entities/process";
import { http } from "~/shared/api";
import { queryKeys } from "~/shared/lib";

type Body = {
  templateId: ID;
};

export const useCurrentMutation = () => {
  const ctx = useQueryClient();
  const navigate = useNavigate();

  return useMutation<ProcessTemplate, Error, Body>({
    mutationKey: queryKeys({
      entity: "process-template",
      type: "delete",
    }),
    mutationFn: async (body) => {
      const res = await http.delete(`/processes/templates/${body.templateId}`);
      return res.data;
    },
    onSuccess: () => {
      toast.success("Шаблон удалён!");
      navigate("/admin/templates");
      ctx.invalidateQueries({
        queryKey: queryKeys({
          entity: "process-template",
          type: "find-many",
        }),
      });
    },
    onError: () => {
      toast.error("Что-то пошло не так!");
    },
  });
};
