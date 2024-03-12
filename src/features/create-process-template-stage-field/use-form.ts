import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  placeholder: z.string().optional(),
  label: z.string().optional(),
  description: z.string().optional(),
  type: z.enum(["TEXT", "NUMBER"]),
  fieldId: z.number().nullable(),
});

type Schema = z.infer<typeof schema>;

export const useCurrentForm = () => {
  return useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      fieldId: null,
      description: "",
      label: "",
      placeholder: "",
      type: "TEXT",
    },
  });
};
