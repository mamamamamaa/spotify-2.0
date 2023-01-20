import { FC, ReactNode } from "react";
interface Props {
  children: ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="container px-5 py-2 w-[1000px] mx-auto">{children}</div>
  );
};
