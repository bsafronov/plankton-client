import { Link } from "react-router-dom";
import { CCard } from "~/shared/components/card";

type Props = {
  type: "sign-in" | "sign-up";
};

export const AuthFormWidget = ({ type }: Props) => {
  const isSignIn = type === "sign-in";
  return (
    <CCard
      title={isSignIn ? "Авторизация" : "Регистрация"}
      footer={isSignIn ? <SignUpFooter /> : <SignInFooter />}
    />
  );
};

const SignUpFooter = () => {
  return (
    <>
      Не зарегистрированы?&nbsp;
      <Link to={"/auth/sign-up"} className="text-blue-500">
        Регистрация
      </Link>
    </>
  );
};

const SignInFooter = () => {
  return (
    <>
      Уже зарегистрированы?&nbsp;
      <Link to={"/auth/sign-in"} className="text-blue-500">
        Войти
      </Link>
    </>
  );
};
