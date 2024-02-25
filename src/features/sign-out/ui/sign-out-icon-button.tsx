import { LogOut } from "lucide-react";
import { CAlertDialog } from "~/shared/components";
import { useAuthStore } from "~/shared/hooks";

export const SignOutIconButton = () => {
  const logout = useAuthStore().logout;
  return (
    <CAlertDialog
      onSubmit={logout}
      title="Вы хотите выйти?"
      description="Потребуется повторная авторизация"
    >
      <button className="text-destructive hover:text-destructive/80">
        <LogOut />
      </button>
    </CAlertDialog>
  );
};
