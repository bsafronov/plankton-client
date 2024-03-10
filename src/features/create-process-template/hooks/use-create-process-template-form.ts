import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string(),
});

type Schema = z.infer<typeof schema>;

export const useCreateProcessTemplateForm = () => {
  return useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
    },
  });
};
