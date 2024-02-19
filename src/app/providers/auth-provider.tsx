import { useAuthStore } from "~/shared/hooks";

type Props = {
  children?: React.ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
  const isAuth = useAuthStore().isAuth;

  console.log(isAuth ? "Authorized" : "Unauthorized");

  return <>{children}</>;
};
