import { SignInForm } from "~/features/sign-in";
import { SignUpForm } from "~/features/sign-up";
import { Link, CCard } from "~/shared/ui";

type Props = {
  type: "sign-in" | "sign-up";
};

export const AuthFormWidget = ({ type }: Props) => {
  const isSignIn = type === "sign-in";
  return (
    <CCard
      className="min-w-96"
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
