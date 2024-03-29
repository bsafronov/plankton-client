import { Loader2 } from "lucide-react";
import { Outlet, useNavigate } from "react-router-dom";
import { useUser } from "~/shared/hooks";
import { Button, Header } from "~/shared/ui";
import { AdminNavbarList } from "~/widgets/admin-navbar-list";

export const AdminLayout = () => {
  const role = useUser()?.role;
  const isAdmin = role === "ADMIN";
  const navigate = useNavigate();

  if (!role) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Loader2 className="size-40 animate-spin" />
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex justify-center items-center flex-col gap-4">
        <h1 className="text-5xl font-bold">У вас нет доступа</h1>
        <Button className="mt-4" onClick={() => navigate("/")}>
          На главную
        </Button>
      </div>
    );
  }

  return (
    <>
      {isAdmin && (
        <div className="flex flex-col min-h-screen">
          <Header title="Админ-панель" />
          <div className="flex grow">
            <AdminNavbarList />
            <div className="grow flex flex-col p-4">
              <Outlet />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
