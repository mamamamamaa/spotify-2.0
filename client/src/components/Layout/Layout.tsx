import { FC, ReactNode, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Logo } from "../Logo/Logo";

interface Props {
  children: ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="container px-12 py-2 pb-[80px] mx-auto">
      <Logo />
      {children}
    </div>
  );
};
