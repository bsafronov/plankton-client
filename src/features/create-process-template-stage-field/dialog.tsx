import { useBoolean } from "usehooks-ts";
import { SelectProcessTemplateField } from "~/entities/process/ui";
import { Button, CDialog, CForm, CFormField, Input } from "~/shared/ui";
import { useCurrentForm } from "./use-form";
import { useCurrentMutation } from "./use-mutation";

type Props = {
  templateId: ID;
  stageId: ID;
};
export const Dialog = ({ stageId, templateId }: Props) => {
  const { value: open, toggle } = useBoolean();
  const form = useCurrentForm();
  const { handleSubmit, control, reset } = form;
  const { mutate: createStageField } = useCurrentMutation({
    reset,
    toggle,
  });
  const onSubmit = handleSubmit(
    ({ fieldId, type, description, label, placeholder }) => {
      if (!fieldId) return;
      createStageField({
        stageId,
        templateId,
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
      title="Создание поля этапа"
      trigger={<Button>Добавить поле</Button>}
    >
      <CForm form={form} onSubmit={onSubmit} submitText="Создать">
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
