import { processTemplateQuery } from "~/entities/process";
import { Item } from "./item";
import { CCard } from "~/shared/ui";
import { ProcessTemplateFieldCreateDialog } from "~/features/create-process-template-field";

type Props = {
  templateId: ID;
};

export const List = ({ templateId }: Props) => {
  const { data: fields } = processTemplateQuery.useTemplateFieldList({
    templateId,
  });
  const hasFields = !!fields?.length;

  return (
    <CCard
      title="Поля шаблона"
      footer={<ProcessTemplateFieldCreateDialog templateId={templateId} />}
    >
      {hasFields ? (
        fields.map((item) => <Item key={item.id} field={item} />)
      ) : (
        <p className="text-muted-foreground">Поля не добавлены</p>
      )}
    </CCard>
  );
};
