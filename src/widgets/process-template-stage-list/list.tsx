import { processTemplateQuery } from "~/entities/process";
import { ProcessTemplateStageCreateDialog } from "~/features/create-process-template-stage";
import { CCard } from "~/shared/ui";
import { Item } from "./item";

type Props = {
  templateId: ID;
};
export const List = ({ templateId }: Props) => {
  const { data: stages } = processTemplateQuery.useTemplateStageList({
    templateId,
  });
  const hasStages = !!stages?.length;

  return (
    <CCard
      title="Этапы"
      footer={<ProcessTemplateStageCreateDialog templateId={templateId} />}
      classNameContent="flex gap-4"
    >
      {hasStages ? (
        stages.map((item) => <Item key={item.id} stage={item} />)
      ) : (
        <p className="text-muted-foreground">Этапы отсутствуют</p>
      )}
    </CCard>
  );
};
