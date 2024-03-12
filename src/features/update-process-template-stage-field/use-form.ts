import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ProcessTemplateStageField } from "~/entities/process";
import { queryKeys } from "~/shared/lib";

const schema = z.object({
  placeholder: z.string().optional(),
  label: z.string().optional(),
  description: z.string().optional(),
  type: z.enum(["TEXT", "NUMBER"]),
  fieldId: z.number().nullable(),
});

type Schema = z.infer<typeof schema>;

type Props = {
  stageId: ID;
  fieldId: ID;
};
export const useCurrentForm = ({ stageId, fieldId }: Props) => {
  const ctx = useQueryClient();
  const fields: ProcessTemplateStageField[] | undefined = ctx.getQueryData(
    queryKeys({
      entity: "process-template-stage-field",
      type: "find-many",
      params: {
        stageId,
      },
    })
  );
  const field = fields?.find((item) => item.id === fieldId);

  return useForm<Schema>({
    resolver: zodResolver(schema),
    values: {
      fieldId: field?.fieldId ?? null,
      description: field?.description ?? "",
      label: field?.label ?? "",
      placeholder: field?.placeholder ?? "",
      type: field?.type ?? "TEXT",
    },
  });
};
