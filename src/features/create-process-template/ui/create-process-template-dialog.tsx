import { CDialog, CForm, CFormField } from "~/shared/components";
import { useCreateProcessTemplateForm } from "../hooks/use-create-process-template-form";
import { Button, Input } from "~/shared/ui";
import { processHooks } from "~/entities/process";
import { useBoolean } from "usehooks-ts";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const CreateProcessTemplateDialog = () => {
  const { value: open, toggle } = useBoolean();
  const navigate = useNavigate();
  const form = useCreateProcessTemplateForm();
  const { mutate: createTemplate, isPending } =
    processHooks.useCreateTemplateMutation({
      onSuccess: (template) => {
        navigate(`/admin/templates/${template.id}`);
        toast.success("Шаблон успешно создан!");
      },
      onError: () => {
        toast.error("Что-то пошло не так!");
      },
    });
  const { control, handleSubmit } = form;

  const onSubmit = handleSubmit((data) =>
    createTemplate({
      name: data.name,
    })
  );

  return (
    <CDialog
      open={open}
      onOpenChange={toggle}
      title="Новый шаблон"
      trigger={<Button>Создать шаблон</Button>}
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
          label="Название шаблона"
          render={(props) => <Input {...props} />}
        />
      </CForm>
    </CDialog>
  );
};
