import { ProcessTemplateStage } from "~/entities/process";
import { Card } from "~/shared/ui";
import { Dialog } from "./dialog";

type Props = {
  stage: ProcessTemplateStage;
};
export const Item = ({ stage }: Props) => {
  return (
    <Card className="border-dashed p-4 flex gap-4">
      <p>{stage.name}</p>
      <Dialog stageId={stage.id} />
    </Card>
  );
};
