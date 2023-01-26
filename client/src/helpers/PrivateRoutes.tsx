import { Component, ReactElement } from "react";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

interface Props {
  component: JSX.Element;
  redirectTo: string;
  code: string;
}

export const PrivateRoutes = ({
  component: Component,
  redirectTo = "/",
  code,
}: Props) => {
  const accessToken = true;
  // @ts-ignore
  return accessToken ? <Component /> : <Navigate to={redirectTo} />;
};
