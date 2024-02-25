import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z
  .object({
    username: z
      .string()
      .min(5, { message: "Минимальная длина имени пользователя 5 символов" }),
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    password: z
      .string()
      .min(6, { message: "Минимальная длина пароля 6 символов" }),
    confirmPassword: z
      .string()
      .min(6, { message: "Минимальная длина пароля 6 символов" }),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "Пароли не совпадают",
        path: ["confirmPassword"],
      });
    }
  });

type Schema = z.infer<typeof schema>;

export const useSignUpForm = () => {
  return useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
};
