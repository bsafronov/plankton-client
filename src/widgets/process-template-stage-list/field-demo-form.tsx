import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Trash } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { processTemplateQuery } from "~/entities/process";
import { ProcessTemplateStageFieldCreateDialog } from "~/features/create-process-template-stage-field";
import { ProcessTemplateStageFieldUpdateDialog } from "~/features/update-process-template-stage-field";
import { Button, CCard, CFormField, Form, Input } from "~/shared/ui";

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
  const { data: fields } = processTemplateQuery.useTemplateFieldList();

  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      field: [],
    },
  });
  const { control } = form;

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
      <Form {...form}>
        {data?.map(
          (
            {
              id,
              stageId,
              templateId,
              label,
              placeholder,
              description,
              fieldId,
            },
            i
          ) => (
            <div key={i} className="flex gap-2 items-center">
              <Button size={"icon"} variant={"destructive"}>
                <Trash />
              </Button>
              <ProcessTemplateStageFieldUpdateDialog
                fieldId={id}
                stageId={stageId}
                templateId={templateId}
              />
              <CFormField
                control={control}
                name={`field.${i}`}
                label={label}
                description={description}
                render={(props) => (
                  <Input placeholder={placeholder} {...props} />
                )}
              />
              <ArrowRight />
              <div className="border rounded-md border-dashed p-4">
                {fields?.find((item) => item.id === fieldId)?.name}
              </div>
            </div>
          )
        )}
      </Form>
    </CCard>
  );
};
