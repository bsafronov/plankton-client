import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { processTemplateQuery } from "~/entities/process";

const schema = z.object({
  name: z.string(),
});

type Schema = z.infer<typeof schema>;

type Props = {
  templateId: ID;
};

export const useCurrentForm = ({ templateId }: Props) => {
  const { data: template } = processTemplateQuery.useTemplate({ templateId });

  return useForm<Schema>({
    resolver: zodResolver(schema),
    values: {
      name: template?.name ?? "",
    },
  });
};
