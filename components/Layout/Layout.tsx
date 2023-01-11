import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  return <div className="bg-black p-[20px] h-screen w-screen">{children}</div>;
};
