import { FC } from "react";
import { Login } from "./Login/Login";
import { Dashboard } from "./Dashboard/Dashboard";
import { Layout } from "./Layout/Layout";
import { useStorage } from "../hooks/useStorage";

export const App: FC = () => {
  const { REACT_APP_AUTH_URL } = process.env;
  const code = useStorage();
  return (
    <Layout>
      {code ? <Dashboard code={code} /> : <Login link={REACT_APP_AUTH_URL} />}
    </Layout>
  );
};
