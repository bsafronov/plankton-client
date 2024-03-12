import { ProcessTemplateStageUpdateForm } from "~/features/update-process-template-stage";

type Props = {
  stageId: ID;
};
export const Wrapper = ({ stageId }: Props) => {
  return (
    <div>
      <ProcessTemplateStageUpdateForm stageId={stageId} />
    </div>
  );
};
