import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CCard, CFormField } from "~/shared/components";
import { Button } from "~/shared/ui/button";
import { Form } from "~/shared/ui/form";

const schema = z.object({
  text: z.string(),
  password: z.string(),
  checkbox: z.boolean(),
  tel: z.string(),
});

type Schema = z.infer<typeof schema>;

export const ShowcasePage = () => {
  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      text: "",
      password: "",
      checkbox: false,
      tel: "",
    },
  });
  const { control, handleSubmit } = form;

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <CCard
      className="min-w-96"
      title="Форма"
      footer="Пример использования компонентов в форме"
    >
      <Form {...form}>
        <form onSubmit={onSubmit} className="space-y-4">
          <CFormField
            control={control}
            name="text"
            label="Текст"
            description="Описание текста"
          />
          <CFormField
            control={control}
            name="password"
            type="password"
            label="Пароль"
            description="Описание пароля"
          />
          <CFormField
            control={control}
            name="checkbox"
            type="checkbox"
            label="Чекбокс"
            description="Описание чекбокса"
          />
          <CFormField
            control={control}
            name="tel"
            type="tel"
            label="Телефон"
            description="Описание телефона"
          />
          <div className="flex justify-end mt-4">
            <Button>Отправить</Button>
          </div>
        </form>
      </Form>
    </CCard>
  );
};
