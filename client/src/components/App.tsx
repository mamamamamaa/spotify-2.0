import { FC } from "react";
import { Login } from "./Login/Login";
import { Dashboard } from "./Dashboard/Dashboard";

const code = new URLSearchParams(window.location.search).get("code");

export const App: FC = () => {
  const { REACT_APP_AUTH_URL } = process.env;
  return (
    <>
      {code ? <Dashboard code={code} /> : <Login link={REACT_APP_AUTH_URL} />}
    </>
  );
};
