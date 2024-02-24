import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuthStore } from "~/shared/hooks";

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
    <>
      <Outlet />
    </>
  );
};
