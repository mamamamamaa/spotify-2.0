import { FC } from "react";
import { useAuth } from "../../hooks/useAuth";
interface Props {
  code: string;
}

export const Dashboard: FC<Props> = ({ code }) => {
  const authTest = useAuth(code);

  console.log(authTest);
  return <h1>{code}</h1>;
};
