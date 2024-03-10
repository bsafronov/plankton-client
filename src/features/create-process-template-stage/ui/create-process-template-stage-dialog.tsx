import { CDialog, CForm, CFormField } from "~/shared/components";
import { Button, Input } from "~/shared/ui";
import { processHooks } from "~/entities/process";
import { useBoolean } from "usehooks-ts";
import { toast } from "sonner";
import { useCreateProcessTemplateStageForm } from "../hooks/use-create-process-template-stage-form";
import { useQueryClient } from "@tanstack/react-query";

type Props = {
  templateId: number;
};

export const CreateProcessTemplateStageDialog = ({ templateId }: Props) => {
  const form = useCreateProcessTemplateStageForm();
  const { control, handleSubmit } = form;
  const { value: open, toggle } = useBoolean();
  const ctx = useQueryClient();
  const { mutate: createStage, isPending } =
    processHooks.useCreateStageTemplateMutation({
      onSuccess: () => {
        toast.success("Этап успешно создан!");
        ctx.invalidateQueries({
          queryKey: [
            "process",
            "template",
            "find-one",
            `templateId=${templateId}`,
          ],
        });
        toggle();
      },
      onError: () => {
        toast.error("Что-то пошло не так!");
      },
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
