import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  username: z.string(),
  password: z.string(),
  confirmPassword: z.string(),
});

type Schema = z.infer<typeof schema>;

export const useSignUpForm = () => {
  return useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      username: "",
      password: "",
      confirmPassword: "",
    },
  });
};
