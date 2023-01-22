import { FC } from "react";
import { Login } from "./Login/Login";
import { Dashboard } from "./Dashboard/Dashboard";
import { Layout } from "./Layout/Layout";
import { useStorage } from "../hooks/useStorage";

// @ts-ignore
import Logo from "../icons/Logo.svg";

const code = new URLSearchParams(window.location.search).get("code");

export const App: FC = () => {
  const { REACT_APP_AUTH_URL } = process.env;
  return (
    <Layout>
      <img src={Logo} alt="Spotify logo" className="mx-auto my-5" />
      {code ? <Dashboard code={code} /> : <Login link={REACT_APP_AUTH_URL} />}
    </Layout>
  );
};
