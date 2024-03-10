import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CForm, CFormField } from "~/shared/components";
import { Input } from "~/shared/ui";

const schema = z.object({
  name: z.string(),
});

type Props = {
  stageId: ID;
  name: string;
};

export const UpdateProcessTemplateStageForm = ({ stageId, name }: Props) => {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: name,
    },
  });
  const { control, handleSubmit } = form;
  // const {} = processHooks.

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <CForm form={form} onSubmit={onSubmit} submitText="Сохранить">
      <CFormField
        control={control}
        name="name"
        label="Название этапа"
        render={(props) => <Input {...props} />}
      />
    </CForm>
  );
};
