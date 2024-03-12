import { LogOut } from "lucide-react";
import { CAlertDialog } from "~/shared/ui";
import { useSignOutMutation } from "../hooks/use-mutation";

export const SignOutIconButton = () => {
  const { mutate } = useSignOutMutation();

  return (
    <CAlertDialog
      onSubmit={mutate}
      title="Вы хотите выйти?"
      description="Потребуется повторная авторизация"
    >
      <button className="text-destructive hover:text-destructive/80">
        <LogOut />
      </button>
    </CAlertDialog>
  );
};
