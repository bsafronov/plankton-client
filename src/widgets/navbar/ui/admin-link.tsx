import { useAdmin } from "~/shared/hooks";
import { NavbarItem } from "./navbar-item";
import { LayoutDashboard } from "lucide-react";

export const AdminLink = () => {
  const isAdmin = useAdmin();

  if (!isAdmin) {
    return null;
  }

  return <NavbarItem href="/admin" icon={LayoutDashboard} />;
};
