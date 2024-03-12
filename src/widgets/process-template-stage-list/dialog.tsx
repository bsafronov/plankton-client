import { Settings } from "lucide-react";
import { Button, CDialog } from "~/shared/ui";
import { Wrapper } from "./wrapper";

type Props = {
  stageId: ID;
  templateId: ID;
};
export const Dialog = ({ stageId, templateId }: Props) => {
  return (
    <CDialog
      title="Настройка этапа"
      trigger={
        <Button size={"icon"} variant={"outline"}>
          <Settings />
        </Button>
      }
      full
    >
      <Wrapper stageId={stageId} templateId={templateId} />
    </CDialog>
  );
};
