import { useBoolean } from "usehooks-ts";
import { SelectProcessTemplateField } from "~/entities/process/ui";
import { Button, CDialog, CForm, CFormField, Input } from "~/shared/ui";
import { useCurrentForm } from "./use-form";
import { useCurrentMutation } from "./use-mutation";
import { Edit } from "lucide-react";

type Props = {
  fieldId: ID;
  stageId: ID;
  templateId: ID;
};
export const Dialog = ({ stageId, fieldId: id, templateId }: Props) => {
  const { value: open, toggle } = useBoolean();
  const form = useCurrentForm({
    fieldId: id,
    stageId,
  });
  const { handleSubmit, control, reset } = form;
  const { mutate } = useCurrentMutation({
    reset,
    toggle,
  });
  const onSubmit = handleSubmit(
    ({ fieldId, type, description, label, placeholder }) => {
      if (!fieldId) return;
      mutate({
        id,
        fieldId,
        type,
        description,
        label,
        placeholder,
      });
    }
  );

  return (
    <CDialog
      open={open}
      onOpenChange={toggle}
      title="Изменение поля формы"
      trigger={
        <Button variant={"outline"} size={"icon"}>
          <Edit />
        </Button>
      }
    >
      <CForm form={form} onSubmit={onSubmit} submitText="Изменить">
        <CFormField
          control={control}
          name="fieldId"
          label="Ссылка на поле шаблона"
          description="В какое поле следует записать результат введённого значения?"
          render={(props) => (
            <SelectProcessTemplateField templateId={templateId} {...props} />
          )}
        />
        <CFormField
          control={control}
          name="label"
          label="Название"
          description="Название находится над полем ввода"
          render={(props) => <Input {...props} />}
        />
        <CFormField
          control={control}
          name="placeholder"
          label="Заполнитель"
          description="Находится внутри поля в качестве подсказки к значению"
          render={(props) => <Input {...props} />}
        />
        <CFormField
          control={control}
          name="description"
          label="Описание"
          description="Находится под полем ввода для описания значимости поля"
          render={(props) => <Input {...props} />}
        />
      </CForm>
    </CDialog>
  );
};
