import { Settings } from "lucide-react";
import { CDialog } from "~/shared/components";
import { Button } from "~/shared/ui";
import { FormWrapper } from "./form-wrapper";

type Props = {
  stageId: ID;
};

export const UpdateProcessTemplateStageDialog = ({ stageId }: Props) => {
  return (
    <CDialog
      title="Редактирование этапа"
      trigger={
        <Button size={"icon"} variant={"outline"}>
          <Settings />
        </Button>
      }
      className="max-w-none"
    >
      <FormWrapper stageId={stageId} />
    </CDialog>
  );
};
