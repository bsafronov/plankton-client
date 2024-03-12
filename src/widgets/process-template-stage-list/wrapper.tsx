import { ProcessTemplateStageUpdateForm } from "~/features/update-process-template-stage";
import { FieldDemoForm } from "./field-demo-form";

type Props = {
  stageId: ID;
  templateId: ID;
};

export const Wrapper = ({ stageId, templateId }: Props) => {
  return (
    <div>
      <ProcessTemplateStageUpdateForm stageId={stageId} />
      <div className="mt-4">
        <FieldDemoForm stageId={stageId} templateId={templateId} />
      </div>
    </div>
  );
};
