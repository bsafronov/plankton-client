import { toast } from "sonner";
import { CForm, CFormField } from "~/shared/components";
import { Input, InputPassword } from "~/shared/ui";
import { useSignInForm } from "../hooks/use-form";
// import { useSignInMutation } from "../hooks/use-mutation";
import { useAuthStore } from "~/shared/hooks";

export const SignInForm = () => {
  const form = useSignInForm();
  const { control, handleSubmit } = form;
  // const { mutateAsync } = useSignInMutation();
  const login = useAuthStore().login;
  const onSubmit = handleSubmit(async (data) => {
    try {
      // const { data: tokens } = await mutateAsync(data);
      // console.log(tokens);
      console.log(data);

      login({
        accessToken: "",
        refreshToken: "",
      });
    } catch (e) {
      toast.error("Неверное имя пользователя или пароль");
    }
  });

  return (
    <CForm form={form} onSubmit={onSubmit} submitText="Войти">
      <CFormField
        control={control}
        name="username"
        label="Логин"
        required
        render={(props) => <Input {...props} />}
      />
      <CFormField
        control={control}
        name="password"
        label="Пароль"
        required
        render={(props) => <InputPassword {...props} />}
      />
    </CForm>
  );
};
