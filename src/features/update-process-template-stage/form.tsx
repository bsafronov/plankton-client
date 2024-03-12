import { CForm, CFormField, Input } from "~/shared/ui";
import { useCurrentForm } from "./use-form";
import { useCurrentMutation } from "./use-mutation";

type Props = {
  stageId: ID;
};
export const Form = ({ stageId }: Props) => {
  const form = useCurrentForm({
    stageId,
  });
  const { control, handleSubmit } = form;
  const { mutate: updateData } = useCurrentMutation();

  const onSubmit = handleSubmit((data) =>
    updateData({
      id: stageId,
      name: data.name,
    })
  );

  return (
    <CForm form={form} onSubmit={onSubmit} submitText="Сохранить">
      <CFormField
        control={control}
        name="name"
        label="Название"
        render={(props) => <Input {...props} />}
      />
    </CForm>
  );
};
