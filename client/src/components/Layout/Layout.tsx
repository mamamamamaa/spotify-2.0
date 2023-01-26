import { FC, ReactNode, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Logo } from "../Logo/Logo";

export const Layout: FC = () => {
  return (
    <div className="container px-12 py-2 pb-[80px] mx-auto">
      <Logo />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
