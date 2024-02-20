import { SignInForm } from "~/features/sign-in";
import { SignUpForm } from "~/features/sign-up";
import { CCard } from "~/shared/components/card";
import { Link } from "~/shared/ui/link";

type Props = {
  type: "sign-in" | "sign-up";
};

export const AuthFormWidget = ({ type }: Props) => {
  const isSignIn = type === "sign-in";
  return (
    <CCard
      title={isSignIn ? "Авторизация" : "Регистрация"}
      children={isSignIn ? <SignInForm /> : <SignUpForm />}
      footer={isSignIn ? <SignUpFooter /> : <SignInFooter />}
    />
  );
};

const SignUpFooter = () => {
  return (
    <>
      Не зарегистрированы?&nbsp;
      <Link to={"/auth/sign-up"}>Регистрация</Link>
    </>
  );
};

const SignInFooter = () => {
  return (
    <>
      Уже зарегистрированы?&nbsp;
      <Link to={"/auth/sign-in"}>Войти</Link>
    </>
  );
};
