import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { processTemplateQuery } from "~/entities/process";
import { ProcessTemplateStageFieldCreateDialog } from "~/features/create-process-template-stage-field";
import { CCard, CForm, CFormField, Input } from "~/shared/ui";

type Props = {
  stageId: ID;
  templateId: ID;
};

type Schema = z.infer<typeof schema>;

const schema = z.object({
  field: z.array(z.string()),
});

export const FieldDemoForm = ({ stageId, templateId }: Props) => {
  const { data } = processTemplateQuery.useTemplateStageFieldList({
    stageId,
  });
  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      field: [],
    },
  });
  const { handleSubmit, control } = form;

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <CCard
      title="Демо формы"
      footer={
        <ProcessTemplateStageFieldCreateDialog
          stageId={stageId}
          templateId={templateId}
        />
      }
    >
      <CForm form={form} onSubmit={onSubmit} submitText="Тестировать">
        {data?.map(({ label, placeholder, description }, i) => (
          <CFormField
            key={i}
            control={control}
            name={`field.${i}`}
            label={label}
            description={description}
            render={(props) => <Input placeholder={placeholder} {...props} />}
          />
        ))}
      </CForm>
    </CCard>
  );
};
