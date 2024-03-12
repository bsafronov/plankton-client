import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { processTemplateQuery } from "~/entities/process";

const schema = z.object({
  name: z.string(),
});

type Schema = z.infer<typeof schema>;

type Props = {
  stageId: ID;
};

export const useCurrentForm = ({ stageId }: Props) => {
  const { data } = processTemplateQuery.useTemplateStage({
    stageId,
  });

  return useForm<Schema>({
    resolver: zodResolver(schema),
    values: {
      name: data?.name ?? "",
    },
  });
};
