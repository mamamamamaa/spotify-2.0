import { FC } from "react";
import { Login } from "./Login/Login";
import { Dashboard } from "./Dashboard/Dashboard";
import { Layout } from "./Layout/Layout";
import { Routes, Route, Link } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";
import { SongsList } from "./SongsList/SongsList";
import { Lyrics } from "./Lyrics/Lyrics";
import { useAuth } from "../hooks/useAuth";
import { PrivateRoutes } from "../helpers/PrivateRoutes";

const code = new URLSearchParams(window.location.search).get("code") || "";

export const App: FC = () => {
  const { REACT_APP_AUTH_URL } = process.env;
  return (
    <Layout>
      {code ? <Dashboard code={code} /> : <Login link={REACT_APP_AUTH_URL} />}
    </Layout>
  );
};
