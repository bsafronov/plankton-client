import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useBoolean } from "usehooks-ts";
import { z } from "zod";
import { processHooks } from "~/entities/process";
import { CDialog, CForm, CFormField } from "~/shared/components";
import { Button, Input } from "~/shared/ui";

const schema = z.object({
  name: z.string(),
});

type Schema = z.infer<typeof schema>;

type Props = {
  templateId: number;
};
export const Dialog = ({ templateId }: Props) => {
  const { value: open, toggle } = useBoolean();
  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
    },
  });
  const { control, handleSubmit } = form;
  const ctx = useQueryClient();
  const { mutate: createField } = processHooks.useCreateFieldTemplateMutation({
    onSuccess: () => {
      toggle();
      form.reset();
      ctx.invalidateQueries({
        queryKey: [
          "process",
          "template",
          "find-one",
          `templateId=${templateId}`,
        ],
      });
    },
  });

  const onSubmit = handleSubmit((data) =>
    createField({
      name: data.name,
      templateId,
    })
  );
  return (
    <CDialog
      open={open}
      onOpenChange={toggle}
      title="Создание поля процесса"
      trigger={<Button>Добавить поле</Button>}
    >
      <CForm form={form} onSubmit={onSubmit} submitText="Создать">
        <CFormField
          control={control}
          name="name"
          label="Название поля"
          render={(props) => <Input {...props} />}
        />
      </CForm>
    </CDialog>
  );
};
