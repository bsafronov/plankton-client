import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  CCard,
  CFormField,
  InputPassword,
  ReactSelect,
} from "~/shared/components";
import { Checkbox, Input, InputMask } from "~/shared/ui";
import { Button } from "~/shared/ui/button";
import { Form } from "~/shared/ui/form";

const schema = z.object({
  text: z.string().min(1, "Обязательное поле"),
  password: z.string().min(1, "Обязательное поле"),
  checkbox: z.boolean(),
  tel: z.string().length(18, "Неверный формат"),
  reactSelectSingle: z
    .object({
      label: z.string(),
      value: z.string(),
    })
    .nullable(),
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
      reactSelectSingle: null,
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
      <Form {...form}>
        <form onSubmit={onSubmit} className="space-y-4">
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
            render={(props) => (
              <ReactSelect {...props} options={mock} isMulti />
            )}
          />

          <div className="flex justify-end mt-4">
            <Button>Отправить</Button>
          </div>
        </form>
      </Form>
    </CCard>
  );
};
