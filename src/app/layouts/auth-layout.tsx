import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuthStore } from "~/shared/hooks";

export const AuthLayout = () => {
  const isAuth = useAuthStore().isAuth;
  const pathname = useLocation().pathname;
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [pathname, isAuth]);

  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <Outlet />
    </div>
  );
};
