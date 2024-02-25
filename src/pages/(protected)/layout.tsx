import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuthStore } from "~/shared/hooks";
import { NavbarWidget } from "~/widgets/navbar";

export const ProtectedLayout = () => {
  const isAuth = useAuthStore().isAuth;
  const pathname = useLocation().pathname;
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate("/auth/sign-in");
    }
  }, [pathname, isAuth]);

  return (
    <div className="flex min-h-screen">
      <NavbarWidget />
      <main className="border-r grow">
        <Outlet />
      </main>
    </div>
  );
};
