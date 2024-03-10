import { processHooks } from "~/entities/process";
import { CreateProcessTemplateStageFieldForm } from "./create-process-template-stage-field-form";
import { UpdateProcessTemplateStageForm } from "./update-process-template-stage-form";
import { FieldList } from "./field-list";

type Props = {
  stageId: ID;
};

export const FormWrapper = ({ stageId }: Props) => {
  const { data: stage } = processHooks.useFindOneTemplateStageQuery({
    stageId,
  });

  if (!stage) {
    return null;
  }

  return (
    <div className="flex gap-4">
      <div className="grow">
        <UpdateProcessTemplateStageForm stageId={stageId} name={stage.name} />
        <FieldList fields={stage.fields} templateId={stage.templateId} />
      </div>
      <div className="pl-4 border-l">
        <CreateProcessTemplateStageFieldForm
          stageId={stageId}
          templateId={stage.templateId}
        />
      </div>
    </div>
  );
};
