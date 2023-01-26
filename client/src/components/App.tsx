import { FC } from "react";
import { Login } from "./Login/Login";
import { Dashboard } from "./Dashboard/Dashboard";
import { Layout } from "./Layout/Layout";
import { Logo } from "./Logo/Logo";
import { Routes, Route, Link } from "react-router-dom";

const code = new URLSearchParams(window.location.search).get("code");

export const App: FC = () => {
  const { REACT_APP_AUTH_URL } = process.env;

  return (
    <>
      <Link to="/">To /</Link>
      <Link to="/songs">To songs</Link>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login link={REACT_APP_AUTH_URL} />} />
          <Route path="/songs" element={code && <Dashboard code={code} />} />
        </Route>
      </Routes>
    </>
    // <Layout>
    //   {code ? <Dashboard code={code} /> : <Login link={REACT_APP_AUTH_URL} />}
    // </Layout>
  );
};
