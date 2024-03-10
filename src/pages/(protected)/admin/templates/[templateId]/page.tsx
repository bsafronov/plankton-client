import { useParams } from "react-router-dom";
import { processHooks } from "~/entities/process";
import { CreateProcessTemplateField } from "~/features/create-process-template-field";
import { CreateProcessTemplateStageDialog } from "~/features/create-process-template-stage";
import { UpdateProcessTemplateStageDialog } from "~/features/update-process-template-stage";
import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "~/shared/ui";

export const AdminTemplateIdPage = () => {
  const { templateId } = useParams();
  const { data: template } = processHooks.useFindOneTemplateQuery({
    templateId: Number(templateId),
  });
  return (
    <div>
      <p>Название: {template?.name}</p>
      <div>
        <h5>Поля:</h5>
        {!!template?.fields?.length && (
          <Table>
            <TableBody>
              <TableRow>
                <TableHead>Название</TableHead>
              </TableRow>
              {template?.fields?.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
      <div className="my-4">
        <CreateProcessTemplateField templateId={Number(templateId)} />
      </div>
      <div className="space-y-4 mb-4 grow">
        {template?.stages?.map((item) => (
          <div key={item.id} className="flex gap-4 items-center">
            <Card className="w-full p-4">{item.name}</Card>
            <UpdateProcessTemplateStageDialog stageId={item.id} />
          </div>
        ))}
      </div>
      <CreateProcessTemplateStageDialog templateId={Number(templateId)} />
    </div>
  );
};
