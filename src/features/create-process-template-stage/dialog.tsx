import { useBoolean } from "usehooks-ts";
import { Button, CDialog, CForm, CFormField, Input } from "~/shared/ui";
import { useCurrentForm } from "./use-form";
import { useCurrentMutation } from "./use-mutation";

type Props = {
  templateId: number;
};

export const Dialog = ({ templateId }: Props) => {
  const { value: open, toggle } = useBoolean();
  const form = useCurrentForm();
  const { control, handleSubmit, reset } = form;
  const { mutate: createStage, isPending } = useCurrentMutation({
    reset,
    toggle,
  });

  const onSubmit = handleSubmit((data) =>
    createStage({
      name: data.name,
      templateId,
    })
  );

  return (
    <CDialog
      open={open}
      onOpenChange={toggle}
      title="Создание этапа"
      trigger={<Button>Добавить этап</Button>}
    >
      <CForm
        form={form}
        onSubmit={onSubmit}
        isLoading={isPending}
        submitText="Создать"
      >
        <CFormField
          control={control}
          name="name"
          label="Название этапа"
          render={(props) => <Input {...props} />}
        />
      </CForm>
    </CDialog>
  );
};
