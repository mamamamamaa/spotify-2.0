import { FC, ReactNode } from "react";
interface Props {
  children: ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="container px-12 py-2 pb-[80px] mx-auto">{children}</div>
  );
};
