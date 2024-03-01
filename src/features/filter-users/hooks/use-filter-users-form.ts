import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useUserFilterStore } from "~/entities/user";

const schema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  username: z.string(),
  email: z.string(),
  departmentId: z.number().nullable(),
  role: z.string().nullable(),
});

type Schema = z.infer<typeof schema>;
export const useFilterUsersForm = () => {
  const { departmentId, username, firstName, lastName, role, email } =
    useUserFilterStore();

  return useForm<Schema>({
    resolver: zodResolver(schema),
    values: {
      firstName,
      lastName,
      role,
      email,
      username,
      departmentId,
    },
  });
};
