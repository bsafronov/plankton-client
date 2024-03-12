import { useParams } from "react-router-dom";
import { ProcessTemplateDeleteDialog } from "~/features/delete-process-template";
import { ProcessTemplateFieldList } from "~/widgets/process-template-field-list";
import { ProcessTemplateInfo } from "~/widgets/process-template-info";

export const AdminTemplateIdPage = () => {
  const { templateId } = useParams();
  const id = Number(templateId);
  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <ProcessTemplateInfo templateId={id} />
        <ProcessTemplateFieldList templateId={id} />
      </div>
      <div className="flex justify-end mt-4">
        <ProcessTemplateDeleteDialog templateId={id} />
      </div>
    </div>
  );
};
