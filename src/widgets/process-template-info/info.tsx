import { processTemplateQuery } from "~/entities/process";
import { CCard } from "~/shared/ui";

type Props = {
  templateId: ID;
};
export const Info = ({ templateId }: Props) => {
  const { data: template } = processTemplateQuery.useTemplate({
    templateId,
  });

  return (
    <div>
      <CCard title="Общая информация">
        <p>
          Название: <span>{template?.name}</span>
        </p>
      </CCard>
    </div>
  );
};
