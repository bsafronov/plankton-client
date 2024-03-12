import { Button, CAlertDialog } from "~/shared/ui";
import { useCurrentMutation } from "./use-mutation";

type Props = {
  templateId: ID;
};
export const Dialog = ({ templateId }: Props) => {
  const { mutate: deleteTemplate } = useCurrentMutation();

  return (
    <CAlertDialog
      title="Вы уверены?"
      description="Все данные, подписанные на этот шаблон, будут удалены!"
      onSubmit={() => deleteTemplate({ templateId })}
    >
      <Button variant={"destructive"}>Удалить шаблон</Button>
    </CAlertDialog>
  );
};
