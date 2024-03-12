import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Checkbox,
  Input,
  InputMask,
  InputPassword,
  CCard,
  CForm,
  CFormField,
  ReactSelect,
} from "~/shared/ui";

const schema = z.object({
  text: z.string().min(1, "Обязательное поле"),
  password: z.string().min(1, "Обязательное поле"),
  checkbox: z.boolean(),
  tel: z.string().length(18, "Неверный формат"),
  reactSelectSingle: z.object({
    label: z.string(),
    value: z.string(),
  }),
  reactSelectMulti: z.array(
    z.object({
      label: z.string(),
      value: z.string(),
    })
  ),
});

type Schema = z.infer<typeof schema>;

const mock = Array.from({ length: 25 }).map((_, index) => ({
  label: `Выбор ${index + 1}`,
  value: `option-${index + 1}`,
}));

export const ShowcasePage = () => {
  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      text: "",
      password: "",
      checkbox: false,
      tel: "",
      reactSelectSingle: mock[0],
      reactSelectMulti: [],
    },
  });
  const { control, handleSubmit } = form;
  console.log(form.formState.errors);

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <CCard
      className="w-full mx-8"
      title="Форма"
      footer="Пример использования компонентов в форме"
    >
      <CForm form={form} onSubmit={onSubmit}>
        <CFormField
          control={control}
          name="text"
          label="Текст"
          description="Текст"
          render={(props) => <Input {...props} />}
        />
        <CFormField
          control={control}
          name="password"
          label="Пароль"
          description="Пароль"
          render={(props) => <InputPassword {...props} />}
        />
        <CFormField
          control={control}
          name="tel"
          label="Телефон"
          description="Телефон"
          render={(props) => (
            <InputMask mask={"+7 (999) 999-99-99"} {...props} />
          )}
        />
        <CFormField
          control={control}
          name="checkbox"
          label="Чекбокс"
          description="Чекбокс"
          placement="checkbox"
          render={({ onChange, value, ...props }) => (
            <Checkbox {...props} onCheckedChange={onChange} checked={value} />
          )}
        />
        <CFormField
          control={control}
          name="reactSelectSingle"
          label="Селект с одним значением"
          description="Селект с одним значением"
          render={(props) => <ReactSelect {...props} options={mock} />}
        />
        <CFormField
          control={control}
          name="reactSelectMulti"
          label="Селект множественного выбора"
          description="Селект множественного выбора"
          render={(props) => <ReactSelect {...props} options={mock} isMulti />}
        />
      </CForm>
    </CCard>
  );
};
