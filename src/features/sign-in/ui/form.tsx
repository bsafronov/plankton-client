import { toast } from "sonner";
import { CFormField } from "~/shared/components";
import { useSignInForm } from "../hooks/use-form";
import { useSignInMutation } from "../hooks/use-mutation";
import { Button, Form, Input, InputPassword } from "~/shared/ui";

export const SignInForm = () => {
  const form = useSignInForm();
  const { control, handleSubmit } = form;
  const { mutateAsync } = useSignInMutation();

  const onSubmit = handleSubmit(async (data) => {
    try {
      const { data: tokens } = await mutateAsync(data);
      console.log(tokens);
    } catch (e) {
      toast.error("Неверное имя пользователя или пароль");
    }
  });

  return (
    <Form {...form}>
      <form onSubmit={onSubmit}>
        <CFormField
          control={control}
          name="username"
          label="Имя пользователя"
          render={(props) => <Input {...props} />}
        />
        <CFormField
          control={control}
          name="password"
          label="Пароль"
          render={(props) => <InputPassword {...props} />}
        />
        <div className="flex justify-end">
          <Button>Войти</Button>
        </div>
      </form>
    </Form>
  );
};
