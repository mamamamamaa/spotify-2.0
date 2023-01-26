import { FC } from "react";
import { Login } from "../components/Login/Login";
import { Logo } from "../components/Logo/Logo";

export const LoginPage: FC = () => {
  const { REACT_APP_AUTH_URL } = process.env;

  return (
    <div className="container px-12 py-2 pb-[80px] mx-auto">
      <Logo />
      <Login link={REACT_APP_AUTH_URL} />
    </div>
  );
};
