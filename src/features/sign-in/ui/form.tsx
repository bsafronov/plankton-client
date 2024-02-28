import { CForm, CFormField } from "~/shared/components";
import { Input, InputPassword } from "~/shared/ui";
import { useSignInForm } from "../hooks/use-form";
import { useSignInMutation } from "../hooks/use-mutation";

export const SignInForm = () => {
  const form = useSignInForm();
  const { control, handleSubmit } = form;
  const { mutate, isPending } = useSignInMutation();
  const onSubmit = handleSubmit(({ password, username }) => {
    if (username.includes("@")) {
      mutate({ email: username, password });
    } else {
      mutate({ username, password });
    }
  });

  return (
    <CForm
      form={form}
      onSubmit={onSubmit}
      submitText="Войти"
      isLoading={isPending}
    >
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
