import { Button, CDialog, CForm, CFormField, Input } from "~/shared/ui";
import { useCurrentForm } from "./use-form";
import { useCurrentMutation } from "./use-mutation";

export const Dialog = () => {
  const form = useCurrentForm();
  const { control, handleSubmit } = form;

  const { mutate: createTemplate, isPending } = useCurrentMutation();

  const onSubmit = handleSubmit((data) =>
    createTemplate({
      name: data.name,
    })
  );

  return (
    <CDialog title="Новый шаблон" trigger={<Button>Создать шаблон</Button>}>
      <CForm
        form={form}
        onSubmit={onSubmit}
        isLoading={isPending}
        submitText="Создать"
      >
        <CFormField
          control={control}
          name="name"
          label="Название шаблона"
          render={(props) => <Input {...props} />}
        />
      </CForm>
    </CDialog>
  );
};
