import { toast } from "sonner";
import { CFormField } from "~/shared/components";
import { Button } from "~/shared/ui/button";
import { Form } from "~/shared/ui/form";
import { useSignInForm } from "../hooks/use-form";
import { useSignInMutation } from "../hooks/use-mutation";

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
        />
        <CFormField
          control={control}
          name="password"
          type="password"
          label="Пароль"
        />
        <div className="flex justify-end">
          <Button>Войти</Button>
        </div>
      </form>
    </Form>
  );
};
