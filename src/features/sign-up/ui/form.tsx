import { CForm, CFormField } from "~/shared/components";
import { Input, InputPassword } from "~/shared/ui";
import { useSignUpForm } from "../hooks/use-form";
import { useSignUpMutation } from "../hooks/use-mutation";

export const SignUpForm = () => {
  const form = useSignUpForm();
  const { handleSubmit, control } = form;
  const { mutate, isPending } = useSignUpMutation();
  const onSubmit = handleSubmit(async (data) => mutate(data));

  return (
    <CForm
      form={form}
      onSubmit={onSubmit}
      submitText="Зарегистрироваться"
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
      <CFormField
        control={control}
        name="confirmPassword"
        label="Подтверждение пароля"
        required
        render={(props) => <InputPassword {...props} />}
      />
      <CFormField
        control={control}
        name="firstName"
        label="Имя"
        render={(props) => <Input {...props} />}
      />
      <CFormField
        control={control}
        name="lastName"
        label="Фамилия"
        render={(props) => <Input {...props} />}
      />
      <CFormField
        control={control}
        name="email"
        label="Почта"
        render={(props) => <Input {...props} />}
      />
    </CForm>
  );
};
