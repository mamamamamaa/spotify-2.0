import { FC } from "react";
import { Dashboard } from "../components/Dashboard/Dashboard";

interface Props {
  code: string;
}

export const DashboardPage: FC<Props> = ({ code }) => {
  return <Dashboard code={code} />;
};
