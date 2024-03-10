import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { processHooks } from "~/entities/process";
import { SelectProcessTemplateField } from "~/entities/process/ui";
import { CForm, CFormField } from "~/shared/components";
import { Input } from "~/shared/ui";

type Props = {
  stageId: ID;
  templateId: ID;
};

type Schema = z.infer<typeof schema>;
const schema = z.object({
  type: z.enum(["TEXT", "NUMBER"]),
  label: z.string().optional(),
  placeholder: z.string().optional(),
  description: z.string().optional(),
  fieldId: z.number().nullish(),
});

export const CreateProcessTemplateStageFieldForm = ({
  stageId,
  templateId,
}: Props) => {
  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      description: "",
      label: "",
      type: "TEXT",
      placeholder: "",
      fieldId: null,
    },
  });

  const { handleSubmit, control } = form;
  const ctx = useQueryClient();
  const { mutate: createField } =
    processHooks.useCreateStageFieldTemplateMutation({
      onSuccess: () => {
        form.reset();
        ctx.invalidateQueries({
          queryKey: [
            "process",
            "template",
            "stage",
            "find-one",
            `stageId=${stageId}`,
          ],
        });
      },
    });

  const onSubmit = handleSubmit(
    ({ type, description, fieldId, label, placeholder }) => {
      if (!fieldId) return;

      createField({
        type,
        fieldId,
        description,
        label,
        placeholder,
        templateId,
        stageId,
      });
    }
  );

  return (
    <CForm form={form} onSubmit={onSubmit} submitText="Добавить">
      <CFormField
        control={control}
        name="label"
        label="Название поля"
        description="Название будет находиться над полем ввода"
        render={(props) => <Input {...props} />}
      />
      <CFormField
        control={control}
        name="description"
        label="Описание поля"
        description="Описание будет находиться под полем ввода"
        render={(props) => <Input {...props} />}
      />
      <CFormField
        control={control}
        name="placeholder"
        label="Плейсхолдер"
        description="Плейсхолдер находится внутри поля ввода"
        render={(props) => <Input {...props} />}
      />
      <CFormField
        control={control}
        name="fieldId"
        label="Ссылка на поле процесса"
        description="В какое поле процесса будет записано значение ввода?"
        render={(props) => (
          <SelectProcessTemplateField {...props} templateId={templateId} />
        )}
      />
    </CForm>
  );
};
