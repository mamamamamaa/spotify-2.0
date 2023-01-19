import { FC } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Searchbar } from "../Searchbar/Searchbar";
interface Props {
  code: string;
}

export const Dashboard: FC<Props> = ({ code }) => {
  const authTest = useAuth(code);

  return (
    <>
      <Searchbar />
    </>
  );
};
