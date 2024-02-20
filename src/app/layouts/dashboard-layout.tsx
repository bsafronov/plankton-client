import { Outlet } from "react-router-dom";
import { useProtectedAuth } from "../hooks/use-protected-auth";

export const DashboardLayout = () => {
  useProtectedAuth();

  return (
    <div>
      <Outlet />
    </div>
  );
};
