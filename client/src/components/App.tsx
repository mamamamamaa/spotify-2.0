import { FC } from "react";
import { DashboardPage, LoginPage } from "../Pages";

const code = new URLSearchParams(window.location.search).get("code") || "";

export const App: FC = () => {
  return <>{code ? <DashboardPage code={code} /> : <LoginPage />}</>;
};
